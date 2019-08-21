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

const getAgeInDays = (year, month, day) => {
  const birthday = new Date(`${year}-${month}-${day}`);
  const daysOld = (Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24);
  return Math.round(daysOld);
};

const getDeath = async (month, day) => {
  const resp = await axios.get(
    `https://random-facts1.p.rapidapi.com/fact/onthisday/died?day=${day}&month=${month}`,
    {
      headers: {
        "X-RapidAPI-Host": process.env.RANDOM_FACTS_API_HOST,
        "X-RapidAPI-Key": process.env.X_RAPID_API_Key,
        "X-Fungenerators-Api-Secret": process.env.X_FUNGENERATORS_API_SECRET_KEY
      }
    }
  );
  return resp.data.contents.pop();
};

const getBirth = async (month, day) => {
  const resp = await axios.get(
    `https://random-facts1.p.rapidapi.com/fact/onthisday/born?day=${day}&month=${month}`,
    {
      headers: {
        "X-RapidAPI-Host": process.env.RANDOM_FACTS_API_HOST,
        "X-RapidAPI-Key": process.env.X_RAPID_API_Key,
        "X-Fungenerators-Api-Secret": process.env.X_FUNGENERATORS_API_SECRET_KEY
      }
    }
  );
  return resp.data.contents.pop();
};

const getTopSong = async (year, month, day) => {
  const topSong = await axios.get(`https://billboard-api2.p.rapidapi.com/hot-100?date=${year}-${month}-${day}&range=1-10`, 
  {
    headers: {
    "X-RapidAPI-Host": process.env.BILLBOARD_DATA_API_HOST,
    "X-RapidAPI-Key": process.env.BILLBOARD_DATA_API_KEY
    }
  });

  const songData = topSong.data;
  
  const song = {
    title: songData.content[1].title,
    artist: songData.content[1].artist
  }
  return song;
};

const getBirthdayData = async (year, month, day) => {
  const locationData = await getIPData();
  // Ex: { country: 'Japan', city: 'Tokyo', lat: 35.6882, long: 139.7532 }

  const timeLeft = await getTimeLeft(locationData.country, year);
  // Ex: { male: { remaining: 63, year: 2082 }, female: { remaining: 70, year: 2089 } }

  const time = `${year}-${month}-${day}T12:00:00`;
  const weather = await getWeather(locationData.lat, locationData.long, time);
  // Ex: { summary: 'Partly cloudy throughout the day.', tempHigh: '58.54 F', tempLow: '39.99 F' }

  const personWhoDied = await getDeath(month, day);
  // Ex: { name: 'Giambattista Bodoni', occupation: 'Publisher', notable: 'Italian printer', born: '1740-02-16', died: '1813-11-29' }
  // warning that some of these values might be null

  const birthdayBuddy = await getBirth(month, day);
  // Ex: { name: 'Gaetano Donizetti', occupation: 'Composer', notable: 'Lucia di Lammermoor', born: '1797-11-29', died: '1848-04-08' }
  // warning that some of these values might be null

  const topSong = await getTopSong(year, month, day);

  const dummyObject = {
    topSong: topSong,
    metricBirthdate: getAgeInDays(year, month, day),
    lifeExpectancy: timeLeft,
    location: { country: locationData.country, city: locationData.city },
    weather,
    personWhoDied,
    birthdayBuddy
  };
  return dummyObject;
};

module.exports = { getBirthdayData, getHeadlines };
