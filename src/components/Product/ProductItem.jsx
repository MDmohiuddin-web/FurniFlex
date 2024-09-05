import { useEffect, useState } from "react";
import ProductList from "./ProductList";



const ProductItem = () => {

    const [chair, setchair] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          setchair(data);
          setLoading(false);
        });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
      }
    return (
        <div className="flex flex-wrap gap-4 m-auto  md:w-[90%] py-10">
            {/* <h4>{chair.length}</h4> */}
            {chair.map(chair=><ProductList key={chair._Id} chair={chair}></ProductList>)}
           
            
        </div>
    );
};

export default ProductItem;