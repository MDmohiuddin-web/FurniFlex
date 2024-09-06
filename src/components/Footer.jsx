import { Link } from "react-router-dom";
import logo from "../assets/Logofooter.svg";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      
      <footer className="footer bg-black text-white  p-10">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <h2 className="text-xl font-bold mb-4">About US</h2>
          <ul>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Master Plan
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Invest
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Pressroom
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="text-xl font-bold mb-4">Explore EVE</h2>
          <ul>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Unlock my Robot Power
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Starlight
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Robot Platform
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                EEVE Roadmap
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="text-xl font-bold mb-4">Community & Support</h2>
          <ul>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Willow X Community
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Developer & Maker Access
              </a>
            </li>
            <li>
              <a href="#" className="text-[#80849e] hover:underline">
                Special Cases
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      {/*  */}
      <footer className="bg-black text-[#80849e] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4"><FaFacebookSquare /> <FaInstagram /> <FaSquareXTwitter /> <IoLogoLinkedin /></div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Roadmap</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">General Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="language-selector flex justify-center items-center text-center gap-2"><LiaFlagUsaSolid /> United States (English)</div>
      </div>
      <div className="text-center mt-4">© 2024 Your Company. All rights reserved.</div>
    </footer>
      

     
    </div>
  );
};

export default Footer;
