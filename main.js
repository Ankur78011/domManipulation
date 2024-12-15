


const quotes= [
    
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "You miss 100% of the shots you don’t take.", person: "Wayne Gretzky" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", person: "Chinese Proverb" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", person: "Buddha" },
    { quote: "Life is what happens when you’re busy making other plans.", person: "John Lennon" },
    { quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", person: "Nelson Mandela" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", person: "Steve Jobs" },
    { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
    { quote: "Don’t cry because it’s over, smile because it happened.", person: "Dr. Seuss" },
    { quote: "It is never too late to be what you might have been.", person: "George Eliot" },
    { quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi" },
    { quote: "Act as if what you do makes a difference. It does.", person: "William James" },
    { quote: "The best way to predict the future is to create it.", person: "Peter Drucker" }
  ]

const btn=document.querySelector('#new-quote')
const quote=document.querySelector('.qoute')
const person=document.querySelector('.person')
const noOfQuotes=quotes.length

// console.log(noOfQuotes)

btn.addEventListener('click',()=>{
const randomInt=  Math.floor(Math.random()*noOfQuotes) +1
quote.innerText=quotes[randomInt].quote
person.innerText=quotes[randomInt].person
console.log(randomInt)
})


quotes.forEach((elem)=>{
console.log(elem.person)
})
