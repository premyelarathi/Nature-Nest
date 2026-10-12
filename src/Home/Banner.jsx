import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import B1 from '../assets/Images/B1.png'
import B2 from '../assets/Images/B2.png'
import B3 from '../assets/Images/B3.png'
import B4 from '../assets/Images/B4.png'
import B5 from '../assets/Images/B5.png'

const banners = [B1, B2, B3, B4, B5];
const bannerDestinations = [
  { to: '/Shop/fruits', alt: 'Shop fruits' },
  { to: '/Shop/seasonal', alt: 'Shop seasonal plants' },
  { to: '/Shop/vegetables', alt: 'Shop vegetables' },
  { to: '/Shop/flowers', alt: 'Shop flowers' },
  { to: '/Shop/herbs', alt: 'Shop herbs' },
];

const Banner = () => {
  const [index,setIndex] =useState(0);

  useEffect (()=>{
    const timer = setInterval (()=>{
      setIndex((prev)=>(prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer)
  },[]);

  const destination = bannerDestinations[index];

  return (
    <div>
      <Link to={destination.to}>
        <img
          src={banners[index]}
          alt={destination.alt}
          className="w-full h-[600px] object-cover"
        />
      </Link>
    </div>
  )
}

export default Banner