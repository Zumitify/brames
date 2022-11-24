import React from "react";
import Location from "../../assets/location.png";
import { useNavigate } from "react-router-dom"
const Home = () => {
  const nav = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    nav("/data",{ state: { area: e.target.value } });
  };
  const goToForm = (e) => {
    e.preventDefault()
    nav("/intro")
  }
 
  return (
    <div className="h-screen w-screen grid place-items-center">
      <div className="w-3/4 p-12 flex ">
        <img className="flex-1 w-1/4" src={Location} alt="img" />
        <p className="flex-1 text-3xl font-extrabold flex items-center">
          Select a location to begin
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-8">
        <button
          className="px-4 py-4 border text-lg hover:bg-gray-100"
          onClick={handleClick}
          value={"Delhi"}
        >
          Delhi
        </button>
        <button
          className="px-4 py-4 border text-lg hover:bg-gray-100"
          onClick={handleClick}
          value="Bangalore"
        >
          Bangalore
        </button>
        <button
          className="px-4 py-4 border text-lg hover:bg-gray-100"
          onClick={handleClick}
        >
          Location 1
        </button>
        <button
          className="px-4 py-4 border text-lg hover:bg-gray-100"
          onClick={handleClick}
        >
          Location 2
        </button>
        <button
          className="px-4 py-4 border text-lg hover:bg-gray-100"
          onClick={handleClick}
        >
          Location 3
        </button>
        <button
          className="px-4 py-4 border text-lg bg-gray-50 rounded-lg hover:bg-gray-100"
          onClick={goToForm}
        >
          + Add new city
        </button>
      </div>
    </div>
  );
};

export default Home;
