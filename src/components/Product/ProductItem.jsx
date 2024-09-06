import { useState } from "react";
import ProductList from "./ProductList";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import UseChairdata from "../../Hooks/UseChairdata";

const ProductItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chairs, loading] = UseChairdata();

  if (loading) {
    return <Loading></Loading>;
  }

  // Filter items based on selected category
  const filteredChairs =
    selectedCategory === "All"
      ? chairs
      : chairs.filter((item) => item.category === selectedCategory);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredChairs.slice(firstPostIndex, lastPostIndex);

 


  return (
    <div>
      <div className="md:flex justify-between  py-10 m-auto">
        <div className="md:w-[20%]  border rounded-md flex justify-end">
          <div className="w-4/5 text-center flex flex-col capitalize space-y-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black"
            >
              All chairs
            </button>
            <button
              onClick={() => setSelectedCategory("Rocking Chairs")}
              className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black"
            >
              Rocking chair
            </button>
            <button
              onClick={() => setSelectedCategory("Side Chairs")}
              className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black"
            >
              Side chair
            </button>
            <button
              onClick={() => setSelectedCategory("Lounge Chairs")}
              className="text-center  btn  hover:text-white border-none hover:bg-black bg-white text-black"
            >
              Lounge chair
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 m-auto md:w-[75%] ">
          {/* Display the total number of chairs (commented out) */}
          {/* <h4>{chair.length}</h4> */}

          {/* Map through the current page of chairs and render ProductList component for each */}
          {currentPosts.map((chair) => (
            <ProductList key={chair._Id} chair={chair}></ProductList>
          ))}
        </div>
      </div>
      <div className="w-4/5 m-auto text-center mb-5 gap-3 ">
        <Pagination
          totalpost={chairs.length}
          postperpage={postsPerPage}
          setCureentPage={setCurrentPage}
          Cureentpage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default ProductItem;
