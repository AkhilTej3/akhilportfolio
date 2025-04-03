"use client";
import { useRef, useState,useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver({
    elementRef: sectionRef,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mailtoData, setMailtoData] = useState<{ subject: string; body: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    if (mailtoData) {
      const mailtoLink = `mailto:akhildharmana@gmail.com?subject=${encodeURIComponent(
        mailtoData.subject
      )}&body=${encodeURIComponent(mailtoData.body)}`;
      window.location.href = mailtoLink;
      setMailtoData(null);
    }
  }, [mailtoData]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would be a real API call in production

      setMailtoData({
        subject: formData.subject,
        body: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="pt-24 pb-32 px-4 md:px-8 min-h-screen relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`glass-card rounded-2xl p-8 md:p-12 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8 text-white">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <p className="text-slate-300 mb-8 leading-relaxed">
                Interested in working together? Have a project in mind or just want to say hello?
                Feel free to reach out, and I&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dark-200 rounded-full p-3 mr-4">
                    <i className="ri-mail-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:akhildharmana@gmail.com" className="text-slate-300 hover:text-primary transition-colors">
                      akhildharmana@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-200 rounded-full p-3 mr-4">
                    <i className="ri-phone-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+916305600913" className="text-slate-300 hover:text-primary transition-colors">
                      +91 6305600913
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-200 rounded-full p-3 mr-4">
                    <i className="ri-map-pin-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-slate-300">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-200 rounded-full p-3 mr-4">
                    <i className="ri-links-line text-xl text-primary"></i>
                  </div>
                    {/* <div>
                      <h4 className="text-white font-medium mb-1">Social</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="GitHub">
                          <i className="ri-github-fill text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/akhil-dharmana/" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                          <i className="ri-linkedin-fill text-xl"></i>
                        </a>
                        <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Twitter">
                          <i className="ri-twitter-fill text-xl"></i>
                        </a>
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full bg-dark-200 border border-dark-100 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full bg-dark-200 border border-dark-100 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full bg-dark-200 border border-dark-100 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className="w-full bg-dark-200 border border-dark-100 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
