

const form = document.getElementById("form");

// const phoneField = document.getElementById("phone")
// const emailField = document.getElementById("email")
// const submitBtn = document.getElementById("submitBtn");

// form.addEventListener('submit', () => {
//     let allFillled = true;
//     input.forEach(input => {
//         if (input.value === '') {
//             alert("Please fill out all fields");
//             allFillled = false
//         }
//     })

//     submitBtn.disabled = !allFillled;

//     }
// )


// emailField.addEventListener("input", function() {
//     if (emailField.validity.patternMismatch) {
//         emailField.setCustomValidity("Email must be like: example@gmail.com");
//     }
//     else {
//         emailField.setCustomValidity("");
//     }

//     emailField.reportValidity();
// })


// phoneField.addEventListener("input", function() {
//     if (phoneField.validity.patternMismatch) {
//         phoneField.setCustomValidity("Phone must be like: ### ### ###");
//     }
//     else {
//         phoneField.setCustomValidity("");
//     }

//     phoneField.reportValidity();
// })


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let isValid = true;
   
    const fields = document.querySelectorAll('input')

    fields.forEach(field => {
        
        const fieldValid = validateField(field);

        if (!fieldValid) {
            isValid = false;
        }
    })


    if (!isValid) {
        console.log("invalid")
    }
    else {
        console.log("submitting")
    }
});

function validateField(field) {
    const errorEl = field.parentElement.querySelector('.error-message')
    
    if (!field.validity.valid) {
        console.log(`field is invalid: `, field)
        // isValid = false;

        errorEl.textContent = "This field is invalid";
        return false;
    }

    return true;
}

