import express from 'express';

const app = express();

app.use(express.static('dist'));

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'This is 1st joke',
            joke: '1st joke is funny'
        },
        {
            id: 2,
            title: 'This is 2nd joke',
            joke: '2nd joke is funny'
        },
        {
            id: 3,
            title: 'This is 3rd joke',
            joke: '3rd joke is funny'
        },
        {
            id: 4,
            title: 'This is 4th joke',
            joke: '4th joke is funny'
        },
        {
            id: 5,
            title: 'This is 5th joke',
            joke: '5th joke is funny'
        },
    ];

    res.json(jokes);
})

app.listen(3000, () => console.log('Server is running'))