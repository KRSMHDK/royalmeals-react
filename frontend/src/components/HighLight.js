import React from 'react';

function HighLight() {
  const highLightItem = [
    {
      title: 'Recipe Index',
      image: 'http://placekitten.com/599/860',
    },
    {
      title: 'One Pot Dinners',
      image: 'http://placekitten.com/g/599/860',
    },
    {
      title: 'Slow Cooker',
      image: 'http://placekitten.com/599/860',
    },
    {
      title: 'Reader Favorites',
      image: 'http://placekitten.com/599/860',
    },
  ];

  return (
    <div>
      <div className="container flex flex-wrap max-w-screen-lg mx-auto my-3 md:flex-nowrap">
        {highLightItem.map((item) => (
          <div key={item.title} className="relative mx-1 border-2 w-fit ">
            <img className="object-fill" src={item.image} alt={item.title} />
            <h2 className="absolute bottom-0 w-full py-3 font-bold text-center text-white bg-black/60 lg:text-xl">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighLight;
