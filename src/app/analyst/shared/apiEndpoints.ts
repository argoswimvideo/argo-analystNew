import { environment } from "src/environments/environment";

const baseURL = environment.baseURL;

const apiEndPoints = {
    auth: {
        loginEndpoint: baseURL + 'public/analyst/auth',
        signupEndpoint: baseURL + 'public/analyst'
    },
    profile: {
        AddbankDetails: baseURL + 'api/analyst/bank',
        AddProfilePhoto: baseURL + 'api/analyst/profile-img'
    }
}

export default apiEndPoints