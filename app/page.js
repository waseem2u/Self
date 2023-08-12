import Image from 'next/image'
import Navbar from "../components/Navbar";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Journey from '@/components/Journey';
import Roadmap from '@/components/Roadmap';
import Pool from '@/components/Pool';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Journey />
      <Roadmap />
      <Pool />
      <Footer />
    </div>

   
  )
}
