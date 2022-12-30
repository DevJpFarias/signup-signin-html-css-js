var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var buttonColor = document.querySelector('.buttonColor')

document.querySelector('#buttonSignIn')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    buttonColor.style.left = "0px"
})

document.querySelector('#buttonSignUp')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    buttonColor.style.left = "110px"
  })