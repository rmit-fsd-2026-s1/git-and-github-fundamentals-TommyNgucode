

const form = document.getElementById("form");
const input = form.querySelectorAll("input");

const phoneField = document.getElementById("phone")
const emailField = document.getElementById("email")
const submitBtn = document.getElementById("submitBtn");

form.addEventListener('submit', () => {
    let allFillled = true;
    input.forEach(input => {
        if (input.value === '') {
            alert("Please fill out all fields");
            allFillled = false
        }
    })

    submitBtn.disabled = !allFillled;

    }
)


emailField.addEventListener("input", function() {
    if (emailField.validity.patternMismatch) {
        emailField.setCustomValidity("Email must be like: example@gmail.com");
    }
    else {
        emailField.setCustomValidity("");
    }

    emailField.reportValidity();
})


phoneField.addEventListener("input", function() {
    if (phoneField.validity.patternMismatch) {
        phoneField.setCustomValidity("Phone must be like: ### ### ###");
    }
    else {
        phoneField.setCustomValidity("");
    }

    phoneField.reportValidity();
})
