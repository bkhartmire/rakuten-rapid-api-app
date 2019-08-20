const axios = require("axios");
require("dotenv").config();

const getHeadlines = async (year, month) => {
  const headlines = await axios.get(
    `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${
      process.env.NY_TIMES_API_KEY
    }`
  );

  return headlines;
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
