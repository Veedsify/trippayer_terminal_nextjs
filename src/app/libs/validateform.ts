import toast from "react-hot-toast";
import { ValidFormData } from "../types/validFromData";
import swal from "sweetalert";

export const validateForm = async (data: ValidFormData) => {
  // Perform validation for each input field
  if (!data.companyName) {
    toast.error("Please enter a company name");
    return false;
  }

  if (!data.companyEmail) {
    toast.error("Please enter a company email address");
    return false;
  }

  if (!data.companyPhone) {
    toast.error("Please enter a company phone number");
    return false;
  }

  if (!data.companyAddress) {
    toast.error("Please enter a company address");
    return false;
  }

  if (!data.companyWebsite) {
    toast.error("Please enter a company website");
    return false;
  }

  if (!data.companyBusNumber) {
    toast.error("Please select a company bus number");
    return false;
  }

  if (!data.companyCac) {
    toast.error("Please enter a company registration number");
    return false;
  }

  if (!data.companyPassword) {
    toast.error("Please enter a password");
    return false;
  }

  const passwordCriteria =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!data.companyPassword.match(passwordCriteria)) {
    swal(
      "Error",
      "Password must contain at least 8 characters, including uppercase, lowercase, numbers and special characters"
    );
    return false;
  }

  // All fields are valid
  return true;
};
