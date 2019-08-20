function getBirthdayData() {
  apiPromiseDummy = new Promise (resolve, reject) => {
    const dummyObject = {
    "topSong": {"title": "whatever", "artist": "whoever"},
    "metricBirthdate": "10000",
    "lifeExpectancy": {"male": 2060, "female": 2068},
    "birthdayBuddies": ["Name Namerson", "Namely Nameland"],
    "peopleWhoDied": ["I. M. Dead", "Died-anne Buried"],
    "headlines": [{"headline": "55 Dead in 'Yakitori Incident'", "description": "Over fifty schoolchildren have died after a collision with a yakitori food truck..."}],
    }
    resolve(apiPromiseDummy);
  }
  return apiPromiseDummy;
}

module.exports = get