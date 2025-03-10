import Navbar from "../Components/Navbar";
import Who from "../Components/Who.jsx";
import Home from "../Components/Home.jsx";
import ContactMe from "../Components/ContactMe.jsx";
import FooterComp from "../Components/FooterComp.jsx";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import CarouselWorkOn from "@/Components/CarouselWorkOn";

const LandingPage = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      origin: "top",
      distance: "10px",
      duration: "900",
      reset: true,
    });
  });
  const workItems = [
    {
      title: "My React Portfolio",
      content: "I'm already working on my personal React portfolio!",
      altText: "Portfolio logo",
      linkImage: "Img/my-react-portfolio.png",
      pathToNav: "/portfolio",
    },
    {
      title: "Learning React.js",
      content:
        "I'm already working in-depth learning of React. I want to learn more about React for my professional career, I really want to become a web developer.",
      altText: "React logo",
      linkImage: "Img/react-2.svg",
      pathToNav: "/features",
    },
    {
      title: "Learning Tailwind CSS",
      content:
        "Same as React.js, I want to learn more about Tailwind CSS for professional purposes.",
      altText: "Tailwind logo",
      linkImage: "Img/tailwind-css-2.svg",
    },
  ];

  return (
    <div className="">
      <div className="fixed top-0 w-full z-50 ">
        <Navbar />
      </div>
      <section
        id="home"
        className="reveal mbr-section-full mbr-parallax-background"
      >
        <br />
        <Home />
      </section>
      <section
        id="who"
        className="reveal mbr-section-full mbr-parallax-background"
      >
        <div className="flex flex-col items-center">
          <Who />
        </div>
      </section>
      <div className="w-full h-[20rem]"></div>
      <section
        id="projects"
        className="mbr-section-full mbr-parallax-background reveal flex flex-col items-center mt-20 space-y-8 "
      >
        <h1 className="flex justify-center items-center mt-10 text-4xl font-bold dark:text-white">
          My current Projects{" "}
        </h1>
        <CarouselWorkOn items={workItems} />
      </section>
      <div className="w-full h-[20rem]"></div>
      <section
        id="contact"
        className="reveal mbr-section-full mbr-parallax-background mb-20"
      >
        <div className="flex justify-center items-center mt-20">
          <h1 className="text-4xl font-bold dark:text-white">
            So you want to Contact me ?{" "}
          </h1>
        </div>
        <ContactMe />
      </section>
      <FooterComp />
    </div>
  );
};

export default LandingPage;
