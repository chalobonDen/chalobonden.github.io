import React from 'react';

const Footer = (props) => {
  return (
    // <footer class="fixed left-0 right-0 bottom-0 bg-white">
    <footer className="footer absolute bg-white bottom-0 w-full h-30">
      <div className=" mx-auto px-6">
        <div className="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-gray-500">© 2021 by Chalobon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
