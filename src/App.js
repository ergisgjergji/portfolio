import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AppRouter from './Router/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  const sidebarAnimation = {
    hidden: {
        x: "-10vw",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", mass: .5 }
    }
  };

  const mainContentAnimation = {
    hidden: {
        x: "110vh",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", mass: .6, delay: .3 }
    }
  };

  return (
      <div className='container h-100'>
        <div className='row h-100'>

          <motion.div className='col-12 col-lg-3 h-100'
            variants={sidebarAnimation} initial='hidden' animate='visible'
          >
              <Sidebar />
          </motion.div>

          <motion.div className='col-12 col-lg-9 h-100 mt-4 mt-lg-0'
            variants={mainContentAnimation} initial='hidden' animate='visible'
          >
            <div className='app__main-content overflow-auto bg-white shadow h-100 rounded'>
              <Navbar />
              <AnimatePresence>
                <AppRouter />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
  );
}

export default App;
