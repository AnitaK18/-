function compareStrings(str1, str2) {

  const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

  const charCount = {};
  for (let i = 0; i < cleanStr1.length; i++) {
    charCount[cleanStr1[i]] = (charCount[cleanStr1[i]] || 0) + 1;
  }

  let matchCount = 0;
  for (let i = 0; i < cleanStr2.length; i++) {
    if (charCount[cleanStr2[i]]) {
      matchCount++;
      charCount[cleanStr2[i]]--;
    }
  }

  const percentage = (matchCount / cleanStr1.length) * 100;
  return Math.round(percentage * 100) / 100;
}

const str1 = "In the population of Transylvania there are four distinct nationalities: Saxons in the South, and mixed with them the Wallachs";
const str2 = "I was not able to light on any map or work giving the exact locality of the Castle Dracula, as there are no maps of this country as yet to compare with our own Ordance Survey Maps;";

const result = compareStrings(str1, str2);

console.log(result);//89.72
