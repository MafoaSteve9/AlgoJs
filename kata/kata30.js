function order(words) {
  const p = words.split(' ');
  return p.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]); // Obtient le premier nombre trouvé dans le mot 'a'
    const numB = parseInt(b.match(/\d+/)[0]); // Obtient le premier nombre trouvé dans le mot 'b'
    return numA - numB; // Compare les nombres pour trier les mots
  }).join(' ');
}
// const order  = words => words.split(' ').sort((a,b) => a.match(/\d+/)[0] - b.match(/\d+/)[0]).join(' ')
console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")