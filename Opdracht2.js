// Opdracht 2 - Elementen in de DOM plaatsen

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console
let soldTvs = 0
for (let i = 0; i < inventory.length; i++) {

    soldTvs += inventory[i].sold
    console.log("amount sold : " + soldTvs)
}
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const tweeB = document.getElementById("tweeB")
tweeB.textContent = `Het antwoord op vraag 2B is : 'Er zijn ${soldTvs} Tv's verkocht'`

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let boughtTvs = 0
for (let i = 0; i < inventory.length; i++) {

    boughtTvs += inventory[i].originalStock
    console.log("amount bought : " + boughtTvs)
}

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const tweeC = document.getElementById("tweeC")
tweeC.textContent = `Het antwoord op vraag 2C is : 'Er zijn ${boughtTvs} Tv's ingekocht'`

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let tvsLeft = boughtTvs - soldTvs

const tweeE = document.getElementById("tweeE")
tweeE.textContent = `Het antwoord op vraag 2E is : 'Er moeten nog ${tvsLeft} Tv's verkocht worden'`
