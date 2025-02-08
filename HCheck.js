for (let i = 65; i <= 73; i++) { // Loop for uppercase A to I
    let upper = String.fromCharCode(i);
    let referenceSet = []; // Store reference values for unique comparison

    for (let j = 97; j <= 105; j++) { // Loop for lowercase a to i
        let lower = String.fromCharCode(j);
        let currentPair = upper + lower;
        console.log(currentPair);
        referenceSet.push(currentPair);
    }

    // Unique if condition for each set (Aa to Ai, Ba to Bi, ..., Ia to Ii)
    if (referenceSet.includes("Aa")) {
        console.log("Match found in Aa-Ai set!");
    }
    if (referenceSet.includes("Ba")) {
        console.log("Match found in Ba-Bi set!");
    }
    if (referenceSet.includes("Ca")) {
        console.log("Match found in Ca-Ci set!");
    }
    if (referenceSet.includes("Da")) {
        console.log("Match found in Da-Di set!");
    }
    if (referenceSet.includes("Ea")) {
        console.log("Match found in Ea-Ei set!");
    }
    if (referenceSet.includes("Fa")) {
        console.log("Match found in Fa-Fi set!");
    }
    if (referenceSet.includes("Ga")) {
        console.log("Match found in Ga-Gi set!");
    }
    if (referenceSet.includes("Ha")) {
        console.log("Match found in Ha-Hi set!");
    }
    if (referenceSet.includes("Ia")) {
        console.log("Match found in Ia-Ii set!");
    }
}
