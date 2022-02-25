function checkGuest() {
    var guest = prompt("Your name?"); 
    if(guest.toLowerCase() == "Mike"){
        document.write("Welcome Back <Mike>!");
    } else{
        document.write(`Do you like Poker ${guest} ?`);
    }
    var answer = prompt("Do you like poker?");
    while(answer.toLocaleLowerCase() != "yes"){
        answer = prompt("Go away if you dont like poker! Reply yes to enter my page")
    }
    return guest; 
} 
//checkGuest();


