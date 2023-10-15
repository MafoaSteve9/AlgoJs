// var number = function(busStops){
//   const add = busStops.map(x=> x.slice(0,1).reduce((acc, curr)=> acc + curr, 0));
//   const sous = busStops.map(x=> x.slice(1,2)).reduce((acc, curr)=> acc - curr);
//   const reduce = add.reduce((acc, curr)=> acc + curr, sous);
//   return reduce;

  function number(busStops) {
  return busStops.reduce((acc, [enter, exit]) => acc + enter - exit, 0);
}

console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
console.log(number([[0,0]]),0);