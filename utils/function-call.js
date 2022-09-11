// constant
import elsakura, { elsakuraFunction } from "../constant/elsakura";

// axios
import axios from "axios";

export async function getUserBaseInfo(token) {
  try {
    console.log("Get User Info with token " + token);

    const response = await axios.get(elsakura.functionUrl, {
      params: {
        wstoken: token,
        wsfunction: elsakuraFunction.getUserSiteInfo,
        moodlewsrestformat: elsakura.restFormat,
      },
    });

    if ("error" in response.data)
      return { success: false, error_message: response.data.error };

    let data = {
      success: true,
      sitename: response.data.sitename,
      username: response.data.username,
      firstname: response.data.firstname,
      lastname: response.data.lastname,
      fullname: response.data.fullname,
      userid: response.data.userid,
      siteurl: response.data.siteurl,
      userpictureurl: response.data.userpictureurl,
    };

    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

export async function getUserCourses(token) {
  try {
    console.log("Get User Courses with token " + token);

    const response = await axios.get(elsakura.functionUrl, {
      params: {
        wstoken: token,
        wsfunction: elsakuraFunction.getUserCourses,
        moodlewsrestformat: elsakura.restFormat,
      },
    });

    if ("error" in response.data)
      return { success: false, error_message: response.data.error };

    let data = [];

    for (let i = 0; i < response.data.length; i++) {
      let responseData = response.data[i];

      // convertion utc date
      let timeAccess = new Date(0);
      timeAccess.setUTCSeconds(responseData.timeaccess);

      let startDate = new Date(0);
      startDate.setUTCSeconds(responseData.startdate);

      let endDate = new Date(0);
      endDate.setUTCSeconds(responseData.enddate);

      const pushedData = {
        success: true,
        id: responseData.id,
        fullname: responseData.fullname,
        shortname: responseData.shortname,
        startdate: startDate,
        enddate: endDate,
        fullnamedisplay: responseData.fullnamedisplay,
        progress: responseData.progress,
        courseimage: responseData.courseimage,
        timeaccess: timeAccess,
        coursecategory: responseData.coursecategory,
      };

      data.push(pushedData);
    }

    return data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}
