import React from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { Button } from "../../../components";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getDepartemenList: state.departemen.getDepartemenList,
    errorDepartemenList: state.departemen.errorDepartemenList,
  };
};

function Card(props) {
  const departemen = props.getDepartemenList.data;
  console.log("data card departemen:", departemen);
  const history = useHistory()
  return (
    <div className="row">
      {departemen &&
        departemen.map((getDepartemenList) => (
          <Fade bottom>
            <div className="col-lg-4 mt-2">
              <div className="card">
                <img
                  className="card-img-top"
                  src={`http://localhost:4000/${getDepartemenList.image}`}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{getDepartemenList.nama_dep}</h5>
                  <Button onClick={()=> history.push(`/departemen/${getDepartemenList._id}`)} title="Lihat Data" />
                </div>
              </div>
            </div>
          </Fade>
        ))}
    </div>
  );
}

export default connect(mapStateToProps)(Card);
