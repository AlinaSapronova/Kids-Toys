import { useState } from "react";
import { data } from "./data"




function AboutToys() {
const[kidsToys, setKidsToys] = useState(0)
const{id, name, image, price,description, details}= data[kidsToys];


const next = () => {
setKidsToys((kidsToys => {
    kidsToys ++;
    if(kidsToys > data.length -1){
        kidsToys = 0
    }return kidsToys
}))
}

const previous = () => {
    setKidsToys((kidsToys => {
        kidsToys--;
        if(kidsToys < 0){
            kidsToys = data.length -1
        }return kidsToys
    }))
}


// const setDetails = (id) => {
//     const text = [];
//     kidsToys.forEach(toy => {
//         if(toy.id === id) {
//             const changeText = {...toy, details: !toy.details};
//             text.push(changeText)
//         }else{
//             text.push(toy)
//         }
//     });
//     setKidsToys(text)
// }






  return (
    <div >
       <div className="container">
                <h3>{name}</h3>
                <img src={image} alt="toys" id="img"/>
               <p className="price">Price: {price}</p>
               <p className="description">Description: {description}</p>
                {/* <p className="description">Description: {details ?  description : description.substring(0,30) + "..."}
                <button onClick={() => setDetails(id)}>{details ? "Show less" : "Show More"}</button>
                </p> */}
</div>
<div className="next">
<button onClick={previous} className=" left"> ⬰ </button>
                
                <button onClick={next} className="right"> ⇴ </button>
</div>
      
    </div>
  );
}

export default AboutToys;