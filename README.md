angular-tvshows
===============

angular app to sort data pulled in from a 3rd party API. 

Tutorial: http://net.tutsplus.com/tutorials/javascript-ajax/building-a-web-app-from-scratch-in-angularjs/

Tv show api authentication: http://trakt.tv/api-docs/authentication

Example of data being pulled in:
```
{
"show":{
    "title":"Agatha Christie's Marple",
    "year":2004,
    "url":"http://trakt.tv/show/agatha-christies-marple",
    "first_aired":1102838400,
    "country":"United Kingdom",
    "overview":"Miss Marple is an elderly spinster who lives in the village of St. Mary Mead and acts as an amateur detective. Due to her long and eventful life crimes often remind her of other incidents. Although Miss Marple looks sweet, frail, and old, she fears nothing; either dead or living.",
    "runtime":120,
    "network":"ITV",
    "air_day":"Monday",
    "air_time":"9:00pm",
    "certification":"TV-14",
    "imdb_id":"tt1734537",
    "tvdb_id":"78895",
    "tvrage_id":"2515",
    "images":{
        "poster":"http://slurm.trakt.us/images/posters/606.jpg",
        "fanart":"http://slurm.trakt.us/images/fanart/606.jpg",
        "banner":"http://slurm.trakt.us/images/banners/606.jpg"
    },
    "ratings":{
        "percentage":91,
        "votes":18,
        "loved":18,
        "hated":0
    },
    "genres":[
        "Drama",
        "Crime",
        "Adventure"
    ]
},
"episode":{
    "season":6,
    "number":1,
    "title":"A Caribbean Mystery",
    "overview":"\"Would you like to see a picture of a murderer?\", Jane Marple is asked by Major Palgrave whilst on a luxurious holiday in the West Indies. When she replies that she would like to hear the story, he explains. There once was a man who had a wife who tried to hang herself, but failed. Then she tried again later, and succeeded in killing herself. The man remarried to a woman who then tried to gas herself to death. She failed, but then tried again later and succeeded. Just as Major Palgrave is about to show the picture to her, he looks over her shoulder, appears startled, and changes the subject. The next morning, a servant, Victoria Johnson, finds him dead in his room. Doctor Graham concludes that the man died of heart failure; he showed all the symptoms, and had a bottle of serenite (a drug for high blood pressure) on his table.",
    "url":"http://trakt.tv/show/agatha-christies-marple/season/6/episode/1",
    "first_aired":1371366000,
    "images":{
        "screen":"http://slurm.trakt.us/images/fanart/606-940.jpg"
    },
    "ratings":{
        "percentage":0,
        "votes":0,
        "loved":0,
        "hated":0
    }
},
"date":"2013-06-16"
}
```