export function isValidURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3})|'+ // OR ip (v4) address
    '(localhost))'+ // or localhost
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

/**
 * Generate Time String
 * @param {number|string} time the time in seconds
 * @returns {string} the time in a human readable format
 * @example 600 -> 10:00
 */
export function generateTimeString(time) {
  if (time < 60) return "00:00:" + (time < 10 ? "0" + time : time);

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  if (hours > 0) minutes = minutes % 60;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
}