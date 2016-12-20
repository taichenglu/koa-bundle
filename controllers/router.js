const result = () => {
  return new Promise((resolve, reject) => {
    // 延时测试
    setTimeout(() => {
      resolve({
        msg: 'success'
      })
    }, 1000)
  })
}

module.exports = (ctx, next) => {
  return result().then((res) => {
    ctx.body = res
  })
}
