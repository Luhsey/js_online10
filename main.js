function getDaysInYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}
console.log(getDaysInYear(2021)); 
console.log(getDaysInYear(2020));
//////////////////////////////////////////////////
function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil(diff / oneDay);
}
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));
/////////////////////////////////////////////////
function getQuarters(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  if (month >= 1 && month <= 3) {
    return "I quarter";
  } else if (month >= 4 && month <= 6) {
    return "II quarter";
  } else if (month >= 7 && month <= 9) {
    return "III quarter";
  } else {
    return "IV quarter";
  }
}
console.log(getQuarters("2023-02-26"));
/////////////////////////////////////////////////
function calcDateDiff(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end - start;
  if (diff < 60 * 1000) {
    return `${Math.floor(diff / 1000)} seconds`;
  } else if (diff < 60 * 60 * 1000) {
    const minutes = Math.floor(diff / (60 * 1000));
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  } else if (diff < 24 * 60 * 60 * 1000) {
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  } else if (diff < 30 * 24 * 60 * 60 * 1000) {
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    return `${days} ${days === 1 ? "day" : "days"}`;
  } else if (diff < 365 * 24 * 60 * 60 * 1000) {
    const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
    return `${months} ${months === 1 ? "month" : "months"}`;
  } else {
    const years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
}
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));
console.log(calcDateDiff("2023-02-26 14"))
/////////////////////////////////////////////////////
function createMap(arr) {
  const map = new Map();
  arr.forEach(obj => {
    map.set(obj.id, obj);
  });
  return map;
}
const arr = [
  { id: 1, value: 1, date: "2022-02-15" },
  { id: 2, value: 1242, date: "2023-02-15" },
  { id: 3, value: 3342, date: "2021-02-15" },
];
const map = createMap(arr);
console.log(map.get(1));
console.log(map.get(2));
console.log(map.get(3)); 
////////////////////////////////////////////////////
function cacheCalcDateDiff() {
  const cache = new Map();
  return function(startDate, endDate) {
    const key = `${startDate}_${endDate}`;
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const diff = calcDateDiff(startDate, endDate);
      cache.set(key, diff);
      return diff;
    }
  }
}
const cachedCalcDateDiff = cacheCalcDateDiff();
const result1 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
const result2 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20");
const result3 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-27 15:30");
const result4 = cachedCalcDateDiff("2023-02-26 14:00", "2023-02-27 15:30");