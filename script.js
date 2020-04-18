let zach = []
function yuGiOh(runner) {
    for (let i = 1; i < runner; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            zach.push("yu-gi-oh")
        } else if (i % 2 === 0 && i % 3 === 0) {
            zach.push("yu-gi")
        } else if (i % 5 === 0) {
            zach.push("oh")
        } else if (i % 3 === 0) {
            zach.push("gi")
        } else if (i % 2 === 0) {
            zach.push("oh")
        } else {
            zach.push(i)
        }
    }
    console.log(zach)
}
yuGiOh(50);