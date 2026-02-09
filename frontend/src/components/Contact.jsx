import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex justify-center px-4 py-12 sm:py-16 lg:py-24">
      <div className="w-full max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-200">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            Feel free to reach out. I usually reply within a few hours.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-white"
            >
              {/* NAME */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm sm:text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm sm:text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows="5"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm sm:text-base resize-none
                  focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-3 font-medium
                transition flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;