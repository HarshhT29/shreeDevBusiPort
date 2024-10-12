import array from "../../data.json";

const Products = () => {
  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#271212] py-24 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {array.map((elem, index) => (
          <a href={elem.link}
            key={index}
            className="bg-white p-4 rounded-lg shadow-md space-y-3 cursor-pointer text-center hover:scale-105 duration-700"
          >
            <img
              src={elem.imgUrl}
              alt={elem.title}
              className="h-40 mx-auto rounded"
            />
            <h2 className="text-xl font-semibold mt-2 max-w-xs mx-auto">
              {elem.title}
            </h2>
            <p className="text-lg font-bold text-[#f4f0ea] py-2 rounded-sm max-w-xs mx-auto bg-[#272727]">
              ₹{elem.price}00
            </p>
            <a href={elem.link} className="font-semibold hover:scale-105 duration-700 max-w-xs mx-auto bg-[#ff9900] flex justify-center items-center gap-3 py-1 rounded-sm">
              <span>Shop On </span>
              <img src="/product/amazon.svg" alt="" className="h-10" />{" "}
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Products;
