import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Smart<span style={{ color: '#00C6A9' }}>Care</span></div>
      <ul className="nav-links">
        <li><Link href="/" >Home</Link></li>
        <li><Link href="#feature" >About</Link></li>
        <li><Link href="#testimonials">Testimonials</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
