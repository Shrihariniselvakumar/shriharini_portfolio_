/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [messageContent, setMessageContent] = useState('');
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!fullName.trim()) {
      errors.name = 'Full name is required.';
    } else if (fullName.trim().length < 2) {
      errors.name = 'Please provide a valid name (minimum 2 characters).';
    }

    if (!emailAddress.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!messageContent.trim()) {
      errors.message = 'Please provide a message.';
    } else if (messageContent.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError('');
    
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API saving / network delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // Save to localStorage so submissions persist for validation/review!
      const existingSubmissions = JSON.parse(localStorage.getItem('portfolio_submissions') || '[]');
      const newSubmission = {
        name: fullName,
        email: emailAddress,
        message: messageContent,
        timestamp: new Date().toISOString()
      };
      existingSubmissions.push(newSubmission);
      localStorage.setItem('portfolio_submissions', JSON.stringify(existingSubmissions));

      setIsSuccess(true);
      // Reset inputs
      setFullName('');
      setEmailAddress('');
      setMessageContent('');
    } catch (err) {
      setFormError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0c0c0c] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/2 rounded-none rotate-45 transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-semibold block">
                  07 / Connect
                </span>
                <div className="h-[1px] w-8 bg-white/20 mt-3"></div>
              </div>
              <h3 className="font-sans font-light text-3xl md:text-5xl text-white mb-6 leading-tight uppercase tracking-tight">
                Let's build something impactful.
              </h3>
              <p className="font-serif italic font-light text-sm md:text-base mb-10 text-white/55 leading-relaxed">
                Currently seeking opportunities in AI, ML Engineering, and Data Science. Open for collaborations, freelance technical projects, or technical conversations.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-white/5 text-primary rounded-none border border-white/10">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.15em] text-white/35 uppercase font-medium">Phone</div>
                  <a href="tel:+916383873213" className="font-sans text-sm md:text-base font-semibold text-white hover:text-primary transition-colors duration-200">+91 6383873213</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-white/5 text-primary rounded-none border border-white/10">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.15em] text-white/35 uppercase font-medium">Email</div>
                  <a href="mailto:shrihariniselvakumar@gmail.com" className="font-sans text-sm md:text-base font-semibold text-white hover:text-primary transition-colors duration-200">shrihariniselvakumar@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-white/5 text-primary rounded-none border border-white/10">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="text-[10px] font-mono tracking-[0.15em] text-white/35 uppercase font-medium">Address Details</div>
                  <p className="font-sans text-xs md:text-sm text-white/60 leading-snug">
                    14/19 iyyapasamykovil st,<br />Moorthinayakanpatti, Odaipaati,<br />Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form / Success view */}
          <div className="lg:col-span-7 bg-[#080808] p-8 border border-white/10 shadow-xl rounded-none relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-white"
                >
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-2">
                    <span className="font-mono text-[9px] text-white/40 font-semibold tracking-[0.15em]">SECURE SUBMISSION TUNNEL</span>
                    <span className="w-2 h-2 bg-primary animate-pulse rounded-none"></span>
                  </div>

                  {formError && (
                    <div className="bg-red-950/40 text-red-300 border-l border-red-500 p-3 text-xs flex items-center gap-2 rounded-none">
                      <AlertTriangle size={14} className="shrink-0 text-red-400" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.55">
                    <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-primary block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                      className={`w-full bg-[#0c0c0c] border px-4 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 ${
                        fieldErrors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/10 focus:border-primary'
                      }`}
                      id="contact-name"
                    />
                    {fieldErrors.name && (
                      <span className="text-[10px] font-mono text-red-400 block mt-1">{fieldErrors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-primary block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      className={`w-full bg-[#0c0c0c] border px-4 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 ${
                        fieldErrors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/10 focus:border-primary'
                      }`}
                      id="contact-email"
                    />
                    {fieldErrors.email && (
                      <span className="text-[10px] font-mono text-red-400 block mt-1">{fieldErrors.email}</span>
                    )}
                  </div>

                  {/* Message textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-primary block">
                      Message
                    </label>
                    <textarea
                      value={messageContent}
                      onChange={(e) => setMessageContent(e.target.value)}
                      placeholder="Outline your project objectives..."
                      rows={4}
                      disabled={isSubmitting}
                      className={`w-full bg-[#0c0c0c] border px-4 py-3 text-xs text-white outline-none rounded-none placeholder-white/30 resize-none ${
                        fieldErrors.message 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-white/10 focus:border-primary'
                      }`}
                      id="contact-message"
                    ></textarea>
                    {fieldErrors.message && (
                      <span className="text-[10px] font-mono text-red-400 block mt-1">{fieldErrors.message}</span>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-opacity-95 text-white font-sans font-medium py-4 uppercase text-[11px] tracking-[0.3em] rounded-none border border-primary transition-all cursor-pointer disabled:opacity-75"
                    id="submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></span>
                        <span>TRANSMITTING DETAILS...</span>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send size={12} />
                        <span>SEND MESSAGE</span>
                      </div>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 text-white min-h-[380px]"
                  id="contact-success-block"
                >
                  <div className="p-4 bg-primary/10 border border-primary/20 text-primary rounded-none mb-6 animate-bounce">
                    <CheckCircle size={48} />
                  </div>
                  
                  <h4 className="font-sans font-normal text-xl md:text-2xl text-primary uppercase tracking-[0.1em] mb-2">
                    Transmission Successful
                  </h4>
                  
                  <p className="font-sans text-xs md:text-sm text-white/60 max-w-sm mb-8 leading-relaxed">
                    Your request has been validated and recorded locally. Shri Harini will review your details and respond shortly.
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-white/20 text-white hover:bg-white hover:text-black hover:border-white px-6 py-2.5 font-sans text-xs uppercase font-medium tracking-[0.2em] rounded-none transition-all duration-300"
                  >
                    Submit Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
