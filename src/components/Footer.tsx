"use client";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300/40 border-t border-dark-200 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-white font-poppins font-bold text-xl flex items-center">
              <span className="text-accent mr-2">&lt;</span>
              Akhil K.<span className="text-accent">/&gt;</span>
            </a>
            <p className="text-slate-400 text-sm mt-2">Full Stack Developer | Cloud Services | AI & ML</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="GitHub">
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/akhil-dharmana/" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="Twitter">
              <i className="ri-twitter-fill text-xl"></i>
            </a>
            <a href="mailto:akhildharmana@gmail.com" className="text-slate-400 hover:text-primary transition-colors" aria-label="Email">
              <i className="ri-mail-fill text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-dark-200 mt-6 pt-6 text-center text-slate-500 text-sm">
          &copy; {currentYear} Akhil Krishna Teja Dharmana. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
