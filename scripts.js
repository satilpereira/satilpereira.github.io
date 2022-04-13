function textTyper() {
    var i = 0;                  //  set your counter to 0
    var text = "I design and code websites from scratch";
    function myLoop() {         //  create a loop function
        setTimeout(() => {   //  call a 200ms setTimeout when the loop is called
            document.getElementById("demo").innerHTML += text[i];
            i++;
            if (i < text.length) { // Iterates over the string
                myLoop();
            }
        }, 82)
    }
    myLoop();
}

