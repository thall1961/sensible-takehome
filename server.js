const express = require('express')
const axios = require('axios');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/', async (req, res) => {
    // example url with results
    // const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat}%2C${req.body.long}&radius=1500&type=establishment&keyword=${req.body.keyword.toLowerCase()}&key=AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k`;
    const response = await axios.get(url);
    res.json(response.data);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})