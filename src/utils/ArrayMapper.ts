export const getMergedArray = (array: Array<any>, nbOfEls: number) => {
  let pointer = 0;
  let newArray = [];
  let tempArray = [];
  let tempMax = nbOfEls - 1;
  console.log(array);
  if (!array || array.length < 1) {
    return [];
  }
  while (pointer < array.length) {
    tempArray.push(array[pointer]);
    if ((pointer === tempMax && pointer != 0) || pointer === array.length - 1) {
      newArray.push(tempArray);
      tempArray = [];
      tempMax += nbOfEls - 1;
    }

    pointer++;
  }

  return newArray;
};
