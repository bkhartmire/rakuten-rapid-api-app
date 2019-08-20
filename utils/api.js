const axios = require("axios");
require("dotenv").config();

const getHeadlines = async (year, month, day) => {
  if (month.length === 2 && month[0] === "0") {
    month = month[1];
  }
  const resp = await axios.get(
    `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${
      process.env.NY_TIMES_API_KEY
    }`
  );

  const headlines = resp.data.response.docs.filter(headline => {
    return (
      headline.pub_date.split("T")[0].split("-")[2] === day &&
      headline.snippet &&
      headline.type_of_material === "News"
    );
  });
  return headlines.map(headline => {
    return {
      web_url: headline.web_url,
      title: headline.headline.main,
      snippet: headline.snippet
    };
  });
};

const getBirthdayData = async (year, month, day) => {
  const dummyObject = {
    topSong: { title: "whatever", artist: "whoever" },
    metricBirthdate: "10000",
    lifeExpectancy: { male: 2060, female: 2068 },
    birthdayBuddies: ["Name Namerson", "Namely Nameland"],
    peopleWhoDied: ["I. M. Dead", "Died-anne Buried"]
  };
  return dummyObject;
};

module.exports = { getBirthdayData, getHeadlines };
