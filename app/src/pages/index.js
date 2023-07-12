import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  Section1,
  Section2,
  Section3,
  Section4,
} from "@/components/main/Sections";
import Link from "next/link";
import Authentication from "@/components/authentication";

function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMouseEnter = (ref) => {
    const sectionElement = ref.current;
    if (sectionElement) {
      const offsetTop =
        sectionElement.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    }
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = 1.3 - scrollY / 350;

  return (
    <>
      <Authentication setIsLoggedIn={setIsLoggedIn} />
      <div className="main-container">
        <div className="hero">
          <div className="hero-background" />
          <h1 className="hero-title">ETRI 재난안전</h1>
        </div>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6 sticky top-0">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              <ScrollLink
                to="section1"
                spy={true}
                smooth={true}
                duration={800}
                onMouseEnter={() => handleMouseEnter(section1Ref)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                style={{ cursor: "pointer" }}
              >
                ETRI 재난안전
              </ScrollLink>
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <ScrollLink
                to="section2"
                spy={true}
                smooth={true}
                duration={800}
                onMouseEnter={() => handleMouseEnter(section2Ref)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                style={{ cursor: "pointer" }}
              >
                Dashboard & Plotly
              </ScrollLink>
              <ScrollLink
                to="section3"
                spy={true}
                smooth={true}
                duration={800}
                onMouseEnter={() => handleMouseEnter(section3Ref)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                style={{ cursor: "pointer" }}
              >
                3D Data Visualization
              </ScrollLink>
              <ScrollLink
                to="section4"
                spy={true}
                smooth={true}
                duration={800}
                onMouseEnter={() => handleMouseEnter(section4Ref)}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                style={{ cursor: "pointer" }}
              >
                VR & AR
              </ScrollLink>

              {isLoggedIn && (
                <Link
                  href="/menu/admin"
                  className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-white"
                >
                  Admin
                </Link>
              )}
            </div>
            <div>
              <Link
                href="/user/login"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>

        <section id="section1" ref={section1Ref}>
          <Section1 />
        </section>
        <section id="section2" ref={section2Ref}>
          <Section2 />
        </section>
        <section id="section3" ref={section3Ref}>
          <Section3 />
        </section>
        <section id="section4" ref={section4Ref}>
          <Section4 />
        </section>
      </div>

      <style jsx>{`
        .main-container {
          height: 500vh;
          width: 100%;
        }

        .hero {
          position: relative;
          height: 100vh;
          background-color: black;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/mainimg2.jpg");
          background-size: cover;
          opacity: ${opacity};
          transition: opacity 0.5s;
        }

        .hero-title {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 4rem;
          font-weight: bold;
          color: whitesmoke;
          padding: 3rem;
          opacity: ${opacity};
        }

        nav {
          z-index: 2;
        }

        section {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Home;
