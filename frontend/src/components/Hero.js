import React from 'react';

function Hero() {
  return (
    <div className="container grid grid-cols-2 pl-20 mx-auto ">
      <section className="pt-24 flex-rows pl-36 pr-36">
        <p className="text-3xl text-green-800 font-playfairdisplay ">Yummy!!</p>
        <p className="mt-5 text-6xl font-semibold text-green-800 font-playfairdisplay ">
          Good Food Bring Genuine Happiness
        </p>
        <button className="px-5 py-2 text-xl bg-white border-4 border-none rounded-full hover:text-blue-800 pointer mt-9 ">
          Find Recipe
        </button>
      </section>
      <section className="">
        <img
          className="object-cover h-full "
          src="https://res.cloudinary.com/dtr2bqecp/image/upload/v1640164985/recipeimages/v0apkza5ahk72atbmosr.png"
          alt="hero"
        />
      </section>
    </div>
  );
}

export default Hero;
