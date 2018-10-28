let friendsMachine = {
    friends: [],
    pushToFriends: async function(surveyInput) {
        let newFriend = new Friend(surveyInput.name, surveyInput.photo, surveyInput.scores);
        let match = [];
        this.friends.push(newFriend);
        await this.checkAllFriends(newFriend).then(result => {
            match = result;
        });
        return match;
    },
    checkAllFriends: async function(newFriend) {
        let match =[];
        await this.friends.forEach(friend => {
            newFriend.checkForBestFriend(friend).then(diff => {
                if (friend.name != newFriend.name && diff < 14 ) {
                    match.push(friend);
                }
            });
        });
        return match;
    }
}

let Friend = function(name, photo, scores) {
    this.name = name; 
    this.photo = photo;
    this.scores = scores || [];
    this.bestMatch = [];
}
Friend.prototype.getRandomStats = function() {
    for (i = 0; i <= 10; i++) {
        min = Math.ceil(1);
        max = Math.floor(6);
        const randNum = Math.floor(Math.random() * (max - min)) + min;
        this.scores.push(randNum);
    }
}
Friend.prototype.checkForBestFriend = async function(otherFriend) {
    let totalDiff = 0;
    for (let i = 0; i < this.scores.length; i++) {
        let diff = this.scores[i] - otherFriend.scores[i];
        if (diff < 0) diff = diff * -1;
        totalDiff+=diff;
    } return totalDiff;
}

var Anthony = new Friend("Anthony Barfus", "https://randomuser.me/api/portraits/men/52.jpg");
Anthony.getRandomStats();
friendsMachine.friends.push(Anthony);
var Bryan = new Friend("Bryan Lee", "https://randomuser.me/api/portraits/men/37.jpg");
Bryan.getRandomStats();
friendsMachine.friends.push(Bryan);
var Eric = new Friend("Eric Benny", "https://randomuser.me/api/portraits/men/25.jpg");
Eric.getRandomStats();
friendsMachine.friends.push(Eric);
var Jim = new Friend("Jim Newton", "https://randomuser.me/api/portraits/men/77.jpg");
Jim.getRandomStats();
friendsMachine.friends.push(Jim);
var Genna = new Friend("Genna Henry", "https://randomuser.me/api/portraits/women/17.jpg");
Genna.getRandomStats();
friendsMachine.friends.push(Genna);
var Katie = new Friend("Katie Tuttle", "https://randomuser.me/api/portraits/women/24.jpg");
Katie.getRandomStats();
friendsMachine.friends.push(Katie);
var Michelle = new Friend("Michelle Connor", "https://randomuser.me/api/portraits/women/89.jpg");
Michelle.getRandomStats();
friendsMachine.friends.push(Michelle);
var Kat = new Friend("Kat Purifoy", "https://randomuser.me/api/portraits/women/89.jpg");
Kat.getRandomStats();
friendsMachine.friends.push(Kat);
var Whitney = new Friend("Whitney Winger", "https://randomuser.me/api/portraits/women/52.jpg");
Whitney.getRandomStats();
friendsMachine.friends.push(Whitney);

module.exports = friendsMachine;

