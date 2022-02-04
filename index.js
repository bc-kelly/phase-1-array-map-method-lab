const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map((word) => {
    const items = word.split(" ");
    const capitalizedItems = items.map(
      (item) => item.charAt(0).toUpperCase() + item.slice(1)
    );
    const response = capitalizedItems.join(" ");
    return response;
  });
};
console.log(response());


// const titleCased = () => {
//   return tutorials.map((line) => {
//     const tokens = line.split(" ");
//     const capitalizedTokens = tokens.map(
//       (token) => token.charAt(0).toUpperCase() + token.slice(1)
//     );
//     const response = capitalizedTokens.join(" ");
//     return response;
//   });
// };



// const mySentence = "freeCodeCamp is an awesome resource"
// const words = mySentence.split(" ");

// const newWords = words.map((word) => { 
//     return word[0].toUpperCase() + word.substring(1); 
// }).join(" ");
// const secondTry = 
// console.log(newWords);




// const titleCased = tutorials.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
//  console.log(titleCased());

// function titleCased(tutorials) {
//   return tutorials.charAt(0).toUpperCase() + string.slice(1);
// }
// const caps = tutorials.split(' ').map(capitalize).join(' ');
// caps;



// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(capitalizeFirstLetter('foo'));


// const str = ['captain picard', 'captain hook']
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// const caps = str.split(' ').map(capitalize).join(' ');
// caps; 
// console.log(caps);