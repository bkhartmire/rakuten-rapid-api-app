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
  const data = ipData.data;
  return {
    country: data.country_name,
    city: data.city,
    lat: data.latitude,
    long: data.longitude
  };
};

const getTimeLeft = async (country, birthYear) => {
  const date = new Date();
  const dateNow = date.toISOString().split("T")[0];
  const age = ~~dateNow.split("-")[0] - ~~birthYear;
  const male = await axios.get(
    `http://54.72.28.201:80/1.0/life-expectancy/remaining/male/${country}/${dateNow}/${age}y/`
  );
  const female = await axios.get(
    `http://54.72.28.201:80/1.0/life-expectancy/remaining/female/${country}/${dateNow}/${age}y/`
  );

  return {
    male: {
      remaining: Math.round(male.data.remaining_life_expectancy),
      year:
        Math.round(male.data.remaining_life_expectancy) +
        ~~dateNow.split("-")[0]
    },
    female: {
      remaining: Math.round(female.data.remaining_life_expectancy),
      year:
        Math.round(female.data.remaining_life_expectancy) +
        ~~dateNow.split("-")[0]
    }
  };
};

const getWeather = async (lat, long, time) => {
  const weather = await axios.get(
    `https://dark-sky.p.rapidapi.com/${lat},${long},${time}?exclude=currently,minutely,hourly,alerts,flags`,
    {
      headers: {
        "X-RapidAPI-Host": process.env.DARK_SKY_HOST,
        "X-RapidAPI-Key": process.env.X_RAPID_API_Key
      }
    }
  );
  const data = weather.data.daily.data.pop();
  return {
    summary: data.summary,
    tempHigh: data.temperatureHigh + " F",
    tempLow: data.temperatureLow + " F"
  };
};

const getBirthdayData = async (year, month, day) => {
  const locationData = await getIPData();
  // Ex: { country: 'Japan', city: 'Toky', lat: 35.6882, long: 139.7532 }

  const timeLeft = await getTimeLeft(locationData.country, year);
  // Ex: { male: { remaining: 63, year: 2082 }, female: { remaining: 70, year: 2089 } }

  const time = `${year}-${month}-${day}T12:00:00`;
  const weather = await getWeather(locationData.lat, locationData.long, time);
  // Ex: { summary: 'Partly cloudy throughout the day.', tempHigh: '58.54 F', tempLow: '39.99 F' }

  const dummyObject = {
    topSong: { title: "whatever", artist: "whoever" },
    metricBirthdate: "10000",
    lifeExpectancy: timeLeft,
    location: { country: locationData.country, city: locationData.city },
    weather,
    birthdayBuddies: ["Name Namerson", "Namely Nameland"],
    peopleWhoDied: ["I. M. Dead", "Died-anne Buried"]
  };
  return dummyObject;
};

getBirthdayData("1995", "11", "29");
module.exports = { getBirthdayData, getHeadlines };
