import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Delhi from "../../assets/superimposed.jpeg";
import BackButton from "../../components/BackButton";
import { storage } from "../../Firebase";
import { ref,listAll, getDownloadURL } from "firebase/storage";

const Data = () => {
  const [area, setArea] = useState(null);
  const [population, setPopulation] = useState(null);
  const [density, setDensity] = useState(null);
  const [consumption, setConsumption] = useState(null);
  const [currentConsumption, setCurrentConsumption] = useState(null);
  const [totalMapping, setTotalMapping] = useState(null);
  const [averageEnergy, setAverageEnergy] = useState(null);
  const [imageList, setImageList] = useState([]);

  const location = useLocation();

  const imageReference = ref( storage, "maps_output/" )
  useEffect(() => {
    listAll(imageReference).then(response => {
      response.items.forEach( image => {
        getDownloadURL(image).then(url => {
          setImageList((prev) => [...prev,url])
        })
      })
    })
  }, []);

  return (
    <div className="container">
      <div>
        <header className="w-full flex py-4">
          <span className="flex-1">
            {/* {location.state.area} */}
            London
          </span>
          {/* <button className="flex items-center" onClick={history.back()}>
            <HiOutlineArrowLeft />
            Back
          </button> */}
          <BackButton/>
        </header>
        <div className="satellite-image-container flex justify-center">
          {/* <img src={Delhi} alt="delhi" /> */}
          {/* {imageList.map(url => {
            return <img src={url} alt="fetched-images"/>
          })} */}
          <img src={imageList[0]} alt="" />
        </div>
        <div className="flex justify-center w-full pt-8">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
