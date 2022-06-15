import React from "react";
import "./FollowersCard.css";
import { Follwers } from "../../Data/FollwersData";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is follwing you</h3>
      {Follwers.map((followers, id) => {
        return (
          <div className="follower">
            <div>
              <img src={followers.img} alt="" className="followerImg" />
              <div className="name">
                <span>{followers.name}</span>
                <span>{followers.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;