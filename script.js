function recommendMusic() {
  const mood = document.getElementById("moodInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const recommendations = {
    happy: [
      { title: "Happy - Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
      { title: "Best Day Of My Life - American Authors", link: "https://www.youtube.com/watch?v=Y66j_BUCBMY" },
      { title: "Can't Stop The Feeling - Justin Timberlake", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" }       
    ],
    sad: [
      { title: "Fix You - Coldplay", link: "https://www.youtube.com/watch?v=hoNb6HuNmU0" },
      { title: "Let Me Down Slowly - Alec Benjamin", link: "https://www.youtube.com/watch?v=50VNCymT-Cs" },
      { title: "Someone Like You - Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
      {title:"Humadard",link:"https://youtu.be/FJ55SHCzt88?si=Mr5xiNsUE-Gdt-Oj"}
    ],
    energetic: [
      { title: "Chandelier - Sia", link: "https://www.youtube.com/watch?v=2vjPBrBU-TM" },
      { title: "Eye of the Tiger - Survivor", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
      { title: "Stronger - Kanye West", link: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" }
    ],
    calm: [
      { title: "Let Her Go - Passenger", link: "https://www.youtube.com/watch?v=rUxyKA_-grg" },
      { title: "River Flows in You - Yiruma", link: "https://www.youtube.com/watch?v=7maJOI3QMu0" },
      { title: "Weightless - Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" }
    ],
    romantic: [
      { title: "Perfect - Ed Sheeran", link: "https://www.youtube.com/watch?v=450p7goxZqg" },
      { title: "All of Me - John Legend", link: "https://www.youtube.com/watch?v=450p7goxZqg" },
      { title: "Tum Hi Ho - Arijit Singh", link: "https://www.youtube.com/watch?v=Umqb9KENgmk" }
    ],
    angry: [
      { title: "Smells Like Teen Spirit - Nirvana", link: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
      { title: "In the End - Linkin Park", link: "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
      { title: "Killing in the Name - Rage Against the Machine", link: "https://www.youtube.com/watch?v=bWXazVhlyxQ" }
    ]
  };

  if (recommendations[mood]) {
    let html = `<h3>Your mood: <em>${mood}</em></h3><ul>`;
    recommendations[mood].forEach(song => {
      html += `<li><a href="${song.link}" target="_blank">${song.title}</a></li>`;
    });
    html += `</ul>`;
    resultDiv.innerHTML = html;
  } else {
    resultDiv.innerHTML = `
      <h3>Sorry, no music found for: <em>${mood}</em></h3>
      <p>Try moods like: <strong>happy, sad, calm, energetic, romantic, angry</strong></p>
    `;
  }
}

