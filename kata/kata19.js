function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m
  }
}
// const paperwork = (n,m) => [n, m].map(x => x < 0) ? 0 : n*m;


console.log(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
console.log(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
console.log(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
console.log(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
console.log(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');