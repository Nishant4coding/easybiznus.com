export function capitalizeEachWord(sentence) {
  return sentence.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
