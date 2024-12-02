import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Tekst from '@/app/components/Tekst';
import Zdjecie from '@/app/components/zdjecie';

export default function Kontakt() {
    return (
      <div>
        <div className='container'>
          <div className='content'>
          <Navigation/>
          <Header title="Kontakt" subtitle="Witaj na stronie Kontakt"/>
          <Tekst/>
          <Zdjecie/>
          </div>
         </div>
         <Footer/>
      </div>
    );
  }
  