import React from 'react';
import { motion } from 'framer-motion';
import UploadButton from '../components/UploadButton';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  return (
    <motion.div className="l-main">
      <div className='home'>
      <motion.div
        className="home__container bd-grid"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="home__data"
          variants={itemVariants}
        >
          <motion.h1 className="home__title" variants={itemVariants}>
            Speech<br />Emotion<br />Recognition
          </motion.h1>
          <motion.p className="home__description" variants={itemVariants}>
            Data processing, feature selection/extraction,<br />classification based on the underlying<br /> emotional features.
          </motion.p>
        <UploadButton/>
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;

