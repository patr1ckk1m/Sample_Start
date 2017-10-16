function run_js(){
    //task 1
    var input = parseInt(prompt("Please enter a number between 2 and 10: "));

    if (input <= 1 || input >= 11){
        document.getElementById("task1").innerHTML = 
        "<span style = 'color: red;'>Your input is " + input + ". The valid input number is between 2 and 10. Please reload this page and try again.</span>"
    }
    else{
        document.getElementById("task1").innerHTML = 
        "Your input number is " + input
    }

    //task 2
    var counter = 0;
    var i = input;
    while (i > 0.000001){
        i /= 2;
        counter++;
        console.log(counter);
    } 
    document.getElementById("task2").innerHTML = 
    "The number of times to divide the number " + input + " by 2 to get a value less than one millionth is " + counter;


    // task 3
    document.getElementById("task3").setAttribute("class","green")
    var task3 = document.getElementById("task3");
    var stars = input;
    while (input > 0){
        while(stars>0){
            task3.innerHTML = task3.innerHTML + "*";
            stars = stars - 1;
        }
        task3.innerHTML = task3.innerHTML + "<br>";
        input = input - 1;
        stars = input;
    }

}