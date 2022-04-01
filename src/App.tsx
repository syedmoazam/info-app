import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from '@components/Header';
import UserDetail from '@views/UserDetail';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='users/:id' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default hot(module)(App);
