import Link from 'next/link';

// Komponent nawigacji, który przyjmuje listę linków jako props
export default function Navigation() {
    const links = [
        { href: '/strony', text: 'Glowna' },
        { href: '/strony/aboutMe', text: 'AboutMe' },
        { href: '/strony/ulubione', text: 'Ulubione' },
        { href: '/strony/zainteresowania', text: 'Zainteresowania' },
        { href: '/strony/kontakt', text: 'Kontakt' }
      ];
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
