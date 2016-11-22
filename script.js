// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//This array serves to hold the quotes, source, year, and citation

var quotes = [
		{
			quote: "You miss 100% of the shots you don't take",
			source: "Wayne Gretzky",
			year: 2009,
			citation: "Michael Scott",
			tags: ["inspirational", "humor"]
		},
		{
			quote: "They don't think it be like it is, but it do",
			source: "Oscar Gamble",
			year: 1975,
			citation: "Oscar Gamble",
			tags: ["inspirational", "humor"]
		},
		{
			quote: "It matters not what someone is born, but what they grow to be",
			source: "Albus Dumbledore",
			year: 2000,
			citation: "Harry Potter and the Goblet of Fire",
			tags: ["inspirational", "philosohphy", "magic"]
		},
		{
			quote: "Time is a face on the water",
			source: "Roland Deschain",
			year: 1997,
			citation: "Wolves of the Calla",
			tags: ["philosohphy"]
		},
		{
			quote: "I need you more than anything in my life. I want more than anything in my life. I'll miss you more than anyone in my life. I love you more than anyone in my life",
			source: "Daft Punk",
			year: 2001,
			citation: "Discovery",
			tags: ["love", "death"]

		},

];

//Calls a random quote the array then cycles it back
function getRandomQuote() {
	//Calls all the quotes from the array
	var randomQuote = Math.floor(Math.random() * (quotes.length)); 
	return quotes[randomQuote];
}

//Prints out the quote called from the getRandomQuote function 
function printArray() {
	//Stores the randome quote
	var printRandomQuote = getRandomQuote();
	var quotes = "<p class='quote'>" + printRandomQuote.quote + "</p>";
		quotes += "<p class='source'>" + printRandomQuote.source;
	if (printRandomQuote.citation){ //added to fix formatting issues with year and citation
		quotes += "<span class='citation'>" + printRandomQuote.citation + "</span>";
	}

  	if (printRandomQuote.year){
		quotes += "<span class='year'>" + printRandomQuote.year + "</span>" + "</p>";
	}

  
		 //quotes += "<p class='citation'>" + printRandomQuote.citation + "</p>";
		 //quotes += "<p class='year'>" + printRandomQuote.year + "</p>";
 	//Prints out random quote
 	document.getElementById('quote-box').innerHTML = quotes;
} 
