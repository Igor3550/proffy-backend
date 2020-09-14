function convertTime(time) {
  var time = time
  time = time.replace(':', '')
  return number(time)
}

module.exports = convertTime