const elsakura = {
  url: "https://m.elsakura.my.id/",
  tokenUrl: "https://m.elsakura.my.id/login/token.php",
  functionUrl: "https://m.elsakura.my.id/webservice/rest/server.php",
  service: "moodle_mobile_app",
  restFormat: "json",
};

export const elsakuraFunction = {
  getUserSiteInfo: "core_webservice_get_site_info",
  getUserCourses: "core_course_get_recent_courses",
};

export default elsakura;
