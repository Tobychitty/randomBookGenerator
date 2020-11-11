const books = [
    {
        title: 'Atomic Habits',
        author: 'James Clear'
    },
    {
        title: '1984',
        author: 'George Orwell'
    },
    {
        title: 'User Friendly',
        author: 'Cliff Kuang with Robert Fabricant'
    },
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari'
    },
    {
        title: 'Humankind',
        author: 'Rutger Bregman'
    },
    {
        title: 'Algorithms to Live By',
        author: 'James Clear'
    },
    {
        title: 'How to Own the World',
        author: 'Andrew Craig'
    },
    {
        title: 'Life 3.0',
        author: 'Max Tegmark'
    },
    {
        title: 'The Richest Man in Babylon',
        author: 'George S. Clason'
    },
]

const randomBook = () => {
    const bookIndex = Math.floor(Math.random() * books.length);
    const message = `You should read ${books[bookIndex].title} by ${books[bookIndex].author}.`;
    console.log(message);
}

randomBook();

