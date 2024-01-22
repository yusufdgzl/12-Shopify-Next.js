import SubmitIcon from "../icons/submit-icon";

function Footer() {
  return (
    <div className=" bg-[#efeeee] h-auto sm:h-[360px] flex flex-col ">
      <div className=" border-b border-[#d2d0d0] w-full flex flex-col  sm:px-6 md:px-12 h-auto sm:h-[75%]   ">
        <h1 className=" mt-10 font-bold tracking-widest text-2xl text-center md:text-start font-mono">
          Follow the Journey
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 ">
          <div className=" relative">
            <input
              className="  h-[60px] sm:w-[280px] md:w-[480px] text-2xl px-6 md:px-12 bg-[#efeeee] rounded-sm border  border-[#d8d7d7] hover:shadow-[0_0_4px_0_rgba(0,0,0,0.3)] "
              type="email"
              placeholder="Email"
            />
            <button
              type="submit"
              className=" absolute right-0 inset-y-0 text-black px-4 py-2"
            >
              <SubmitIcon />
            </button>
          </div>

          <div className=" mt-4 sm:mt-0 sm:ml-4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <p className="  flex justify-center opacity-60 tracking-wider items-center h-28 sm:h-20 text-center  ">
        © 2023, Mrs. Space Cadet Powered by Shopify Refund policy Privacy policy
        Terms of service Shipping policy
      </p>
    </div>
  );
}

export default Footer;
