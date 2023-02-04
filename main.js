//inputs

//Variávei de P
const p_name = document.querySelector(".name > p")
const p_number = document.querySelector(".number > p")
const p_date = document.querySelector(".date > p")
const p_cvc = document.querySelector(".cvc > p")

//Variáveis de Inputs
const i_name = document.querySelector("#ipt_name")
const i_number = document.querySelector("#ipt_number")
const i_dtmm = document.querySelector("#date_m")
const i_dtyy = document.querySelector("#date_y")
const i_cvc  = document.querySelector("#cvc")

// cards
const card_name = document.querySelector(".card_name")
const card_number = document.querySelector(".card_number")
const card_mm = document.querySelector(".expire_date > .mm")
const card_yy = document.querySelector(".expire_date > .yy")
const card_cvc = document.querySelector(".card_cvc")

// functions
i_name.focus()

function nt_blank(input,p){
    input.style.border = " 1.4px solid red"
    p.innerHTML = "Can't be blank"
}

function verification(){
    if(i_name.value.length == 0){
        nt_blank(i_name,p_name)

    }
    if(i_number.value.length == 0){
        nt_blank(i_number,p_number)
    }
    if(i_dtmm.value.length == 0){
        nt_blank(i_dtmm,p_date)
    }
    if(i_dtyy.value.length == 0){
        nt_blank(i_dtyy,p_date)
    }
    if(i_cvc.value.length == 0){
        nt_blank(i_cvc,p_cvc)
    }
}

document.addEventListener("keyup",()=>{
    card_name.innerHTML = i_name.value
    card_number.innerHTML = i_number.value
    card_mm.innerText = i_dtmm.value
    card_yy.innerHTML = i_dtyy.value
    card_cvc.innerHTML = i_cvc.value

    console.log(typeof(i_number.value))

    if(i_number.value.length == 4 || i_number.value.length == 9 || i_number.value.length == 14){
        i_number.value = i_number.value + " "
    }
})

document.querySelector(".button_confirm").addEventListener("click",()=>{
    verification()
})


// Diversos






