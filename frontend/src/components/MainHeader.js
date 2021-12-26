import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function MainHeader() {
  const Menu = [
    { name: 'Recipe Index', link: '/' },
    { name: 'Course', link: '/course' },
    { name: 'Method', link: '/' },
    { name: 'Cut', link: '/' },
    { name: 'Cuisine', link: '/' },
    { name: 'Type', link: '/' },
    { name: 'Flavor', link: '/' },
  ];

  useEffect(() => {
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }, []);

  return (
    <div className="container flex w-full max-w-screen-lg px-5 py-5 mx-auto bg-black md:text-left md:bg-white ">
      {/* Mobile menu */}
      <div className="text-white md:hidden">
        <button className="mobile-menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex-row md:flex">
        <div>
          <Link to="/">
            <span className="mx-5 font-semibold text-white border-b-4 border-black whitespace-nowrap md:text-black md:text-3xl lg:text-6xl font-birthstone">
              Royal Meals
            </span>
          </Link>
        </div>

        <nav className="hidden md:tracking-normal lg:tracking-wider md:flex whitespace-nowrap mobile-menu">
          <ul className="mx-5 font-extrabold text-white md:text-black py-7">
            {Menu.map((item) => (
              <li
                key={item.name}
                className="mr-5 uppercase md:inline hover:text-yellow-600"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MainHeader;
