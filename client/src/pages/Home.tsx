import { Footer } from "../components/Footer";
import bg from "../assets/images/lpbg.png";
import {Content} from "../components/Home/Content";
import {Hero} from "../components/Home/Hero";
import FadeIn from 'react-fade-in';
import { NavBar } from "../components/Navbar";
import { FC } from "react";

export const Home : FC = () => {
  return (
    
    <main className="overflow-hidden">
      <FadeIn>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <NavBar />
        <Hero />
      </div>
      <Content />
      <Footer />
      </FadeIn>
    </main>
  );
};
