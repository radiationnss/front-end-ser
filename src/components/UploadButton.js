import React from "react";
import {motion} from 'framer-motion';

const UploadButton = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 2, delay: 0.2 } },
      };
    return (
        <motion.a
        href="#"
        className="home__button"
        variants={itemVariants}
      >
        Upload
      </motion.a>
    )
}

export default UploadButton;