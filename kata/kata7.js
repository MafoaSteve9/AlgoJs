const quarterOf = (month) => {
    if(month <= 3) {
        return 1;
    }
    else if(month <= 6) {
        return 2;
    }
    else if(month <= 9 ) {
        return 3;
    }
    else {
        return 4;
    }
    
  }





console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(6), 2)
console.log(quarterOf(11), 4)