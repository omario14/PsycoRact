/* eslint-disable no-unused-vars */
import Axios from "axios";

// const API_URL = "https://demowecare.herokuapp.com/api/requests/";
const API_URL = "https://localhost:44354/api/requests/";

class PsyService {
  affich() {
    const user = JSON.parse(localStorage.getItem("user"));
    const country = user.user.country;
    return Axios.get(API_URL + "pending/" + country);
  }

  acceptRequest(requestid) {
    const user = JSON.parse(localStorage.getItem("user"));
    return Axios.put(API_URL + "validate/" + user.user.id + "/" + requestid);
  }

  getAcceptedRequest() {
    const user = JSON.parse(localStorage.getItem("user"));
    const psyId = user.user.id;
    return Axios.get(API_URL + "psy/" + psyId);
  }

  cancelRequest(requestId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const psyId = user.user.id;
    return Axios.put(API_URL + "cancel/" + requestId);
  }

  markAsConsulted(requestId) {
    const user = JSON.parse(localStorage.getItem("user"));
    const psyId = user.user.id;
    return Axios.put(API_URL + "markAsConsulted/" + requestId);
  }

  createRequest(
    id,
    clientMail,
    clientPhone,
    clientUsername,
    clientFirstName,
    clientLastName,
    birthdate,
    country,
    city,
    status,
    psyId,
    psy
  ) {
    return Axios.post("https://localhost:44354/api/requests", {
      id,
      clientMail,
      clientPhone,
      clientUsername,
      clientFirstName,
      clientLastName,
      birthdate,
      country,
      city,
      status,
      psyId,
      psy,
    });
  }
}

export default new PsyService();
