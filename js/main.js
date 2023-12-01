
var quotes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken..'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'Frank Zappa',
        'quote': 'So many books, so little time'
    },
    {
        'author': 'Marcus Tullius Cicero',
        'quote': 'A room without books is like a body without a soul.'
    },
    {
        'author': ' Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': ' Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'Mark Twain',
        'quote': "If you tell the truth, you don't have to remember anything"
    },
    
];


// console.log(Math.floor(Math.random() * quotes.length))
function getQuotes() {
   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
   document.getElementById('author').innerHTML = ' -' + randomQuote.author + '-';
   document.getElementById('quote').innerHTML = '"' +randomQuote.quote + '"';
    }
   
  
    
  
 

