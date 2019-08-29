const tracks = [
    {
        id: 0,
        title: 'Running Man',
        artist: 'Spring Heeled Jack',
        year: '1997'
    },
    {
        id: 1,
        title: 'Mediocre Generica',
        artist: 'Leftover Crack',
        year: '2001'
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

const editTrack = (req, res) => {
    const {text} = req.body;
    const updateID = req.params.id;
    const trackIndex = tracks.findIndex(track => track.id == updateID);
    let track = tracks[trackIndex];

    console.log(track.title);

    tracks[trackIndex] = {
        id: track.id,
        title: text || track.text,
        artist: text || track.text,
        year: text || track.text
    }

    res.json(tracks);
    console.log(track.title);
};

module.exports = {
    getTracks,
    addTrack,
    deleteTrack,
    editTrack
};