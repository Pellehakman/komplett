import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProductCard = (props) => {
  const [openCard, setOpenCard] = useState(false);
  const openDetailedCard = () => {
    setOpenCard(true);
  };
  return (
    <>
      <div className="flex flex-grow flex-col bg-white pt-4 pb-8 px-6 w-64 rounded-sm drop-shadow-xl">
        <div className="flex justify-end w-full ">
          <input type="checkbox" />
        </div>
        <h1 className=" text-xl font-black line-clamp-2">{props.name}</h1>
        <div className="flex gap-1 py-2">
          <FontAwesomeIcon icon={faStar} className="ratingStar__icon" />
          <FontAwesomeIcon icon={faStar} className="ratingStar__icon" />
          <FontAwesomeIcon icon={faStar} className="ratingStar__icon" />
          <FontAwesomeIcon icon={faStar} className="ratingStar__icon" />
          <FontAwesomeIcon icon={faStar} className="ratingStar__icon" />
        </div>
        <div className="flex justify-center py-2">
          <img className="h-40" src={props.image_urls[0]} />
        </div>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <figure className="bg-green-400 w-3 h-3 rounded-full"></figure>
            <span>i lager</span>
          </div>

          <span className="font-bold text-xl">{props.price}:-</span>
        </div>
        <p className="py-2 line-clamp-1 leading-0">{props.description}</p>
        <button
          onClick={() => openDetailedCard()}
          className="p-2 border-2  rounded-md font-bold"
        >
          Visa
        </button>
      </div>
    </>
  );
};

export default ProductCard;
