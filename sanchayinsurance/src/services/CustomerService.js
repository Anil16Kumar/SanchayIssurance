import axios from "axios";

export const getCustomerData = async (accessid) => {
  const response = await axios.get(
    `http://localhost:8080/customerapp/customer?accessid=${accessid}`
    // {body},
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  return response.data;
};
