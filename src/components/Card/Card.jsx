import { Button } from "bootstrap";
import { useEffect } from "react";
import "./Card.scss";
function Card({ data }) {
  useEffect(() => {});

  const myImg = `http://wlp.howizbiz.com/${data.attachments[0].path}`;
  console.log(data);
  return (
    <div className="card col-3">
      <div className="card_img">
        <img src={myImg} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <p className="card-text">{data.ten}</p>
      </div>
    </div>
  );
}

export default Card;
