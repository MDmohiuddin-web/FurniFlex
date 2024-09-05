import { Link } from "react-router-dom";
import logo from "../assets/Logofooter.svg";
const Footer = () => {
  return (
    <>
      {/*  <div className="bg-gray-900 text-white">
       <footer className="bg-gray-800 py-8">
         <div className="container mx-auto px-4">
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <img src={logo} alt="" />
             </div>
           <div className="flex flex-wrap justify-between">
            
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <h2 className="text-xl font-bold mb-4">About US</h2>
               <ul>
                 <li>
                   <a href="#" className="hover:underline">
                     Master Plan
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Jobs
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Invest
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Pressroom
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Blog
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Contact
                   </a>
                 </li>
               </ul>
             </div>
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <h2 className="text-xl font-bold mb-4">Explore EVE</h2>
               <ul>
                 <li>
                   <a href="#" className="hover:underline">
                     Unlock my Robot Power
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Starlight
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Robot Platform
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     EEVE Roadmap
                   </a>
                 </li>
               </ul>
             </div>
             <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <h2 className="text-xl font-bold mb-4">Community & Support</h2>
               <ul>
                 <li>
                   <a href="#" className="hover:underline">
                     Willow X Community
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Developer & Maker Access
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:underline">
                     Special Cases
                   </a>
                 </li>
               </ul>
             </div>
           </div>
           <div className="flex justify-between items-center mt-8">
             <div className="text-sm">
               <a href="#" className="hover:underline">
                 Privacy Policy
               </a>{" "}
               |
               <a href="#" className="hover:underline">
                 General Terms
               </a>{" "}
               |
               <a href="#" className="hover:underline">
                 Contact
               </a>
             </div>
             <div className="text-sm">
               <a href="#" className="hover:underline">
                 United States (English)
               </a>
             </div>
           </div>
           <div className="text-center mt-8 text-sm">
             &copy; 2024 EEVE. All rights reserved.
           </div>
         </div>
       </footer>
     </div> */}
      <footer className="footer bg-black text-white  p-10">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <h2 className="text-xl font-bold mb-4">About US</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Master Plan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Invest
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pressroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="text-xl font-bold mb-4">Explore EVE</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Unlock my Robot Power
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Starlight
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Robot Platform
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                EEVE Roadmap
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="text-xl font-bold mb-4">Community & Support</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Willow X Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Developer & Maker Access
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Special Cases
              </a>
            </li>
          </ul>
        </nav>
        
      </footer>
      
    </>
  );
};

export default Footer;
