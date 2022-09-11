import axios from "axios";

import elsakura, { elsakuraParams } from "../constant/elsakura.js";

export default async function ApiCall(username, password) {
  try {
    console.log(
      "Auth with username " + username + " with password " + password
    );

    const response = await axios.get(elsakura.tokenUrl, {
      params: {
        username: username,
        password: password,
        service: elsakura.service,
      },
    });

    if ("error" in response.data)
      return { success: false, error_message: response.data.error };

    let data = { success: true, token: response.data.token };

    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}
