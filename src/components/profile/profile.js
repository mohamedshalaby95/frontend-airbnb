import "./profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getAuthToken } from "../../auth";
import Navbar from "../navbar";
//  import LiveCards from "./LiveCards/Livecards";
const Profile = () => {
  let history = useHistory();
  const [user, setUser] = useState(null);
  async function getuser() {
    axios
      .get(`${process.env.url}/reservation/user`, {
        headers: {
          "x-auth-token": await getAuthToken(),
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }

  useEffect(() => {
    getuser();
  }, []);
  if (user !== null) {
    var name = user.name;
    var src = user.profileImage;
  }
 

  return (
    <div>
      <div className="contoiner profile">
        <Navbar lightBg />

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div class="card">
              <img
                class="card-img-top imagestyle"
                 src={src}
                //src={require(src).default}
                alt="Card image cap"
              />
              <div class="card-body">
                <h2>{name}</h2>
                <p class="card-text">
                  We are very happy to join us and want to benfit you every time
                  and save your money and time
                </p>
                <a
                  class="btn btn-primary profilebtn"
                  onClick={() => {
                    history.push(`/hosting`);
                  }}
                >
                  Go To Host
                </a>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
