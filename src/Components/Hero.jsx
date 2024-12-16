import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    let timeline = gsap.timeline();
    timeline
      .to(".upTrans", {
        y: 0,
        duration: 2,
        ease: "expo.inOut",
        stagger: 0.5,
      },
    )
        
      .to(".downTrans", {
        y: 0,
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.5,
      },
    "-=1")
        
      .to(".upMove",{
        y: 0,
        duration: 1,
        ease: "expo.inOut",
        stagger: 0.5,
      },
       "-=1.5"
    );
  }, []);
  return (
    <div className="w-screen h-screen mt-[100px] lg:mt-2 lg:p-[32px] p-[24px] text-white">
      <div className="text-white leading-none uppercase">
        <div id="bounding" className="w-fit  leading-none relative overflow-hidden">
          <h1 className="lg:text-[10vw] text-[15vw] md:text-[12vw] opacity-60 translate-y-[100%] upTrans">
            Product
          </h1>
        </div>
        <div className="lg:ml-[108px]  ml-[30px] md:ml-[150px] fit-content w-fit">
          <div id="bounding" className="w-fit leading-none  relative overflow-hidden">
            <h1 className="lg:text-[10vw] text-[15vw] md:text-[12vw]  opacity-60 translate-y-[100%] upTrans">
              Designer
            </h1>
          </div>
          <div className="w-fit  relative overflow-hidden leading-none float-right">
            <h5 className="text-right text-[15px] translate-y-[-100%] opacity-100 downTrans">
              based in Toronto
            </h5>
          </div>
        </div>
      </div>
      <div className="mt-[95px] w-full flex flex-col items-end">
        <div className="w-fit  relative overflow-hidden float-right">
          <h5 className="text-right uppercase text-[16px] translate-y-[-100%] downTrans">
            Available for Full Time & Freelance
          </h5>
        </div>
        <div className="w-fit  relative overflow-hidden float-right">
          <h5 className="text-right uppercase text-[16px] translate-y-[-100%] downTrans">
            work from Sep ‘24
          </h5>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-4 uppercase text-[3vw] md:text-[2vw] leading-none lg:text-[1.25vw]">
        <div className="overflow-hidden">
          <p className="hover:underline transition-all translate-y-[100%] upMove">
            Previously worked at{" "}
            <span className="transform hidden rotate-[-15deg] lg:inline-block p-1 font-extralight">
              →
            </span>{" "}
            <br />
            Code and Theory
          </p>
        </div>
        <div className="overflow-hidden">
          <p className="hover:underline transition-all translate-y-[100%] upMove">
            Protopie ambassador{" "}
            <span className="transform hidden rotate-[-15deg] lg:inline-block text-[20px] p-1 font-extralight">
              →
            </span>
          </p>
        </div>
        <div className="hidden md:hidden lg:flex gap-1 overflow-hidden">
          <span className="flex items-center justify-center w-10 h-10 bg-[#888] rounded-full">
            ⬇
          </span>
          <span className="flex items-center justify-center w-10 h-10 bg-[#888] rounded-full">
            ⬇
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
