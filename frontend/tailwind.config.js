module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '90px': '90px',
        '94px': '94px',
        '130px': '130px',
        '150px': '150px',
        '195px': '195px',
        '220px': '220px',
        '250px': '250px',
        '300px': '300px',
        '533px': '533px',
      },
      height: {
        '90px': '90px',
        '141px': '141px',
        '150px': '150px',
        '195px': '195px',
        '225px': '225px',
        '300px': '300px',
        '330px': '330px',
        '450px': '450px',
        '500px': '500px',
      },
      fontFamily: {
        Bodoni: ['Bodoni Moda', 'serif'],
        nunito: ['Nunito', 'serif'],
        barriecito: ['Barriecito', 'cursive'],
        birthstone: ['Birthstone', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
