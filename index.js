let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name)
} 
function destructivelyPrependCat(name){
    return cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name) 
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
function appendCat(name){
    return [...cats, name]
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(name){
    let newArray = [...cats]
    newArray.pop()
    return newArray
}
 
 function removeFirstCat(name){
    let newArray = [...cats]
    newArray.shift()
    return newArray
 }

