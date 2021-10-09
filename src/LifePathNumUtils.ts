export const getLifePathNumber = (bday: String) =>{//consider input var type
    // console.log(`Date passed to getlifepathnum ${bday}`);
    let bdayNums = bday.split("/").map(n =>{
        return getSum(Number(n));
    });
    return getSum(bdayNums[0] + bdayNums[1] + bdayNums[2]);
}

const getSum = (n: number) =>{
    if(n === 11 || n === 22 || n === 33) return n;
    let out = getDigitSum(n);
    while((out > 9) && (out !== 11 && out !== 22 && out !== 33)){
        out = getDigitSum(out);
    }
    return out;
}

const getDigitSum = (n: number) =>{
    let sum = 0;
    while(n !== 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

export const getDaysInMonth = function(month: number,year: number) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };