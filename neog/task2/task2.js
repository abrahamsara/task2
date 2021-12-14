const input=require("readline-sync")
let num=5
let i=1
let  chance=10
while (i<=10){
    var user_num=input.questionInt("Enter your guess_number: => ")
    if (user_num==num){
        console.log("You are right")
        break
    }else if (user_num>num){
        console.log("your choice is  high")
        chance=chance-1
        console.log("your left chance",chance)
    }else{
        console.log("your choice is low")
        chance=chance-1
        console.log("your left chance",chance)
    }
    i++
}
