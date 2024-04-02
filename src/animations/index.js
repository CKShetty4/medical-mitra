import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl

    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(
      ".preloader img",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
        y: 70,
        stagger: 0.4,
        opacity: 0.1

      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: { overflowY: "hidden", height: "unset", display: "none" },
      // css: { display: "none" },
    });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      // ease: "expo.easeOut",
    });
};

