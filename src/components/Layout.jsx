import React from 'react';
import Navbar from './Navbar';
// import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content pt-28">{children}</div>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
