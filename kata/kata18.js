function openOrSenior(data) {
  const result = [];

  for (let i = 0; i < data.length; i++) {
      const [age, handicap] = data[i];

      if (age >= 55 && handicap > 7) {
          result.push("Senior");
      } else {
          result.push("Open");
      }
  }

  return result;
}








console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
