const api = "https://api.adviceslip.com/advice";

const number = document.querySelector(".number");
const advices = document.querySelector(".advice-text");
const chabge = document.querySelector(".btn-change");

async function getdata() {
    try{
    let response = await fetch(api);
    let data = await response.json();
    return data;
    console.log(data)
    }
    catch(err){
      console.log(err)
    }
}

chabge.addEventListener("click", () => {
    getdata().then(
      (data) => (
        (advices.textContent = data.slip.advice),
        (number.textContent = data.slip.id)
      )
    );
  });