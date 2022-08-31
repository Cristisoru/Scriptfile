function randomNumber(num) {
    return Math.floor(Math.random() * num)
}
const fortuneTeller = {
    signInfo: ['libra', 'capricorn', 'aries', 'leo', 'taurus'],
    choiceOutput: ['Bold and ambitious', 'Vivacious', 'logical', 'practical', 'intense'],
    advice: ['do more', 'stop doubting', 'be confident', 'dont overthinking', 'dont complicate yourself']
}
let personalChoice = []
for(let prop in fortuneTeller) {
    let optionIdx = generateRandomNumber(fortuneTeller[prop].length)
  
      
    switch(prop) {
      case 'signInfo':
        personalChoice.push(`Your sign right now is a "${fortuneTeller[prop][optionIdx]}".`)
        break
      case 'choiceOutput':
        personalChoice.push(`You are: "${fortuneTeller[prop][optionIdx]}".`)
        break
      case 'advice':
        personalChoice.push(`You should: "${fortuneTeller[prop][optionIdx]}".`)
        break
      default:
        personalChoice.push('There is not enough info.')
    }
  }