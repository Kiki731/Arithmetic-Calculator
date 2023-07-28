const add = (firstnum, secondnum) =>{
    return parseInt(firstnum) + parseInt(secondnum);
}
const subtract = (firstnum, secondnum) =>{
    return parseInt(firstnum) - parseInt(secondnum);
}
const mult = (firstnum, secondnum) =>{
    return parseInt(firstnum) * parseInt(secondnum);
}
const div = (firstnum, secondnum) =>{
    return parseInt(firstnum) / parseInt(secondnum);
}
const mod = (firstnum, secondnum) =>{
    return parseInt(firstnum) % parseInt(secondnum);
}
const pow = (firstnum, secondnum) =>{
    return parseInt(firstnum) ** parseInt(secondnum);
}

$(document).ready(() => {
    $("#form-one").submit((event) => {
        event.preventDefault();
        const firstnum = $("#num-one").val();
        const secondnum = $("#num-two").val();
        const result = add (firstnum, secondnum);
        $("#display").text(result)
    });
    $("#form-two").submit((event) =>{
        event.preventDefault();
        const firstnum = $("#num_one").val();
        const secondnum = $("#num_two").val();
        const result = subtract (firstnum, secondnum);
        $("#display2").text(result)
    });
    $("#form-three").submit((event) =>{
        event.preventDefault();
        const firstnum = $("#number-one").val();
        const secondnum = $("#number-two").val();
        const result = div (firstnum, secondnum);
        $("#display3").text(result)
    });
    $("#form-four").submit((event) => {
        event.preventDefault();
        const firstnum = $("#number_one").val();
        const secondnum = $("#number_two").val();
        const result = mod (firstnum, secondnum);
        $("#display4").text(result)
    })
    $("#form-five").submit((event) => {
        event.preventDefault();
        const firstnum = $("#numberone").val();
        const secondnum = $("#numbertwo").val();
        const result = pow (firstnum, secondnum);
        $("#display5").text(result)
    })
});
