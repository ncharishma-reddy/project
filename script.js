const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: '1',
        songName: `Heeriye<br>
        <div class="subtitle">Arjith Singh</div>`,
        poster: "1.jpg"
 },
    {
        id: '2',
        songName: `Apna-Bana-Le<br>
        <div class="subtitle">Sachin-Jigar.Bhediya</div>`,
        poster: "2.jpg"
    },
    {
        id: '3',
        songName: `Ishq-Wala-Love<br>
        <div class="subtitle">Vishal-Shekar</div>`,
        poster: "3.jpg"
    },
    {
        id: '4',
        songName: `Kesariya<br>
        <div class="subtitle">Preetam</div>`,
        poster: "4.jpg"
    },
    {
        id: '5',
        songName: `Aakasha-Deepavu-Neenu<br>
        <div class="subtitle">S.P.Balasubramanyam</div>`,
        poster: "5.jpg"
    },
    {
        id: '6',
        songName: `Aradhya<br>
        <div class="subtitle">Hesham-Abdul-Wahab, Chinmayi</div>`,
        poster: "2.jpg_large.jpg"
    },
    {
        id: '7',
        songName: `Mere-Yaaraa<br>
        <div class="subtitle">Arjith Singh</div>`,
        poster: "7.jpg"
    },
    {
        id: '8',
        songName: `Belageddu<br>
        <div class="subtitle">Vijay Prakash</div>`,
        poster: "8.jpg"
    },

   
    {
        id: '10',
        songName: `Chaleya<br>
        <div class="subtitle">Ravi Chander</div>`,
        poster: "10.jpg"
    },
    {
        id: '11',
        songName: `Chammak-Challo<br>
        <div class="subtitle">Akon, Hamsika Iyer</div>`,
        poster: "11.jpg"
    },
    {
        id: '12',
        songName: `Dilbar<br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "12.jpg"
    },
    {
        id: '13',
        songName: `Hukum<br>
        <div class="subtitle">Anirudh Ravi Chander</div>`,
        poster: "13.jpg"
    },
    {
        id: '14',
        songName: `Jilka-Jilka-Re<br>
        <div class="subtitle">Indu Nagaraj </div>`,
        poster: "14.jpg"
    }, 
    {
        id: '15',
        songName: `Maan-Meri-Jaan<br>
        <div class="subtitle">King</div>`,
        poster: "15.jpg"
    },
    
    {
        id: '16',
        songName: `Mastaru-Mastaru<br>
        <div class="subtitle">G V Prakash,Shweta Mohan</div>`,
        poster: "16.jpg"
    },
    {
        id: '17',
        songName: `Baby-Doll<br>
        <div class="subtitle">Meet-Bros-Anjan</div>`,
        poster: "17.jpg"
    },
    {
        id: '18',
        songName: `With-You<br>
        <div class="subtitle">AP Dhilion</div>`,
        poster: "18.jpg"
    },
    {
        id: '19',
        songName: `Psycho-Saiyaan<br>
        <div class="subtitle">Sachet-Tandon</div>`,
        poster: "19.jpg"
    },
    {
        id: '20',
        songName: `Kadalanu-Kaana-Horatiro<br>
        <div class="subtitle">Srilakshmi Belmannu</div>`,
        poster: "20.jpg"
    },
    
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;

    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;


});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
         music.play();
         wave.classList.add('active1');
         masterPlay.classList.remove('bi-play-fill');
         masterPlay.classList.add('bi-pause-fill');

    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');

        
     }
    
});


let index = 0;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `${index}.mp3`;
        poster_master_play.src= `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;

        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            
            title.innerHTML = songName;
            
        });



    });
});
var playlists = {
    happy: {
        folk: [
            { title: "Ghoomar", link: "ghoomar.mp3"},
            { title: "DHolida", link: "Dholida Gangubai Kathiawadi 128 Kbps.mp3" },
            { title: "Saami saami", link: "128-Saami Saami - Pushpa - The Rise 128 Kbps.mp3" },
                   
        ],
        film: [
            { title: "Saranga-Dariya-Mangli", link: "Saranga-Dariya-Mangli.mp3" }, 

            { title: "Gallan Goodiyaan", link: "Gallan Goodiyaan Dil Dhadakne Do 128 Kbps.mp3" },
            { title: "Belageddu", link: "audio/8.mp3" },
        ],
        indian_rock: [
            { title: "Psycho Saiyaan", link: "Psycho Saiyaan_192(Ghantalele.com).mp3" },
            { title: "Pakka Local", link: "Pakka-Local-Geetha-Madhuri-Sagar.mp3" },             
             { title: "Badtameez Dil", link: "128-Badtameez Dil - Yeh Jawaani Hai Deewani 128 Kbps.mp3" },
        ],
        
    },
    
  
    devotional: {
        folk: [
            { title: "Brahma-Murari", link: "Brahma-Murari-Surarchita-Lingam.mp3"},
            { title: "Achyutam Keshavam", link: "Achyutam Keshavam-(PagalWorld).mp3" },
            { title: "Veyi-Naamaala-Vaada", link: "Veyi-Naamaala-Vaada.mp3" },
                   
        ],
        film: [
            { title: "Deva Deva Brahmastra", link: "Deva Deva Brahmastra 128 Kbps.mp3" }, 

            { title: "Veyi-Naamaala-Vaada", link: "Veyi-Naamaala-Vaada.mp3" },
            
        ],
        
    },
    
  
    love: {
        folk: [
            { title: "Aradhya", link: "6.mp3"},
            { title: "Mere Yaara", link: "7.mp3" },
            { title: "Ishq Wala Love", link: "3.mp3" },
                   
        ],
        film: [
            { title: "Mastaru Mastaru", link: "16.mp3" }, 

            { title: "Kesariya", link: "4.mp3" },
            { title: "Heeriye", link: "1.mp3" },
        ],
        indian_rock: [
            { title: "Chaleya", link: "10.mp3" },
            { title: "Dilbar", link: "12.mp3" },             
             { title: "Jilka Jilka", link: "14.mp3" },
        ],
        
    },
    
  
};

function generatePlaylist() {
    var mood = document.getElementById("mood").value;
    var genre = document.getElementById("genre").value;

    var playlistItems = playlists[mood][genre];
    displayPlaylist(playlistItems);
}

function displayPlaylist(playlistItems) {
    var playlistElement = document.getElementById("playlist");
    playlistElement.innerHTML = "";

    playlistItems.forEach(function (item) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.title;
        link.className = "song-link";
        link.target = "_blank"; // Open link in a new tab
        li.appendChild(link);
        playlistElement.appendChild(li);
    });
};



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () =>{
    pop_song.scrollLeft += 330;
}) ;
pop_song_left.addEventListener('click', () =>{
    pop_song.scrollLeft -= 330;
}) ;
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () =>{
    Artists_bx.scrollLeft += 330;
}) ;
pop_art_left.addEventListener('click', () =>{
    Artists_bx.scrollLeft -= 330;
});
