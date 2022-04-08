import Axios from "axios";


const API_URL = "https://demowecare.herokuapp.com/api/auth/";

class AuthService {
  login(email, password) {
    return Axios
      .post(API_URL + "sign-in", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          console.log('doneeeeeeee')
          localStorage.setItem("user", JSON.stringify(response.data));
        }
 
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return Axios.post(API_URL + "register", {
      username,
      email,
      password
      
    });
  }
}

export default new AuthService();
