import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // assuming you're using framer-motion for animations
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    });

    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2.1, stagger: 0.2 },
    });
  }, [controls]);

  return (
    <motion.header className="l-header">
      <motion.nav className="nav bd-grid">
        <div>
          <motion.a
            href="#"
            className="nav__logo"
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
          >
            VocalVibes
          </motion.a>
        </div>

        <motion.div
          className="nav__toggle"
          id="nav-toggle"
          onClick={handleToggleClick}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
        >
          <i className="bx bx-menu"></i>
        </motion.div>

        <motion.div
          className={`nav__menu ${isMenuOpen ? 'show' : ''}`}
          id="nav-menu"
        >
          <motion.div className="nav__close" id="nav-close">
            <i className="bx bx-x" onClick={handleToggleClick}></i>
          </motion.div>

          <motion.ul className="nav__list">
            <motion.li
              className="nav__item"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              <a href="#home" className="nav__link active">
                Home
              </a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              <a href="#about" className="nav__link">
                About
              </a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              <a href="#skills" className="nav__link">
                Explore
              </a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </motion.li>
            <motion.li
              className="nav__item"
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
            >
              <a href="#history" className="nav__link">
                Login
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
