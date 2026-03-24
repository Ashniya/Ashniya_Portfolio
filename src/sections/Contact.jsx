import React from 'react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';
import Shuffle from '../components/Shuffle';
import Typewriter from '../components/Typewriter';
import LogoLoop from '../components/LogoLoop';
import SplashCursor from '../components/SplashCursor';
// Removed EmailJS import, switching to custom Node.js API

export default function Contact() {
  const socialLogos = [
    { node: <Github size={24} />, href: "https://github.com/Ashniya", label: "GitHub", hoverBg: "hover:bg-white hover:text-black" },
    { node: <Linkedin size={24} />, href: "https://www.linkedin.com/in/ashniya-alosious", label: "LinkedIn", hoverBg: "hover:bg-[#0077B5] hover:text-white" },
    { node: <Mail size={24} />, href: "mailto:ashniyaalosious@gmail.com", label: "Mail", hoverBg: "hover:bg-[#EA4335] hover:text-white" }
  ];

  const form = React.useRef();
  const [isSending, setIsSending] = React.useState(false);
  const [status, setStatus] = React.useState({ type: '', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    
    // Check if Formspree is configured
    const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/your_key_here';

    if (formspreeUrl.includes('your_key_here')) {
      setStatus({ type: 'error', message: 'Formspree URL not configured. Please check .env file.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', message: '' });

    // Extracting data explicitly from form
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! 🚀' });
        e.target.reset();
      } else {
        const result = await response.json();
        throw new Error(result.errors?.[0]?.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ type: 'error', message: `Submission Failed: ${error.message}` });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <Section id="contact" className="bg-[#0F172A] py-12 relative overflow-hidden">
      
      {/* Dynamic atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-blue-500/5 blur-[200px] rounded-full pointer-events-none" />

      {/* Fluid Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <SplashCursor />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="relative z-10 w-full max-w-7xl mx-auto mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tighter text-white">
              CONTACT<span className="text-brand-light-1"> ME</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-right from-brand-light-1 to-brand-light-4 rounded-full" />
            <p className="mt-8 text-gray-400 text-lg md:text-xl font-medium tracking-wide uppercase text-center max-w-2xl">
              Let's build something extraordinary together
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-white/[0.02] p-8 md:p-10 rounded-[40px] border border-white/10 backdrop-blur-3xl shadow-2xl relative z-40">
              <form 
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-sans placeholder:text-white/5" 
                    placeholder="Your Name" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-sans placeholder:text-white/5" 
                    placeholder="Email Address" 
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 block ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={3} 
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white text-lg focus:outline-none focus:border-white/40 transition-colors font-sans resize-none placeholder:text-white/5" 
                    placeholder="Your Message..."
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.9)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={isSending}
                  className={`w-full py-5 mt-4 text-black font-black flex items-center justify-center gap-4 uppercase tracking-[0.5em] text-[10px] transition-all rounded-2xl shadow-xl ${isSending ? 'bg-white/50 cursor-not-allowed' : 'bg-white'}`}
                >
                  {isSending ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                  <Send size={14} strokeWidth={3} className={isSending ? 'animate-pulse' : ''} />
                </motion.button>

                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl text-center text-xs font-bold uppercase tracking-widest ${
                      status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right Column: Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2 flex flex-col items-end text-right"
          >
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight min-h-[1.2em]">
                <Typewriter text="Let's Talk" speed={150} />
              </h2>
              <p className="text-white/40 text-lg font-medium max-w-md leading-relaxed">
                Reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/5 w-full flex flex-col items-end">
              <div className="flex items-center gap-6 group">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-1">Phone</p>
                  <a href="tel:+917034136911" className="text-xl font-bold text-white hover:text-brand-light-4 transition-colors">+91 7034136911</a>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone className="text-white/40 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-1">Email</p>
                  <a href="mailto:ashniyaalosious@gmail.com" className="text-xl font-bold text-white underline decoration-white/10 underline-offset-8 hover:text-brand-light-4 hover:decoration-brand-light-4 transition-all tracking-tight">ashniyaalosious@gmail.com</a>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Mail className="text-white/40 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 mb-1">Location</p>
                  <p className="text-xl font-bold text-white">Kerala, India</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                  <MapPin className="text-white/40 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>
            </div>

            {/* Social Logos - Continuous Loop with larger gap */}
            <div className="pt-12 w-full">
              <LogoLoop 
                logos={socialLogos}
                speed={50}
                direction="left"
                logoHeight={64}
                gap={80}
                pauseOnHover={true}
                scaleOnHover={true}
                className="bg-transparent"
                renderItem={(item) => (
                  <motion.a 
                    href={item.href}
                    className={`p-5 bg-white/5 rounded-full border border-white/10 text-white/40 transition-all shadow-xl shadow-black/50 ${item.hoverBg}`}
                    aria-label={item.label}
                  >
                    {item.node}
                  </motion.a>
                )}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
