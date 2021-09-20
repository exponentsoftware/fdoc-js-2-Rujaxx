const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA']

const createArrayOfArrays = (array) => {
    let result = [];
    for ( let names of array){
        result.push([ 
        names.charAt(0) + names.slice(1).toLowerCase(),
        names.slice(0,3),
        names.length
        ])
    }
    return result
}

//feedback Solution
const createArrayOfArrays = (array) => {
    return array.map(names => [
    names.charAt(0) + names.slice(1).toLowerCase(),
    names.slice(0,3),
    names.length
    ])
}

console.log(createArrayOfArrays(countries))