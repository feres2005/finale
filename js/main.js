var firebaseConfig = {
    apiKey: "AIzaSyBbQfKE7W51QvXVOB7TZWf5jY9ewlmFhLc",
    authDomain: "my-project-f5444.firebaseapp.com",
    databaseURL: "https://my-project-f5444.firebaseio.com",
    projectId: "my-project-f5444",
    storageBucket: "my-project-f5444.appspot.com",
    messagingSenderId: "591919016776",
    appId: "1:591919016776:web:00d659115b3ceb0ccfa17d",
    measurementId: "G-SW85MS407M"
};
firebase.initializeApp(firebaseConfig);


/*$(document).ready(function () {
$(".ps4-container,.xbox-container,pcgamer-container").hide();

$(".buttonone").click(function () {
 $(".ps4-container").toggle("slow");
});

$(".buttontwo").click(function () {
  $(".xbox-container").toggle("slow");
});
$(".buttonthree").click(function () {
  $(".pcgamer-container").toggle("slow");
});
});*/
$(".xbox-container").hide();
$(".pcgamer-container").hide();
$(".nintendo-container").hide();

function showps4() {
    $(".xbox-container").hide("slow");
    $(".pcgamer-container").hide("slow");
    $(".nintendo-container").hide("slow");
    $(".ps4-container").toggle("slow");
}

function showxbox() {
    $(".ps4-container").hide("slow");
    $(".pcgamer-container").hide("slow");
    $(".nintendo-container").hide("slow");
    $(".xbox-container").toggle("slow");

}

function showpc() {
    $(".xbox-container").hide("slow");
    $(".ps4-container").hide("slow");
    $(".nintendo-container").hide("slow");
    $(".pcgamer-container").toggle("slow");

}

function shownitendo() {

    $(".nintendo-container").toggle("slow");
    $(".xbox-container").hide("slow");
    $(".ps4-container").hide("slow");
    $(".pcgamer-container").hide("slow");

}

document.getElementById("vote-form").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var ps = document.getElementById('ps4').checked;
    var x = document.getElementById('xbox').checked;
    var c = document.getElementById('pc').checked;
    var nin = document.getElementById('nin').checked;
    var playstation = "Playstation4";
    var xbox = "xboxone";
    var pc = "pcgamer";
    var nintendo = "nintendo";
    if (ps) {
        saveMessage(playstation);
    } else if (x) {
        ;
        console.log(xbox);
        saveMessage(xbox);

    } else if (c) {
        saveMessage(pc);

    } else {
        saveMessage(nintendo);

    }
    alert("Thank you for voting to our website!")
}
var messageRef = firebase.database().ref('votes');


function saveMessage(console) {
    var newMessageRef = messageRef.push()
    newMessageRef.set({
        votedFor: console


    });

}