document.getElementById("ageday").onclick = function() {
    let day = document.getElementById("daysubmit").value;
    let age = document.getElementById("agesubmit").value;
    if((day == "Tuesday" || day == "Thursday") || (age > 12 && age < 21))
    {
        alert("You have school discount!");
    }
    
    else 
    {
        alert("You do not have the school discount!");
    }
};