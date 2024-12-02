export default function Footer() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Moja Strona. Wszystkie prawa zastrzeżone.</p>
        <ul>
          <li><a href="/privacy">Polityka Prywatności</a></li>
          <li><a href="/terms">Regulamin</a></li>
        </ul>
      </footer>
    );
  }
  