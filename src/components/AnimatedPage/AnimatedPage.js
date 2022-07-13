import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }) => {

    const animation = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    };

    return (
        <motion.div
            variants={animation}
            initial='hidden'
            animate='visible'
            exit='exit'

            className='animated__page'
        >
            {children}
        </motion.div>
    )
};

export default AnimatedPage;
