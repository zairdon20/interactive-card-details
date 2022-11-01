
// let cCard = document.getElementById(cnumber);
// console.log(cnumber)
function creditCardValidation()
{
    const cNumber = document.getElementById('cnumber');
    // console.log(cNumber);
    let valid =  false;
    let errorMessage = document.getElementById('error');
    // console.log(errorMessage);
// let regEx = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    // console.log(regEx);regEx
   if(visaRegEx.test(cNumber.value))
     {
       valid = true
       alert('correct card number!')
    //   return true;
     }
   else
     {
      return errorMessage.innerHTML = '<p>Please enter a valid credit card number.</p>';
      console.log(errorMessage);
    //  alert("Please enter a valid credit card number.");
     valid = false
    //  return false;
     }

     return valid
};    

const validate = document.getElementById('form')
validate.addEventListener('submit', (e) => {
    e.preventDefault()

    creditCardValidation();           
})

