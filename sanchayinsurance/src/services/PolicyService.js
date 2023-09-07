import axios from "axios";

export const addPolicytoCustomer = async (accessid, schemename, formData, formDataWithFiles, noOfYear, premiumt) => {
  console.log(formData, "Add Policy formData");
  console.log(formDataWithFiles, "documents in it");

  console.log(typeof noOfYear);
  const totalinstall = +premiumt * +noOfYear;
  let premium;

  if (+premiumt === 12) {
    premium = "TWELVE_MONTHS";
  } else if (+premiumt === 3) {
    premium = "THREE_MONTHS";
  } else if (+premiumt === 6) {
    premium = "SIX_MONTHS";
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
    },
  };

  // Create a FormData object to hold the non-file fields
  const formDataFields = new FormData();
  formDataFields.append("issuedate", formData.dateCreated);
  formDataFields.append("maturitydate", formData.maturityDate);
  formDataFields.append("premiumtype", premium);
  formDataFields.append("premiumamount", formData.installmentAmount);
  formDataFields.append("numberofinstallment", totalinstall);
  formDataFields.append("status", "PENDING");

  // Append the files to the formDataFields
  for (let i = 0; i < formDataWithFiles.length; i++) {
    formDataFields.append(`documentFiles`, formDataWithFiles[i]);
  }

  try {
    const response = await axios.post(
      `http://localhost:8080/policyapp/addpolicyScheme/${accessid}/${schemename}`,
      formDataFields,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error uploading files:", error);
    throw new Error("Error uploading files. Please try again.");
  }
};
