import { AiOutlineShopping } from "react-icons/ai";
import { IoLogoEuro } from "react-icons/io";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import UseChairdata from "../../Hooks/UseChairdata";

const ProductList = ({ chair }) => {
  const axiosPublic = UseAxiosPublic();

  const { user } = UseAuth();
  const [, , refetch] = UseChairdata();

  const addToCart = (chair) => {
    if (user && user.email) {
      // console.log(user.email, chair);

      // Send Cart item to the database
      const CartItem = {
        productId: chair._id,
        email: user.email,
        name: chair.name,
        imageUrl: chair.imageUrl,
        price: chair.price,
      };
      console.log(CartItem);

      // axiosSecure using hook
      axiosPublic
        .post("/cards", CartItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`"${chair.name}" added to Cart successfully`);
            // refetch Cart to update the Cart items count
            refetch();
          } else {
            toast.error(`"${chair.name}" added to Cart unsuccessfully`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please login to add to Cart");
      // navigate("/Login", { state: { from: location } });
    }
  };

  return (
    <div className="card bg-base-100 w-64 hover:shadow-xl duration-300 border">
      <figure>
        <img className="w-[90%] mt-3" src={chair?.imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h4 className="font-bold ">{chair?.name}</h4>

        <div className="flex justify-around font-bold">
          <h4 className="flex items-center justify-center text-center">
            <IoLogoEuro />
            {chair?.price}
          </h4>
          <h4 className="line-through  flex items-center justify-center text-center text-[#888]">
            <IoLogoEuro />
            {chair?.discountedPrice}
          </h4>
          <h4 className="text-red-500 font-bold">{chair?.discount}</h4>
        </div>
        <p className="text-sm">{chair?.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => addToCart(chair)}
            className="btn w-full text-white border-none bg-black hover:bg-white hover:text-black "
          >
            <AiOutlineShopping /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
