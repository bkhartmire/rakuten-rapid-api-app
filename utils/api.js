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

const getIPData = async () => {
  const ipData = await axios.get(
    `https://jkosgei-free-ip-geolocation-v1.p.rapidapi.com/?api-key=${
      process.env.IP_DATA_API_KEY
    }`,
    {
      headers: {
        "X-RapidAPI-Host": process.env.IP_SKY_HOST,
        "X-RapidAPI-Key": process.env.X_RAPID_API_Key
      }
    }
  );
  const country = ipData.data.country_name;
  const lat = ipData.data.latitude;
  const long = ipData.data.longitude;
  return { country, lat, long };
};

const getTimeLeft = async (country, birthYear) => {
  const date = new Date();
  const dateNow = date.toISOString().split("T")[0];
  const age = dateNow.split("-")[0] - ~~birthYear;
  const male = await axios.get(
    `http://54.72.28.201:80/1.0/life-expectancy/remaining/male/${country}/${dateNow}/${age}y/`
  );
  const female = await axios.get(
    `http://54.72.28.201:80/1.0/life-expectancy/remaining/female/${country}/${dateNow}/${age}y/`
  );
  return {
    male: Math.round(male.data.remaining_life_expectancy),
    female: Math.round(female.data.remaining_life_expectancy)
  };
};

const getWeather = async (lat, long, time) => {
  const weather = await axios.get(
    `https://dark-sky.p.rapidapi.com/${lat},${long},${time}?exclude=currently,minutely,hourly,alerts,flags`
  );
  return {
    summary: weather.data.daily.data.summary,
    tempHigh: weather.data.daily.data.temperatureHigh,
    tempLow: weather.data.daily.data.temperatureLow
  };
};

const getBirthdayData = async (year, month, day) => {
  const locationData = await getIPData();
  // Ex: { country: 'Japan', lat: 35.6882, long: 139.7532 }

  const timeLeft = await getTimeLeft(locationData.country, year);
  // Ex: { male: 63, female: 70 }
  const time = `${year}-${month}-${day}T12:00:00`;
  const weather = await getWeather(locationData.lat, locationData.long, time);

  // const dummyObject = {
  //   topSong: { title: "whatever", artist: "whoever" },
  //   metricBirthdate: "10000",
  //   lifeExpectancy: { male: 2060, female: 2068 },
  //   birthdayBuddies: ["Name Namerson", "Namely Nameland"],
  //   peopleWhoDied: ["I. M. Dead", "Died-anne Buried"]
  // };
  // return dummyObject;
};

getBirthdayData("1995");
module.exports = { getBirthdayData, getHeadlines };
