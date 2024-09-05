import { AiOutlineShopping } from "react-icons/ai";
import { IoLogoEuro } from "react-icons/io";

const ProductList = ({ chair }) => {
    const handelclick=()=>{
        console.log("clicked")
    }
  return (
    <>
      
      <div className="card bg-base-100 w-64 hover:shadow-xl duration-300 border">
        <figure>
          <img
          className="w-[90%] mt-3"
            src={chair?.imageUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          
          <h4 className="font-bold ">{chair?.name}</h4>
          
          <div className="flex justify-around font-bold">
            <h4 className="flex items-center justify-center text-center"><IoLogoEuro />{chair?.price}</h4>
            <h4 className="line-through  flex items-center justify-center text-center text-[#888]"><IoLogoEuro />{chair?.discountedPrice}</h4>
            <h4 className="text-red-500 font-bold">{chair?.discount}</h4>
          </div>
          <p className="text-sm">{chair?.description}</p>
          <div className="card-actions justify-end">
            <button
            onClick={handelclick}
             className="btn w-full text-white border-none bg-black hover:bg-white hover:text-black "><AiOutlineShopping /> Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
