const friendsMachine = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", (req, res) => {
        return res.json(friendsMachine.friends);
    });
    app.post("/api/friends", (req, res) => {
        let newFriend = req.body;
        friendsMachine.pushToFriends(newFriend).then(result => {
            res.json({
                match: result,
                user: newFriend
            });
        })
    });
}