import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Delhi from "../../assets/delhi.png";

const Data = () => {
  const [area, setArea] = useState(null);
  const [population, setPopulation] = useState(null);
  const [density, setDensity] = useState(null);
  const [consumption, setConsumption] = useState(null);
  const [currentConsumption, setCurrentConsumption] = useState(null);
  const [totalMapping, setTotalMapping] = useState(null);
  const [averageEnergy, setAverageEnergy] = useState(null);

  const location = useLocation();

  console.log(location);

  useEffect(() => {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="w-screen grid place-items-center py-12">
      <div className="w-3/4">
        <header className="w-full flex py-4">
          <span className="flex-1">{location.state.area}</span>
          <button className="flex items-center">
            <HiOutlineArrowLeft />
            Back
          </button>
        </header>
        <img className="w-full " src={Delhi} alt="delhi" />
        <div className="flex w-full pt-8">
          <div className="flex-3 pr-4 ">
            <div className="grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12">
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Area (Sq. Km)
                </div>
                <div className="text-xl font-extrabold">1,484</div>
              </div>
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Population
                </div>
                <div className="text-xl font-extrabold">452345345</div>
              </div>
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Population Density
                </div>
                <div className="text-xl font-extrabold">234234</div>
              </div>
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Current Elec. Consumption (GWh)
                </div>
                <div className="text-xl font-extrabold">2342323.000</div>
              </div>
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Tone Mapping Confidence
                </div>
                <div className="text-xl font-extrabold">324.23423</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-rows-2 gap-y-12">
              <div className="text-2xl font-bold p-8 border-l-8 border-red-700 ">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Recommended Electricity Consumption(GWh)
                </div>
                <div className="text-3xl text-red-700 font-extrabold">25000.000</div>
              </div>
              <div className="text-2xl font-bold p-8 border rounded-lg shadow-lg">
                <div className="text-lg pb-4 text-gray-400 font-extrabold">
                  Average Energy Usage(GWh)
                </div>
                <div className="text-3xl font-extrabold">36.25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
