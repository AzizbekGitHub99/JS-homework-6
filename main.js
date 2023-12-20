// func 1

// const power = (a, n) => a ** n;

// console.log(power(3, 4));

// func 2

// const mean = (a, b) => {
//   let A = (a + b) / 2;
//   let G = Math.sqrt(a + b);
//   console.log(A, G, C);
// };

// console.log(mean(6, 10));

// func 3

// const sign = (a) => {
//   if (a > 0) {
//     return 1;
//   } else if (a < 0){
//     return -1;
//   } else {
//     return 0;
//   }
// };

// console.log(sign(10));

// func 4

// const numberOfRoots = (a, b, c) => {

//   let D = b**2 - 4 * a * c

//   if (D > 0) {
//     return 2;
//   } else if (D < 0){
//     return 0;
//   } else {
//     return 1;
//   }
// };

// console.log(numberOfRoots(1, 2, 1));

// func 5

// const areaCircle = (R) => Math.PI*R**2;

// console.log(areaCircle(5));

// func 6

// const sumRange = (A, B) => {
//   let sum = 0;
//   if(A > B) {
//     return 0;
//   } else {
//       for (let i = A; i <= B; i++) {
//       sum +=i;
//     }
//   }
//   return sum;
// };

// console.log(sumRange(5, 10));

// func 7

// const calc = (A, B, S) => {
//   if (S == "*") {
//     return A * B;
//   } else if (S == "/") {
//     return A / B;
//   } else if (S == "+") {
//     return A + B;
//   } else if (S == "-") {
//     return A - B;
//   };
// };

// console.log(calc(5, 10, "*"));

// func 8

// const isEven = (A) => {
//   if (A == 0) {
//     return false;
//   } else if (A % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   };
// };

// console.log(isEven(-2));

// func 9

// const sortABC = (a, b, c) => {
//   if (a >= b && a >= c) {
//     if (b >= c) {
//       console.log(c, b, a);
//     } else {
//       console.log(b, c, a);
//     }
//   } else if (b >= a && b >= c){
//     if (a >= c) {
//       console.log(c, a, b);
//     } else {
//       console.log(a, c, b);
//     }
//   } else if (c >= a && c >= b){
//     if (a >= b) {
//       console.log(b, a, c);
//     } else {
//       console.log(a, b, c);
//     };
//   };
// };

// sortABC(-52, 6, 1);

// func 10

// const isPowerN = (K, N) => {
//   while (K > 1) {
//     K /= N;
//   };
//   if (K == 1) {
//     return true
//   } else {
//     return false
//   }
// };

// console.log(isPowerN(8, 2));

// func 11

// const isPrime = (N) => {
//   let temp = 0;
//   for (let i = 1; i <= N / 2; i++) {
//     if (N % i == 0) {
//       temp++;
//     }
//   }
//   if (temp > 1) {
//     return false
//   } else {
//     return true
//   }
// };

// console.log(isPrime(9));

// func 12

// const numberOfPrime = (N) => {
//   let res = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i) == true) {
//       res++;
//     }
//   }
//   return res;
// };

// console.log(numberOfPrime(9));

// func 13

// const digitNth = (K, N) => {
//   let digits = "";
//   let count = 0;
//   let k = K;
//   let res ;
//   while (k > 1) {
//     digits += k % 10;
//     k = parseInt(k / 10);
//     count++;
//   };
//   if (count < N) {
//     return -1
//   } else {
//     digits = parseInt(+digits / (10**(N - 1)));
//     res = digits % 10;
//     return res;
//   }
// };

// console.log(digitNth(26523, 3));

// func 14

// const inverseNumber = (k) => {
//   let digits = "";
//   while (k > 0) {
//     digits += k % 10;
//     k = parseInt(k / 10);
//   }
//   return digits;
// };

// console.log(inverseNumber(256161));

// func 15

// const isPalindrom = (K) => {
//   if (inverseNumber(K) == K) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrom(22554));

// func 16

// const factorial = (N) => {
//   let temp = 1;
//   if (N <= 0) {
//     return 1;
//   } else {
//     for (let i = 1; i <= N; i++) {
//       temp *=i;
//     }
//     return temp;
//   }
// };

// console.log(factorial(5));

// func 17

// const getSum3 = (N) => {
//   let count = 0;
//   for (let i = 3; i <= N; i+=3) {
//     count++;
//   };
//   return count
// };

// console.log(getSum3(9));

// func 18

// const sumOddEven = (N) => {
//   let odd = 0;
//   let even = 0;
//   for (let i = 2; i <= N; i+=2) {
//     even+=i;
//   };
//   for (let i = 1; i <= N; i+=2) {
//     odd+=i;
//   };
//   console.log(even, odd);
// };
// sumOddEven(9);

// func 19

// const invertTime = (H, M, S) => H*3600 + M*60 + S;

// console.log(invertTime(0,5,2));

// func 20

// const changeTime = (a) => {
//   if (a < 10) {
//     a = "0" + a;
//     return a;
//   } else return a;
// };

// const decTime = (H, M, S) => {
//   S = S - 1;
//   if (S == -1) {
//     S = 59;
//     M = M - 1;
//     if (M == -1) {
//       M = 59;
//       H = H - 1;
//       if (H == -1) {
//         H = 23;
//       };
//     };
//   };
//   H = changeTime(H);
//   M = changeTime(M);
//   S = changeTime(S);
//   return H + " : " + M + " : " + S;
// };

// console.log(decTime(0, 0, 0));

// func 21

const isLeapYear = (Y) => Y % 4 == 0 ? true : false;

// console.log(isLeapYear(2024));

// func 22

const monthDays = (M, Y) => {
  if (isLeapYear(Y) == true) {
    if (M == 2) {
      return 28
    } else {
      return 31
    };
  } else {
    if (M == 2) {
      return 27
    } else {
      return 31
    };
  }
};

// console.log(monthDays(2, 2024));

// func 23

// const changeDate = (a) => {
//   if (a < 10) {
//     a = "0" + a;
//     return a;
//   } else return a;
// };

// const prevDate  = (D, M, Y) => {
//   D -= 1
//   if (D == 0) {
//     M -= 1
//     if (monthDays(M, Y) == 28) {
//       D = 28;
//     } else if (monthDays(M, Y) == 27){
//       D = 27;
//     } else {
//       D = 31;
//     };
//     if (M == 0) {
//       M = 12;
//       Y -= 1;
//     }
//   }
//   D = changeDate(D);
//   M = changeDate(M);
//   return D + "." + M + "." + Y
// };

// console.log(prevDate (1, 1, 2024));

// func 24

// const changeDate = (a) => {
//   if (a < 10) {
//     a = "0" + a;
//     return a;
//   } else return a;
// };

// const nextDate  = (D, M, Y) => {
//   D = D + 1
//   if (monthDays(M, Y) == D - 1) {
//     D = 1;
//     M += 1;
//     if (M == 13) {
//       M = 1;
//       Y +=1;
//     }
//   }
//   D = changeDate(D);
//   M = changeDate(M);
//   return D + "." + M + "." + Y
// };

// console.log(nextDate (27, 2, 2024));

// func 25

// const getDividersNumberAndSum  = (N) => {
//   let count = 0;
//   let sum = 0;

//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       count++;
//       sum +=i;
//     }    
//   }
//   console.log(count, sum);
// };

// getDividersNumberAndSum (8);