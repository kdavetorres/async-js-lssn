/*
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // API endpoint
request.send(); 
*/

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
 /*
 0 - UNSENT
 1 - OPENED
 2 - HEADERS_RECEIVED
 3 - lOADING
 4 - DONE
 */
 // console.log(request, request.readyState);
 if(request.readyState === 4) {
  console.log(request.responseText);
 }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // API endpoint
request.send(); 





