// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong verylongwordthatislonger  neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  const textArray = text.split(" ");
  console.log(textArray);
  // TODO: Velg første ord så du har noe å sammenlikne med
  let compareFirst = text.split(" ")[0];
  console.log(compareFirst);
  //https://www.w3schools.com/jsref/jsref_split.asp
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  textArray.forEach((lWord) => {
    if (lWord.length > compareFirst.length) {
      compareFirst = lWord;
    }
  });
  return compareFirst;
  //https://dev.to/estheragbaje/three-ways-to-find-the-longest-word-in-a-string-using-javascript-5236
};

console.log(longestWord());
