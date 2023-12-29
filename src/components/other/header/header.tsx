import "./header.css";

function Header() {
  return (
    <nav className="w-full">
      <ul className="flex flex-row justify-between px-8 py-4 bg-white items-center">
        <li>
          <img src="img/logo.png" alt="Logo" className="logo w-[118px] h-6" />
        </li>
        <li>
          <img
            src="img/rectangle.png"
            alt="Logo"
            className="rounded-full h-9 w-9 bg-primary-base"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Header;
