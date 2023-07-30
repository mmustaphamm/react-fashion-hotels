import React from "react";
import { ReviewData } from "./ReviewData";
import ReviewDetailsCard from "./ReviewDetailsCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline"; 

const Review = () => {
  return (
    <div className="bg-[pink] pb-10">
      <h3 className="text-center text-3xl pt-20 pb-20">What Our Clients Are Saying About Us</h3>

      <div className="swallow-card-container overflow-x-auto">
        <div className="flex flex-row rounded-sm ml-4 sm:ml-4">
          <div className="flex flex-row gap-5 lg:gap-20 lg:ml-14 mr-14 rounded-sm">
            {ReviewData?.map((category) => (
              <ReviewDetailsCard
                key={category.id}
                id={category.id}
                name={category.name}
                comments={category.comments}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-screen mt-14">
        <button className="bg-red-900 flex flex-row pr-8 pl-8 pt-4 pb-4 gap-4 text-white rounded-md">
          View All
          <ChevronRightIcon className="w-4 h-5 text-white font-extrabold pt-1" />
        </button>
      </div>
    </div>
  );
};

export default Review;
