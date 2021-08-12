import Tokyo from '../img/pexels-sevenstorm-juhaszimrus-443383.jpg';
import York from '../img/pexels-pixabay-270480.jpg';
import Moscow from '../img/pexels-jonas-ferlin-1963557.jpg';
import Madrid from '../img/pexels-mantas-sinkevičius-1106476.jpg';

export const PATTERN = /^[-0-9.,]+$/;
export const RADIAN = Math.PI / 180;

export const currencies = {
  RUB: `₽`,
  USD: `$`,
  EUR: `€`,
  GBP: `£`
};

export const money = {
  cash: {
    FIRST: `firstCash`,
    SECOND: `secondCash`
  },
  type: {
    FIRST: `firstType`,
    SECOND: `secondType`
  },
  selectedDate: `selectedDate`
};

export const RechartsColor = {
  USD: `#0088FE`,
  GBP: `#b22222`,
  EUR: `#FF8042`,
};

export const Banners = [
  {
    name: `Tokyo`,
    path: Tokyo,
    title: `Labour`,
    tagline: `Tomorrow starts now`
  },
  {
    name: `New York`,
    path: York,
    title: `Idea`,
    tagline: `Open an account for success`
  },
  {
    name: `Moscow`,
    path: Moscow,
    title: `Gain`,
    tagline: `Our experience works for you`
  },
  {
    name: `Madrid`,
    path: Madrid,
    title: `Act`,
    tagline: `Feel the future`
  }
];

// export const Branches = {
//   tokyo: {

//   }
// };
