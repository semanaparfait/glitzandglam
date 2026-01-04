export default function ContactUs(){
    return(
        <div>
            <div className="hidden">
                <img src="" alt="" />
            </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-5 ">

  {/* Form */}
  <form className="flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    <h1 className="font-semibold text-3xl text-amber-950 mb-2">
      Let’s Talk
    </h1>

    <input
      type="text"
      placeholder="Full Name"
      className="border-b border-gray-300 focus:border-amber-950 outline-none py-2"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="border-b border-gray-300 focus:border-amber-950 outline-none py-2"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="border-b border-gray-300 focus:border-amber-950 outline-none py-2"
    />

    <textarea
      placeholder="Your Message"
      className="resize-none border-b border-gray-300 focus:border-amber-950 outline-none py-2 h-24"
    />

    <button className="bg-amber-950 text-white rounded-full py-2 px-6 mt-4 hover:bg-amber-900 transition">
      Send Message
    </button>
  </form>

  {/* Image */}
  <div className="hidden md:block">
    <img
      src="/sample1.png"
      alt="Glitz & Glam Contact"
      className="w-72 object-contain"
    />
  </div>

</div>

         <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg px-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.429523133115!2d30.0782980740155!3d-1.9827701979993024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6108d6db08d%3A0xbfc486d1fb045285!2sKK%20567%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1765703465124!5m2!1sen!2srw"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
    )
}