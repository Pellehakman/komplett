const ProductCard = () => {
  return (
    <div className="flex flex-col bg-white pt-4 pb-8 px-4 w-64 rounded-sm">
      <div className="flex justify-end w-full ">
        <input type="checkbox" />
      </div>
      <h1 className=" text-2xl font-black">RTX 4060</h1>
      <h2>Gainward GeForce, PCIe 4.0, 8GB GDDR6</h2>
      <img
        className="w-40"
        src="https://www.komplett.se/img/p/1200/1248383_2.jpg"
      />
      <div className="w-full flex justify-between">
        <span>i lager</span>
        <span>4699:-</span>
      </div>
      <p className="py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <button className="p-2 border-2  rounded-md font-bold">Visa</button>
    </div>
  );
};

export default ProductCard;
