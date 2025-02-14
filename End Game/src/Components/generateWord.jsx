function guessWord(){

const randomIndex = Math.floor(Math.random() * 5 + 2);
console.log(randomIndex)

const wordArr = ["macos","windows","linux","blood","juice","burger"];

return wordArr[randomIndex].split("").map( element => element.toUpperCase());

}

export default guessWord;