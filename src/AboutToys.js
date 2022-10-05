import { useState } from "react";
import { data } from "./data"




function AboutToys() {
const[kidsToys, setKidsToys] = useState(0)
const{ name, image, price,description}= data[kidsToys];
const[details, setDetails] = useState(false)

const next = () => {
setKidsToys((kidsToys => {
    kidsToys ++;
    setDetails(false);
    if(kidsToys > data.length -1){
        kidsToys = 0
    }return kidsToys
}))
}

const previous = () => {
    setKidsToys((kidsToys => {
        kidsToys--;
        setDetails(false);
        if(kidsToys < 0){
            kidsToys = data.length -1
        }return kidsToys
    }))
}



  return (
    <div >
       <div className="container">
                <h3>{name}</h3>
                <img src={image} alt="toys" id="img"/>
               <p className="price">Price: {price}</p>
                <p className="description">Description: {details ?  description : description.substring(0,30) + "..."}
                <button onClick={() => setDetails(!details)}>{details ? "Show less" : "Show More"}</button>
                </p>
</div>
<div className="next">
<button onClick={previous} className=" left"> ⬰ </button>
                
                <button onClick={next} className="right"> ⇴ </button>
</div>
      
    </div>
  );
}

export default AboutToys;