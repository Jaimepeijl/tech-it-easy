// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// 1a
const types = inventory.map((inventory) => {
    return inventory.type
})
console.log(types)
// 1b
const soldOutTvs = inventory.filter ((tv) =>{
    return tv.originalStock - tv.sold === 0
})
console.log(soldOutTvs)
// 1c
const booleanAmbiLight = inventory.filter((tv) =>{
    return tv.options.ambiLight === true

})
console.log("Opdracht 1c : " + booleanAmbiLight)

// 1d

inventory.sort((a, b) =>{
    if(a.price<b.price){return -1}
    if(a.price>b.price){return 0}
})
console.log(inventory)