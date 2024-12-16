const Footor = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;

  return (
    <div className="text-white text-[20px] flex flex-col gap-20 lg:gap-0 md:flex-row lg:flex-row pt-[5rem] px-10 pb-10 items-center justify-between" data-scroll-section>
      <div className="flex gap-5 uppercase" data-scroll data-scroll-speed="1">
        <p>© 2024</p>
        <p>{formattedTime}</p>
      </div>
      <div className="flex flex-col lg:flex-row  gap-10 md:flex-row decoration-none uppercase" data-scroll data-scroll-speed="1.5">
        <a href="/">LinkedIn</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
        <a href="/">YouTube</a>
      </div>
    </div>
  );
};

export default Footor;
