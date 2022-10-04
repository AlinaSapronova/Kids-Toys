import { useState } from "react";
import { data } from "./data"




function AboutToys() {
const[kidsToys, setKidsToys] = useState(0)
const{id, name,description, image, price}= data[kidsToys];


const remove = (id) => {
let newArr = kidsToys.filter(item => item.id !== id)
setKidsToys(newArr)

}

const previous = () => {
setKidsToys((toys => {
    toys --;
    if(toys > data.length -1){
        toys = 0
    }
    return toys
}))
}

const next = () => {
    setKidsToys((toys => {
        toys++;
        if(toys < 0){
            toys = data.length -1
        }
        return toys
    }))
}

  return (
    <div >
       <div className="container">
                <h3>{name}</h3>
                <img src={image} alt="toys" id="img"/>
                <p className="price">{price}</p>
                <p>{description}<button>Show more..</button></p>

             <div className="button">
        <button className="btn" onClick={()=>remove(id)}>Remove</button>
       </div>
</div>
       <div className="next">
        <button onClick={previous} className="btn">Previous</button>
        <button onClick={next} className="btn">Next</button>
       </div>
      
    </div>
  );
}

export default AboutToys;