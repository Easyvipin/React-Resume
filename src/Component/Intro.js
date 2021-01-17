import React from "react";
import { gsap } from "gsap";
import clipVid from "../Images/video.mp4";

const Intro = () => {
  const nameRef = React.useRef();
  const wishRef = React.useRef();
  const introRef = React.useRef();
  const profRef = React.useRef();
  const ideaRef = React.useRef();
  const workRef = React.useRef();

  React.useEffect(() => {
    const timeline = gsap.timeline({ default: { duration: 1 } });
    timeline
      .from([introRef.current], {
        duration: 1,
        "-webkit-filter": "blur(" + 10 + "px" + ")",
        filter: "blur(" + 80 + "px" + ")",
      })
      .to([wishRef.current], {
        duration: 2,
        y: "-50%",
        x: "30%",
        rotateY: 30,
        scale: 2,
        zIndex: 1,
        ease: "SlowMo",
      })
      .to([wishRef.current], {
        duration: 1,
        opacity: 0,
        y: "-50%",
        x: "20%",
        scale: 2,
        zIndex: 1,
        ease: "SlowMo",
      })
      .to([ideaRef.current], {
        duration: 2.2,
        opacity: 0,
        y: "-100%",
        scale: 3,
        ease: "power",
      })
      .to([workRef.current], {
        duration: 2.2,
        opacity: 0,
        y: "-100%",
        scale: 2,
        ease: "power",
      })
      .from([nameRef.current], {
        duration: 1,
        opacity: 0,
        y: "80%",
        ease: "back",
      })
      .from([profRef.current], {
        duration: 1,
        scale: 2,
        opacity: 0,
        ease: "back",
      })
      .from(".next", {
        duration: 1,
        rotation: 360,
        opacity: 0,
        ease: "back",
      });

    /*  gsap.from([nameRef.current], {
      duration: 1,
      opacity: 0,
      y: "80%",
      ease: "back",
      delay: 2,
    });

    gsap.to([wishRef.current], {
      duration: 3,
      opacity: 0,
      y: "-100%",
      scale: 2,
      ease: "power",
    });

    gsap.from([introRef.current], {
      duration: 1,
      "-webkit-filter": "blur(" + 10 + "px" + ")",
      filter: "blur(" + 80 + "px" + ")",
    });
    gsap.from([profRef.current], {
      duration: 1,
      scale: 2,
      opacity: 0,
      ease: "back",
      delay: 5,
    });
    gsap.from(".next", {
      duration: 1,
      rotation: 360,
      opacity: 0,
      ease: "back",
      delay: 5,
    }); */
  });

  return (
    <div ref={introRef} className="intro">
      <video loop autoPlay muted className="videoBox">
        <source src={clipVid} type="video/mp4" />
      </video>
      <div ref={wishRef} class="intro-wish">
        USER EXPERIENCE MATTERS
      </div>
      <div ref={ideaRef} class="intro-wish">
        GOT AN IDEA ?
      </div>
      <div ref={workRef} class="intro-wish">
        LETS WORK ON IT...
      </div>
      <div class="content-intro">
        <div className="name" ref={nameRef}>
          Vipin.
        </div>
        <h2 ref={profRef}>FRONT END DEVELOPER</h2>
        <button className="next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Intro;
