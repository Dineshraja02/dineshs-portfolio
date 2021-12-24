import { v4 as uuidv4 } from 'uuid';
import SocialImg from '../images/Social.png';
import PortfolioImg from '../images/Portfolio.png';
import EMIImg from '../images/EMI.png';
import Webscrap from '../images/Webscrap.png';
import MusicPlayer from '../images/Musicplayer.png';
import Anime from '../images/Anime.png';
import Whatsapp from '../images/Whatsapp.png';
import Loads from '../images/Loads.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Together App',
    desc: 'Connect with friends and the world around you on Together.',
    img: SocialImg,
    link: 'https://together-social-app.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Portfolio Creater',
    desc: 'Now You can create a potfolio within a minute.',
    img: PortfolioImg,
    link: 'https://dynamic-portfolio-creater.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'EMI Calculator',
    desc: 'No need of calculator Enter the credentials and see your EMI table',
    img: EMIImg,
    link: 'https://emi-calcu.netlify.app/emicalc',
  },
  {
    id: uuidv4(),
    name: 'Web Scrapping',
    link: 'https://web-scrapping.netlify.app/',
    desc: 'Compare Your favorite mobile price in place',
    img: Webscrap,
  },
  {
    id: uuidv4(),
    name: 'Whatsapp clone UI',
    img: Whatsapp,
    link: 'https://texter-clone.netlify.app/',
    desc: "You'll get fast, simple,secure messaging",
  },
  {
    id: uuidv4(),
    name: 'Music Player App',
    img: MusicPlayer,
    link: ' https://music-app-react-ak.netlify.app/',
    desc: 'Just realx and Enjoy the Music',
  },
  {
    id: uuidv4(),
    name: 'Anime Series Search',
    img: Anime,
    link: 'https://chinese-anime.netlify.app/',
    desc: 'Search your favorite anime series.',
  },
  {
    id: uuidv4(),
    name: 'Loads App',
    img: Loads,
    link: 'https://loads.netlify.app/',
    desc: 'Book your shifting with in a minute',
  },
];

export default projects;
