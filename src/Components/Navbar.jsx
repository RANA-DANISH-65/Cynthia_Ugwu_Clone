import { useEffect,useState } from "react";
import gsap from "gsap";


const Navbar = () => {
  const[lastScrollTop,setLastScrollTop]=useState(0);
  useEffect(()=>{
    const handleScroll=()=>{
      const currentScrollTop=window.pageYOffset||document.body.scrollTop;
      if(currentScrollTop>lastScrollTop){
        const nav=document.querySelector("nav");
        gsap.to(nav,{
          opacity: 0,
          y:-100,
          scale:.5,
          duration: 1,
          ease: "ease.inOut",
        })
      }else{
        const nav=document.querySelector("nav");
        gsap.to(nav,{
          opacity: 1,
          y:0,
          scale:1,
          duration: 1,
          ease: "ease.inOut",
        })
      }
      setLastScrollTop(currentScrollTop<0?0:currentScrollTop);
    }





    window.addEventListener("scroll",handleScroll)
    gsap.to(".anim",{
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.inOut",
      stagger:.25
    })

    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  })
  return (
  
    <nav  className="flex items-center justify-between overflow-hidden w-full h-12  text-[1rem]  text-white px-[32px]  sticky top-0 left-0 py-[40px]">
      <a href="/" className="text-[18px] border-none outline-none anim opacity-0  translate-y-[200%]">Cynthia Ugwu</a>
      <h5 className="uppercase anim opacity-0 translate-y-[200%]">Menu+</h5>
    </nav>
  );
};

export default Navbar;
