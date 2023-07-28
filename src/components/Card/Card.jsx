import { Button } from "bootstrap";
import { useEffect } from "react";
import './Card.scss'
function Card({data}) {
  useEffect(() => {
    
  })
  console.log('render')
  return (
    
    <div className="card" >
      <img src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {data}
        </p>
      </div>
    </div>
  );
}

export default Card;
