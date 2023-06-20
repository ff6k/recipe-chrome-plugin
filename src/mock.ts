import TwitterLogo from './assets/img/icons/twitter.png';
import TelegramLogo from './assets/img/icons/telegram.png';
import WebsiteLogo from './assets/img/icons/website.png';
import MediumLogo from './assets/img/icons/medium.png';

import BibimbapImg from './assets/img/foods/bibimbap.png';
import PaellaImg from './assets/img/foods/paella.png';

import { RECIPE_DATA } from './type';

export const mockData: RECIPE_DATA[] = [
  {
    id: 1,
    title: 'Spanish Paella',
    difficulty: 'Medium',
    countryCode: 'es',
    image: PaellaImg,
    description:
      'Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.',
    fullRecipeLink: '',
    socials: [
      {
        name: 'discord',
        link: 'https://discord.com',
        logo: TwitterLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'telegram',
        link: 'https://telegram.com',
        logo: TelegramLogo,
        height: 7.5,
        width: 7.5,
      },
      {
        name: 'medium',
        link: 'https://medium.com',
        logo: MediumLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'website',
        link: 'https://discord.com',
        logo: WebsiteLogo,
        height: 8,
        width: 8,
      },
    ],
    traits: [
      {
        type: 'Seafood',
        value: [
          {
            text: 'Jumbo Shrimp',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Produce',
        value: [
          {
            text: 'Onion',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Tomatoes',
            color: 'linear-gradient(0deg, #FB2047, #FB2047)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Spices',
        value: [
          {
            text: 'Bay Leaf',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Saffron',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Olive Oil',
        value: [
          {
            text: 'Spanish Olive Oil',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Volume/Weight',
        value: [
          {
            text: '700g',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Serves',
        value: [
          {
            text: '4',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Authenticity',
        value: [
          {
            text: 'Unverified',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Stock',
        value: [
          {
            text: 'Chicken',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Italian Pasta',
    difficulty: 'Easy',
    countryCode: 'it',
    description:
      'Italian pasta is a staple dish in Italian cuisine. It comes in various shapes and sizes, and is often served with different types of sauces, such as tomato sauce, carbonara, or pesto.',
    fullRecipeLink: '',
    image: BibimbapImg,
    socials: [
      {
        name: 'discord',
        link: 'https://discord.com',
        logo: TwitterLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'telegram',
        link: 'https://telegram.com',
        logo: TelegramLogo,
        height: 7.5,
        width: 7.5,
      },
      {
        name: 'medium',
        link: 'https://medium.com',
        logo: MediumLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'website',
        link: 'https://discord.com',
        logo: WebsiteLogo,
        height: 8,
        width: 8,
      },
    ],
    traits: [
      {
        type: 'Seafood',
        value: [
          {
            text: 'Jumbo Shrimp',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Produce',
        value: [
          {
            text: 'Onion',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Tomatoes',
            color: 'linear-gradient(0deg, #FB2047, #FB2047)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Spices',
        value: [
          {
            text: 'Bay Leaf',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Saffron',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Olive Oil',
        value: [
          {
            text: 'Spanish Olive Oil',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Volume/Weight',
        value: [
          {
            text: '1700g',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Serves',
        value: [
          {
            text: '4',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Authenticity',
        value: [
          {
            text: 'Unverified',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Stock',
        value: [
          {
            text: 'Chicken',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Indian Curry',
    difficulty: 'Medium',
    countryCode: 'in',
    description:
      'Indian curry is a diverse dish that varies greatly across different regions of India. It typically consists of a spiced sauce or gravy with a combination of vegetables, meat, or seafood, served with rice or bread.',
    fullRecipeLink: '',
    image: PaellaImg,
    socials: [
      {
        name: 'discord',
        link: 'https://discord.com',
        logo: TwitterLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'telegram',
        link: 'https://telegram.com',
        logo: TelegramLogo,
        height: 7.5,
        width: 7.5,
      },
      {
        name: 'medium',
        link: 'https://medium.com',
        logo: MediumLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'website',
        link: 'https://discord.com',
        logo: WebsiteLogo,
        height: 8,
        width: 8,
      },
    ],
    traits: [
      {
        type: 'Seafood',
        value: [
          {
            text: 'Jumbo Shrimp',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Produce',
        value: [
          {
            text: 'Onion',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Tomatoes',
            color: 'linear-gradient(0deg, #FB2047, #FB2047)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Spices',
        value: [
          {
            text: 'Bay Leaf',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Saffron',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Olive Oil',
        value: [
          {
            text: 'Spanish Olive Oil',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Volume/Weight',
        value: [
          {
            text: '1700g',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Serves',
        value: [
          {
            text: '4',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Authenticity',
        value: [
          {
            text: 'Unverified',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Stock',
        value: [
          {
            text: 'Chicken',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Japanese Sushi',
    difficulty: 'High',
    countryCode: 'jp',
    description:
      'Japanese sushi is a popular dish made with vinegared rice and various toppings such as raw fish, seafood, or vegetables. It requires precision and skill to create the perfect balance of flavors and textures.',
    fullRecipeLink: '',
    image: PaellaImg,
    socials: [
      {
        name: 'discord',
        link: 'https://discord.com',
        logo: TwitterLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'telegram',
        link: 'https://telegram.com',
        logo: TelegramLogo,
        height: 7.5,
        width: 7.5,
      },
      {
        name: 'medium',
        link: 'https://medium.com',
        logo: MediumLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'website',
        link: 'https://discord.com',
        logo: WebsiteLogo,
        height: 8,
        width: 8,
      },
    ],
    traits: [
      {
        type: 'Seafood',
        value: [
          {
            text: 'Japanese Sushi',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Produce',
        value: [
          {
            text: 'Onion',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Tomatoes',
            color: 'linear-gradient(0deg, #FB2047, #FB2047)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Spices',
        value: [
          {
            text: 'Bay Leaf',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Saffron',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Olive Oil',
        value: [
          {
            text: 'Spanish Olive Oil',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Soy Sauce',
        value: [
          {
            text: 'Low Sodium',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Serves',
        value: [
          {
            text: '4',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Authenticity',
        value: [
          {
            text: 'Unverified',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Stock',
        value: [
          {
            text: 'Chicken',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Mexican Tacos',
    difficulty: 'Medium',
    countryCode: 'mx',
    description:
      'Mexican tacos are a popular street food dish consisting of a tortilla filled with various ingredients such as grilled meat, beans, cheese, and salsa. They are known for their bold flavors and versatility.',
    fullRecipeLink: '',
    image: BibimbapImg,
    socials: [
      {
        name: 'discord',
        link: 'https://discord.com',
        logo: TwitterLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'telegram',
        link: 'https://telegram.com',
        logo: TelegramLogo,
        height: 7.5,
        width: 7.5,
      },
      {
        name: 'medium',
        link: 'https://medium.com',
        logo: MediumLogo,
        height: 6,
        width: 7.5,
      },
      {
        name: 'website',
        link: 'https://discord.com',
        logo: WebsiteLogo,
        height: 8,
        width: 8,
      },
    ],
    traits: [
      {
        type: 'Seafood',
        value: [
          {
            text: 'Jumbo Shrimp',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Fish',
        value: [
          {
            text: 'Tuna',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Salmon',
            color: 'linear-gradient(0deg, #FB2047, #FB2047)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Spices',
        value: [
          {
            text: 'Bay Leaf',
            color: 'linear-gradient(136.39deg, #2BF1E5 3.18%, #40E33D 102.04%)',
            isGradient: true,
          },
          {
            text: '/',
            color: '#FFFFFF',
            isGradient: false,
          },
          {
            text: 'Saffron',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Olive Oil',
        value: [
          {
            text: 'Spanish Olive Oil',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Volume/Weight',
        value: [
          {
            text: '1700g',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Serves',
        value: [
          {
            text: '4',
            color: '#FFFFFF',
            isGradient: false,
          },
        ],
      },
      {
        type: 'Authenticity',
        value: [
          {
            text: 'Unverified',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
      {
        type: 'Stock',
        value: [
          {
            text: 'Chicken',
            color: 'linear-gradient(136.39deg, #FFBF43 3.18%, #FF4869 102.04%)',
            isGradient: true,
          },
        ],
      },
    ],
  },
];
