const { spawn } = require("child_process");
console.log("Start App")
spawn("node", ["./computation/fibonacci"], {
    stdio: "inherit"
})
console.log("End of App")