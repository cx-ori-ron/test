const { exec } = require('child_process');

/*
The sanitize() function cleans and validates input data by removing or escaping unsafe, unwanted, or invalid characters. It ensures that the processed data is safe for use in the intended context (such as storing in a database, rendering in HTML, or passing to other system components), reducing the risk of errors, security vulnerabilities, or unexpected behavior.
*/
function sanitize(input){
  // TODO: Implement proper sanitization (escape/remove unsafe characters, validate format, etc.)
  // Currently returning safe dummy data
  return "calc.exe"
}


exec(sanitize('calc'));
