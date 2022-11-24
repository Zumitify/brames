import { useNavigate } from "react-router-dom"
import ActionButton from "../../components/ActionButton"

const IntroPage = () => {

    return (
        <div className="head h-screen w-screen grid place-items-center p-10">
            <h1>
                Use of Satellite image for finding out energy
                intensity (per capita energy comsumption) of the city
            </h1>

            <div className="img-container">
                {/* uiah logo */}
            </div>

            <div>
                <ActionButton 
                  text="Start"
                  bgColor="#1382D2"
                  textColor="white"
                />
            </div>

            <div>
                <p>Developed by Team BRAMES</p>
            </div>
             
        </div>
    )
}

export default IntroPage