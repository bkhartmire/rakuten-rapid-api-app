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
  const topSong = await axios.get(
    `https://billboard-api2.p.rapidapi.com/hot-100?date=${year}-${month}-${day}&range=1-10`,
    {
      headers: {
        "X-RapidAPI-Host": process.env.BILLBOARD_DATA_API_HOST,
        "X-RapidAPI-Key": process.env.BILLBOARD_DATA_API_KEY
      }
    }
  );
  const songData = topSong.data;

  const title = songData.content[1].title;
  const artist = songData.content[1].artist;

  const link = await getSongLink(title, artist);

  const song = {
    title,
    artist,
    link
  };
  return song;
};

const getSongLink = async (title, artist) => {
  const search = encodeURIComponent(title + "" + artist);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search}&key=${
    process.env.YOUTUBE_API_KEY
  }`;
  const searchResults = await axios.get(url);
  const videoId = searchResults.data.items[0].id.videoId;
  return `https://www.youtube.com/watch?v=${videoId}`;
};

const getBirthdayData = async (year, month, day) => {
  const locationData = await getIPData();
  // Ex: { country: 'Japan', city: 'Tokyo', lat: 35.6882, long: 139.7532 }

  const timeLeft = await getTimeLeft(locationData.country, year);
  // Ex: { male: { remaining: 63, year: 2082 }, female: { remaining: 70, year: 2089 } }

  // const time = `${year}-${month}-${day}T12:00:00`;
  // const weather = await getWeather(locationData.lat, locationData.long, time);
  // Ex: { summary: 'Partly cloudy throughout the day.', tempHigh: '58.54 F', tempLow: '39.99 F' }

  const personWhoDied = await getDeath(month, day);
  // Ex: { name: 'Giambattista Bodoni', occupation: 'Publisher', notable: 'Italian printer', born: '1740-02-16', died: '1813-11-29' }
  // warning that some of these values might be null

  const birthdayBuddy = await getBirth(month, day);
  // Ex: { name: 'Gaetano Donizetti', occupation: 'Composer', notable: 'Lucia di Lammermoor', born: '1797-11-29', died: '1848-04-08' }
  // warning that some of these values might be null

  // const topSong = await getTopSong(year, month, day);
  // Ex: { title: 'Like a Virgin', artist: 'Madonna'}

  const result = {
    topSong: {title: "I'm Too Sexy", artist: "Right Said Fred", link: "https://www.youtube.com/embed/P5mtclwloEQ"},
    metricBirthdate: getAgeInDays(year, month, day),
    lifeExpectancy: timeLeft,
    location: { country: locationData.country, city: locationData.city },
    // weather,
    personWhoDied,
    birthdayBuddy
  };
  return result;
};

getTopSong("1992", "02", "01");
module.exports = { getBirthdayData, getHeadlines };
