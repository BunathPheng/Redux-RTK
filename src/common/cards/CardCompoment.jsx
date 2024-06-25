import React from "react";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
export default function CardCompoment({ title, name, price, image, id }) {
  return (
    <Card className="max-w-sm">
      <Link to={`product/${id}`}>
        <img
          className="h-[300px] object-cover"
          src={
            image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
          }
          alt={title || "No pic"}
        />
      </Link>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title || "No caption"}
        </h5>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {price || 0}$
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
