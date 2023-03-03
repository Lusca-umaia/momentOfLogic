function AlphabetProduct(array) {
    let newArray = array.sort((a, b) => a - b)
    let comparation = []

    comparation.push(newArray[0] * newArray[1])

    newArray.splice(newArray.indexOf(comparation[0]), 1)

    comparation.push(newArray[1] * newArray[2])

    newArray.splice(newArray.indexOf(comparation[1]), 1)

    console.log(newArray[3])
}

AlphabetProduct([7, 96, 8, 240, 12, 140, 20, 56])


