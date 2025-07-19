function recommendMusic() {
  const mood = document.getElementById("moodInput").value.toLowerCase().trim();
  const resultDiv = document.getElementById("result");

  const recommendations = {
    happy: [
      { title: "Ude Dil Befikre", link: "https://youtu.be/gXe-KWe-YMs?si=n9soTjGWHEAjnmqF" },
      { title: "Gallan Goodiyan", link: "https://youtu.be/jCEdTq3j-0U?si=1tb7pdj-3F5GGu-3" },
      { title: "Kala Chashma", link: "https://youtu.be/k4yXQkG2s1E?si=nK2fzEFEGQ-d0B3Q" },
      { title: "Kar Gayi Chull", link: "https://youtu.be/NTHz9ephYTw?si=qDW_iMjhuxROEmC7" },
      { title: "Badtameez Dil", link: "https://youtu.be/II2EO3Nw4m0?si=R4yriOQTSGlv1nlr" },
      { title: "London Thumakda", link: "https://youtu.be/udra3Mfw2oo?si=3dP-71bqCQ8tsdK5" },
      { title: "Tamma Tamma Again", link: "https://youtu.be/EEX_XM6SxmY?si=-WdtqJk8IjCiehSI" },
      { title: "Nashe Si Chadh Gayi", link: "https://youtu.be/HoCwa6gnmM0?si=b8cAal4icu5XRO3C" },
      { title: "The Breakup Song", link: "https://youtu.be/hAB2MptEqWQ?si=wEPuHGgTwfT2GmdU" },
      { title: "Abhi Toh Party Shuru Hui Hai", link: "https://youtu.be/8LZgzAZ2lpQ?si=PlQf_BZ7eZ5UCarl" }
    ],

    sad: [
      { title: "Tu Hi Hai", link: "https://youtu.be/KyMNLIYRsR4?si=iaMhqHLGwjqaz66E" },
      { title: "Khamoshiyan", link: "https://youtu.be/Mv3SZDP7QUo?si=-caCtQVanIp2ldQo" },
      { title: "Shayad", link: "https://youtu.be/mF2BHtQh4EI?si=K8p0lakTDmjirxot" },
      { title: "Humdard", link: "https://youtu.be/FJ55SHCzt88?si=Mr5xiNsUE-Gdt-Oj" },
      { title: "Saiyaara", link: "https://youtu.be/1PxSMWproEo?si=ji96SxKx83Yr7XSz"},
      { title: "Samjhawan", link: "https://youtu.be/H2f7MZaw3Yo?si=VGXLaBpSNmgF_T2V"},
      { title: "Bewajah", link: "https://youtu.be/M4XeKEMkYFI?si=3ueXE4FAR5jK1LR9"},
      { title: "Mehram",link:"https://youtu.be/gCwP1znjEdg?si=DiIZhtqSDFqQYaVU"},
      { title: "Jind Meriye",link:"https://youtu.be/spZUXAeXuOc?si=K4Z2M9DupyA_ATNv"}
    ],
    energetic: [
      { title: "Malhari – Bajirao Mastani", link: "https://youtu.be/l_MyUGq7pgs?si=h-u8ysG9uep1LAqU" },
      { title: "Zinda – Bhaag Milkha Bhaag", link: "https://youtu.be/Ax0G_P2dSBw?si=r2s-Isfa1n-RSmJ8" },
      { title: "Sher Aaya Sher – Gully Boy", link: "https://youtu.be/M81wneSjQbA?si=suA4AxnWjtnyDwQk" },
      { title: "Jai Jai Shivshankar – War", link: "https://youtu.be/oGneAab3e88?si=j7M36IdLk5jN8on0" },
      { title: "Apna Time Aayega – Gully Boy", link: "https://youtu.be/jFGKJBPFdUA?si=lDFSJUrLAt6Nw020" },
      { title: "Ghungroo – War", link: "https://youtu.be/qFkNATtc3mc?si=t_IYURJPQ6wX--1v" },
      { title: "Let’s Nacho – Kapoor & Sons", link: "https://youtu.be/TLnwqAarPkM?si=BxfpguRWSFNOjtPf" },
      { title: "Swag Se Swagat – Tiger Zinda Hai", link: "https://youtu.be/7TRFf7uUfhQ?si=SdjTqrnfgW7nhOw9" },
      { title: "Party On My Mind – Race 2", link: "https://youtu.be/WzvGrz-wNMs?si=e-R9XZgnp7xz-BX1" },
      { title: "Khalibali – Padmaavat", link: "https://youtu.be/v7K4vGYL9zI?si=dE6fzeOzSWZOUeoz" }
    ],

   calm: [
      { title: "Raabta – Agent Vinod", link: "https://youtu.be/zlt38OOqwDc?si=FMZAlCfpxmiyONtO" },
      { title: "Let Her Go – Passenger", link: "https://youtu.be/RBumgq5yVrA?si=D1-OTJFuib5OBaCO" },
      { title: "Phir Le Aaya Dil – Barfi", link: "https://youtu.be/k6BnSIs3XUQ?si=2U8E-lt4OSGN7zdG" },
      { title: "Photograph – Ed Sheeran", link: "https://youtu.be/nSDgHBxUbVQ?si=lzVNp2_gnw1ca9t2" },
      { title: "Main Rahoon Ya Na Rahoon – Armaan Malik", link: "https://youtu.be/Dp6lbdoprZ0?si=dDhFRCCySFe5K6Qn" },
      { title: "Someone Like You – Adele", link: "https://youtu.be/hLQl3WQQoQ0?si=yuD0VOPT2rlnVU_j" },
      { title: "Hasi – Hamari Adhuri Kahani", link: "https://youtu.be/d0x2UbhbdmY?si=E3WnLNEnbsMb3utL" }
    ],

    romantic: [
      { title: "Tum Hi Ho – Aashiqui 2", link: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
      { title: "Perfect – Ed Sheeran", link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
      { title: "Jeene Laga Hoon – Ramaiya Vastavaiya", link: "https://www.youtube.com/watch?v=nG9lrz8HiUE" },
      { title: "All of Me – John Legend", link: "https://www.youtube.com/watch?v=450p7goxZqg" },
      { title: "Pehla Nasha – Jo Jeeta Wohi Sikandar", link: "https://www.youtube.com/watch?v=EbHGS_bVkXY" },
      { title: "Love Me Like You Do – Ellie Goulding", link: "https://www.youtube.com/watch?v=AJtDXIazrMo" },
      { title: "Tera Ban Jaunga – Kabir Singh", link: "https://www.youtube.com/watch?v=YxWlaYCA8MU" },
      { title: "Until I Found You – Stephen Sanchez", link: "https://www.youtube.com/watch?v=El7GV7c5kB0" },
      { title: "Raatan Lambiyan – Shershaah", link: "https://www.youtube.com/watch?v=gvyUuxdRdR4" },
      { title: "You Are The Reason – Calum Scott", link: "https://www.youtube.com/watch?v=ShZ978fBl6Y" }
    ],

    angry: [
      { title: "Khoon Chala – Rang De Basanti", link: "https://www.youtube.com/watch?v=5tffKsupZJ4" },
      { title: "Lose Yourself – Eminem", link: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
      { title: "Numb – Linkin Park", link: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
      { title: "Bandeh – Indian Ocean (Black Friday)", link: "https://www.youtube.com/watch?v=KzTFpWhvF9c" },
      { title: "Animal – Disturbed", link: "https://www.youtube.com/watch?v=09LTT0xwdfw" },
      { title: "Yalgaar – CarryMinati", link: "https://www.youtube.com/watch?v=UHe7KbV5aWc" },
      { title: "Break Stuff – Limp Bizkit", link: "https://www.youtube.com/watch?v=ZpUYjpKg9KY" },
      { title: "Jee Karda – Badlapur", link: "https://www.youtube.com/watch?v=SaUzTtUASYA" },
      { title: "Take A Look Around – Limp Bizkit (MI2)", link: "https://www.youtube.com/watch?v=eGx5vZ_z2CQ" },
      { title: "Krantikari – Gully Boy", link: "https://www.youtube.com/watch?v=7R57A1J_f38" }  
    ],

    oldsong: [
      { title: "Lag Ja Gale", link: "https://www.youtube.com/watch?v=3g6dDFy3d9g" },
      { title: "Tere Bina Zindagi Se", link: "https://www.youtube.com/watch?v=fdoXyA6oy7k" },
      { title: "Pal Pal Dil Ke Paas", link: "https://www.youtube.com/watch?v=WxUdzvle1gA" },
      { title: "Chura Liya Hai Tumne Jo Dil Ko", link: "https://www.youtube.com/watch?v=IWlBIoeNv5s" },
      { title: "Kabhi Kabhi Mere Dil Mein", link: "https://www.youtube.com/watch?v=vi3w1TTT-X0" },
      { title: "Yeh Shaam Mastani", link: "https://www.youtube.com/watch?v=EzhZf3iWM7U" },
      { title: "Tujhse Naraz Nahi Zindagi", link: "https://www.youtube.com/watch?v=30zzMd3xPjI" },
      { title: "Ajeeb Dastan Hai Yeh", link: "https://www.youtube.com/watch?v=6qdMZvvICs8" },
      { title: "Zindagi Ek Safar Hai Suhana", link: "https://www.youtube.com/watch?v=fZnq1HzR9kE" },
      { title: "Mere Sapno Ki Rani", link: "https://www.youtube.com/watch?v=HwCrQxY7dbQ" }
    ],

    englishsong: [
      { title: "Perfect – Ed Sheeran", link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
      { title: "Let Her Go – Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
      { title: "Someone Like You – Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
      { title: "Thinking Out Loud – Ed Sheeran", link: "https://www.youtube.com/watch?v=lp-EO5I60KA" },
      { title: "Love Me Like You Do – Ellie Goulding", link: "https://www.youtube.com/watch?v=AJtDXIazrMo" },
      { title: "See You Again – Wiz Khalifa ft. Charlie Puth", link: "https://www.youtube.com/watch?v=RgKAFK5djSk" },
      { title: "Shape of You – Ed Sheeran", link: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
      { title: "Counting Stars – OneRepublic", link: "https://www.youtube.com/watch?v=hT_nvWreIhg" },
      { title: "Sugar – Maroon 5", link: "https://www.youtube.com/watch?v=09R8_2nJtjg" },
      { title: "Let It Be – The Beatles", link: "https://www.youtube.com/watch?v=QDYfEBY9NM4" }
    ],

    confident: [
      { title: "Don't Stop Me Now – Queen", link: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
      { title: "Apna Time Aayega – Gully Boy", link: "https://www.youtube.com/watch?v=jitg-3xbmKU" },
      { title: "Stronger – Kanye West", link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" },
      { title: "Zinda – Bhaag Milkha Bhaag", link: "https://www.youtube.com/watch?v=KG9Zz0HhbTM" },
      { title: "Roar – Katy Perry", link: "https://www.youtube.com/watch?v=CevxZvSJLk8" },
      { title: "7 rings – Ariana Grande", link: "https://www.youtube.com/watch?v=QYh6mYIJG2Y" },
      { title: "Believer – Imagine Dragons", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
      { title: "Unstoppable – Sia", link: "https://www.youtube.com/watch?v=cxjvTXo9WWM" },
      { title: "Brown Munde – AP Dhillon", link: "https://www.youtube.com/watch?v=n-F3zk8MZ2Y" }
    ],

    anxious: [
      { title: "Help – The Beatles", link: "https://www.youtube.com/watch?v=2Q_ZzBGPdqE" },
      { title: "Naina – Dangal", link: "https://www.youtube.com/watch?v=NPjeNfdFQk4" },
      { title: "Creep – Radiohead", link: "https://www.youtube.com/watch?v=XFkzRNyygfk" },
      { title: "Channa Mereya – Ae Dil Hai Mushkil", link: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
      { title: "Mad World – Gary Jules", link: "https://www.youtube.com/watch?v=4N3N1MlvVc4" },
      { title: "Phir Se Ud Chala – Rockstar", link: "https://www.youtube.com/watch?v=i-2hDq6XnQc" },
      { title: "Agar Tum Saath Ho – Tamasha", link: "https://www.youtube.com/watch?v=T94PHkuydcw" },
      { title: "Kyun – Barfi!", link: "https://www.youtube.com/watch?v=TyOzcbN0RjY" },
      { title: "Lag Jaa Gale – Lata Mangeshkar", link: "https://www.youtube.com/watch?v=Q29GWZpDe9k" }
    ],

    sleepy: [
      { title: "River Flows in You – Yiruma", link: "https://www.youtube.com/watch?v=7maJOI3QMu0" },
      { title: "Agar Tum Saath Ho – Tamasha", link: "https://www.youtube.com/watch?v=T94PHkuydcw" },
      { title: "Weightless – Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" },
      { title: "Blower’s Daughter – Damien Rice", link: "https://www.youtube.com/watch?v=1oB3BO5P5UY" }
    ],

    nostalgic: [
      { title: "Pehla Nasha – Jo Jeeta Wohi Sikandar", link: "https://www.youtube.com/watch?v=EbHGS_bVkXY" },
      { title: "Yesterday – The Beatles", link: "https://www.youtube.com/watch?v=NrgmdOz227I" },
      { title: "Kal Ho Naa Ho – Title Track", link: "https://www.youtube.com/watch?v=7Bg4GSlX_Sk" },
      { title: "Fix You – Coldplay", link: "https://www.youtube.com/watch?v=k4V3Mo61fJM" }
    ]
  };

  if (recommendations[mood]) {
    let html = `<h3>Recommended Songs for "<em>${mood}</em>" Mood:</h3><ul>`;
    recommendations[mood].forEach(song => {
      html += `<li><a href="${song.link}" target="_blank">${song.title}</a></li>`;
    });
    html += `</ul><button onclick="shareMood('${mood}')">🔗 Share Playlist</button>`;
    resultDiv.innerHTML = html;
  } else {
    resultDiv.innerHTML = `
      <h3>Sorry, no music found for: <em>${mood}</em></h3>
      <p>Try moods like: <strong>happy, sad, calm, energetic, romantic, angry ,oldsong ,englishsong ,confident ,anxious ,sleepy ,nostalgic</strong></p>
    `;
  }
}

// Voice input feature
function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser doesn't support voice recognition.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onstart = () => {
    console.log("Voice recognition started. Speak now.");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById("moodInput").value = transcript;
    recommendMusic();
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    alert("Error recognizing voice. Try again.");
  };
}

// Share mood playlist
function shareMood(mood) {
  const shareText = `Check out this mood-based playlist for "${mood}"! 🎶`;
  const shareUrl = window.location.href + `#${mood}`;
  if (navigator.share) {
    navigator.share({
      title: "Mood Playlist",
      text: shareText,
      url: shareUrl
    }).catch(err => console.log("Share failed:", err));
  } else {
    alert("Sharing not supported in this browser.");
  }
}
