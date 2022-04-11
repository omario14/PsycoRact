import React, { Component } from "react";
import { connect } from "react-redux";
import psyService from "../../Services/psy.service";
import "./DashboardPsy.css";
import Nav from "./NavBar/Nav";
import moment from "moment";

class AcceptedRequests extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      requests: [""],
      successful: false,
    };
  }

  componentDidMount() {
    psyService.getAcceptedRequest().then((res) => {
      const requests = res.data.filter((r) => r.status === 1);
      this.setState({ requests });
      console.log(requests);
    });
  }

  handleClick(id) {
    let isMounted = true;

    if (isMounted) {
      psyService.cancelRequest(id);
    }

    return (isMounted = false);
  }

  markAsConsulted(id) {
    let isMounted = true;

    if (isMounted) {
      psyService.markAsConsulted(id);
    }

    return (isMounted = false);
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
                  {this.state.requests.length > 99 ? (
                    <table className="tablee table-responsive-xl">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Phone number</th>
                          <th>Username</th>
                          <th>Birthdate</th>
                          <th>Country</th>
                          <th>City</th>
                          <th>&nbsp;</th>
                          <th>&nbsp;</th>
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
                            <td>{request.clientFirstName}</td>
                            <td>{request.clientLastName}</td>
                            <td className="d-flex align-items-center">
                              {/* <div className="img" style={{ backgroundImage : 'url("../../../assets/images/img/doctor_1.jpg")'}}></div> */}
                              <div className="pl-3 email">
                                <span>{request.clientMail}</span>
                                <span style={{ color: "black" }}>
                                  {request.registerDate
                                    ? "Registered at :" +
                                      moment(request.registerDate).format(
                                        "MMMM Do YYYY"
                                      )
                                    : null}
                                </span>
                              </div>
                            </td>
                            <td>{request.clientPhone}</td>
                            <td>{request.clientUsername}</td>
                            <td>
                              {request.birthDate
                                ? moment(request.birthDate).format(
                                    "MMMM Do YYYY"
                                  )
                                : null}
                            </td>
                            <td>{request.country}</td>
                            <td>{request.city}</td>
                            {/* <td className="status"><span className="active">{request.status}</span></td> */}
                            <td>
                              <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="alert"
                                onClick={() => this.handleClick(request.id)}
                              >
                                Annuler
                                <span aria-hidden="true">
                                  <i className="fa fa-close"></i>
                                </span>
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-dismiss="alert"
                                onClick={() => this.markAsConsulted(request.id)}
                              >
                                Marqué comme "consulté"
                                <span aria-hidden="true">
                                  <i className="fa fa-check"></i>
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div></div>
                  )}
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
export default connect(mapStateToProps)(AcceptedRequests);
