import React from 'react';

function Hero() {
  return (
    <div className="container relative z-0 w-full mx-auto h-96 lg:h-full">
      <img
        className="object-cover h-full "
        src="https://res.cloudinary.com/dtr2bqecp/image/upload/c_crop,h_600,w_1920/v1633675614/recipeimages/qji7spqk3vtbluui0nfk.jpg"
        alt="hero"
      />

      <div className="absolute px-4 py-6 bg-white shadow left-10 bottom-10 h-60 w-96">
        <h1 className="text-4xl font-semibold font-nunito">
          Super Green Pasta
        </h1>
        <p className="pt-2 font-nunito">
          A very green pasta, with a couple of options for a speedy green pasta
          sauce featuring a mix of basil, leafy greens, and zucchini. Dinner is
          ready in the time it takes pasta to cook!
        </p>
      </div>
    </div>
  );
}

export default Hero;
