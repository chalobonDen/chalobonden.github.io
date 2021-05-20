import React from 'react';

const AboutMe = () => {
  return (
    <div>
      {/* <div className="max-w-md py-4 px-8 bg-white rounded-lg my-20 border-2"> */}
      <div className="py-4 px-8 bg-white rounded-lg border-2">
        {/* <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div> */}
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600">
            Hello! My name is Chalobon Denninnart, you can call me JayJay. I was
            born in 1996 and I live in Chiangmai with my dad, my mom, and my
            younger brother. I interesting about technology and computer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
