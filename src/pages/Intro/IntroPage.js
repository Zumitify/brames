import { useNavigate } from "react-router-dom"
import ActionButton from "../../components/ActionButton"
import UIAH_LOGO from "../../assets/uiah_logo.png";

const IntroPage = () => {
    const nav = useNavigate();
    const changeScreen = (e) => {
        e.preventDefault()
        nav("/cities")
    }
    return (
        <div className="head h-screen w-screen grid place-items-center p-10">
            <h1>
                Energy Image Advisor
            </h1>
            <h2>
                Use of Satellite image for finding out energy
                intensity (per capita energy comsumption) of the city
            </h2>

            <div className="img-container">
                {/* uiah logo */}
                <img className="flex-1 w-1/4" src={UIAH_LOGO} alt="img" />

            </div>

            <div
                onClick={changeScreen}
            >
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