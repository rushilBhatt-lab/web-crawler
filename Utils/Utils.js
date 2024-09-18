const baseDomain = process.env.SITE_DOMAIN;
const home = process.env.CRAWL_PATH_HOME;
const inputBaseURL = `${home}`;

module.exports = {
  baseDomain,
  home,
  inputBaseURL,
};
