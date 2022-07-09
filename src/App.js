import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  return (
      <div className='container h-100 py-5'>
        <div className='row h-100'>

          <div className='col-12 col-lg-3 h-100'>
              <Sidebar />
          </div>

          <div className='col-12 col-lg-9 h-100'>
            <div className='app__main-content shadow h-100 rounded p-2'>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
              <div> Test </div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default App;
