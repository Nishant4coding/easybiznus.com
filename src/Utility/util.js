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


export const getLatLng = () => {
  // get lat and long from browser
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log("position",{
        //   lat: position.coords.latitude,
        //   lng: position.coords.longitude,
        // });
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        // console.log(error.code);
        if (error.code === error.PERMISSION_DENIED) {
          resolve({
            lat: null,
            lng: null,
          });
        } else {
          reject(error);
        }
      }
    );
  });
}
