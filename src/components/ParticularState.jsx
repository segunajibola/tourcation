import React from "react";
import { useParams } from "react-router-dom";
import TourismCards from "./TourismCards";

const ParticularState = ({ destination }) => {
  const { state } = useParams();

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto max-w-7xl pt-12">
        {destination
          .filter((destination) => destination.state === state.charAt(0).toUpperCase() + state.slice(1))
          .map((destination) => (
            <div className="flex-shrink-0 text-center" key={destination.id}>
              <img
                src={destination.imageUrl}
                alt={destination.imageAlt}
                className="h-64 w-full object-cover object-center"
              />
              <h1 className="mt-14 text-3xl font-semibold dark:text-white">
                Tourism centers in {destination.state}
              </h1>
            </div>
          ))}
      </div>

      <div className="mx-auto mb-3 grid max-w-full gap-6 rounded-md px-4 py-6 md:grid-cols-2 lg:max-w-full lg:px-8 xl:grid-cols-3">
        {destination
          .filter((destination) => destination.state === state.charAt(0).toUpperCase() + state.slice(1))
          .map((destination) =>
            destination.tourCenter?.map((center) => (
              <TourismCards state={destination.state.charAt(0).toLowerCase() + state.slice(1)} center={center} key={center.id} />
            ))
          )}
      </div>
    </div>
  );
};

export default ParticularState;
