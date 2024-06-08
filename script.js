document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        { 
            text: "The best way to predict the future is to invent it.", 
            author: "Alan Kay", 
            background: "./Images/i1.jpeg" 
        },
        { 
            text: "Life is 10% what happens to us and 90% how we react to it.", 
            author: "Charles R. Swindoll", 
            background: "./Images/i3.jpg" 
        },
        { 
            text: "The only way to do great work is to love what you do.", 
            author: "Steve Jobs", 
            background: "./Images/i2.jpeg" 
        },
        { 
            text: "Success is not how high you have climbed, but how you make a positive difference to the world.", 
            author: "Roy T. Bennett", 
            background: "./Images/i1.jpeg" 
        },
        { 
            text: "Your time is limited, so don’t waste it living someone else’s life.", 
            author: "Steve Jobs", 
            background: "./Images/i3.jpg" 
        }
    ];

    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const bodyElement = document.body;

    let currentIndex = 0;

    function showNextQuote() {
        const quote = quotes[currentIndex];
        quoteElement.textContent = quote.text;
        authorElement.textContent = `– ${quote.author}`;
        bodyElement.style.backgroundImage = `url(${quote.background})`;
        currentIndex = (currentIndex + 1) % quotes.length;
    }

    // Show the first quote immediately
    showNextQuote();

    // Change the quote every 5 seconds (5000 milliseconds)
    setInterval(showNextQuote, 5000);
});
