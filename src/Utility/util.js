export function capitalizeEachWord(sentence) {
  return sentence.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
export const capitalizeWords = (str) => {
  if (typeof str !== "string") {
    return "";
  }

  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
