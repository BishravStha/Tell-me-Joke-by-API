const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generateJokes = async () => {
    try {
        const headers = {
            Accept: "application/json"
        };
        const res = await fetch('https://icanhazdadjoke.com/', { headers }); 
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(`The error is: ${err}`); 
    }
};

jokeBtn.addEventListener('click', generateJokes);
generateJokes();
