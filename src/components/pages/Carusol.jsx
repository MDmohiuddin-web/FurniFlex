import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import img1 from "../../assets/a (1).jpg";
import img2 from "../../assets/a (2).jpg";
import img3 from "../../assets/a (3).jpg";
import img4 from "../../assets/a (4).jpg";

const Carusol = () => {
  return (
    <Carousel autoPlay interval={2000} infiniteLoop>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Carusol;
