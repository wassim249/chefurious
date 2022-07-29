/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily : {
        openSans : ["Open Sans" , 'sans-serif'] ,
        philosopher : ['philosopher', 'cursive']
      },
      colors: {
        darkBlue : '#0F172A' ,
        lightOrange : '#fdba74' ,
        orange : '#F97316',
        'green'  : '#10B981'
      },
      fontSize : {
        'h1' : '2rem',
        'p' : '1rem' ,
        'h3' : '1.5rem',
        'small' : '0.75rem',
        'small' : '0.75rem'
      } ,
    
  
    },
  },
  plugins: [],
}
