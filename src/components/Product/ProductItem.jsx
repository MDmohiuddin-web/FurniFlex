import {  useState } from "react";
import ProductList from "./ProductList";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import UseChairdata from "../../Hooks/UseChairdata";

const ProductItem = () => {
  
  
  const [Cureentpage, setCureentPage] = useState(1);
  const [postperpage, setpostperpage] = useState(8);
  const [chairs,loading] = UseChairdata()


 
  if (loading) {
    return <Loading></Loading>;
  }

  // filter items from menu /data base
  const LoungeChairs   = chairs.filter((item) => item.category === "Lounge Chairs");
  const SideChairs     = chairs.filter((item) => item.category === "Side Chairs");
  const RockingChairs    = chairs.filter((item) => item.category === "Rocking Chairs");
  console.log(LoungeChairs,SideChairs,RockingChairs)


  const lastpostinsex=Cureentpage*postperpage;
  const firstpostinsex=lastpostinsex- postperpage;
  const currentpost=chairs.slice(firstpostinsex,lastpostinsex);
  


  return (
    <div>
      <div className="md:flex justify-between  py-10 m-auto">
        <div className="md:w-[20%] space-y-3 border rounded-md text-center flex flex-col">
          <button className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black">
            Rocking chair
          </button>
          <button className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black">
            Lounge chair
          </button>
          <button className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black">
            Side chair
          </button>
        </div>
        <div className="flex flex-wrap gap-4 m-auto md:w-[75%] ">
          {/* <h4>{chair.length}</h4> */}
          {currentpost.map((chair) => (
            <ProductList key={chair._Id} chair={chair}></ProductList>
          ))}
          
        </div>
        
      </div>
      <div className="w-4/5 m-auto text-center mb-5 gap-3 ">
        <Pagination totalpost={chairs.length} postperpage={postperpage} setCureentPage={setCureentPage} Cureentpage={Cureentpage}></Pagination>
      </div>
      
    </div>
  );
};

export default ProductItem;
