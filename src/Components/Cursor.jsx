import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let prevX = 0;
    let prevY = 0;
    var timeout;

    const handleMouseMove = (e) => {
      clearTimeout(timeout);
      let { clientX, clientY } = e;
      let scaleX = gsap.utils.clamp(0.8, 1.5,clientX - prevX );
      let scaleY = gsap.utils.clamp(0.8, 1.5,clientY - prevY );
      prevX = clientX;
      prevY = clientY;
   
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        scaleX,
        scaleY,
        duration: 0.1,
        ease: "linear.easeIn",
      });
      timeout = setTimeout(() => {
        gsap.to(cursorRef.current, {
          scaleX: 1,
          scaleY: 1,
          duration: 0.2,
          ease: "linear.easeOut",
        });
      }, 100); 
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-3 h-3 bg-white rounded-full mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default Cursor;
