import { NextFunction, Request, Response  } from "express"

const errorHandler = (err : Error , req : Request,res : Response ,next : NextFunction) : void => {
    const statusCode : number = res.statusCode ? res.statusCode : 500
    res.status(statusCode).json({
        message : err.message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack
    })
    next
}

module.exports = {
    errorHandler
}