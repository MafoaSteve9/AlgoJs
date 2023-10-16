String.prototype.toJadenCase = function () {
    return this.split(' ').map(x=>x.slice(0,1).toUpperCase() + x.slice(1).toLowerCase()).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real")