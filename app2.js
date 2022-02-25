function displayRating() {
    let output = "";
    let rating = prompt('how many smiles?');
    for (let i = 0; i < rating; i++) {
      // output = output + "😸";
      output += "😸";
    }
   return document.write(output);

displayRating();
}