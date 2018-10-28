$("body").on("submit", "#friend-finder-survey", function(event) {
    event.preventDefault();
    let newFriend = {
        name: $("#first-name").val().trim() + $("#last-name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [ $("#video-games").val().trim(), $("#outdoors").val().trim(), $("#concerts").val().trim(), $("#build").val().trim(), $("#shopping").val().trim(), $("#sports").val().trim(), $("#drinks").val().trim(), $("#board-games").val().trim(), $("#restaurants").val().trim(), $("#netflix-chill").val().trim(), ],
        bestMatch: []
    }
    console.log(newFriend);
    $.ajax("/api/friends", {
        method: "POST",
        data: newFriend
    }).then(() => {
        alert("Created new survey");
        // location.reload();
    });
});
