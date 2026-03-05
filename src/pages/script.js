

const form = document.getElementById("form");
const input = form.querySelectorAll("input");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener('submit', () => {
    let allFillled = true;
    input.map(input => {
        if (input.value === '') {
            alert("Please fill out all fields");
            allFillled = false
        }
    })

    
    submitBtn.disabled = !allFillled;

}
)