import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setStatus('idle');
    
    // --- EMAILJS CONFIGURATION ---
    // Replace these with your actual keys from https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_zcdc5bn';
    const TEMPLATE_ID = 'template_xcfhs14';
    const PUBLIC_KEY = 'u36K1xG8-I0P2Ly4L';
    // -----------------------------

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_name: 'Ananthakrishnan',
    };

    try {
      // Attempt to send email using EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after showing success message
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
       {/* Decorative Gradients */}
       <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-100/50 dark:from-purple-900/10 to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Get In Touch" subtitle="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
             <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full relative overflow-hidden group transition-colors duration-300">
              {/* Hover Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat.
                </p>
                
                <div className="space-y-8">
                  <a 
                    href="tel:+919025445586"
                    className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity group/item"
                  >
                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover/item:bg-gradient-to-br group-hover/item:from-primary-500 group-hover/item:to-purple-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-slate-800 dark:text-slate-100 font-medium text-lg">+91 9025445586</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:a89897752@gmail.com"
                    className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity group/item"
                  >
                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover/item:bg-gradient-to-br group-hover/item:from-primary-500 group-hover/item:to-purple-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Email</p>
                      <p className="text-slate-800 dark:text-slate-100 font-medium text-lg">a89897752@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover/item:bg-gradient-to-br group-hover/item:from-primary-500 group-hover/item:to-purple-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Location</p>
                      <p className="text-slate-800 dark:text-slate-100 font-medium text-lg">Chennai, India - 602024</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  {[
                    { icon: <Github size={20} />, url: "https://github.com/Anand-727" },
                    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/anantha-krishnan-b-a59287208/" },
                    { icon: <Twitter size={20} />, url: "https://x.com/AnandKrish727" }
                  ].map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300 relative overflow-hidden group/icon"
                    >
                       <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                       <span className="relative z-10">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative transition-colors duration-300">
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30 outline-none transition-all hover:border-purple-200 dark:hover:border-purple-500/50 placeholder-slate-400"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30 outline-none transition-all hover:border-purple-200 dark:hover:border-purple-500/50 placeholder-slate-400"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/30 outline-none transition-all resize-none hover:border-purple-200 dark:hover:border-purple-500/50 placeholder-slate-400"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group hover:scale-[1.02] hover:tracking-wider hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]
                  ${isSubmitting ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed' : 'text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40'}
                `}
              >
                 {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-500 animate-shimmer bg-[length:200%_auto]"></div>
                 )}
                
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    'Message Sent!'
                  ) : status === 'error' ? (
                    'Failed to Send'
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </span>
              </button>
              
              {status === 'error' && (
                <p className="text-sm text-red-500 text-center mt-2">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;