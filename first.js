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

console.log(createArrayOfArrays(countries))