const tracks = [
    {
        id: 0,
        title: 'Running Man',
        artist: 'Spring Heeled Jack',
        year: '1997',
        cover: 'https://m.media-amazon.com/images/I/71UCwE2HGTL._SS500_.jpg'
    }
];

const getTracks = (req, res) => {
    res.json(tracks);
};

const addTrack = (req, res) => {
    tracks.push(req.body);
    res.json(tracks);
}

const deleteTrack = (req, res) => {
    tracks.splice(+req.params.id, 1);
    res.json(tracks);
}

const updateTrack = (req, res) => {
    const {title} = req.body;
    const updateID = req.params.id;
    const trackIndex = tracks.findIndex(track => track.id == updateID);
    let track = tracks[trackIndex];

    console.log(req.body);

    tracks[trackIndex] = {
        id: track.id,
        title: title || track.title
    };

    res.json(tracks);
    console.log(track);
};

module.exports = {
    getTracks,
    addTrack,
    deleteTrack,
    updateTrack
    // editTrackArtist,
    // editTrackYear,
    // editTrackCover
};