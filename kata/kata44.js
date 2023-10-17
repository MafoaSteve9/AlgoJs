function alphabetPosition(text) {
    const words = text.split('');
    const poistion = []
    for (const word of words) {
        const trim = word.trim()
        if (trim.length > 0) {
            const apb = trim.toLowerCase().charCodeAt(0) - 96;
            if (apb >= 1 && apb <= 26) {
                poistion.push(apb)
            }
        }
    }
    return poistion
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");