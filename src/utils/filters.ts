import moment from 'moment'

export const capitalize = (value: any) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const formatDate = (value:any) => {
  if (value) {
    return moment(String(value)).format('MM-DD-YYYY HH:mm A')
  }
}

export const formatTimestamp = (value: any) => {
  if(value) {
    let format = new Date(value) 
    return moment(String(format)).format('MM-DD-YYYY HH:mm A')
  }
}

export const formatTimestampString = (value: any) => {
  if(value) {
    var MyValue = value.split(".")[1];
    let format = new Date(Number(MyValue))
    return moment(String(format)).format('MM-DD-YYYY HH:mm A')
  }
}    

export const formatTime = (value:any) => {
  if (value) {
    //return moment(String(value)).format('hh:mm')
    let valueArray = value.split(":");
    return valueArray[0] + ':' + valueArray[1];
  }
}

export const addZeroes = (number: number) => {
  var num = Number(number);
  const finalOutput = num.toFixed(2)
  return finalOutput;
}


export const formatNumber = (value:number) => {
  // return amount(value).format("0,0"); // displaying other groupings/separators is possible, look at the docs
}

// capitalize: fu    nction(value) {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
// },

export const lower = (value:any) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toLowerCase()
}

export const uppercase = (value: any) => {
  return value.toUpperCase()
}
    