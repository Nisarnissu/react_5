import Instagram from "./images/Instagram.png";
import Camera from "./images/Camera_pic.jpg";
import bothpics from "./images/Instagram-likes.png"
import { useEffect, useState } from "react";
import "./postview.css";

const Postview = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then((data) => {
        return data.json();
      })
      .then((userData) => {
        setUserData(userData);
        console.log(userData);
      });
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <div className="nav">
            <img className="logo" src={Instagram} alt="logo"></img>
            <img className="Camera" src={Camera} alt="camera"></img>
          </div>
          <hr />
        </header>
        <div className="Alldiv" >
          {userData.map((user, i) => {
            return (
              <div className="post">
                <div className="user-information" key={i}>
                  <h3 className="name">{user.name}</h3>
                  <h2 className="dots">...</h2>                
                 <span>{user.location}</span>
                </div> 
                <div  >
                    <img className="picture"   alt="this is user" src={user.PostImage}></img>
                </div>
                <div className="user-meta">
                  <span>{user.date}</span>
                  <img className="both_pics" src={bothpics} alt="heart and share"></img>
                </div>
                <div className="user-likes">{user.likes} likes</div>
                <div className="user-description">{user.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Postview;
