import axios from "axios";


export const getSchemesByPlanname = async (selectedPlan) => {
    let planName= selectedPlan.replaceAll("\\s", "");
    const response = await axios.get(`http://localhost:8080/schemeapp/getbyplanname?planname=${planName}`);
    return response.data;
}

export const getPolicyOfCustomer = async (accessid) => {
    console.log(accessid);
    let customerid=accessid;
    const response = await axios.get(`http://localhost:8080/policyapp/getallpolicy?customerid=${customerid}`);
    console.log(response.data);
    return response.data.content;
}
