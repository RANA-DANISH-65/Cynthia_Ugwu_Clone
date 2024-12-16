import { useEffect } from "react";
import lucidMotors from "../assets/lucid-motors.png";
import Baron from "../assets/baron-capital_1.png";
import nfl from "../assets/nfl_1.png";
import placenew from "../assets/placenew.png";
import somos from "../assets/somos.png";
import gsap from "gsap";

const Works = () => {

  useEffect(()=>{

    const elems=document.querySelectorAll(".elems");
    elems.forEach((elem, index) => {
      elem.addEventListener("mouseenter",(dets)=>{
       let img=elem.childNodes[0];
       let diff=dets.clientY-elem.getBoundingClientRect().top;
        gsap.to( img, {
          opacity:1,
    
        
        })
      })

      elem.addEventListener("mouseleave",()=>{
        let img=elem.childNodes[0];
        gsap.to( img, {
          opacity:0
        })
      })
    
    })

  },[]);

  const works = [
    {
      work: "Lucid Motors",
      year: 2023,
      img: lucidMotors,
    },
    {
      work: "Baron Capital",
      year: 2023,
      img: Baron,
    },
    {
      work: "NFL",
      year: 2024,
      img: nfl,
    },
    {
      work: "PlaceNew",
      year: 2024,
      img: placenew,
    },
    {
      work: "Somos",
      year: 2024,
      img: somos,
    },
  ];

 
  return (
    <div className="lg:mt-[200px] md:mt-[100px] pl-[2vw] pr-[6vw]">
      {works.map((work, index) => (
        <div
          key={index}
          className={`flex elems  items-center py-[25px] relative justify-between  ${
            index === 4 ? "border-b-2" : ""
          } w-full gap-[10px] mb-[20px] border-t-2 border-[#888] text-[white] uppercase`}
  
        >
          <img
            id={`img-${index}`}
            src={work.img}
            alt={work.work}
            className="h-[300px] absolute -top-15 left-[50%] z-5 opacity-0 transition-all" 
          />
         
          <h4
            id={`text-${index}`}
            className="text-[7vw] hover:scale-75  font-light transition-transform  ease-in-out duration-500 opacity-60"
          >
            {work.work}
          </h4>

          <h5 className="text-[16px]">{work.year}</h5>
        </div>
      ))}

      <div className="mt-[50px]">
        <button className="px-4 py-1 text-white border outline-none rounded-full">
          View All Work
        </button>
      </div>
    </div>
  );
};

export default Works;
