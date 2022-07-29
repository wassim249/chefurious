import { Request, Response } from "express";
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
import bcrypt from "bcryptjs";
import Joi, { ObjectSchema, ValidationError, ValidationResult } from "joi";
import { User } from "../types/user";
const { Users } = require("../models/Users");

const validateUser = (user: Object): ValidationResult<Object> => {
  const schema: ObjectSchema<any> = Joi.object({
    firstName: Joi.string().min(1).max(50).required(),
    lastName: Joi.string().min(1).max(50).required(),
    email: Joi.string().email().required(),
    bio: Joi.string().min(10).max(200),
    password: Joi.string().required(),
  });

  return schema.validate(user);
};

const validateLogin = (user: Object): ValidationResult<Object> => {
  const schema: ObjectSchema<any> = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(user);
};

//@DESC     Register a new User
//@ROUTE    POST /api/users/register
//@ACCESS   Public
exports.registerUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    //    validate user json body
    const validation: ValidationError | undefined = validateUser(
      req.body
    ).error;
    if (validation) {
      res.status(500);
      throw new Error(validation.message);
    }

    // check if user exists
    const userExists: User = await Users.findOne({ email: req.body.email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //    Hash password
    const salt: string = await bcrypt.genSalt();
    const hashedPassword: string = await bcrypt.hash(req.body.password, salt);

    //    Create User
    const user  = await Users.create({ ...req.body, password: hashedPassword });

    
    if (user)
      res.status(201).json({ ...user._doc, token: generateToken(user._id) });
    else {
      res.status(400);
      throw new Error("invalid user data");
    }
  }
);

// * @DESC     login a new User
// * @ROUTE    POST /api/users/login
// * @ACCESS   Private
exports.loginUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    //    validate user json body
    const validation: ValidationError | undefined = validateLogin(
      req.body
    ).error;
    if (validation) {
      res.status(500);
      throw new Error(validation.message);
    }

    //  check if user exists
    const user = await Users.findOne({
      email: req.body.email,
    });
    if (user && (await bcrypt.compare(req.body.password, user.password)))
      res.status(200).json({ ...user._doc, token: generateToken(user._id) });
    else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  }
);

// * @DESC     Get the user data
// * @ROUTE    GET /api/users/me
// * @ACCESS   Private
exports.getMe = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(req.body.user);
  }
);

// * Generate JWT
const generateToken = (id: number): string | undefined => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "31d",
  });
};
