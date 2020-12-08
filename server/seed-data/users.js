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
      "instruments": JSON.stringify([
        "Description of owned instrument",
        "Description of next instrument"
      ])
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
      // [Q] I can probably do this userId with Knex?
      "about": "",
      "postalCode": "",
      "favouriteStudio": "",
      lookingFor: JSON.stringify(["guitar", "keys", "vocals", "bass", "drums", "accordion", "turntable", "lap steel", "pedal steel", "harp", "harmonica"])
    }
*/

module.exports = [
    {
      "contactInfo": JSON.stringify({
        "email": "test@hotmail.com",
        "phone": "7781234567",
        "soundcloud": "http://soundcloud.com/test",
        "bandcamp": "http://bandcamp.com/test",
        "facebook": "http://facebook.com/test",
        "website": "http://yeah.com/test"
      }),
      "screenName": "Da One",
      "type": "artist",
      "healthSettings": true,
      "about": "I'm a 37-year-old guitarist who's been in town for a couple years",
      "firstName": "John",
      "lastName": "Doe",
      "postalCode": "V5J 4E9",
      "favouriteStudio": "The Jam",
      "skills": JSON.stringify({
        "guitar": "22 years",
        "vocals": "30 years",
        "bass": "7 years"
      }),
      "instruments": JSON.stringify(["1996 Squier Stratocaster", "POD HD500"])
    },
    {
      "contactInfo": JSON.stringify({
        "email": "onemore@hotmail.com",
        "phone": "7781234467",
        "soundcloud": "http://soundcloud.com/test2",
        "bandcamp": "http://bandcamp.com/tes2t",
        "facebook": "http://facebook.com/test2"
      }),
      "screenName": "Da Second Band",
      "type": "band",
      "healthSettings": false,
      "about": "We're a famous band and make some crazy cash",
      "postalCode": "V5J 3E9",
      "favouriteStudio": "Our rehearsal space",
      "lookingFor": JSON.stringify(["guitar", "keys", "vocals"])
    },
    {
      "contactInfo": JSON.stringify({
        "email": "test3@hotmail.com",
        "phone": "7781233567",
        "soundcloud": "http://soundcloud.com/tes3t",
        "bandcamp": "http://bandcamp.com/tes3t",
        "facebook": "http://facebook.com/t3est"
      }),
      "screenName": "Da Third",
      "type": "artist",
      "healthSettings": false,
      "about": "I'm the best",
      "firstName": "Jane",
      "lastName": "Doe",
      "postalCode": "V3J 4E9",
      "favouriteStudio": "That one",
      "skills": JSON.stringify({
        "accordion": "50 years"
      }),
      "instruments": JSON.stringify(["Cool old accordion"])
    },
    {
      "contactInfo": JSON.stringify({
        "email": "test4@hotmail.com",
        "phone": "7781434567",
        "soundcloud": "http://soundcloud.com/t4est",
        "bandcamp": "http://bandcamp.com/tes4t",
        "facebook": "http://facebook.com/t4est",
        "website": "http://irule.com/t4est"
      }),
      "screenName": "Da 4",
      "type": "artist",
      "healthSettings": true,
      "about": "I'm me",
      "firstName": "Jim",
      "lastName": "Doe",
      "postalCode": "V5J 4A9",
      "favouriteStudio": "That one",
      "skills": JSON.stringify({
        "vocals": "12 years",
        "bass": "17 years"
      }),
      "instruments": JSON.stringify(["1967 Fender Precision Bass"])
    },
    {
      "contactInfo": JSON.stringify({
        "email": "test5@hotmail.com",
        "phone": "7785234567",
        "soundcloud": "http://soundcloud.com/tes5t",
        "bandcamp": "http://bandcamp.com/te5st",
        "facebook": "http://facebook.com/t5est"
      }),
      "screenName": "The Jacksons Five",
      "type": "band",
      "healthSettings": true,
      "about": "We miss Michael",
      "favouriteStudio": "Home",
      "lookingFor": JSON.stringify(["vocals"])
    }
  ];