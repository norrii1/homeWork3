let generate = document.getElementById('generate')
var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
var result = ''


generate.addEventListener('click', function () {

  let length = prompt(' How long do you want your password?')
  let lowerCase = confirm(' lower case?')
  let upperCase = confirm(' Upper case?')
  let nums = confirm(' Nums?')
  let specChars = confirm(' Special Characters?')

  for (let i = 0; i < length; i++) {
    if (length < 8 && length > 128) {
      alert('invalid')
    }
    let computer = lowerArray[Math.floor(Math.random() * lowerArray.length)]
    console.log(computer)
    result = result.concat(computer)

    let computer2 = upperArray[Math.floor(Math.random() * upperArray.length)]
    console.log(computer2)
    result = result.concat(computer2)
    let computer3 = numArray[Math.floor(Math.random() * numArray.length)]
    console.log(computer3)
    result = result.concat(computer3)
    let computer4 = specArray[Math.floor(Math.random() * specArray.length)]
    console.log(computer4)
    result = result.concat(computer4)
    console.log(result)
    if (result.length >= length) {
      break;
    }
  }
  document.querySelector('textarea').value = result
})














