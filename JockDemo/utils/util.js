const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  // const day = date.getDate()
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  return [year,'年',month,'月'].map(formatNumber).join('') 
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n :"" + n
}

module.exports = {
  formatTime: formatTime
}