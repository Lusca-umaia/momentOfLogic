let objectNotas = {
    5: 0,
    10: 0,
    20: 0,
}

function Troco(Values) {
    let control = 0
    Values.forEach(element => {
        objectNotas[element] += 1

        if (element != 5) {
            if (element == 20) {
                if (objectNotas['5'] > 2) {
                    objectNotas['5'] -= 3
                }
                else if (objectNotas[5] > 0 && objectNotas[10] > 0) {
                    objectNotas['5'] -= 1
                    objectNotas['10'] -= 1
                }
                else {
                    control = 1
                }
            }

            else {
                if (objectNotas['5'] > 0) {
                    objectNotas['5'] -= 1
                }
                else {
                    control = 1
                }
            }
        }
    });

    if (control == 0) {
        console.log('Troco suficiente')
    }
    else {
        console.log('Troco insuficiente')
    }
}

Troco([5, 5, 20, 5])