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





function mostCalories(dollarAmount,items){
  let sortedItems=items.sort(function(a,b){return a.calories-b.calories})
  let dollarLeft=dollarAmount
  while (dollarLeft>0){

  }
}
//console.log(allCombinations([['a','b'],['c','d'],['e']]))
//console.log(combinations("abcd"))
console.log(recursiveKnapSack(15,[{price: 3, calories: 5},{ price:2, calories:4}, {price: 1, calories: 2}]))
