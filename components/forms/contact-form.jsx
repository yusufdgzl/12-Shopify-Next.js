function ContactForm() {
  return (
    <div className=" w-3/5 mx-auto leading-10">
      <h1 className="text-3xl text-pink-700 font-semibold">
      
        What's on your mind
      </h1>
      <div className="grid grid-cols-2 w-full mx-auto my-6 gap-5 ">
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold" htmlFor="fname">
            FIRST NAME
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600  h-12 px-4"
            type="text"
            name="fname"
            placeholder='First Name'
            id="fname"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold" htmlFor="lname">
            LAST NAME
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600 h-12 px-4"
            type="text"
            name="lname"
            placeholder='Last Name'
            id="lname"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold" htmlFor="email">
            EMAIL
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600 h-12 px-4"
            type="email"
            name="email"
            placeholder='e.g., email@example.com'
            id="email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-pink-700 font-semibold" htmlFor="company">
            COMPANY
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600 h-12 px-4"
            type="text"
            name="company"
            placeholder='Company'
            id="company"
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-12  ">
        <div className="flex flex-col ">
          <label className="text-pink-700 font-semibold" htmlFor="subject">
            SUBJECT
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600 h-12 px-4"
            type="text"
            name="subject"
            placeholder='e.g., Support'
            id="subject"
          />
        </div>
        <div className="flex flex-col   ">
          <label className="text-pink-700 font-semibold" htmlFor="message">
            YOUR MESSAGE
          </label>
          <input
            className="border border-green-300 hover:border-pink-700 hover:bg-pink-700 hover:bg-opacity-10 focus:outline-green-600 px-4 h-32  "
            type="text"
            name="message"
            placeholder='Enter text here'
            id="message"
          />
        </div>
      </div>
      <button className=" my-12 bg-pink-600 text-white px-9 font-semibold hover:bg-green-400 transition-all  duration-300 ">Send</button>
    </div>
  );
}

export default ContactForm;
