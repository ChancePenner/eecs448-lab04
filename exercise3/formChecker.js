// formChecker.js
var amounts =
{
  charizardNumber: Number(document.querySelector("#charizardAmount")).value,
  tyranitarNumber: Number(document.querySelector("#tyranitarAmount")).value,
  heracrossNumber: Number(document.querySelector("#heracrossAmount")).value,

  setAmounts: function()
  {
    this.charizardNumber= Number(document.querySelector("#charizardAmount").value);
    this.tyranitarNumber= Number(document.querySelector("#tyranitarAmount").value);
    this.heracrossNumber= Number(document.querySelector("#heracrossAmount").value);


    document.cookie='charizardNumber=' + this.charizardNumber ;
    document.cookie='tyranitarNumber=' + this.tyranitarNumber ;
    document.cookie='heracrossNumber=' + this.heracrossNumber ;
    //because I did not have my html "charizardAmount", "tyranitarAmount" and "heracrossAmount"
    //in the php form, I had to do all this just to gain access to them in the php file

  }
};


function setAmount()
{
  amounts.setAmounts();
}

function checkInput()
{
  if(checkAmountBought() && checkShipping() && checkUsername() && checkPassword())
  {
    setAmount();
  }
  else
  {

    event.preventDefault()
    return false;
  }

}

function checkAmountBought()
{
  setAmount();
  let charizardAmount = document.querySelector("#charizardAmount").value;
  // console.log(charizardAmount);

  let tyranitarAmount = document.querySelector("#tyranitarAmount").value;
  // console.log(tyranitarAmount);

  let heracrossAmount = document.querySelector("#heracrossAmount").value;
  // console.log(heracrossAmount);

  if(charizardAmount.includes(" ") || tyranitarAmount.includes(" ") || heracrossAmount.includes(" "))
  {
    alert("Please only type numbers in the box. No spaces or letters allowed");
    return false;
  }

  //check that there is input in all boxes
  if(charizardAmount.length<1 || tyranitarAmount.length < 1 || heracrossAmount.length < 1)
  {
    // console.log("empty");
    alert("Please select how many you wish to purchase.")
    return false;
  }

  charizardAmount = Number(charizardAmount);
  tyranitarAmount = Number(tyranitarAmount);
  heracrossAmount = Number(heracrossAmount);

  if(charizardAmount < 0 || tyranitarAmount < 0 || heracrossAmount < 0)
  {
    // console.log("negative number");
    return false;
  }
  if(Number.isInteger(charizardAmount) && Number.isInteger(tyranitarAmount) && Number.isInteger(heracrossAmount))
  {
    // console.log("ALL INTS");
    return true;
  }
  else
  {
    // console.log("not ints");
    alert("Please only type numbers in the box. No spaces or letters allowed");
    return false;
  }

}

function checkShipping()
{
  let radioButtons = document.getElementsByTagName("input");
  for(let i=0;i<radioButtons.length;i++)
  {
    if(radioButtons[i].type == "radio" && radioButtons[i].checked)
    {
      // alert("At least one is checked");
      return true;
    }
  }
  alert("Please select a shipping option");
  return false;
}

function checkUsername()
{
    // console.log("checkUsername()");

    username = document.querySelector("#username").value;
    // console.log(username);

   if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username))
   {
     return true;
   }
   else
   {
     alert("Please enter a username in the form of an e-mail");
     return false;
   }
}

function checkPassword()
{
  let password = document.querySelector("#password").value;
  if(password.length < 1)
  {
    alert("Please enter your password");
    return false;
  }
  else
  {
    return true;
  }
}

function clearInput()
{
  let inputs = document.getElementsByTagName("input");
  for(let i=0;i<inputs.length;i++)
  {
    if(inputs[i].value != "Submit" && inputs[i].type != "radio") //to not clear "Submit" on the button
    {
      inputs[i].value = "";
    }
    if(inputs[i].type == "radio")
    {
      inputs[i].checked = false;
    }
  }

}

function getCharizardAmount()
{
  return document.querySelector("#charizardAmount").value;
}
