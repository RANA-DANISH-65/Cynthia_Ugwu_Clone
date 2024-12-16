const About = () => {
  return (
    <div className="w-screen h-screen pt-[20vw] ">
      <div className="flex lg:flex-row  flex-col md:flex-row  items-center lg:pl-[35vw] pl-[20vw] pr-10 gap-20">
        <img
          className="w-[200px] rounded-full"
          src="https://cynthiaugwu.com/images/cynthia.webp"
          alt="Designer"
        />
        <div className="text-white flex flex-col  items-start gap-2 lg:w-[30rem]">
          <h5 className="text-gray-500">(About Me)</h5>
          <p className="text-wrap">
            I'm a product and motion designer who loves creating things that are
            not just eye candy but also fix life's little hiccups. When I'm not
            glued to my computer like a robot or scribbling on my iPad, you
            might catch me leveling up in video games, snapping photos like a
            wannabe pro, or watching football because football is life. My
            design philosophy? Keep it snazzy, make it work, and sprinkle in a
            bit of fun. I'm the designer you want on your team if you want
            people to exclaim, "I need that in my life!".
          </p>
       
          <div className="mt-auto">
            <a className="py-1 px-4 border rounded-full text-[14px] hover:bg-white hover:text-black" href="/">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
