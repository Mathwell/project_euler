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
console.log(reverseWords("hello wold"))
