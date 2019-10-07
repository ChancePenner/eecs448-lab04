<?php
   echo "<p>Multiplication Table!</p>";
?>

<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

//Inside myfirstprogram.php
function multiply($x, $y) {
    $z = $x * $y;
    return $z;
}


$cols = 100;
$rows = 100;

ini_set("display_errors", 1);

echo "<table border =\"1\">";

for($i = 1; $i <= $rows; $i++)
{
  echo '<tr>';
  for($j = 1; $j <=$cols; $j++)
  {
    echo '<td>' .multiply($i,$j). '</td>';
  }
    echo '</tr>';
}
echo "</table>";


?>
