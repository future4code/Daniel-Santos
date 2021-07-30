const findFirstRecurringCharacter = (input) => {
    const charHashMap = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };

  // 1. O(n)

  export const func = (
    source,
    comparison
  ) => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;
  
    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };

  // 2. O(n)

  export const replaceMatrixValue = (
    matrix,
    rowIndex,
    columnIndex,
    value
  ) => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }
  
    matrix[rowIndex][columnIndex] = value;
  };


  //3. O(n)

  function verifyIfExistRepeatedNumbers(listOfNumbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) { 
        return true;
      }
    }
    return false;
  }

  //4. O(n²) => Aqui index of é uma função de callback que em sua estrutura tem um loop que percorre todos os indices do Array