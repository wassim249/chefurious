import { AxiosResponse } from "axios";
import  { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { currentUser } from "./api/user";
import { UserCtx } from "./contexts/userContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { User } from "./types/user";

const App: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const response: AxiosResponse | undefined = await currentUser();
      setUser(response?.data);
    };
    getUser();
  }, []);

  return (
    <UserCtx.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserCtx.Provider>
  );
};

export default App;
