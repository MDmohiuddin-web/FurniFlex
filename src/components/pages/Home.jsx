

import ProductItem from "../Product/ProductItem";
import Carusol from "./Carusol";

const Home = () => {
  return (
    <div>
      <div className="md:flex justify-between  m-auto  mb-10">
      <Carusol></Carusol>
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
