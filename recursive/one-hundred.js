const zeroHundred = (n) => {
    if (n === 101) {
        return n
    }
    console.log(n + '\n')

    return zeroHundred(n + 1)
}


zeroHundred(1)