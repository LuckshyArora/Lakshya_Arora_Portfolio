
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-portfolio-navy">
          <a href="/" className="flex items-center gap-2">
            <span className="font-heading">LA</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-portfolio-gray hover:text-portfolio-blue font-medium transition cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-portfolio-gray hover:text-portfolio-blue font-medium transition cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
