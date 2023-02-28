// 1 task

let playList= [
    {
     author: "DISTURBED",
     song:"THE SONG OF SILENCE"
    },
    {
     author: "KORN",
     song:"COMING UNDONE"
    },
    {
     author: "A-HA",
     song:"STAY ON THESE ROADS"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "GOJIRA",
     song:"FLYING WHALES"
    },
    {
     author: "URIAH HEEP",
     song:"YOU'LL NEVER BE ALONE"
    },
    {
     author: "BOSTON",
     song:"HEAVEN ON EARTH"
    },
    {
     author: "METALLICA",
     song:"TURN THE PAGE"
    }];

let player = document.querySelector('.first-task');
let songList = document.createElement("ul");
player.append(songList);

for (let i in playList) {
    const songListBlock = document.createElement("li");
    const songListItem = document.createElement("p");
    songListItem.append(playList[i].author);
    songListItem.append(" : ");
    songListItem.append(playList[i].song);
    songListBlock.append(songListItem);
    songList.append(songListBlock);
  }

// 2 Task

let openButton = document.querySelector('.btn');
let closeButton = document.querySelector('.btn--close');
let modalWindow = document.querySelector('.modal');

openButton.addEventListener('click', function() {
    modalWindow.classList.add('active')
});

closeButton.addEventListener('click', function() {
    modalWindow.classList.remove('active')
});

// 3 Task

let trafficLight = document.querySelector('.trafficlight');

let redlight = document.getElementById("red");
let yellowlight = document.getElementById("orange");
let greenlight = document.getElementById("green");
let trafficLightButton = document.getElementById('traffic__btn');

trafficLightButton.addEventListener("click", function() {
    if (redlight.classList.contains("trafficlight--red")) {
        redlight.classList.remove("trafficlight--red");
        yellowlight.classList.add("trafficlight--orange");
      } else if (yellowlight.classList.contains("trafficlight--orange")) {
        yellowlight.classList.remove("trafficlight--orange");
        greenlight.classList.add("trafficlight--green");
      } else if (greenlight.classList.contains("trafficlight--green")) {
        greenlight.classList.remove("trafficlight--green");
        redlight.classList.add("trafficlight--red");
      }
});

