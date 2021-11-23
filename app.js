const express = require("express")
const app = express()
const port = 3333
const axios = require("axios").default;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get(('/:latitude/:longitude'), (req, res) => {

    const latitude = req.params.latitude;
    const longitude = req.params.longitude
    const response = axios.get('http://open.tan.fr/ewp/arrets.json/'+latitude+'/'+longitude)
    .then((response)=> response.data)
    .then((data) => res.send(data))
    .catch(err => console.error(err))
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })