// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

const friendsMachine = require("../data/friends.js");

module.exports = function(app) {
    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        console.log(newFriend);
        friendsMachine.pushToFriends(newFriend);
        res.json(newFriend);
    });
}

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        return res.json(friendsMachine.friends);
    });
}