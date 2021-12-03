// validation script here
//var reg = /[a-z]/gi;

const inputs = document.querySelectorAll('input');

//telephone number field
const patterns = {
    telephone:/^\d{11}$/
}; 

//validation function
function validate(field.regex){
    console.regex.test(field.value)
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',(e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[])
    });
});