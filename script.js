// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewedQuotes = [];

//This array serves to hold the quotes, source, year, and tags

var quotes = [
		{
			quote: "You miss 100% of the shots you don't take",
			source: "-Wayne Gretzky -Michael Scott",
			year: 2009,
			tags: "Inspirational"
		},
		{
			quote: "They don't think it be like it is, but it do",
			source: "-Oscar Gamble",
			year: 1975,
			tags: 'Inspirational'
		},
		{
			quote: "It matters not what someone is born, but what they grow to be",
			source: "-Albus Dumbledore",
			year: 2000,
			tags: "Love"
		},
		{
			quote: "Time is a face on the water",
			source: "-Roland Deschain",
			year: 1997,
			tags: "Advice"
		},
		{
			quote: "I need you more than anything in my life. I want more than anything in my life. I'll miss you more than anyone in my life. I love you more than anyone in my life",
			source: "-Daft Punk",
			year: 2001,
			tags: "Love"

		}
];

//This code serves to print out the above 2D array

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

//This function will grab a random object from the quotes array and store it in the randomQuote variable
function getRandomQuote() {
		var randomQuote = Math.floor(Math.random() * quotes.length);
		
		var splitQuote = quotes.split(randomQuote, 1)[0];
		viewedQuotes.push(splitQuote);
		if (randomQuote.length === 0 ){
				quotes = viewedQuotes;
				viewedQuotes = [];
		}
		return splitQuote;
}

//This function will generate a random color value
function randomColorGenerator() {
		var randomColor;
		red = Math.floor(Math.random() * 256);
		green = Math.floor(Math.random() * 256);
		blue = Math.floor(Math.random() * 256);
		randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		return randomColor;
}

//This next function works with the one above that grabs the random object form the array. It will take the selected random object and print it to the screen. 
function printQuote() {
	var quotes = getRandomQuote();
	message = '<p class="quote">' + quotes.quote + '</p>';
	message += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';
	} else {
		message += '';
	}
	if (quotes.tags) {
		message += '<h3>' + quotes.tags + '</h3>';
	}else {
		message += '';
	}
	print(message);
	//This will add in the random color each time the quote is changed
	randomColorGenerator();
	//This will tell the background color to update with said random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
