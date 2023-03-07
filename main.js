function toTitleCase(str) {
  const titleCase = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  return titleCase;
}
console.log(toTitleCase("my name is taras"));

truncate = function (str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};
console.log(truncate("Lorem ipsum dolor sit amet, consectetur.", 14));
console.log(truncate("Lorem ipsum dolor sit amet, consectetur.", 255));

const filterRange = (arr, from, to) => {
  return arr.filter((item) => item >= from && item <= to);
};

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filterRange(numArr, 3, 7));

const sortArr = (arr) => arr.sort((a, b) => a - b);
const arrToSort = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
sortArr(arrToSort);
console.log(sortArr(arrToSort));

const sortStringArr = (arr) => arr.sort((a, b) => a.length - b.length);
const stringArr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
console.log(sortStringArr(stringArr));

const usersArr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

const sortAge = (arr) => {
  const filteredArr = arr.filter((item) => item.age > 17 && item.age < 55);
  const sum = filteredArr.reduce((acc, item) => (acc += item.age), 0);

  return sum / filteredArr.length;
};
console.log(sortAge(usersArr));

const sortUsers = (arr) => {
  return arr.sort((a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : a.age - b.age;
  });
};
console.log(sortUsers(usersArr));

const strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

const unique = (arr) => {
  const uniqueArr = [];
  strings.forEach((str) => !u.includes(item) && u.push(item));

  return uniqueArr;
};

console.log(unique(strings));
