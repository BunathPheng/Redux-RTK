import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
export default function ProductDetailCard({ image, title, des, price }) {
  return (
    <Card className="max-w-screen-md">
      <div className="flex items-center gap-5">
        <img
          className="h-[250px] w-[300px] object-cover"
          src={
            image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
          }
          alt={title || "No pic"}
        />
        <div className="flex flex-col gap-3">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "No title"}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {des || "No description"}
          </p>
          <Button color="blue">{price || 0}$</Button>
        </div>
      </div>
    </Card>
  );
}
