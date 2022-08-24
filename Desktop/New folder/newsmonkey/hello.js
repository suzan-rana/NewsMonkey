const myString = "Suzan Rana is my hero and I love him."
// console.log(myString.slice( 0, 5 ))

articles = [
    {
        "source": {
            "id": null,
            "name": "Cricbuzz"
        },
        "author": null,
        "title": "England vs South Africa, 1st Test, South Africa tour of England, 2022 - Cricbuzz",
        "description": "Follow England vs South Africa, 1st Test, Aug 17, South Africa tour of England, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
        "url": "https://www.cricbuzz.com/cricket-commentary/38357/eng-vs-rsa-1st-test-south-africa-tour-of-england-2022",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/341800/341842.jpg",
        "publishedAt": "2022-08-18T12:09:18Z",
        "content": "37.1 Matty Potts to Keegan Petersen, out Caught by Bairstow!! Finally the wicket! Potts persists with that line outside off, pushes this a bit further up and Petersen takes the bait. Drives hard at i… [+156 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": "ESPNcricinfo staff",
        "title": "Warwickshire sign up Mohammed Siraj for remainder of 2022 season - ESPNcricinfo",
        "description": "The fast bowler is set to become the sixth India player to feature in county cricket this season",
        "url": "https://www.espncricinfo.com/story/county-championship-warwickshire-sign-up-mohammed-siraj-for-remainder-of-2022-season-1329628",
        "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/341800/341842.jpg",
        "publishedAt": "2022-08-18T11:29:57Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Icccricketschedule.com"
        },
        "author": "https://www.facebook.com/TechnologyBlogs",
        "title": "Asia Cup 2022: Top 5 Batters To Watch Out For At Asia Cup 2022. - ICC CRICKET SCHEDULE",
        "description": "Asia Cup 2022 is around the corner. As and when the days are passing the excitement gets over the top. The cricket community is awaiting this fiesta of",
        "url": "https://www.icccricketschedule.com/asia-cup-2022-top-5-batters-to-watch-out-for-at-asia-cup-2022/",
        "urlToImage": "https://www.icccricketschedule.com/wp-content/uploads/2022/08/Virat-Kohli-min-1.jpg",
        "publishedAt": "2022-08-18T08:27:13Z",
        "content": "Asia Cup 2022 is around the corner. As and when the days are passing the excitement gets over the top. The cricket community is awaiting this fiesta of cricket. Batters make the game of cricket look … [+315 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Adarsh Tabhane",
        "title": "HT vs MW Dream11 Prediction: Fantasy Cricket Tips, Today's Playing 11 and Pitch Report for Maharaja T20 Trophy 2022, Match 22 - Sportskeeda",
        "description": "The Hubli Tigers (HT) will lock horns with the Mysore Warriors (MW) in the 22nd match of the Maharaja T20 Trophy 2022 at the M. Chinnaswamy Stadium in Bengaluru on Thursday, August 18.",
        "url": "https://www.sportskeeda.com/fantasy-cricket-mantra/ht-vs-mw-dream11-prediction-fantasy-cricket-tips-today-s-playing-11-pitch-report-maharaja-t20-trophy-2022-match-22",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2022/08/ccd5b-16598400219607-1920.jpg",
        "publishedAt": "2022-08-18T04:02:10Z",
        "content": "The Hubli Tigers (HT) will lock horns with the Mysore Warriors (MW) in the 22nd match of the Maharaja T20 Trophy 2022 at the M. Chinnaswamy Stadium in Bengaluru on Thursday, August 18.\r\nThe Hubli Tig… [+3691 chars]"
    }
]

const mappedArticles = articles.map( (element) => {
    return `<li> ${element.title} </li>`
})
console.log(mappedArticles)