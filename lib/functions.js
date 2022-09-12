export const dateFormat = (date, separate) => {
  if(date){
    let format = ''
    const dateN = new Date(date)
    let y = dateN.getFullYear()
    let m = dateN.getMonth() + 1
    let d = dateN.getDate()
    m = m<10 ? '0'+m : m
    d = d<10 ? '0'+d : d
    format += y+separate+m+separate+d
    return format
  }
  return false
}