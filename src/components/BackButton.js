import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    let nav = useNavigate()

    return (
        <>
            <button onClick={() => nav(-1)} className="flex content-center justify-center gap-4">
                {/* <HiOutlineArrowLeft /> */}
                <span>Back</span>
            </button>
        </>
    )
}

export default BackButton;