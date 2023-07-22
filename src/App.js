import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './components/Header';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;