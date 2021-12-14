const billamount = document.querySelector("bill-amount");
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")

const avaiablenotes = [2000, 500, 100,20, 10,5,1]

checkButton.addEventListener("click", function validatebillandcashamount(){
    hidemessage();
    if (billamount.value > 0){
        if(cashGiven.value>billamount.value){
            const amounttobereturned = cashGiven.value - billamount.value
            calculatechange(amounttobereturned)
    }else{
        showmessage(
            " the cash provided should atleast be equal to the bill amount "
        )
        }
} else {
    showmessage("invalid bill-amount")
}
})

function calculatechange(amounttobereturned) {
    console.log("button clicked");
    for(let i= 0;i<avaiablenotes.length;i++){
        const numberofnotes = math.trunc(
            amounttobereturned/avaiablenotes[i]
        )
        amounttobereturned%=avaiablenotes[i]
        noifnotes[i].innerText = numberofnotes
    }
}

function hidemessage(){
    message.style.display = "none"
    
}
function showmessage(msg){
    message.style.display = "block"
    message.innerText = msg;
}