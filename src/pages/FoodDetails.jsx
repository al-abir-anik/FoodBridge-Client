import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AuthContext from "../contexts/AuthContext/AuthContext";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const specificFood = useLoaderData();
  const {
    _id,
    foodName,
    imageUrl,
    quantity,
    location,
    expireDate,
    status,
    notes,
  } = specificFood;

  return (
    <section>
      <div className="w-full h-96 py-8 bg-[#9538e2] text-center space-y-3">
        <h2 className="font-bold text-3xl text-white">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="w-full h-96 bg-[#f6f6f6] relative">
        <div className="w-3/4 h-fit mx-auto p-10 rounded-3xl bg-white flex gap-10 absolute inset-0 m-auto -top-72">
          <div className="w-2/5">
            <img src={imageUrl} className=" rounded-2xl" />
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-[#09080f]">
              {foodName}
            </h2>
            <p className="font-normal text-base text-[#09080f]/60">
              Quantity : {quantity}
            </p>
            <p className="font-bold text-xl text-[#09080f]/80">
              Expiration Date : {expireDate}
            </p>
            <p className="font-semibold text-xl text-[#09080f]/80">
              Food Status : {status}
            </p>
            <p className="font-semibold text-xl text-[#09080f]/80">
              Location : {location}
            </p>
            <p className="font-normal text-base text-[#09080f]/60">{notes}</p>

            <div className="space-x-3">
              {/* <button
                // onClick={handleAddToFavourite}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Add To Favourite
              </button>
              <button
                // onClick={() => handleDelete(_id)}
                className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10"
              >
                Delete Movie
              </button> */}
              <Link to={`/updateMovie/${_id}`}>
                <button className="btn bg-[#9538e2] rounded-full text-white font-semibold text-lg px-10">
                  Request Food
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
