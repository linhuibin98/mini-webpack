
function cssLoader(source) {
  let arr = ['let list = []']
  let pos = 0
  let reg = /url\((.+?)\)/g
  let current;
  while(current = reg.exec(source)) {
    let [matchUrl, group] = current;
    let last = reg.lastIndex - matchUrl.length;
    arr.push(`list.push(${JSON.stringify(source.slice(pos, last))})`)
    pos = reg.lastIndex
    // 注意这里的字符串拼接
    arr.push(`list.push('url(' + require(${group}) +')')`)
  }
  arr.push(`list.push(${JSON.stringify(source.slice(pos))})`)
  arr.push(`module.exports = list.join('')`)
  console.log(arr.join('\r\n'))
  return arr.join('\r\n');
}

module.exports = cssLoader;