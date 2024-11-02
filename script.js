var romanToInt = function(s) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
      ]

    let num
    if(!num){
        num = 0
    }
    
    for(let romanNumber = 0; romanNumber < romanNumerals.length; romanNumber++){
       let firstNum = s.at(0)
       let secondNum = s.slice(0,2)
       if(romanNumerals[romanNumber].symbol ==  secondNum | romanNumerals[romanNumber].symbol == firstNum){
        let minusLeftVal = romanNumerals[romanNumber].symbol ==  secondNum ? secondNum : firstNum
        num += romanNumerals[romanNumber].value
        let newStr = s.replace(minusLeftVal,'')
        s = newStr
        romanNumber = -1
       }
    }
    return num;
      
};

console.log(romanToInt("MMCCCXCIX"))