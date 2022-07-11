const names= ("Karen", "Susan", "Bill")
const event = "birthday"

function writeCards(cards, event) {
    let newArray= []
    for (let i = 0; i < cards.length; i++ ) {
    newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return newArray  
}
 writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

 function countDown() {
    let number = 10
    while (number > -1) {
      console.log(number--)
    }
    return countDown  
  }

  



