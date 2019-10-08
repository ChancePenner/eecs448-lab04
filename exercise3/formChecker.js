// formChecker.js


function checkInput()
{
  alert("The form was submitted");
  if(checkAmountBought() && checkShipping() && checkUsername() && checkPassword())
  {
    event.preventDefault()
return false;
    return true;
  }
  else
  {
    event.preventDefault()
    return false;
  }
  event.preventDefault()

}

function checkAmountBought()
{

  let charizardAmount = document.querySelector("#charizardAmount").value;
  console.log(charizardAmount);

  let tyranitarAmount = document.querySelector("#tyranitarAmount").value;
  console.log(tyranitarAmount);

  let heracrossAmount = document.querySelector("#heracrossAmount").value;
  console.log(heracrossAmount);



  //check that there is input in all boxes
  if(charizardAmount.length<1 || tyranitarAmount.length < 1 || heracrossAmount.length < 1)
  {
    console.log("empty");
    // return false;
    return;
  }

  charizardAmount = Number(charizardAmount);
  tyranitarAmount = Number(tyranitarAmount);
  heracrossAmount = Number(heracrossAmount);

  if(charizardAmount < 0 || tyranitarAmount < 0 || heracrossAmount < 0)
  {
    // return false;
    console.log("negative number");
    return;
  }
  if(Number.isInteger(charizardAmount) && Number.isInteger(tyranitarAmount) && Number.isInteger(heracrossAmount))
  {
    console.log("ALL INTS");
    // return true;
  }
  else
  {
    console.log("not ints");
    // return false;
  }

}

function checkShipping()
{

}

function checkUsername()
{

}

function checkPassword()
{

}
