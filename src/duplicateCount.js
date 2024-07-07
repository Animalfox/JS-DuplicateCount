export default function duplicateCount(text) {
  // Init duplicates variable
  let duplicates = 0;

  // Convert input text to lowercase characters
  let characters = text.toLowerCase().split("");

  // Count duplicates using for loop
  for (const character of characters) {
    // Detect current letter duplication
    const charactersBefore = characters.length;

    // using filter to create a new characters array without current character
    characters = characters.filter((c) => c !== character);
    const charactersAfter = characters.length;

    // and calculate difference between charactersBefore and charactersAfter
    if (charactersBefore - charactersAfter - 1 > 0) {
      // as we'll detect duplicates by remove current character from text
      // we're need to increase duplicates variable
      duplicates++;
    }
  }

  return duplicates;
}
