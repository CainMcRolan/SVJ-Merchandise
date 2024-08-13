import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function StoreBody({ products }) {
  return (
    <>
      {products?.length > 0 ? (
        <div className="w-full h-auto bg-white gap-y-4 grid grid-cols-6 shadow-md">
          {products.map((item) => (
            <Link key={item.id} to={`/store/products/${item.id}`}>
              <div className="m-2 rounded-md shadow-md h-full flex flex-col items-center justify-center text-center">
                <div className="w-2/4 h-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <p className="font-bold font-mono">{item.title}</p>
                <p>{item.price}</p>
                <p>⭐{item.rating.rate}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full h-[90%] flex justify-center items-center">
          <BeatLoader />
        </div>
      )}
    </>
  );
}
