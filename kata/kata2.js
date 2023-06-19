function points(games) {

   
        let totalPoints = 0;
      
        for (let i = 0; i < games.length; i++) {
          const matchResult = games[i].split(':');
          const homeTeamScore = matchResult[0];
          const awayTeamScore = matchResult[1];
          console.log(awayTeamScore);
      
          if (homeTeamScore > awayTeamScore) {
            totalPoints += 3; // Victoire de l'équipe à domicile
          } else if (homeTeamScore === awayTeamScore) {
            totalPoints += 1; // Match nul
          } else {
            totalPoints += 0; // Défaite de l'équipe à domicile
          }
        }
      
        return totalPoints;
      }
      

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);