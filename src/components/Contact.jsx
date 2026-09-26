import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your message, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 bg-[#0f1629] text-white"
      
    >
      <h2
        className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Contact Me
      </h2>

      <div
        className="max-w-5xl mx-auto bg-white/20 backdrop-blur-md border-4 border-pink-300 rounded-3xl shadow-lg p-12 text-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="mb-8 text-lg text-center text-white/90">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-12 text-lg font-medium">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-pink-400" />
            <a
              href="mailto:kanizshuva7@gmail.com"
              className="hover:underline text-white"
            >
              kanizshuva7@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-pink-400" />
            <a href="tel:+8801878353400" className="hover:underline text-white">
              +880 1878 353400
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-pink-400" />
            <a
              href="https://wa.me/8801878353400"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-pink-300 bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-pink-300 bg-transparent placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border border-pink-300 bg-transparent placeholder-white/70 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <button
  type="submit"
  className="w-full bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 
             hover:from-pink-400 hover:via-purple-300 hover:to-blue-300
             px-6 py-3 rounded-lg text-black font-semibold
             transition transform duration-300 ease-in-out
             hover:scale-110
             hover:shadow-[0_0_10px_rgba(236,72,153,0.7),0_0_20px_rgba(139,92,246,0.7),0_0_30px_rgba(59,130,246,0.7)]"
>
  Send Message
</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
