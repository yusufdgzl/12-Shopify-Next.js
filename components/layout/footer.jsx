import SubmitIcon from "../icons/submit-icon";

function Footer() {
  return (
    <div className=" bg-[#efeeee] h-[360px] flex flex-col ">
      <div className=" border-b border-[#d2d0d0] w-full flex flex-col  px-60 h-[75%]   ">
        <h1 className=" mt-10 font-bold tracking-widest text-2xl font-mono">
          Follow the Journey
        </h1>
        <div className="flex justify-between items-center mt-6 ">
          <div className=" relative">
            <input
              className="  h-[60px] w-[480px] text-2xl px-6 bg-[#efeeee] border  border-[#d8d7d7] hover:shadow-[0_0_4px_0_rgba(0,0,0,0.3)] "
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

          <div>
            <span>İnstagram</span>
            <span>Youtube</span>
            <span>Tiktok</span>
          </div>
        </div>
      </div>
      <p className=" flex justify-center tracking-wider items-center h-40  ">
        © 2023, Mrs. Space Cadet Powered by Shopify Refund policy Privacy policy
        Terms of service Shipping policy
      </p>
    </div>
  );
}

export default Footer;
