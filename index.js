document.querySelector('.cardname').oninput = () => {
  document.querySelector('.display-infor').innerText = document.querySelector('.cardname').value;
};

  document.querySelector('.card-holder-input').oninput = () => {
          document.querySelector('.My-Name').innerText = document.querySelector('.card-holder-input').value;                                       
        
          };
          document.querySelector('.year-input').oninput = () => {
                document.querySelector('.dateDisplay').innerText = document.querySelector('.year-input').value;                                       
              
                };
                document.querySelector('.cvv-input').oninput = () => {
                        document.querySelector('.ccvv').innerText = document.querySelector('.cvv-input').value;                                       
                      
                        };






         

// document.querySelector('.cardname').oninput = () => {
//   document.querySelector('.display-infor').innerText = document.querySelector('.cardname').value;                                       

//   };

//   document.querySelector('.year-input').oninput = () => {
//     document.querySelector('.dateDisplay').innerText = document.querySelector('.year-input').value;                                       
  
//     };

//     document.querySelector('.cvv-input').oninput = () => {
//       document.querySelector('.ccvv').innerText = document.querySelector('.cvv-input').value;                                       
    
//       };
    
//       

//       document.querySelector('.month-input').oninput = () => {
//         document.querySelector('.mmDate').innerText = document.querySelector('.month-input').value;                                       
      
//         }






// let cCard = document.getElementById(cnumber);
// console.log(cnumber)
function creditCardValidation()
{
    const cNumber = document.getElementsByClassName('.card-holder-input');
    // console.log(cNumber);
    let valid =  false;
    let errorMessage = document.getElementsByClassName('.error');
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

const validate = document.getElementsByClassName('form')
validate.addEventListener('submit', (e) => {
    e.preventDefault()

    creditCardValidation();           
})



      
    
    



// const cardNumber = () => {
//   let textLive = document.getElementById('cname').value;
//   let cardLive = document.getElementById('cnumber').value;
//   let total = (textLive*1) + (cardLive*1);
//   console.log(total);
//   // let cardLive = textLive;
//   // console.log(cardLive);
//   document.getElementById('total').innerHTML = "Total = $"+total;
//   // document.textContent = cardLive.value;
//   }


// cardNumber();

// function summation()
// {
//     var input1 = document.getElementById('input1').value;
//     var input2 = document.getElementById('input2').value;
//     var input3 = document.getElementById('input3').value;
//     var total = (input1*1) + (input2*1) +(input3*1);
//     document.getElementById('total').innerHTML = "Total = $"+total;
// }



// document.querySelector('.card-number-input').oninput = () =>{
//   document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
// }