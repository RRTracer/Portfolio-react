import Navbar from "../Components/Navbar"
import Who from "../Components/Who.jsx";
import Home from "../Components/Home.jsx";
import WorkOn from "../Components/WorkOn.jsx";
import ContactMe from "../Components/ContactMe.jsx";
import FooterComp from "../Components/FooterComp.jsx";
import {useEffect} from "react";
import ScrollReveal from 'scrollreveal';


const LandingPage = () => {
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
            origin: "top",
            distance: "10px",
            duration: "900",
            reset: true,
        });

    })

    const item = [
        { name: "Home", href: "#home"},
        { name: "About", href: "#who" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact"}
    ]


  return (
    <div className="">
        <div className="fixed top-0 w-full z-50 ">
            <Navbar
                title="RRTracer Portofolio"
                item={item}
            />
        </div>
      <section id="home" className="reveal mbr-section-full mbr-parallax-background" >
          <br/>
        <Home />
      </section>
      <section id="who" className="reveal mbr-section-full mbr-parallax-background">
           <div className="flex flex-col items-center">
               <Who/>
           </div>
      </section>
      <div className="w-full h-[20rem]"></div>
      <section id="projects" className="mbr-section-full mbr-parallax-background reveal flex flex-col items-center mt-20  ">
          <h1 className="flex justify-center items-center mt-10 text-4xl font-bold dark:text-white">My current Projects </h1>
          <div className="flex flex-row justify-center items-center gap-12 w-full">
              <WorkOn
                  title="My react Portfolio"
                  content="I'm already working on my personnal react portfolio !"
                  altText="Portfolio logo"
                  linkImage="Img/my-react-portfolio.png"
                  pathToNav="/portfolio"
              />
              <WorkOn
                  title="learning React.js"
                  content="I'm already working in-depth learning of React. I want to learn more about React for my professional career, I really want to become web Developer."
                  altText="react logo"
                  linkImage="Img/react-2.svg"
              />
              <WorkOn
                  title="learning tailwindcss"
                  content="Same as React.js, I want to learn more about TailwindCss for professional purpose."
                  altText="Tailwind logo"
                  linkImage="Img/tailwind-css-2.svg"
              />
          </div>
      </section>
      <div className="w-full h-[20rem]"></div>
      <section id="contact" className="reveal mbr-section-full mbr-parallax-background mb-20">
          <div className="flex justify-center items-center mt-20">
              <h1 className="text-4xl font-bold dark:text-white">So you want to Contact me ? </h1>
          </div>
          <ContactMe />

      </section>
        <FooterComp/>
    </div>
  )
}

export default LandingPage;