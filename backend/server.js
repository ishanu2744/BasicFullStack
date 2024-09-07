import express from 'express';

const app = express();

// app.get('/', (req,res)=>{
//     res.send('Server is ready');
// })

app.get('/api/jokes', (req, res) => {
    const jokes=[
        {
            id: 1,
            title: 'A Joke',
            content: 'The is a Joke'
        },
        {
            id: 2,
            title: '2nd Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: '3rd Joke',
            content: 'This is 3rd joke'
        },
        {
            id: 4,
            title: '4th Joke',
            content: 'This is 4th Joke'
        },
        {
            id: 5,
            title: '5th Joke',
            content: '6th Joke'
        }
    ];
    res.send(jokes);
});

const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});