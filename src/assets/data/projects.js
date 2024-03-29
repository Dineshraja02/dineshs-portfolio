import { v4 as uuidv4 } from 'uuid';
import SocialImg from '../images/Social.png';
import PortfolioImg from '../images/Portfolio.png';
import EMIImg from '../images/EMI.png';
import Webscrap from '../images/Webscrap.png';
import MusicPlayer from '../images/Musicplayer.png';
import Anime from '../images/Anime.png';
import Whatsapp from '../images/Whatsapp.png';
import Loads from '../images/Loads.png';
import Railway from '../images/Railway.png';
import Crypco from '../images/CRYPCO.png';
import GRA from '../images/GRA.png';
import MGR from '../images/MGR.png';
import RGCA from '../images/RGCA.png';
import Winwincoins from '../images/winwincoins.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Railway Reservation app',
    desc: 'Enjoy Your travel with our Bookings',
    img: Railway,
    link: 'https://railway-reserve.netlify.app/',
    github: 'https://github.com/AKRaavanan/reservation-ui',
  },
  {
    id: uuidv4(),
    name: 'Together App',
    desc: 'Connect with friends and the world around you on Together.',
    img: SocialImg,
    link: 'https://together-social-app.netlify.app/',
    github: 'https://github.com/AKRaavanan/Social-Media-UI',
  },
  {
    id: uuidv4(),
    name: 'Portfolio Creater',
    desc: 'Now You can create a potfolio within a minute.',
    img: PortfolioImg,
    link: 'https://dynamic-portfolio-creater.netlify.app/',
    github: 'https://github.com/AKRaavanan/Dynamic-Portfolio',
  },
  {
    id: uuidv4(),
    name: 'EMI Calculator',
    desc: 'No need of calculator Enter the credentials and see your EMI table',
    img: EMIImg,
    link: 'https://emi-calcu.netlify.app/emicalc',
    github: 'https://github.com/AKRaavanan/emi-calculator',
  },
  {
    id: uuidv4(),
    name: 'Crypco App',
    desc: 'Crypto currency detail app',
    img: Crypco,
    link: 'https://crypco.brugu.finance/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Grand Race Auto',
    desc: 'Race betting app',
    img: GRA,
    link: 'https://www.grademo.brugu.io/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Meta Grand Race',
    desc: 'Enjoy Your travel with our Bookings',
    img: MGR,
    link: 'https://metagrandrace.netlify.app/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Aquaculture App',
    desc: 'Aquaculture store mangement CRM APP',
    img: RGCA,
    link: 'https://rgca-dev.brugu.io/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Winwincoins app',
    desc: 'Crypto currency presale app',
    img: Winwincoins,
    link: 'https://www.winwincoins.com/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Web Scrapping',
    link: 'https://web-scrapping.netlify.app/',
    desc: 'Compare Your favorite mobile price in place',
    img: Webscrap,
    github: 'https://github.com/AKRaavanan/webscraping-frontend',
  },
  {
    id: uuidv4(),
    name: 'Whatsapp clone UI',
    img: Whatsapp,
    link: 'https://texter-clone.netlify.app/',
    desc: "You'll get fast, simple,secure messaging",
    github: 'https://github.com/AKRaavanan/Whatsapp-Frontend',
  },
  {
    id: uuidv4(),
    name: 'Music Player App',
    img: MusicPlayer,
    link: ' https://music-app-react-ak.netlify.app/',
    desc: 'Just realx and Enjoy the Music',
    github: 'https://github.com/AKRaavanan/Music-App-React',
  },
  {
    id: uuidv4(),
    name: 'Anime Series Search',
    img: Anime,
    link: 'https://chinese-anime.netlify.app/',
    desc: 'Search your favorite anime series.',
    github: 'https://github.com/AKRaavanan/Hackathan',
  },
  {
    id: uuidv4(),
    name: 'Loads App',
    img: Loads,
    link: 'https://loads.netlify.app/',
    desc: 'Book your shifting with in a minute',
    github: 'https://github.com/AKRaavanan/Loads',
  },
];

export default projects;
