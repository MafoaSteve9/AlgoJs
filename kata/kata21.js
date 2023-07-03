function getMiddle(s)
{
   const length = s.length;
   const middleIndex = (length / 2);

   if (length % 2 == 0) {
    return s.substring(middleIndex -1 , middleIndex + 1)
   }
   else {
     return s.charAt(middleIndex);
   }
}



console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");