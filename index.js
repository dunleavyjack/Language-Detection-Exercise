const franc = require("frank");
const langs = require("langs");
const input = process.argv(2);
const langCode = franc(input);
if (langCode === 'und'){
    console.log("Sorry. Too short.")
} else {
    const language = langs.where("3", langCode)
    console.log(language.name).green
}
