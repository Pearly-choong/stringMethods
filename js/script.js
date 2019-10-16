console.log('String Methods');

// substr()methods
// Example 1
var str = 'It is a great day.';
var text = str.substr(5); //start at index 5 including space, length is not defined.
document.getElementById('output1').innerHTML += text;


// Example 2
var str = 'It is a great day.';
var text = str.substr(-4); 
document.getElementById('output2').innerHTML += text;


// Example 3
var str = 'It is a great day.';
var text = str.substr(5,6); //start at index 5, length of string is 6
document.getElementById('output3').innerHTML += text;


// Example 4
var str = 'It is a great day.';
var text = str.substr(5,-7); 
document.getElementById('output4').innerHTML += text;
// *Nothing will be shown (returns on empty string) as the length of string is negative 


//=====================================================================


// replace()method
// Example 1
var str = 'Please visit Microsoft!';
var n = str.replace('Microsoft', 'W3school');
document.getElementById('example1aReplace').innerHTML = n;


// Example 1b : 
// If writing MICROSOFT (with upper-case) will not work.
// To replace case sensitive, use regular expressions with a /i flag (insensitive) - written without quotes.
var str = 'Please visit Microsoft!';
var n = str.replace(/MICROSOFT/i, 'W3school'); 
document.getElementById('example1bReplace').innerHTML += n;



// Example 2a
var str = 'Please visit Microsoft and Microsoft!';
var n = str.replace('Microsoft', 'W3school');
document.getElementById('example2aReplace').innerHTML += n;


// Example 2b
// By default, it replace only the first match.
// To replace matches, use a regular expression with a /g flag (global match) - written without quotes.
var str = 'Please visit Microsoft and Microsoft!';
var n = str.replace(/Microsoft/g, 'W3school');
document.getElementById('example2bReplace').innerHTML += n;




//=====================================================================


// concat()method
// Example 1
var str = 'It';
var sentence = str.concat( ' is' , ' a',' great', ' day.');
document.getElementById('example1Concat').innerHTML += sentence;


// Example 2
var text1 = 'Hello';
var text2 = 'World';
var text3 = text1.concat( ' ', text2);
document.getElementById('example2Concat').innerHTML += text3;


// Example 3 
// Can be used instead of the plus operator. These two lines do the same.
var name = 'Pearly'
var textA = 'My name is ' + name + '. Have a good day';
document.getElementById('example3aConcat').innerHTML += textA;
var textB = 'My name is '.concat(name, '. Have a good day');
document.getElementById('example3bConcat').innerHTML += textB;

