let mainEl = document.querySelector('.main')

// Create input
let passwordInput = document.createElement('input')

passwordInput.classList.add('password__input')
passwordInput.setAttribute('placeholder', 'Сгенерировать пароль')

passwordInput.addEventListener('keypress', function (e) {
  e.preventDefault()
})

passwordInput.addEventListener('focus', function () {
  navigator.clipboard.writeText(passwordInput.value)
})


// Create button (copy)
let copyBtn = document.createElement('button')

copyBtn.classList.add('password__copyBtn', 'button')
copyBtn.innerText = 'Скопировать'

copyBtn.addEventListener('click', function () {
  passwordInput.select()
  passwordInput.setSelectionRange(0, 99999)
  
  navigator.clipboard.writeText(passwordInput.value)
})

// Create button (generate)
let generateBtn = document.createElement('button')

generateBtn.classList.add('password__generateBtn', 'button')
generateBtn.innerText = 'Сгенерировать'

generateBtn.addEventListener('click', function () {
  let password = generatePassword(12)

  passwordInput.value = password
})

function generatePassword(passwordLength) {
  let numberChars = '0123456789',
      upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowerChars = 'abcdefghijklmnopqrstuvwxyz',
      symbolChars = '!@#№$%^&?*()_+-='

  let allChars = numberChars + upperChars + lowerChars + symbolChars
  
  let randomString = ''
  
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length)

    randomString += allChars[randomNumber]
  }
  
  return randomString
}

mainEl.append(passwordInput)
mainEl.append(copyBtn)
mainEl.append(generateBtn)