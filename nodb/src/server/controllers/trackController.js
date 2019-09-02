const tracks = [];

const getTracks = (req, res) => {
{res.json(tracks)}
}

const addTrack = (req, res) => {
    tracks.push(req.body);
    res.json(tracks);
}

const deleteTrack = (req, res) => {
    const deleteID = req.params.id;
    trackIndex = tracks.findIndex(track => track.id == deleteID);
    tracks.splice(trackIndex, 1);
    res.json(tracks);
}

const updateTrack = (req, res) => {
    const {title, artist, year, cover} = req.body;
    const updateID = req.params.id;
    const trackIndex = tracks.findIndex(track => track.id == updateID);
    let track = tracks[trackIndex];

    tracks[trackIndex] = {
        id: tracks.length,
        title: title,
        artist: artist,
        year: year,
        cover: cover
    }
}

module.exports = {
    getTracks,
    addTrack,
    deleteTrack,
    updateTrack
};