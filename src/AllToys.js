import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { data } from "./data"





function AllToys() {

const[toys, setToys] = useState(data)

const navigate = useNavigate()
const move = (e) => {
e.preventDefault();
navigate("./AboutToys.js")
}


  return (
    <div className="allStaff">
        <div className="toy">
       
        {toys.map((item) => {
            const{id, name, image, price}= item;
          return(
            <div key={id} className="alltoys">
                <h3>{name}</h3>
                <img src={image} alt="toys" className="img"/>
                <p className="price">{price}</p>
                
                <button className="btn" onClick={move}>More Details</button>
                
            </div>
          )
        })}
</div>
        <div className="button">
        <button className="btn" onClick={()=>setToys([])}>Delete All Toys</button>
        </div>
      
    </div>
  );
}

export default AllToys;