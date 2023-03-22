function pythagorean(a, b){
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }
  
  console.log(pythagorean(5, 12));

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  console.log(formatter.format(1232323)); 
//   console.log(formatter.format.toFixed(2)(-23.2132)); 


  function numberWithSpaces(nr) {

	return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

}
console.log(numberWithSpaces(1232323))


let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let string_length = 8;
let randomstring = '';
for (let i=0; i<string_length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
}

const calc = (firstNum, secondNum, precision) => {
    const percentage = (secondNum * 100) / firstNum;
    return percentage.toFixed(precision);
  };

  console.log(calc(200, 50, 0))

  function splitNumber(num) {
    let int = Math.floor(num);
    let decimal = Number((num - int).toFixed(2)) * 100;
    return { int, decimal };
  }
  
  console.log(splitNumber(2)); // { int: 2, decimal: 0 }
  console.log(splitNumber(2.34)); // { int: 2, decimal: 34 }




  function isPrime(n) {
    if (n <= 1) {
      return false; // 1 не является простым числом
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false; // число делится нацело на i, следовательно, это не простое число
      }
    }
    return true;
  }
  
  console.log(isPrime(4)); // false
  console.log(isPrime(5)); // true


  function isArmstrong(n) {
    let sum = 0;
    const digits = n.toString().split('');
    const len = digits.length;
    
    for (let i = 0; i < len; i++) {
      sum += Math.pow(parseInt(digits[i]), len);
    }
    
    return sum === n;
  }
  
  console.log(isArmstrong(4)); // false
  console.log(isArmstrong(153)); // true



  

  
  
  
  
