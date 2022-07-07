import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <UilPen />;
      </div>
      <div className="info">
        <span>
          <b>Status</b>
          <span>in RelationShip</span>
        </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
          <span>Multan</span>
        </span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
          <span>Zainkeepcode inst</span>
        </span>
      </div>

      <button className="button">Logout</button>
    </div>
  );
};
export default InfoCard;
