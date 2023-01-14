export const stringToArrayConverter = (str) => {
  let arr = [];

  let data = str.substr(1, str.length - 2);
  let splitedData = data.split(",");

  for (let i = 0; i < splitedData.length; i++) {
    let element = splitedData[i].substr(1, splitedData[i].length - 2);
    arr.push(element);
  }
  return arr
};

export const stringToArrayConverterForSingleString = (str) => {
    let arr = [];

    let data = str.substr(1, str.length - 2);
    let splitedData = data.split(",");

    for (let i = 0; i < splitedData.length; i++) {

      arr.push(splitedData[i]);
    }
    return arr
  };
