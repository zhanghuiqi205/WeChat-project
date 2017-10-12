function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取内地Top100 详细信息
function getInlandlistInfo(id, callback) {
  wx.request({
    url: 'https://route.showapi.com/213-4?showapi_appid=38241&showapi_sign=8d037e7fe3e9463bb7f30955df87e7ea&topid=5',
    data: {},
    method: 'GET',
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      if (res.showapi_res_code == 0) {
        console.log("请求的结果"+res.data);
        callback(res.data);
      }
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getInlandlistInfo: getInlandlistInfo
}
