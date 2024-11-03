const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", fetchQuote);

function fetchQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.json())
        .then((data) => {
            quote.innerText = data[0].quote;
            author.innerText = data[0].author;
        })
        .catch(err => console.log(err));
    }
