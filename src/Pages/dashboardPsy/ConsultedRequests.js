import React, { Component } from "react";
import { connect } from "react-redux";
import psyService from "../../Services/psy.service";
import "./DashboardPsy.css";
import Nav from "./NavBar/Nav";

class ConsultedRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [""],
      successful: false,
    };
  }

  componentDidMount() {
    psyService.getAcceptedRequest().then((res) => {
      const requests = res.data.filter((r) => r.status === 2);
      this.setState({ requests });
      console.log(requests);
    });
  }

  render() {
    return (
      <div className="dashpsy">
        <Nav />
        <section className="ftco-section">
          <div className="containery">
            <div className="roww">
              <div className="col-md-12">
                <div className="table-wrap">
                  <table className="tablee table-responsive-xl">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Username</th>
                        <th>Country</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.requests.map((request, id) => (
                        <tr className="alert" key={id}>
                          {/* <td >
						    		<label className="checkbox-wrap checkbox-primary">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
										</label>
						    	</td> */}
                          <td className="d-flex align-items-center">
                            {/* <div className="img" style={{ backgroundImage : 'url("../../../assets/images/img/doctor_1.jpg")'}}></div> */}
                            <div className="pl-3 email">
                              <span>{request.clientMail}</span>
                              <span>Added: 01/03/2020</span>
                            </div>
                          </td>
                          <td>{request.clientPhone}</td>
                          <td>{request.clientUsername}</td>
                          <td>{request.country}</td>
                          <td>{request.city}</td>
                          {/* <td className="status"><span className="active">{request.status}</span></td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}
export default connect(mapStateToProps)(ConsultedRequests);
