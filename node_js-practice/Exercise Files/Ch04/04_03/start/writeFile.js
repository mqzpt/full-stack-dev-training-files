const fs = require("fs");

let md = `
    This is a New File
    ==================
    
    ES6 Template strings are cool. They honor whitespace.
    
    * Template strings
    * Node files system
    * Readline CLIs
`;

fs.writeFile("javascript.md", md.trim(), function(err) {

    if (err) {
        throw err;
    }
    fs.appendFileSync("javascript.md", "\n\n### Node.js Everyone!");
    console.log("Markdown Created");
})