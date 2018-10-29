$("#post-survey").hide(0);

$(document).ready(function () {
    $(".modal").modal();
    $(".dropdown-trigger").dropdown({
        hover: true
    });
});

$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        init: true,
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
        autoplay: {
            delay: 1000,
        },
        slidesPerView: 6,
        speed: 400,
        direction: 'horizontal',
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});

$("body").on("submit", "#friend-finder-survey", function (event) {
    event.preventDefault();
    $("#survey-content").fadeOut(500);
    let newFriend = {
        name: `${$("#first-name").val().trim()} ${$("#last-name").val().trim()}`,
        photo: $("#photo").val().trim(),
        scores: [
            $("#video-games").val().trim(),
            $("#outdoors").val().trim(),
            $("#concerts").val().trim(),
            $("#build").val().trim(),
            $("#shopping").val().trim(),
            $("#sports").val().trim(),
            $("#drinks").val().trim(),
            $("#board-games").val().trim(),
            $("#restaurants").val().trim(),
            $("#netflix-chill").val().trim()
        ],
        bestMatch: []
    }
    $.post("/api/friends", newFriend, (data) => {
        if (data) {
            $("#profile-container").empty();
            $("#matches-container").empty();
            $("#profile-container").append(`
                <div class="col s12">
                    <div class="card">
                        <div class="card-image">
                            <img src="${data.user.photo}" / >
                            <span class="card-title">${newFriend.name}</span>
                        </div>
                        <div class="card-content">
                            <ul>
                                <li>Gamer: ${data.user.scores[0]}</li>
                                <li>Outdoorsy: ${data.user.scores[1]}</li>
                                <li>Concert-Goer: ${data.user.scores[2]}</li>
                                <li>Creator: ${data.user.scores[3]}</li>
                                <li>Shopper: ${data.user.scores[4]}</li>
                                <li>Sports: ${data.user.scores[5]}</li>
                                <li>Drinks: ${data.user.scores[6]}</li>
                                <li>Board Games: ${data.user.scores[7]}</li>
                                <li>Foodie: ${data.user.scores[8]}</li>
                                <li>Netflix & Chill: ${data.user.scores[9]}</li>
                            </ul>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            `);
            data.match.forEach(match => {
                $("#matches-container").append(`
                    <div class="col s12 l4">
                        <div class="card">
                            <div class="card-image">
                                <img src="${match.photo}" / >
                                <span class="card-title">${match.name}</span>
                            </div>
                            <div class="card-content">
                                <ul>
                                    <li>Gamer: ${match.scores[0]}</li>
                                    <li>Outdoorsy: ${match.scores[1]}</li>
                                    <li>Concert-Goer: ${match.scores[2]}</li>
                                    <li>Creator: ${match.scores[3]}</li>
                                    <li>Shopper: ${match.scores[4]}</li>
                                    <li>Sports: ${match.scores[5]}</li>
                                    <li>Drinks: ${match.scores[6]}</li>
                                    <li>Board Games: ${match.scores[7]}</li>
                                    <li>Foodie: ${match.scores[8]}</li>
                                    <li>Netflix & Chill: ${match.scores[9]}</li>
                                </ul>
                            </div>
                            <div class="card-action">
                                <a href="#">Chat Now!</a>
                            </div>
                        </div>
                    </div>
                `);
            })
            $("#post-survey").fadeIn(1000);
        }
    });
});