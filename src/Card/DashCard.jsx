import React from "react";

const DashCard = ({ data }) => {
  return (
    <div className="p-[20px] flex gap-2 items-center border rounded-lg">
      <div className="h-[50px] w-[50px] rounded-full bg-primary flex justify-center items-center">{data?.icon}</div>

      <div>
        <h3 className="text-gray-600 font-semibold text-sm">{data?.title}</h3>
        <p className="text-gray-600 text-sm">{data?.amount}</p>
      </div>
    </div>
  );
};

export default DashCard;
