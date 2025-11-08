document.getElementById("envoibtn").addEventListener('click', function() {
  let c = 0;
  const eMessage = document.getElementById('pEmail')
  const nMessage = document.getElementById('pNom')
  const mMessage = document.getElementById('pMessage')
  const cnfrMessage = document.getElementById('cnfrm')
  const eInput = document.getElementById('email')
  const nInput = document.getElementById('nom')
  const mInput = document.getElementById('message')
  const inpts = document.querySelectorAll('.inpts')
  if (eInput.value === "" ) {
    eMessage.textContent = 'Please enter your Email'
    eMessage.style.display = 'block'
  }else if(!eInput.value.endsWith('@gmail.com')){
    eMessage.textContent = 'Email must end with @Gmail.com'
    eMessage.style.display = 'block'
 }else if(/\d/.test(eInput.value)){
   eMessage.textContent = 'Please enter your Email'
 }else {
    eMessage.style.display = 'none'
    c++
  }
  if (nInput.value === "") {
    nMessage.textContent = 'Please enter your Name'
    nMessage.style.display = 'block'
  } else if(/\d/.test(nInput.value)){
    nMessage.textContent = 'Its Not A Name'
  }else {
    nMessage.style.display = 'none'
    c++
  }
  if (mInput.value === "") {
    mMessage.textContent = 'Please enter your Message'
    mMessage.style.display = 'block'
  } else if(/\d/.test(mInput.value)){
    mMessage.textContent = 'Give us a text message to help you'
  }else {
    mMessage.style.display = 'none'
    
    c++
  }
  if(c==3){
    cnfrMessage.style.display = 'block'
    inpts.forEach(input => {input.style.marginBottom = '20px'} )
    mInput.value = ""
    nInput.value =""
    eInput.value = ""
   }else{
    cnfrMessage.style.display = 'none'
    inpts.forEach(input => {input.style.marginBottom = '5px'} )
   }
});
