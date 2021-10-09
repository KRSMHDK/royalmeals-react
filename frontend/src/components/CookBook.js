import React from 'react';

function CookBook() {
  return (
    <div>
      <h1 className="text-2xl font-bold">New Cookbook</h1>
      <div className="relative mt-2 border-4 border-yellow-300 first-line:w-400px h-600px">
        <img src="http://placekitten.com/400/600" />
      </div>
    </div>
  );
}

export default CookBook;
