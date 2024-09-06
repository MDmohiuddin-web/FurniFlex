import toast from "react-hot-toast";

import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

import Loading from "../Loading/Loading";

import { RxCross1 } from "react-icons/rx";
import Usecards from "../../Hooks/Usecards";
import { IoLogoEuro } from "react-icons/io";

const Oderdetails = () => {
  const axiosPublic = UseAxiosPublic();

  const [Cart, refetch, loading] = Usecards();

  const TotalPrice = Cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/cards/${id}`)
      .then((res) => {
        // Check if the data is deleted
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          toast.success(`item deleted successfully`);
          // Refetch Cart to update the Cart items count
          refetch();
        } else {
          toast.error(`item deleted unsuccessful`);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while deleting the item");
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-[90%] m-auto gap-5 md:flex my-10 h-svh">
      {/* for table */}
      <div className="md:w-[70%] bg-[#fafafa]">
        <div className="overflow-x-auto capitalize my-5  md:h-[530px] ">
          <table className="table  ">
            {/* head */}
            <thead className="  rounded-t-md  ">
              <tr>
                <th>
                  <label>
                    <h4>Serial</h4>
                  </label>
                </th>
                <th>item image</th>
                <th>item Name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="mt-2 ">
              {/* row 1 */}
              {Cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:shadow-md duration-300  border-none"
                >
                  <th>
                    <label>
                      <h4>{index + 1}</h4>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <h2>{item?.name}</h2>
                  </td>
                  <td className=""> € {item?.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="btn bg-red-600  text-white"
                    >
                      <RxCross1 />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* for price */}

      <div className="md:w-[30%] space-y-3">
        {/* <div className="card card-compact bg-[#fafafa] w-full rounded-lg ">
          <div className="card-body hover:shadow-xl">
            
          </div>
        </div> */}

        <div className="bg-[#fafafa] w-full rounded-lg p-2">
          
          <div className="w-full flex justify-between p-2 ">
            <p>Subtotal </p>
            <p className="text-left">€ {TotalPrice}</p>
          </div>
          <div className="w-full flex justify-between p-2">
            <p>Shipping </p>
            <p>Free</p>
          </div>
          <div className="w-full flex justify-between p-2">
            <p>Estimated Tax </p>
            <p>€ -</p>
          </div>
          

          <hr />
          <h2 className="card-title p-2">Total Price € {TotalPrice}</h2>
        </div>
        <div className="card-actions justify-end">
          <button className="btn w-full text-white border-none bg-black hover:bg-white hover:text-black">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oderdetails;
