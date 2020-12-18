/* Template
// Artist
,
    {
      "contactInfo": JSON.stringify({
        "email": "name@domain.com",
        "phone": "7781234567",
        "soundcloud": "http://soundcloud.com/user",
        "bandcamp": "http://bandcamp.com/user",
        "facebook": "http://facebook.com/user",
        "website": "http://mydomain.com"
      }),
      "screenName": "",
      "type": "artist",
      "healthSettings": true false,
      "about": "",
      "firstName": "",
      "lastName": "",
      "postalCode": "",
      "favouriteStudio": "",
      "skills": JSON.stringify({
        "instrument": "info",
        "secondInstrument": "info"
      }),
      "instruments": 
        "Description of owned instrument",
        "Description of next instrument"
      
      // Eventually to get instrumentIds from table
    }

// Band
,
    {
      "contactInfo": JSON.stringify({
        "email": "name@domain.com",
        "phone": "7781234567",
        "soundcloud": "http://soundcloud.com/user",
        "bandcamp": "http://bandcamp.com/user",
        "facebook": "http://facebook.com/user",
        "website": "http://mydomain.com"
      }),
      "screenName": "",
      "type": "band",
      "healthSettings": true false,
      "about": "",
      "postalCode": "",
      "favouriteStudio": "",
      "lookingFor": "guitar", "keys", "vocals", "bass", "drums", "accordion", "turntable", "lap steel", "pedal steel", "harp", "harmonica"
    }
*/

module.exports = [
    {
      "screenName": "DaOne",
      "about": "I'm a 37-year-old guitarist who's been in town for a couple years",
      "firstName": "John",
      "lastName": "Doe",
      "postalCode": "V5J 4E9",
      "skills": "guitar, vocals, bass"
    },
    {
      "screenName": "Da_Second_Band",
      "about": "We're a famous band and make some crazy cash",
      "postalCode": "V5J 3E9",
      "lookingFor": "guitar, keys, vocals"
    },
    {
      "screenName": "DaThird",
      "about": "I'm the best",
      "firstName": "Jane",
      "lastName": "Doe",
      "postalCode": "V3J 4E9",
      "skills": "accordion"
    },
    {
      "screenName": "Da-4",
      "about": "I'm me",
      "firstName": "Jim",
      "lastName": "Doe",
      "postalCode": "V5J 4A9",
      "skills": "vocals, bass"
    },
    {
      "screenName": "The_Jacksons_Five",
      "about": "We miss Michael",
      "lookingFor": "vocals"
    }
  ];