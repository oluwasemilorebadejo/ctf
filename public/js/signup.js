import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    // console.log(email, password);
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Account successfully created!");
      window.setTimeout(() => {
        location.assign("/account");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
