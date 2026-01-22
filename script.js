function getReason() {
    const reasons = [
        "You have the cutest smile.",
        "You have a kind heart.",
        "You are incredibly sweet.",
        "You recognize that we can only do our best.",
        "Your voice puts me at ease.",
        "Your hugs are the best.",
        "Your face gets a little red when you are embarrassed.",
        "Your reactions are adorable.",
        "You do your best to make sure we are both okay.",
        "You are way too loveable.",
        "You smile whenever I kiss you on the cheek and it's really cute", 
        "You are so warm."
    ];
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.querySelector(".reason").textContent = reasons[randomIndex];
}

function bed_next() {
    document.getElementById("bedroom-image").src = "images/shock.gif"
    document.getElementsByTagName("p")[0].textContent = "Waking up, you find that I am not beside you. A note is left on the nightstand.";
    document.querySelector("button").textContent = "Read the note.";
    document.querySelector("button").onclick = read_note;
}

function read_note() {
  // Change main image
  document.getElementById("bedroom-image").src = "images/bedroom-note.gif";

  // Update text
  document.getElementsByTagName("p")[0].textContent =
    "The note reads: Hi Honey! I have escaped your grasp and now you must find me. I have provided a series of puzzles, each leading to where you need to head next. Here is your first puzzle: Can you get me boba from my favourite place? I'm thirsty. Thanks dear!";

  // Hide button
  document.querySelector("button").style.display = "none";

  // Create form
  form = document.createElement("form");

  form.innerHTML = `
    <label for="answer">Where do you go?:</label>
    <input type="text" id="answer" required>
    <input type="submit" value="Submit">
    <p id="error" style="color:red;"></p>
  `;

  document.body.appendChild(form);

  // Validate answer
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswers = "nowtea"; // change as needed

    if (correctAnswers == userAnswer) {
      window.location.href = "nowtea.html";
      
    } else {
      document.getElementById("error").textContent =
        "Not quite right. Try again Honey!";
    }
  });

}

function nowtea_note() {
    document.getElementById("nowtea-image").src = "images/nowtea-note.gif";
    document.getElementsByTagName("p")[0].textContent = "The note reads: Great job Honey! Now, to find me, think about the first place we went to on our first weekend as a couple. What is the name of that place?";
    // Hide button
    document.querySelector("button").style.display = "none";

    // Create form
    form = document.createElement("form");

    form.innerHTML = `
        <label for="answer">Answer:</label>
        <input type="text" id="answer" required>
        <input type="submit" value="Submit">
        <p id="error" style="color:red;"></p>
    `;

    document.body.appendChild(form);

    // Validate answer
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
        const correctAnswers = ["stc"]; // change as needed

        if (correctAnswers.includes(userAnswer)) {
        window.location.href = "stc.html";
      
        } else {
        document.getElementById("error").textContent =
            "Not quite right. Try again Honey!";
        }
    });
}

function math_note() {
    document.getElementById("stc-image").src = "images/stc-note.jpg";
    document.getElementsByTagName("p")[0].textContent = "The note reads: To find me, think about where our first photo together was taken and drawn. What is the name of that place?";
    // Hide button
    document.querySelector("button").style.display = "none";

    // Create form
    form = document.createElement("form");

    form.innerHTML = `
        <label for="answer">Answer:</label>
        <input type="text" id="answer" required>
        <input type="submit" value="Submit">
        <p id="error" style="color:red;"></p>
    `;

    document.body.appendChild(form);

    // Validate answer
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
        const correctAnswers = ["e7", "pse", "engineering 7", "pearl sullivan engineering", "e7 building"]; // change as needed

        if (correctAnswers.includes(userAnswer)) {
        window.location.href = "e7.html";
      
        } else {
        document.getElementById("error").textContent =
            "Not quite right. Try again Honey!";
        }
    });
}

function e7_note() {
    document.getElementsByTagName("p")[0].textContent = "The note reads: Okay honey, this is the final puzzle! To find me, go to the elevator and click the floor for how many notes you wrote me for Valentine's Day mod 13.";
    // Hide button
    document.querySelector("button").style.display = "none";

    // Create form
    form = document.createElement("form");

    form.innerHTML = `
        <input type="radio" id="1" value="1" name="floor">First Floor<br>
        <input type="radio" id="2" value="2" name="floor">Second Floor<br>
        <input type="radio" id="3" value="3" name="floor">Third Floor<br>
        <input type="radio" id="4" value="4" name="floor">Fourth Floor<br>
        <input type="radio" id="5" value="5" name="floor">Fifth Floor<br>
        <input type="radio" id="6" value="6" name="floor">Sixth Floor<br>
        <input type="radio" id="7" value="7" name="floor">Seventh Floor<br>
        <input type="submit" value="Submit">
        <p id="error" style="color:red;"></p>
    `;

    document.body.appendChild(form);

    // Validate answer
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userAnswer = document.getElementById("6")

        if (userAnswer.checked) {
        window.location.href = "final.html";
      
        } else {
        document.getElementById("error").textContent =
            "Not quite right. Try again Honey!";
        }
    });
}

function final_note() {
    document.getElementById("final-image").src = "images/final-note.gif";
    document.getElementsByTagName("p")[0].textContent = "The final note reads: Congrats Honey! Thanks for going on an adventure with me! Now one last question. Will you be my Valentine?";

    document.querySelector("button").textContent = "Yes!";
    document.querySelector("button").onclick = valentine_yes;
}

function valentine_yes() {
    document.getElementById("final-image").src = "images/mylove.gif";
    document.getElementsByTagName("p")[0].textContent = "I love you so much Jonathan! Happy Valentine's Day!";

    document.querySelector("button").textContent = "Return back to the start.";
    document.querySelector("button").onclick = function() {
        window.location.href = "index.html";
    };
}