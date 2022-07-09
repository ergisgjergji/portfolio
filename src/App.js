import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  return (
      <div className='container h-100'>
        <div className='row h-100'>

          <div className='col-12 col-lg-3 h-100'>
              <Sidebar />
          </div>

          <div className='col-12 col-lg-9 h-100 mt-4 mt-lg-0'>
            <div className='app__main-content bg-white shadow h-100 rounded p-3'>

              <Navbar />              

            </div>
          </div>

        </div>
      </div>
  );
}

export default App;
