import bannerImg from "../assets/images/user.png";
const Banner = () => {
  return (
    <div className="bg-base-200 py-10">
      <div className="flex flex-col lg:flex-row-reverse w-[90%] md:w-[5/6] lg:w-4/5 mx-auto px-0 items-center">
        <div className="flex-1 self-end">
          <img src={bannerImg} className="object-bottom w-full" />
        </div>
        <div className="flex-1">
          <h1 className="text-6xl font-extrabold leading-snug">One Step Closer To Your <span className="text-primary">Dream Job</span></h1>
          <p className="py-6 font-medium md:text-lg">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
