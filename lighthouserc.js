const WEB_URL = "https://elice.io/ko";
const pagePathList = ["", "/case-study", "/education/pbl", "/products/test"];
const pageUrlList = pagePathList.map((path) => `${WEB_URL}${path}`);

module.exports = {
  ci: {
    coleect: {
      url: pageUrlList,
    },
  },
};
