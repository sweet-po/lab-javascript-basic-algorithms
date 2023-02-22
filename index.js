console.log("I am ready");
// Iteration 1: Names and Input
let hacker1 = "Olja";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andrej";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLonger = hacker1.length > hacker2.length;

const navigatorNameLonger = hacker1.length < hacker2.length;

const equallyLongNames = hacker1.length === hacker2.length;

if (driverNameLonger) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (navigatorNameLonger) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let result = "";
const lastIndex = hacker1.length - 1;
for (let i = 0; i < hacker1.length; i += 1) {
  if (i !== lastIndex) {
    result += hacker1[i].toUpperCase() + " ";
  } else {
    result += hacker1[i].toUpperCase();
  }
}
console.log(result);

const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString(`${hacker2}`));

let arr = [
  `The driver's name goes first.`,
  `Yo, the navigator goes first definitely.`,
  `What?! You both have the same name?`,
];

arr.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(arr);

// Bonus:
function getWordCount(str) {
  return str.split(" ").filter(function (n) {
    return n != "";
  }).length;
}

let longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

console.log("LongText:" + longText);
console.log("Total words: " + getWordCount(longText));

let oneWord = "as";
let count = longText.split(oneWord).length - 1;
console.log(count);

// or

const count1 = longText.match(/as/g).length;

console.log(count);

// bonus2
let phraseToCheck = "telephone";
let phraseReverse = phraseToCheck.split("").reverse().join("");

if (phraseToCheck === phraseReverse) {
  console.log("The string is a palindorme!");
} else {
  console.log("NOT a palindorme!");
}
