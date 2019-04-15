function hello(){
  console.log("Hello!")
  return "Hello!!!"
}

//console.log(hello())

//console.log([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5])



function fibonacci(n){
 if (n<3){
   return 1
 } else{
   return fibonacci(n-1)+fibonacci(n-2)
 }

}

function printFibonacci(n){
  let fib=0
  let fib1=0
  let fib2=0
  let result=[]
    for (let i=1; i<=n; i++){
        if(i==1){
          fib=1
        }else{
          if (i==2){
          fib=1
          fib1=1
          fib2=0
        }else{
          let temp=fib+fib1
          fib2=fib1
          fib1=fib
          fib=temp
        }
        }
        result.push(fib)
    }
    return result
  }

  function reverseString(s){
    let newS=""
    for(let i=s.length-1; i>=0; i--){
      newS+=s[i]
    }
    return newS
  }

function reverseWords(s){
  let arr=s.split(" ")
  let newArr=[]

  for (let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i])
  }

  return newArr.join(" ")
}

//console.log(printFibonacci(7))
//console.log("**********",fib)

function allCombinations(arr){

  if (arr.lenght===1){
    return arr[0]
  } else {
    let result=[]
    var allCasesOfRest = allCombinations(arr.slice(1));  // recur with the rest of array
    for (let i=0; i<allCasesOfRest.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        result.push(arr[0][j] + allCasesOfRest[i]);
      }
    }

    return result;
  }
  }

  function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}


function recursiveKnapSack(wallet, menuItems) {
     const n = menuItems.length;
     if (wallet <= 0)  return 0;
     //console.log(wallet)
     //console.log(menuItems)
     let maxCal = 0;
     for (let i = 0; i < n; i++) {
       //console.log("i",i)
        if (menuItems[i].price <= wallet ) {
           let newCal = menuItems[i].calories + recursiveKnapSack(wallet - menuItems[i].price, menuItems); //solution for when we spent money on the item i.
           maxCal= (maxCal>newCal) ? MaxCal : newCal
           //console.log("newCal:",newCal)
         }

         //console.log("maxCal",maxCal)
     }
     return maxCal;
   }


function  nonRecursiveKnapSack( wallet, menuItems) {
         let n = menuItems.length;
         let answers  = []; //answer[i] is solution for when wallet has i cents, initially filled with 0
         for (let i=0; i<n; i++){
           answers.push(0)
         }
         for (let currMoney = 1; currMoney <=wallet; currMoney++  ) {
            let maxCal = answers[currMoney-1];
            for (let i = 0; i < n; i++) {
               if (menuItems[i].price <= wallet) {
                 let prevCal = answers[currMoney - menuItems[i].price];
                  let newCal = menuItems[i].calories + prevCal;
                   maxCal= (maxCal>newCal) ? MaxCal : newCal
                 }
            }
            answers[currMoney] = maxCal;
         }
         return answers[wallet];
      }



function mostCalories(dollarAmount,items){
  let sortedItems=items.sort(function(a,b){return a.calories-b.calories})
  let dollarLeft=dollarAmount
  while (dollarLeft>0){

  }
}

function  latticePath(num){
  let count=2, sum=2*num
  for(let i=2; i<=num; i++){
    sum=sum+i*(num-1)
  }
  return sum
}

function twoTothouthand(){
  let power=Math.pow(2,1000)
  let sum=0
  while (power>0){
    sum=sum+power%10
    power=Math.floor(power/10)
    console.log(sum+"  "+power)
  }
  return sum
}

const getTopsyTurvyTriangleArray = (str) =>
  // Split the string on every new line.
  str.split('\n')
    // Remove empty rows.
    .filter(row => parseInt(row))
    // Split the row every row on every space
    // and convert it to an int.
    .map(row => row.split(' ').map(str => parseInt(str, 10)))
    // Reverse the array, since we want to process our
    // triangle from the bottom up.
    .reverse();

const getLongestPathLength = (triangle, legs = [0]) => {

  // Sum the top of the triangle with its longest leg
  // if we have reaced the top (now pointing downward)
  // of our upside-down triangle.
  if(triangle[0].length === 1){
    return triangle[0][0] + legs[0];
  }

  // Get the foundation of our upside down triangle.
  const [foundation, ...top] = triangle

  // Sum the current triangle foundation with its legs.
  // There will be no legs the first time around.
  const sums = [foundation.map((n, i) => n + (legs[i] || 0))]

  // Get the longest legs. We only need all but one,
  // since the next level is one less in length.
  const longestLegs = sums[0].map((n, index, row) =>
    row[index + 1] && row[index + 1] > n ? row[index + 1] : n,
  ).splice(0, sums[0].length - 1)

  return getLongestPathLength(top, longestLegs);

}

// Convert triangle string to an array.
const triangle = getTopsyTurvyTriangleArray(str);

// Traverse the triangle bottom up and get the longest path.
const length = getLongestPathLength(triangle);

console.log(twoTothouthand())
