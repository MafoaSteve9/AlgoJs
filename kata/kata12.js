const areaOrPerimeter = function(l, w) {
  if (l == w) {
      return l * w;
  } else if (l != w) {
      return 2 * (l + w);
  }

}

const areaOrPerimeter = (l,w) => l == w ? (l * w) : 2 * (l+w);





// On vous donne la longueur et la largeur d'un polygone à 4 côtés.
// Le polygone peut être un rectangle ou un carré.
// S'il s'agit d'un carré, indiquez sa surface. 
// S'il s'agit d'un rectangle, vous devez indiquer son périmètre.

// Exemple(Input1, Input2 --> Output)

console.log(areaOrPerimeter(3,  3),  9);
console.log(areaOrPerimeter(6, 10), 32);