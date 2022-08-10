import FadeIn from "react-fade-in";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/Navbar";
import { Content } from "../components/Recipes/Content";

export const Recipes = () => {
  return (
    <div>
      <FadeIn>
        <NavBar />

        <Content />
        <Footer />
      </FadeIn>
    </div>
  );
};
