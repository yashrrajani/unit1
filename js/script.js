/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


var quotes = []; //empty array of quotes

var Quote = (quotes) => { //creating Quote object with properties that will go in quotes array
  quote: []; //actual quote
  source: []; //author
  citation: []; //website or publication
  year: []; //year of quote
  category: []; //category or tags involved
}

quotes = [ //big list of quotes w the components within. tried to separate w failure ones first and mindset ones next
  { //first quote in the big quotes array
    quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    source: "Colin Powell",
    citation: "BrainyQuote",
    year: "2013",
    category: "Failure"
  },
  { //second quote
    quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
    source: "Henry Ford",
    citation: "GoodReads",
    year: "1922",
    category: "Failure"
  },
  { //third quote
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill",
    citation: "BrainyQuote",
    year: "1922",
    category: "Failure"
  },
  { //fourth quote
    quote: "You must know what you want from life. There is just one thing that makes your dream become impossible: the fear of failure.",
    source: "Paulo Coelho",
    citation: "quotefancy.com",
    year: "",
    category: "Failure"
  },
  { //fifth quote
    quote: "Change your thoughts and you change your world.",
    source: "Norman Vincent Peale",
    citation: "",
    year: "",
    category: "Mindset"
  },
  { //sixth quote
    quote: "Happiness is not something your postpone for the future; it is something you design for the present.",
    source: "Jim Rohn",
    citation: "BrainyQuote",
    year: "",
    category: "Mindset"
  },
  { //seventh quote
    quote: "Happiness depends on your mindset and attitude.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
    year: "",
    category: "Mindset"
  },
  {}
];

console.log(quotes); //displays array of quotes in console log. part of rubric


function getRandomQuote() { //gets a random quote from all the quotes in the array
  return quotes[Math.floor(Math.random() * quotes.length)]; //returns the quote stored in any position
}

function getFailureQuote() { //just for the failure quotes
  return quotes[Math.floor(Math.random() * 4)]; //returns the quote stored in failure quotes position
}

function getMindsetQuote() { //just for mindset quotes
  return quotes[Math.floor(Math.random() * 3 + 4)]; //returns the quote stored in randomNum position
}
 

function printQuote() { //for all quotes button

  randomBackgroundColor(); //randomizes background color
  
  var randomQuote = getRandomQuote(); //calls getRandomQuote() 

  var q = '<p class = "quote">' + randomQuote.quote + '</p>'
        + '<p class = "source">' + randomQuote.source;
        if (randomQuote.citation != "") //first conditional
          q += '<span class ="citation">' + randomQuote.citation + '</span>';
        if (randomQuote.year != "") //second conditional
          q += '<span class ="year">' + randomQuote.year + '</span>';
        if (randomQuote.category != "") //third conditional
          q += '<span class = "category">' + randomQuote.category + '</span>';
        q += '</p>'; //final closing of </p>

  document.getElementById("quote-box").innerHTML = q; //transfers to HTML file

  window.setInterval(printQuote, 20000); //auto-refreshes the page with a new quote after 20 seconds
  
}

function printFailureQuote() { //for failure quotes

  randomBackgroundColor(); //randomizes background color
  var randomQuote = getFailureQuote(); //specifies which getQuote function to get
  var q = '<p class = "quote">' + randomQuote.quote + '</p>'
        + '<p class = "source">' + randomQuote.source;
        if (randomQuote.citation != "") //first conditional
          q += '<span class ="citation">' + randomQuote.citation + '</span>';
        if (randomQuote.year != "") //second conditional
          q += '<span class ="year">' + randomQuote.year + '</span>';
        if (randomQuote.category != "") //third conditional
          q += '<span class = "category">' + randomQuote.category + '</span>';
        q += '</p>'; //final closing of </p>

  document.getElementById("quote-box").innerHTML = q; //transfers to HTML file

  window.setInterval(printFailureQuote, 20000); //auto-refreshes the page with a new failure quote after 20 seconds
  
}

function printMindsetQuote() { //for mindset quotes
  randomBackgroundColor(); //randomizes background color
  var randomQuote = getMindsetQuote(); //specifies which getQuote function to get
  var q = '<p class = "quote">' + randomQuote.quote + '</p>'
        + '<p class = "source">' + randomQuote.source;
        if (randomQuote.citation != "") //first conditional
          q += '<span class ="citation">' + randomQuote.citation + '</span>';
        if (randomQuote.year != "") //second conditional
          q += '<span class ="year">' + randomQuote.year + '</span>';
        if (randomQuote.category != "") //third conditional
          q += '<span class = "category">' + randomQuote.category + '</span>';
        q += '</p>'; //final closing of </p>

  document.getElementById("quote-box").innerHTML = q; //transfers to HTML file

  window.setInterval(printMindset, 20000); //auto-refreshes the page with a new mindset quote after 20 seconds
  
}


function randomBackgroundColor() { //random background color for page
  var x = Math.floor(Math.random() * 256); //random number generator for rgb values
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var color = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = color; //went on W3 schools and looked up the proper syntax for reference
  document.getElementById("loadQuote").style.background = color; //sets same color for main button
  document.getElementById("loadFailureQuote").style.background = color; //same color for failure button
  document.getElementById("loadMindsetQuote").style.background = color; //same color for mindset button
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false); //pre-coded. do not change.
document.getElementById('loadFailureQuote').addEventListener("click", printFailureQuote, false); //another one for second button
document.getElementById('loadMindsetQuote').addEventListener("click", printMindsetQuote, false); //another one for last button