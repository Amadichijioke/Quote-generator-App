document.getElementById("heading").innerHTML = "Quote App";
async function randomQuote() {
    const apiUrl = "https://api.quotable.io/random";
        
    try {
        const response = await axios.get(apiUrl)
        
        const data = response.data; 
        
        document.getElementById("content").innerHTML = data.content;
        document.getElementById("author").innerHTML = data.author;

    }catch (error) {
        console.log(error);
    }
}