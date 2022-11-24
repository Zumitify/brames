import ActionButton from "../../components/ActionButton"
import { useState } from "react"
import { storage } from "../../Firebase"
import { ref, uploadBytes } from "firebase/storage"
import { useNavigate } from "react-router-dom"
// import { v4 } from "uuid"

const Form = () => {
    const [imageUpload, setImageUpload] = useState(null)

    const setCityName = {
        cityName: ""
    }


    const updateCityName = (e) => {
        setCityName.cityName = e.target.value
    }

    const updloadImage = () => {
        if (imageUpload == null) {
            alert('Please upload maps to continue')
        }

        const imageRef = ref(storage, `maps/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((e) => {
            alert("Image Uploaded")
        })
    }

    const nav = useNavigate()
    const navigator = (e) => {
        e.preventDefault()
        nav("/data", {
            state: {
                area: setCityName.cityName
            }
        })
    }
    return (
        <div className="form-container">
            <h1>Add New City</h1>
            <div className="form">
                <div className="text-field">
                    <label>City</label>
                    <input type="text" id="city" placeholder="Enter city name" onChange={updateCityName} /> 
                </div>
                <div className="text-field">
                    <label>Area</label>
                    <input type="text" id="area" placeholder="Enter area of city in sq.Km" onChange={updateCityName} /> 
                </div>
                <div className="text-field">
                    <label>Population</label>
                    <input type="text" id="pop" placeholder="Enter population of city" onChange={updateCityName} /> 
                </div>
                <div className="text-field">
                    <label>Population Density</label>
                    <input type="text" id="pd" placeholder="Enter population of city" onChange={updateCityName} /> 
                </div>

                <div className="input-field">
                    <div className="txt">
                        <label className="p-5 mr-10">Upload satellite image</label>
                        <input type='file' onChange={(e) => {
                            setImageUpload(e.target.files[0])
                        }} />

                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-800 hover:transition-all duration-150 px-8 py-2 rounded-lg text-white"
                        onClick={updloadImage}
                    >Upload</button>

                </div>
                <div className="input-field">
                    <div className="txt">
                        <label className="p-5 mr-10">Upload population density map</label>
                        <input type='file' onChange={(e) => {
                            setImageUpload(e.target.files[0])
                        }} />

                    </div>

                    <button
                        className="bg-blue-500 hover:bg-blue-800 hover:transition-all duration-150 px-8 py-2 rounded-lg text-white"
                        onClick={updloadImage}
                    >Upload</button>

                </div>
                <div className="input-field">
                    <div className="txt">
                        <label className="p-5 mr-10">Upload green cover map</label>
                        <input type='file' onChange={(e) => {
                            setImageUpload(e.target.files[0])
                        }} />

                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-800 hover:transition-all duration-150 px-8 py-2 rounded-lg text-white"
                        onClick={updloadImage}
                    >Upload</button>

                </div>

            </div>

            <button
                className="py-4 px-8 bg-blue-500 text-white rounded-lg border-blue-200 border-4 hover:outline-5 hover:bg-blue-600"
                onClick={navigator}
            // value={setCityName.cityName}
            >Generate suggestion</button>
        </div>
    )
}

export default Form