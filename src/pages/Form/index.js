import ActionButton from "../../components/ActionButton"
import { useState } from "react"
import { storage } from "../../Firebase"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"

const Form = () =>{
    const [imageUpload, setImageUpload] = useState(null)
const updloadImage = () =>{
        if(imageUpload == null) {return}
        
        const imageRef = ref(storage, `maps/${imageUpload.name + v4()}`)
        uploadBytes(imageRef,imageUpload).then(()=>{
            alert("Image Uploaded")
        })
    }
    return(
        <div className="h-screen w-screen grid place-items-center">
            <div>
                <input type='file' onChange={(e) =>{
                    setImageUpload(e.target.files[0])
                    }} />
                
                  
                <button onClick={updloadImage}>Upload</button>

                {/* <ActionButton 
                  text="Upload" 
                  onClick={updloadImage}
                /> */}
            </div>

        </div>
    )
}

export default Form