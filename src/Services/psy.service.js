import Axios from "axios";


const API_URL = "https://demowecare.herokuapp.com/api/requests/";

class PsyService{
    affich(location){
        return Axios
        .get(API_URL+"pending/"+location)
    }

    acceptRequest(requestid){
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("aaaaaaa",user.user.id);
        return Axios
        .put(API_URL+"validate/"+user.user.id+"/"+requestid)
    }
}

export default new PsyService();