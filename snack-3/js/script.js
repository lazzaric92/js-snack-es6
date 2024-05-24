//todo: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore utilizzando destructuring e template literal.

/*
Wilier 0 SLR -- 6.5 kg.
Cannondale SuperSix -- 8.0 kg.
Trek Emonda 2020 -- 6.81 kg.
Trek Emonda SLR -- 4.65 kg.
SAVA Phantom 2.0 -- 8.1 kg.
*/

const bikes = [
    {
        name: 'Wilier 0 SLR',
        weight: 6.5
    },
    {
        name: 'Cannondale SuperSix',
        weight: 8
    },
    {
        name: 'Trek Emonda 2020',
        weight: 6.81
    },
    {
        name: 'Trek Emonda SLR',
        weight: 4.65
    },
    {
        name: 'SAVA Phantom 2.0',
        weight: 8.1
    }
]

function getLowestNumber(arguments){
    if(arguments.length > 1){
        let index = 0;
        while (index < arguments.length) {
            if(arguments[0] < arguments[1]){
                arguments.splice(1, 1);
            } else {
                arguments.splice(0, 1);
            }
            index++;
        }

        if(arguments[0] < arguments[1]){
            arguments.splice(1, 1);
        } else {
            arguments.splice(0, 1);
        }

    } else {
        return arguments[0];
    } 
}

const bikesWeight = bikes.map((element) => element.weight);
getLowestNumber(bikesWeight);
console.log(bikesWeight);