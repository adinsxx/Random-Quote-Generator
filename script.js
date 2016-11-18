var dedug = true;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array for the background colors
var rgb_colors = [
	"Red",
	"Orange",
	"Green",
	"Blue",
	"Indigo",
	"Violet"
];

//An array to keep track of unique quotes that were used
var unique_quotes_used = [];


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


//Function returns a random quote
//It will cycle all quotes before returning to a duplicate
function getRandomQuote (quote_array) {

	//Get random quote

	var new_quote = quote_array[Math.floor(Math.random() * quote_array.length)];

//Check quotes before returning duplicate
if (unique_quotes_used.length < quote_array.length) {
  if (debug) {
  	console.log("Quotes still need to be used");
  	console.log(unique_quotes_used);
  }
  //Loop until a new quote is chosen
  while (unique_quotes_used.indexOF(new_quote) != -1){
  	if(debug) {
  		console.log("Getting unused quote");
  	}
  	new_quote = quote_array[Math.floor(Math.random() * quote_array.length)];
  }
  unique_quotes_used.push(new_quote);
      if (debug) {
      console.log("Unused quote found and pushed into array");
    }
}
	return new_quote;
}
if (debug) {
	console.log("All quotes have been used once");
}
return quote_array[Math.floor(Math.random() * quote_array.length)];
}

// Return random color
function getRandomColor () {

	return rgb_colors[Math.floor(Math.random() * rgb_colors.length)];
}

// Building out the HTML string
function printQuote() {

	document.body.style.background = getRandomColor();

	var selected_quote = getRandomQuote(quotes);

	var html_string = '<p class="quote">' + selected_quote.quote + '</p> <p class="source">' + selected_quote.source;
 
 // If there's a citation, add it to the HTML string
	  if (selected_quote.tags) {
	    html_string += '<span class="tags">' + selected_quote.tags + '</span>';
	    if (debug) {
	      console.log("Tag exists");
	    }
	  }
	if (selected_quote.year) {
		html_string += '<span class="year">' + selected_quote.year + '</span>';
		if (debug) {
			console.log("Year exists");
		}
	}

	// Close the string
	html_string += '</p>';

	document.getElementById('quote-box').innerHTML = html_string;
}

var intervalID = window.setInterval(printQuote, 10000);
