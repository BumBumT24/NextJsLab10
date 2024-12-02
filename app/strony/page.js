import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
export default function AboutMe() {
  return (
    <div>
       <h1>Strona Głowna</h1>
       <ul>
        <li><Link href="/strony">Glowna</Link></li>
        <li><Link href="/strony/aboutMe">AboutMe</Link></li>
        <li><Link href="/strony/ulubione">Ulubione</Link></li>
        <li><Link href="/strony/zainteresowania">Zainteresowania</Link></li>
        <li><Link href="/strony/kontakt">Kontakt</Link></li>
       </ul>
       
    </div>
  );
}
