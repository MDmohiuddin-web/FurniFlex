import { Link } from "react-router-dom";
import chair from "../../assets/Black Aesthetic Video Travel Vlog YouTube Thumbnail (2).jpg";
import ProductItem from "../Product/ProductItem";

const Home = () => {
  return (
    <div>
      <div className="md:flex justify-between  m-auto  md:w-[90%] py-5 mb-10">
        <div className="w-[90%] m-auto rounded-md ">
          <img src={chair} alt="" className=" h-[500px] rounded-md" />
        </div>
        <div className=" space-y-5 md:w-[40%]">
          <h1 className=" text-4xl font-bold">we sell comport</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga
            harum reprehenderit, commodi saepe ab voluptate. Eveniet molestias,
            neque harum, quis totam molestiae ut labore officiis tempore
            pariatur minus laudantium?
          </p>
          <Link
            to="/ProductItem"
            className="btn  text-white border-none bg-black hover:bg-white hover:text-black "
          >
            buy now
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="w-[90%] m-auto text-center text-2xl md:text-4xl font-bold">
        <h2>Our Products list</h2>
      </div>
      <ProductItem></ProductItem>
    </div>
  );
};

export default Home;
