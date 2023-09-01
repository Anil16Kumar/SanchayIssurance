import axios from "axios";


export const getSchemesByPlanname = async (selectedPlan) => {
    let planName= selectedPlan.replaceAll("\\s", "");
    const response = await axios.get(`http://localhost:8080/schemeapp/getbyplanname?planname=${planName}`);
    return response.data;
}