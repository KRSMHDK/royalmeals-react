import React from 'react';

function HighLight() {
  const highLightItem = [
    {
      title: 'Recipe Index',
      image:
        'https://res.cloudinary.com/dtr2bqecp/image/upload/c_fill,h_525,w_366/v1640580112/recipeimages/highlight/highlight1.jpg',
    },
    {
      title: 'One Pot Dinners',
      image:
        'https://res.cloudinary.com/dtr2bqecp/image/upload/c_fill,h_525,w_366/v1640580423/recipeimages/highlight/xmqgawqosglhxwkhudvm.jpg',
    },
    {
      title: 'Slow Cooker',
      image:
        'https://res.cloudinary.com/dtr2bqecp/image/upload/c_fill,h_525,w_366/v1640580497/recipeimages/highlight/sfsezgznekmwytpedmek.jpg',
    },
    {
      title: 'Reader Favorites',
      image:
        'https://res.cloudinary.com/dtr2bqecp/image/upload/c_fill,h_525,w_366/v1640580657/recipeimages/highlight/lsco74pgmpigo7okmyzs.jpg',
    },
  ];

  return (
    <div>
      <div className="container grid grid-cols-2 gap-1 mx-auto my-3 md:grid-cols-4 md:max-w-screen-lg ">
        {highLightItem.map((item) => (
          <div
            key={item.title}
            className="relative mx-1 overflow-hidden rounded-md cursor-pointer"
          >
            <img
              className="object-cover object-center transition duration-500 hover:opacity-70 "
              src={item.image}
              alt={item.title}
            />
            <h2 className="absolute bottom-0 w-full py-3 font-bold text-center text-white transition-all duration-500 ease-in-out bg-black/60 lg:text-xl">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighLight;
