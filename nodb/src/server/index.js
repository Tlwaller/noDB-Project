const express = require('express');
const app = express();
const trackController = require('./controllers/trackController');
const port = 3000;

app.use(express.json());


app.get('/api/tracks', trackController.getTracks);
app.post('/api/tracks', trackController.addTrack);
app.delete('/api/tracks/:id', trackController.deleteTrack);
app.put('api/tracks/:id', trackController.updateTrack)


app.listen(port, () => console.log(`Server listening on port ${port}`))