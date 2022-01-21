function checkInputs(previewForm) {
    var fname = document.forms["qform"]["fname"].value;
    var eMail = document.forms["qform"]["eMail"].value;
    var description = document.forms["qform"]["description"].value;
    var subject = document.querySelector('input[name="theme"]:checked');

    if (fname == "") {
        alert("Please enter your full name");
        fname.focus();
    } else if (eMail == "") {
        alert("Please enter your email address");
        eMail.focus();
    } else if (subject == null) {
        alert("Please select a query subject");
    } else if (description.value == "") {
        alert("Enter details of your query");
        description.focus();
    } else {
        previewForm(fname, eMail, description, subject.value);
    }
}

function previewForm(fname, eMail, description, subject) {
    document.getElementById("form_content").innerHTML =
        "<p>Name: <span>" +
        fname +
        "</span><br>Email Address: <span>" +
        eMail +
        "</span><br>Subject: <span>" +
        subject +
        "</span><br>Details: <div id='description'>" +
        description +
        "</div></p>";
    document.getElementById("preview_form").style.display = "block";
    document.forms["qform"].style.display = "none";
}

function editForm() {
    document.getElementById("preview_form").style.display = "none";
    document.forms["qform"].style.display = "block";
}

function sendForm() {
    document.getElementById("qform").submit();
    alert("Thank you for your query! It is now on its way.");
    location.reload();
}
