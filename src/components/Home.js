import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFetch } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    var history = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.useReducer.users);
//   const forward = useNavigate();
//   const [value, setValue] = useState([]);

//   useEffect(() => {
//     fetch("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/").then((result) => {
//       result.json().then((res) => {
//         setValue(res);
//       })
//     })
//   }, []);
//   console.log(value);
useEffect(() => {
    if(users) {
        dispatch(getUserFetch());
    }
}, [users]);

const fun = (data) => {
  history("./New", {state:data});
}

  return (
    <>

      <section>
        <div className="container">
          <div className="row">
            {users.map((item,key) => (
              <div className="col-md-4 py-2" key={key} onClick={()=>{ fun(item) }}>
                <div className="card bs-card stretched-link text-decoration-none" style={{ border: "none" }}>
                  <img className="card-img-top" src={item.Image}  />
                  <div className="row">
                    <div className="card-body">
                      <h4 className="card-title">{item.Title}</h4>
                      <h6 className="card-subtitle ">{item.Subtitle}</h6>
                      <p className="card-text text-truncate">{item.Article}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginRight: "30%",
        }}
      >
        <button className="btn bg-dark text-white mt-4">Load More</button>
      </div>
    </>
  );
};

export default Home;
