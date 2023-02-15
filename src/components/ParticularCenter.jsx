import React from "react";
import { useParams } from "react-router-dom";
import Button from "./General/Button";

const ParticularCenter = ({ destination }) => {
  const { state, center } = useParams();

  console.log("centersdsd", center);
  console.log("centersdsd", state);

  // get the state array
  const stateArr = destination.filter(
    (destination) =>
      destination.state === state.charAt(0).toUpperCase() + state.slice(1)
  );
  console.log("stateArr", stateArr);

  // get the tourCenter array in the state array
  const tourCenterArr = stateArr[0].tourCenter;
  console.log("tourCenterArr", tourCenterArr);

  function capEachWord(item) {
    const arr = item.split(" ");

    //loop through each element of the array and capitalize the first letter.

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
  }

  // get the center array
  const centerArr = tourCenterArr.filter(
    (item) => item.name === capEachWord(center)
  );
  console.log("centerArr", centerArr);

  const googleSearch = (centerName) => {
    const url = "http://www.google.com/search?q=" + centerName;
    console.log("centerName", centerName);
    window.open(url, "_blank");
  };

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto w-[98%] pt-[80px]">
        {centerArr.map((center) => (
          <div>
            <div className="grid lg:grid-cols-2 mx-auto gap-2 w-[90%] pb-10">
              <img
                src={center.imageUrl}
                alt={center.imageAlt}
                className="h-full w-full rounded-2xl object-cover object-center"
              />
              <div className="px-1 lg:px-3 py-5 lg:py-2">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                    {center.name}
                  </h3>
                  <div className="bg-yellow-400 h-[50%] p-1 rounded-2xl">
                    {center.rating}
                  </div>
                </div>
                <div className="my-2 text-sm flex gap-x-4 justify-between">
                  <div>
                    <span className="font-semibold">Guide: </span>
                    {center.guide}
                  </div>
                  <div>
                    <span className="font-semibold">Opened: </span>
                    {center.opened}
                  </div>
                </div>
                <div className="my-2 text-sm dark:text-white">
                  <span className="font-semibold">Address: </span>
                  {center.address}
                </div>
                <div className="test-sm m-1">
                  <span className="font-semibold">Historical Events: </span>
                  {center.historical}
                </div>
                <div className="test-sm m-1">
                  <span className="font-semibold">Other Information: </span>
                  {center.info}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              text={`"See More on google"`}
              classes="transform mt-0 px-6 py-2 uppercase tracking-widest text-white"
              onClick={() => googleSearch(center.name)}
            />
            <button
              onClick={() => googleSearch(center.name)}
              type="submit"
              className={`mb-5 block mx-auto rounded-lg bg-indigo-500 text-sm font-medium transition duration-300 hover:bg-indigo-600 dark:bg-indigo-600 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 dark:border-white shadow-lg hover:-translate-y-0.5 transform px-6 py-2 uppercase tracking-widest text-white`}
            >
              See More on google
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticularCenter;
