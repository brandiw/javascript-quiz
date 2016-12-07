<h2>Build a quiz using JavaScript and/or JQuery:</h2>
<p><a href="http://javascriptissexy.com/how-to-learn-javascript-properly/">Inspired by this assignment on 'JavaScript Is Sexy' website.</a></p>

<h4><strong>This is a GROUP assignment</strong></h4>
<em>Work with one OR two others.</em>
<em>Only one of you is required to submit, but include names of partners</em>

<h3>What is <strong>Pair Programming</strong>?</h3>

<p>
    <em>
        Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.
    </em>
</p>
<p>Each of you should take turns "driving", or being the person who is typing.</p>
<p>Whoever is not driving, should be performing an over-the-shoulder real-time code review (spotting errors) and giving advice on how to proceed</p>

<hr>

<p><strong>Requirements</strong></p>
<ol>
<li>It is a simple quiz that has radio button choices, and it will show 
the quiz taker his or her score upon completion.</li>
<li>The quiz can show any number of questions and any number of 
choices.</li>
<li>Tally the user’s score and display the final score on the last page. The last page will only show the score. (So you need some way to track how many they got correct)</li>
<li>Use an array of objects to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. The array of questions should look similar to this (Notice that only one question is in this example array; you will add many questions):
<br><br>
var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswerIndex:0}];
<br><br>
<em>
    **Alternatively: You could also take this time to practice using ES6 classes. 
    Could you make a class for a question? What properties or methods would be in that class?
</em>
</li>
<li>Dynamically (with document.getElementById or jQuery) remove the current question and add the next question, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.</li>
<li>Select and implement one one of the BONUS requirements</li>
</ol>

<hr>
<p><strong>Additional requirement</strong></p>
<em>Select and implement one of the following (your choice):</em>

<ul>
    <li>Add data validation: make sure the user answers each question before showing to the next question.</li>
    <li>Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions already answered, show the 
    radio button they already picked.</li>
    <li>Use jQuery to add animation (e.g., fade out the current question and 
    fade in the next question).</li>
    <li>Use setTimeout to create a time limit for each question. If 
    the time expires, they get the question wrong.</li>
    <li>(more difficult) Implement another question type, such as checkboxes or textboxes instead 
    of radio buttons</li>
</ul>
