 <!-- customerBackend.php -->
 <?php
 error_reporting(E_ALL);
 ini_set("display_errors", 1);

$password = $_POST["password"];

$charizardAmount = $_COOKIE['charizardNumber'];
$tyranitarAmount = $_COOKIE['tyranitarNumber'];
$heracrossAmount = $_COOKIE['heracrossNumber'];

$shippingType = $_POST["shipping"];
$shippingAmount = 0;

if($shippingType == "Free 7 day")
{
  $shippingAmount = 0;
}
else if($shippingType == "$50.00 Overnight")
{
  $shippingAmount = 50;
}
else if($shippingType == "$5.00 three day")
{
  $shippingAmount = 5;
}

echo "Thank you for your purchase!<br><br>";
echo "Your password is: " . $password . "<br>";
echo "Below is the receipt of your transaction:<br><br><br>";

echo "<table border =\"1\">";

echo "<tr>";


echo "<td>";
echo "";
echo "</td>";

echo "<td>";
echo "Quantity";
echo "</td>";

echo "<td>";
echo "Cost Per Item";
echo "</td>";

echo "<td>";
echo "Sub total";
echo "</td>";

echo "</tr>";

echo "<tr>";

//////////////////////////////
echo "<td>";
echo "Charizard";
echo "</td>";

echo "<td>";
echo $charizardAmount;
echo "</td>";

echo "<td>";
echo "$100";
echo "</td>";

echo "<td>";
echo "$" . "" . 100*$charizardAmount;
echo "</td>";

echo "</tr>";
//////////////////////
echo "<td>";
echo "Tyranitar";
echo "</td>";

echo "<td>";
echo $tyranitarAmount;
echo "</td>";

echo "<td>";
echo "$20";
echo "</td>";

echo "<td>";
echo "$" ."". 20*$tyranitarAmount;
echo "</td>";

echo "</tr>";
//////////////////////////////////
echo "<td>";
echo "Heracross";
echo "</td>";

echo "<td>";
echo $heracrossAmount;
echo "</td>";

echo "<td>";
echo "$5";
echo "</td>";

echo "<td>";
echo "$" . "" . 5*$heracrossAmount;
echo "</td>";

echo "</tr>";
///////////////////////////

echo "<td>";
echo "Shipping";
echo "</td>";
//
// echo "<td>";
// echo $shipping;
// echo "</td>";

echo "<td colspan = '2'>";
echo $shippingType;
echo "</td>";



// <td class="empty"> </td>
//
// echo "<td class="empty">"
//
//
// "</td>";


echo "<td>";
echo "$" . "" . (5*$heracrossAmount + 100*$charizardAmount + 20*$tyranitarAmount + $shippingAmount);
echo "</td>";

echo "</tr>";



echo "</table>";


 ?>
