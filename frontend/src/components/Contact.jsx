import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiMail, FiMapPin, FiPhone, FiMessageCircle, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full bg-[#F8F9FC] py-16 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[120px] pointer-events-none"></div>

      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label mx-auto">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-4 mb-3 tracking-tight">
            Connect & Collaborate
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-[#64748b] max-w-xl mx-auto text-base sm:text-lg">
            Whether it's a new project or just to say hi, my inbox is always open. Let's build something exceptional together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Info Overhauled */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="premium-card p-1 bg-[#0f172a] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgb(15,23,42,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="bg-white/5 backdrop-blur-xl rounded-[2.3rem] p-8 sm:p-10 border border-white/5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-black text-white tracking-tight">Contact Info</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none">Online Now</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8 flex-1">
                  
                  {/* Email */}
                  <div className="group">
                    <div className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] mb-3 opacity-70">Email Me</div>
                    <a href="mailto:shivamgupta73014@gmail.com" className="flex items-center justify-between group/link">
                      <span className="text-lg sm:text-xl  text-gray-500 group-hover/link:text-indigo-400 transition-colors truncate pr-4">shivamgupta73014@gmail.com</span>
                      <div className="w-10 h-10 rounded-xl  border border-white/10 flex items-center justify-center text-white bg-indigo-400 group-hover/link:bg-indigo-500 group-hover/link:border-indigo-400 transition-all shrink-0">
                        <FiMail />
                      </div>
                    </a>
                  </div>

                  {/* WhatsApp Quick Action */}
                  <div className="group">
                    <div className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-3 opacity-70">Quick Support</div>
                    <a href="https://wa.me/918002920913" target="_blank" rel="noreferrer" className="flex items-center justify-between group/link">
                      <div className="flex flex-col">
                        <span className="text-lg sm:text-xl text-gray-600 group-hover/link:text-emerald-400 transition-colors">+91 8002920913</span>
                        <span className="text-xs font-semibold text-slate-400 mt-1">Chat on WhatsApp</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl  border border-white/10 flex items-center justify-center text-white bg-green-400 group-hover/link:bg-emerald-500 group-hover/link:border-emerald-400 transition-all shrink-0">
                        <FaWhatsapp />
                      </div>
                    </a>
                  </div>

                  {/* Location Info */}
                  <div className="group border-t border-white/5 pt-8 mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <FiMapPin size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-0.5 opacity-70">Base Location</div>
                        <div className="text-sm  text-black border border-violet-600 text-center px-1 py-1 rounded-r-2xl hover:bg-violet-400 duration-300 hover:border-white hover:text-white">Delhi, India</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Grid */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 transition-all group/social">
                      <FaLinkedin className="text-[#0077B5] text-xl" />
                      <span className="text-xs font-bold text-black flex items-center gap-1">LinkedIn <FiArrowUpRight className="opacity-0 group-hover/social:opacity-100 transition-opacity" /></span>
                    </a>
                    <a href="https://github.com/Shivam-Gupta-git" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-gray-400 hover:border-white/40 transition-all group/social">
                      <FaGithub className="text-black text-xl" />
                      <span className="text-xs font-bold text-black flex items-center gap-1">GitHub <FiArrowUpRight className="opacity-0 group-hover/social:opacity-100 transition-opacity" /></span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="premium-card p-8 sm:p-10 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2 tracking-tight">Send a Message</h3>
                <p className="text-slate-500 text-sm">I usually respond within 24 hours.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all font-bold text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're looking for..."
                    rows="5"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-[#0f172a] placeholder:text-slate-400 resize-none focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all font-bold text-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full sm:w-auto py-5 px-10 text-base shadow-xl shadow-indigo-500/20 group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">Syncing...</span>
                    ) : (
                      <span className="flex items-center gap-2 uppercase tracking-widest font-black text-xs">
                        Push Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </button>
                  {status === "success" && (
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 italic">
                      ✓ Transmitted successfully
                    </motion.p>
                  )}
                  {status === "error"   && <p className="text-rose-500 font-bold text-xs">Transmission Error.</p>}
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Contact;