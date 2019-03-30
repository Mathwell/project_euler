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
//console.log(allCombinations([['a','b'],['c','d'],['e']]))
//console.log(combinations("abcd"))
//console.log(recursiveKnapSack(15,[{price: 3, calories: 5},{ price:2, calories:4}, {price: 1, calories: 2}]))
//console.log(nonRecursiveKnapSack(15,[{price: 3, calories: 5},{ price:2, calories:4}, {price: 1, calories: 2}]))

/*
Exercise Goal:
    - The goal of this exercise is to show us how you apply software engineering
    principles to create a maintainable software solution.

    How to approach this:

            - Don't worry about persistence. It would make sense here, but for this
            exercise only use in-memory data structures.
            - Don't worry about tricks or "gotchyas", as there aren't any.
            - Just focus on writing clean maintainable code.



Specification:

    Create a class LeaderBoard whose interface includes the following methods:

    Method Name: add_score

        - Add a new score to the player's average. If a player doesn't exist in the
        LeaderBoard, they will be automatically added.

        Args:

                player_id (Integer): The player's ID.
                score (Integer): The score to record for the player

        Returns:

                Double: The new average score for the given player

    Method Name: top

        - Get the top player_ids on the leaderboard ordered by their average scores
        from highest to lowest

        Args:

                num_players (Integer): The maximum number of player_ids to return

        Returns:

                List<Integer>: a list of player_ids

    Method Name: reset

        - Removes any scoring information for a player, effectively
        resetting them to 0

        Args:

                player_id (Integer): The player's ID.

Example Usage:


    // Create a new LeaderBoard Instance
    LeaderBoard leader_board = new LeaderBoard();

    // Add scores for players to the LeaderBoard
    leader_board.add_score(1, 50); // 50.0
    leader_board.add_score(2, 80); // 80.0
    leader_board.add_score(2, 70); // 75.0
    leader_board.add_score(2, 60); // 70.0
    leader_board.add_score(3, 90); // 90.0
    leader_board.add_score(3, 85); // 87.5

    // Get top positions for the leaderboard
    leader_board.top(3); // [3, 2, 1]
    leader_board.top(2); // [3, 2]
    leader_board.top(1); // [3]

    // Reset a player 3's scores
    leader_board.reset(3); // void

    // Player 3 is now at the bottom of the leaderboard
    leader_board.top(3); // [2, 1, 3]

Expected values

    - Player IDs will always be positive integers small enough to be
    stored as a signed 32-bit integer Scores are integers ranging from 0-100


We have provided stubbed out code and tests for you below. Please note that these tests are not exhaustive and do not cover all corner cases. We recommend extending the given tests to ensure your code is correct.

*/


// Your code goes here. Feel free to make helper classes if needed

const average = arr => arr.reduce((sum, element) => sum + element, 0) / arr.length;

class LeaderBoard {

  constructor(){
      this.players={};
  }

  add_score = (player_id, score) => {
   if (this.players[player_id]){
      this.players[player_id].push(score)
    } else {
     this.players={...this.players, [player_id]: [score]}
    }

    return average(this.players[player_id])
  };

  top = (num_players) => {
    let topList=Object.keys(this.players).map(key=>
      [Number(key), average(this.players[key])]).sort((a,b)=>b[1]-a[1]).map(element=>element[0]).slice(0,num_players)

    return topList

  };

  reset= (player_id) => {
      this.players[player_id]=[0]
  };
}

// Test code here

function array_equals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var leader_board = new LeaderBoard()

leader_board.add_score(1, 50)
console.log(leader_board.add_score(2, 80) == 80)
console.log(leader_board.add_score(2, 70) == 75)
console.log(leader_board.add_score(2, 60) == 70)
console.log('Add score should return the average. test with 1 score')
console.log(leader_board.add_score(3, 90) == 90)
console.log('Add score should return the average. test with 2 scores')
console.log(leader_board.add_score(3, 85) == 87.5)
console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:')
console.log(array_equals(leader_board.top(3), [3, 2, 1]))
console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:')
console.log(array_equals(leader_board.top(2), [3, 2]))
leader_board.reset(3)
console.log('After reset top 3 [' + leader_board.top(3) + '] should equal [2, 1, 3]')
console.log(array_equals(leader_board.top(3), [2, 1, 3]))
