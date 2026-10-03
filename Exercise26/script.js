function delayBlocking() {
    alert("Fetching user data...");
    return "Blocking delay completed!";
}

console.log("Start blocking delay...");
console.log(delayBlocking());
console.log("This message is blocked until the delay is complete.");

function delayNonBlocking() {
    setTimeout(() => {
        console.log("Non-blocking delay completed!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking();
console.log("This message runs immediately.");