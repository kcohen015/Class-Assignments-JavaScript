const main = async () => {
  //ex1();
  //ex2();
  //ex3();
  //ex4();
  ex5();
};

const ex1 = () => {
  const array = [1, "2", 3, "test", 1.2];
  console.log(countNumbers(array));
};

const countNumbers = (array) => {
  //loop through numbers in array
  //count number of numbers with a %1 === 0
  for (let i = 0; i < array.length; i++) {
    let retval = 0;
    if (array[i] % 1 !== 0) {
      retval++;
    }
    return retval;
  }
};

const ex2 = () => {
  const array1 = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array1));
};

const minNumber = (array1) => {
  var retval = [];
  retval = array1.sort((a, b) => a - b);
  retval = array1.filter((value) => typeof value === "number");
  return retval[0];
};

const ex3 = () => {
  array2 = ["this", "is", "a", "test", "happy"];
  console.log(shortestString(array2));
};
const shortestString = (array2) => {
  let retval = "";
  array2.sort((a, b) => a.length - b.length);
  retval = array2[0];
  return retval;
};

const ex4 = () => {
  let array3 = ["this", "is", "a", "test"];
  console.log(countLetters(array3));
};

const countLetters = (array3) => {
  return array3.join("").length;
};

const ex5 = () => {
  let array4 = ["this", "is", 1, 3, 2.1, "a", "test"];
  console.log(countIt(array4));
};

const countIt = (array4) => {
  let retval = "";
  retval =
    "Number of Integers: " +
    countIntegerNumbers(array4) +
    "Number of Decimal Numbers: " +
    countDecimalNumbers(array4) +
    "Number of Strings:" +
    countStrings(array4);
  return retval;
};

const countIntegerNumbers = (array4) => {
  let retval = 0;
  for (let i = 0; i < array4.length; i++) {
    if (typeof array4[i] === "number" && array4[i] % 1 === 0) {
      retval++;
    }
  }
  return retval;
};

const countStrings = (array4) => {
  let retval = 0;
  for (let i = 0; i < array4.filter((n) => typeof n === "string"); i++) {
    retval++;
  }
  return retval;
};

const countDecimalNumbers = (array4) => {
  for (let i = 0; i < array4.length; i++) {
    let retval = 0;
    if (array4[i] % 1 !== 0) {
      retval++;
    }
    return retval;
  }
};
//
//
main();
//
//
