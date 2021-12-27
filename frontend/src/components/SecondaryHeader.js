import React from 'react';

function SecondaryHeader() {
  const Category = [
    '30 minute',
    'One Pot',
    'Dinners',
    'Soups',
    'Crockpot',
    'Casseroles',
  ];

  return (
    <div className="hidden border-t-2 border-b-2 border-black lg:flex">
      <nav className="container max-w-screen-lg mx-auto">
        <ul className="py-5 pl-10 ">
          {Category.map((category) => (
            <li
              key={category}
              className="inline px-1 py-1 mx-2 text-sm font-bold rounded-md cursor-pointer hover:text-yellow-600 bg-zinc-100"
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SecondaryHeader;
