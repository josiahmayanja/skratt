import Link from "next/link";

const Header = () => (
  <header className="p-2 200 bg-customLightYellow">
    <nav className="flex justify-between items-center">
      <Link
        href="/"
        className="font-sans font-bold text-5xl text-customGold hover:underline"
      >
        Skrätt
      </Link>
      <div>
        <Link
          href="/features"
          className="font-sans font-bold mx-2 text-2xl text-customBlue hover:underline"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="font-sans font-bold mx-2 text-2xl text-customBlue hover:underline"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="font-sans font-bold mx-2 text-2xl text-customBlue hover:underline"
        >
          Contact
        </Link>
      </div>
      <div>
        <Link
          href="/login"
          className="font-sans font-bold mx-4 text-2xl text-customDarkGreen hover:underline"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="font-sans font-bold text-white bg-customDarkGreen px-3 text-2xl py-1 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
