import axios from "axios";


export const getSchemesByPlanname = async (selectedPlan) => {
    let planName= selectedPlan.replaceAll("\\s", "");
    const response = await axios.get(`http://localhost:8080/schemeapp/getbyplanname?planname=${planName}`);
    // console.log(response.data);
    return response;
}

export const getSchemeBySchemeName = async (selectScheme) => {
    const response = await axios.get(`http://localhost:8080/schemeapp/getbyschemename?schemename=${selectScheme}`);
    // console.log(response.data);
    return response;
}



export const getPolicyOfCustomer = async (accessid) => {
    console.log(accessid);
    let customerid=accessid;
    const response = await axios.get(`http://localhost:8080/policyapp/getallpolicy?customerid=${customerid}`);
    console.log(response.data);
    return response.data.content;
}
