import './App.css';
import { Routes, Route } from 'react-router';

//import pictures
import Pic1 from './assets/chalet.jpg'
import Pic2 from './assets/chalet1.jpg'
import Pic3 from './assets/chalet2.jpg'
import Pic4 from './assets/chalet3.jpg'
import Pic5 from './assets/chalet4.jpg'
import Pic6 from './assets/chalet5.jpg'
import twinroom from './assets/twin-room.jpg'
import entrance from './assets/Entrance.jpg'
import Master from './assets/master.jpg'
import LivingKitchen2 from './assets/living-kitchen.jpg'
import Outside from './assets/outside.jpg'
import Hickling from './assets/Hickling.jpg'
import Potter from './assets/Potter-Heigham.jpg'
import Womack from './assets/Womack-Staithe.jpg'
import Dilham from './assets/Dilham.jpg'
import CleyByTheSea from './assets/Landscape/Cley-Sea.jpg'
import Happisburgh from './assets/Landscape/Happisburgh-Lighthouse.jpg'
import Holt from './assets/Landscape/Holt.jpg'
import Weybourne from './assets/Landscape/Weybourne.jpg'
import Ruston from './assets/Garden/East-Ruston-Old-Vicarage-Gardens.jpg'
import Horstead from './assets/Garden/Horstead-House-Estate.jpg'
import Hoverton from './assets/Garden/Hoverton-Hall-Estate.jpg'
import Sheringham from './assets/Garden/Sheringham-Hall.jpg'

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NavigationBar from './components/NavBar'
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Chalet from './components/Chalet';
import Nearby from './components/Nearby';
import BookingForm from './components/BookingForm';


function App() {


  const images2 = [
    { url: Pic1, description: 'Living Area' },
    { url: Pic2, description: 'Living Area' },
    { url: Pic3, description: 'Bathroom' },
    { url: twinroom, description: 'Twin Room' },
    { url: Master, description: 'Master Room' },
    { url: Pic6, description: 'Kitchen' },
    { url: entrance, description: 'Entrance' },
    { url: Outside, description: 'Outside View' }
    // Add more images as needed
  ];

  const imageData = [
    {
      src: Hickling,
      alt: 'Hickling Village boat houses with straw roof on water',
      name: 'Hickling',
      description: '',
    },
    {
      src: Potter,
      alt: 'Image 2',
      name: 'Potter Heigham',
      description: '',
    },
    {
      src: Womack,
      alt: 'Sailboats docked in Womack',
      name: 'Womack Staithe',
      description: '',
    },
    {
      src: Dilham,
      alt: 'Windmill in Dilham next to the canal',
      name: 'Dilham',
      description: '',
    },
    {
      src: Weybourne,
      alt: 'Image 2',
      name: 'Weybourne',
      description: '',
    },
    {
      src: CleyByTheSea,
      alt: 'Image 2',
      name: 'Cley next the Sea',
      description: '',
    },
    {
      src: Happisburgh,
      alt: 'Image 2',
      name: 'Happisburgh',
      description: '',
    },
    {
      src: Holt,
      alt: 'Image 2',
      name: 'Holt',
      description: '',
    },
    {
      src: Ruston,
      alt: 'Classic car in East Ruston Old Vicarage Gardens',
      name: 'East Ruston Old Vicarage Gardens',
      description: '',
    },
    {
      src: Horstead,
      alt: 'Image 2',
      name: 'Horstead House Estate',
      description: '',
    },
    {
      src: Hoverton,
      alt: 'Image 2',
      name: 'Hoveton Hall Estate',
      description: '',
    },
    {
      src: Sheringham,
      alt: 'Image 2',
      name: 'Sheringham Hall',
      description: '',
    },
  ];

  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='gallery' element={<Gallery images={images2}/>} />
        <Route path='contact-form' element={<ContactForm />} />
        <Route path='chalet' element={<Chalet />} />
        <Route path='nearby' element={<Nearby imageData={imageData}/>} />
        <Route path='booking' element={<BookingForm />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
