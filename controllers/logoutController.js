const { LOGOUT_LINKS } = require("../constants/navigation");

const getProcessLog = () => {
  console.log("Application is shutting down...");
};

const getLogoutView = (req, res) => {
  res.render("logout", {
    headTitle: "Shop - Logout",
    path: "/logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout",
  });
};

const killApplication = (req, res) => {
  getProcessLog();
  process.exit();
};

module.exports = {
  getLogoutView,
  killApplication,
};
