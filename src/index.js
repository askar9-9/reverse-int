module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1
    }
    
    let arr = []

    while (n > 0) {
        last = n % 10
        arr.push(last)
        n = (n - last) / 10
    }

    return Number(arr.join(""))
}
