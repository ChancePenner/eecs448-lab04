<!-- Quiz.php -->

<?php
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
//access the global array called $_POST to get the values from the text fields
$numberCorrect = 0;

$answer = $_POST["question1"];
echo "Question1: What does <b> PHP </b> stand for?<br>";
echo "You answered: " . $answer . "<br>";
echo "Correct answer: Hypertext Preprocessor<br><br>";
if($answer == "Hypertext Preprocessor")
{
  $numberCorrect++;
}

$answer = $_POST["question2"];
echo "Question2: What does <b> HTML </b> stand for?<br>";
echo "You answered: " . $answer . "<br>";
echo "Correct answer: Hypertext Markup Language<br><br>";
if($answer == "Hypertext Markup Language")
{
  $numberCorrect++;
}

$answer = $_POST["question3"];
echo "Question3: Which programming language is the oldest?<br>";
echo "You answered: " . $answer . "<br>";
echo "Correct answer: C<br><br>";
if($answer == "C")
{
  $numberCorrect++;
}

$answer = $_POST["question4"];
echo "Question4: Which programming language is the newest?<br>";
echo "You answered: " . $answer . "<br>";
echo "Correct answer: Java<br><br>";
if($answer == "Java")
{
  $numberCorrect++;
}

$answer = $_POST["question5"];
echo "Question5: What animal is the logo for PHP?<br>";
echo "You answered: " . $answer . "<br>";
echo "Correct answer: Elephant<br><br>";
if($answer == "Elephant")
{
  $numberCorrect++;
}

echo "You got " . $numberCorrect . "/5 correct.<br>";
$percent = $numberCorrect * 20;
echo "Thats a " . $percent . "%.<br><br>";
?>
