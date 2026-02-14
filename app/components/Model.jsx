
import Spline from '@splinetool/react-spline/next';

const Model = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-black px-[5%] py-20 lg:py-0">
      {/* LEFT CONTENT */}
      <div className="max-w-xl z-10 flex flex-col items-start gap-6">
        {/* Main Heading */}
        <h1 className="text-white text-xl lg:text-6xl font-black leading-tight tracking-tight">
          DISCOVER THE
          <br />
          <span className="text-[#e99b63] drop-shadow-[0_0_10px_rgba(233,155,99,0.4)]">
             FUTURE
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-md">
          Stay ahead of the curve. Join our exclusive list to get real-time
          updates on our latest 3D developments and design breakthroughs.
        </p>

        {/* FIRE BUTTON / TAG */}
        <div className="relative group cursor-pointer">
          {/* Animated Background Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          {/* Main Button Body */}
          <button className="relative px-6 py-2 bg-black rounded-lg leading-none flex items-center">
            <span className="text-orange-100 font-bold tracking-widest text-sm italic">
              Get Started
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT: SPLINE CONTAINER */}
      <div className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative flex items-center justify-center">

      <Spline
        scene="https://prod.spline.design/zMrKUXJbMt8rXumh/scene.splinecode" 
      />
      </div>
    </main>
  );
};

export default Model;
