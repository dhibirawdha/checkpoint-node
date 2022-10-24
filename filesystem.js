const fs = require("fs");
const path = require("path");
fs.writeFile(path.join(__dirname, "welcome.twt"), "Hello Node", (err) => {
  if (err) throw err;
  console.log("File written to...");
});
fs.rename(
  path.join(__dirname, "welcome.txt"),
  path.join(__dirname, "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
fs.readFile(path.join(__dirname, "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.writeFile(path.join(_dirname, "password-generator.js"), "", (err) => {
  if (err) throw err;
  console.log("File written to ...");
});
fs.writeFile(path.join(__dirname, "email-sender.js"), "", (err) => {
  if (err) throw err;
  console.log("File written to ...");
});
