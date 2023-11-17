//your JS code here. If required.
for (var i = 1; i <= 20; i++) {
    var output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }

    if (i % 5 === 0) {
        output += "Buzz";
    }

    // If the output is still an empty string, it means the number is not a multiple of 3 or 5
    if (output === "") {
        output = i.toString();
    }

   
    alert(output);
}
