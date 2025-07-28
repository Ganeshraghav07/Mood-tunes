// script.js
// Mood to YouTube video mapping with full URLs
const moodVideos = {
    happy: [
        {url: "https://www.youtube.com/watch?v=d-diB65scQU", title: "Happy - Pharrell Williams", artist: "Pharrell Williams"},
        {url: "https://www.youtube.com/watch?v=CevxZvSJLk8", title: "Can't Stop the Feeling", artist: "Justin Timberlake"},
        {url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs", title: "Good Vibrations", artist: "The Beach Boys"},
        {url: "https://www.youtube.com/watch?v=y6Sxv-sUYtM", title: "Happy Together", artist: "The Turtles"},
        {url: "https://www.youtube.com/watch?v=mWRsgZuwf_8", title: "Don't Worry Be Happy", artist: "Bobby McFerrin"}
    ],
    sad: [
        {url: "https://www.youtube.com/watch?v=k4V3Mo61fJM", title: "Someone Like You", artist: "Adele"},
        {url: "https://www.youtube.com/watch?v=riAI9iU9PEs", title: "Fix You", artist: "Coldplay"},
        {url: "https://www.youtube.com/watch?v=WIm1GgfRz6M", title: "Yesterday", artist: "The Beatles"},
        {url: "https://www.youtube.com/watch?v=nJDYQKcVU5E", title: "Hurt", artist: "Johnny Cash"},
        {url: "https://www.youtube.com/watch?v=JTc1mDieQI8", title: "The Sound of Silence", artist: "Simon & Garfunkel"}
    ],
    energetic: [
        {url: "https://www.youtube.com/watch?v=OPf0YbXqDm0", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars"},
        {url: "https://www.youtube.com/watch?v=h_D3VFfhvs4", title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis"},
        {url: "https://www.youtube.com/watch?v=pRpeEdMmmQ0", title: "Shut Up and Dance", artist: "Walk the Moon"},
        {url: "https://www.youtube.com/watch?v=7zp1TbLFPp8", title: "Wake Me Up", artist: "Avicii"},
        {url: "https://www.youtube.com/watch?v=kXAvbHPuT00", title: "Thunderstruck", artist: "AC/DC"}
    ],
    calm: [
        {url: "https://www.youtube.com/watch?v=7maJOI3QMu0", title: "Weightless", artist: "Marconi Union"},
        {url: "https://www.youtube.com/watch?v=TTA2buWlNyM", title: "River Flows in You", artist: "Yiruma"},
        {url: "https://www.youtube.com/watch?v=l7TxwBhtTUY", title: "Clair de Lune", artist: "Debussy"},
        {url: "https://www.youtube.com/watch?v=c8Hq3CZdkLc", title: "Pure Shores", artist: "All Saints"},
        {url: "https://www.youtube.com/watch?v=a3hdYdLQb1U", title: "Gymnopédie No.1", artist: "Erik Satie"}
    ],
    anxious: [
        {url: "https://www.youtube.com/watch?v=X46t8ZFqUB4", title: "Weightless Pt. 1", artist: "Marconi Union"},
        {url: "https://www.youtube.com/watch?v=d9NF2edxy-M", title: "Breathe Me", artist: "Sia"},
        {url: "https://www.youtube.com/watch?v=3JWTaaS7LdU", title: "Everybody Hurts", artist: "R.E.M."},
        {url: "https://www.youtube.com/watch?v=1SCOimBo5tg", title: "Calm Down", artist: "Rema"},
        {url: "https://www.youtube.com/watch?v=WibQR0tQ0P8", title: "Weightless Pt. 2", artist: "Marconi Union"}
    ],
    romantic: [
        {url: "https://www.youtube.com/watch?v=W3QPrnO8JdI", title: "Perfect", artist: "Ed Sheeran"},
        {url: "https://www.youtube.com/watch?v=R4em3LKQCAQ", title: "All of Me", artist: "John Legend"},
        {url: "https://www.youtube.com/watch?v=lp-EO5I60KA", title: "Thinking Out Loud", artist: "Ed Sheeran"},
        {url: "https://www.youtube.com/watch?v=EK_LN3XEcn0", title: "At Last", artist: "Etta James"},
        {url: "https://www.youtube.com/watch?v=k1-TrAvp_xs", title: "Unchained Melody", artist: "The Righteous Brothers"}
    ],
    angry: [
        {url: "https://www.youtube.com/watch?v=B1zCN0YhWFE", title: "Break Stuff", artist: "Limp Bizkit"},
        {url: "https://www.youtube.com/watch?v=eBG7P-Kfr1w", title: "Killing in the Name", artist: "Rage Against the Machine"},
        {url: "https://www.youtube.com/watch?v=fkuOAY-S7Os", title: "Bulls on Parade", artist: "Rage Against the Machine"},
        {url: "https://www.youtube.com/watch?v=sO_QntXc-c4", title: "Down with the Sickness", artist: "Disturbed"},
        {url: "https://www.youtube.com/watch?v=bWXazVhlyxQ", title: "Du Hast", artist: "Rammstein"}
    ],
    bored: [
        {url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Never Gonna Give You Up", artist: "Rick Astley"},
        {url: "https://www.youtube.com/watch?v=otCpCn0l4Wo", title: "Call Me Maybe", artist: "Carly Rae Jepsen"},
        {url: "https://www.youtube.com/watch?v=L_jWHffIx5E", title: "All Star", artist: "Smash Mouth"},
        {url: "https://www.youtube.com/watch?v=6n3pFFPSlWk", title: "What's New Pussycat", artist: "Tom Jones"},
        {url: "https://www.youtube.com/watch?v=GtEvysh1654", title: "The Hamster Dance Song", artist: "Hampton the Hampster"}
    ],
    focused: [
        {url: "https://www.youtube.com/watch?v=0J2QdDbelmY", title: "Deep Focus", artist: "Spotify"},
        {url: "https://www.youtube.com/watch?v=lvI4qx9C7nI", title: "Concentration Music", artist: "Study Music Project"},
        {url: "https://www.youtube.com/watch?v=1ZYbU82GVz4", title: "Alpha Waves", artist: "Binaural Beats"},
        {url: "https://www.youtube.com/watch?v=rUxyKA_-grg", title: "Lofi Hip Hop", artist: "ChilledCow"},
        {url: "https://www.youtube.com/watch?v=qW6h-5zZQoY", title: "Mozart for Studying", artist: "Classical Music"}
    ],
    nostalgic: [
        {url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ", title: "Bohemian Rhapsody", artist: "Queen"},
        {url: "https://www.youtube.com/watch?v=e-fA-gBCkj0", title: "Sweet Child O' Mine", artist: "Guns N' Roses"},
        {url: "https://www.youtube.com/watch?v=vCadcBR95oU", title: "Livin' on a Prayer", artist: "Bon Jovi"},
        {url: "https://www.youtube.com/watch?v=9bZkp7q19f0", title: "Gangnam Style", artist: "PSY"},
        {url: "https://www.youtube.com/watch?v=dvgZkm1xWPE", title: "Viva La Vida", artist: "Coldplay"}
    ]
};

// Mood to emoji mapping
const moodEmojis = {
    happy: "😊",
    sad: "😢",
    energetic: "⚡",
    calm: "😌",
    anxious: "😰",
    romantic: "😍",
    angry: "😠",
    bored: "🥱",
    focused: "🧠",
    nostalgic: "🕰️"
};

// Mood display names
const moodNames = {
    happy: "Happy",
    sad: "Sad",
    energetic: "Energetic",
    calm: "Calm",
    anxious: "Anxious",
    romantic: "Romantic",
    angry: "Angry",
    bored: "Bored",
    focused: "Focused",
    nostalgic: "Nostalgic"
};

// DOM Elements
const textMood = document.getElementById('textMood');
const emojiMood = document.getElementById('emojiMood');
const voiceBtn = document.getElementById('voiceBtn');
const voiceResult = document.getElementById('voiceResult');
const moodSelector = document.getElementById('moodSelector');
const playlistSection = document.getElementById('playlistSection');
const playlistContainer = document.getElementById('playlistContainer');
const moodEmoji = document.getElementById('moodEmoji');
const moodText = document.getElementById('moodText');
const shareBtn = document.getElementById('shareBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const themeToggle = document.getElementById('themeToggle');
const notification = document.getElementById('notification');

// Helper function to extract YouTube video ID from URL
function getYouTubeIdFromUrl(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        voiceResult.textContent = `You said: "${transcript}"`;
        
        // Find the mood that matches the transcript
        const detectedMood = detectMoodFromSpeech(transcript);
        
        if (detectedMood) {
            setTimeout(() => {
                showPlaylist(detectedMood);
            }, 800);
        } else {
            voiceResult.textContent += " - Mood not recognized. Please try again.";
        }
    };
    
    recognition.onerror = function(event) {
        voiceResult.textContent = 'Error occurred in recognition: ' + event.error;
        voiceBtn.classList.remove('listening');
    };
    
    recognition.onend = function() {
        voiceBtn.classList.remove('listening');
    };
} else {
    voiceBtn.disabled = true;
    voiceBtn.textContent = "Voice input not supported in your browser";
}

// Initialize the page
function init() {
    // Check for dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Check for mood in URL
    const urlParams = new URLSearchParams(window.location.search);
    const moodParam = urlParams.get('mood');
    
    if (moodParam && moodVideos[moodParam]) {
        showPlaylist(moodParam);
    }
    
    // Set up event listeners
    textMood.addEventListener('change', handleMoodSelection);
    emojiMood.addEventListener('change', handleMoodSelection);
    voiceBtn.addEventListener('click', startVoiceRecognition);
    shareBtn.addEventListener('click', copyPlaylistLink);
    tryAgainBtn.addEventListener('click', resetMoodSelection);
    themeToggle.addEventListener('click', toggleTheme);
}

// Handle mood selection from dropdowns
function handleMoodSelection(e) {
    const mood = e.target.value;
    if (mood) {
        // Reset other dropdowns
        if (e.target === textMood) emojiMood.value = '';
        if (e.target === emojiMood) textMood.value = '';
        
        showPlaylist(mood);
    }
}

// Start voice recognition
function startVoiceRecognition() {
    if (recognition) {
        voiceBtn.classList.add('listening');
        voiceResult.textContent = "Listening...";
        recognition.start();
    }
}

// Detect mood from speech input
function detectMoodFromSpeech(transcript) {
    const moodKeywords = {
        happy: ['happy', 'joy', 'glad', 'cheerful', 'excited'],
        sad: ['sad', 'depressed', 'unhappy', 'down', 'blue'],
        energetic: ['energetic', 'hyper', 'active', 'pumped', 'awake'],
        calm: ['calm', 'peaceful', 'relaxed', 'serene', 'chill'],
        anxious: ['anxious', 'nervous', 'stressed', 'worried', 'tense'],
        romantic: ['romantic', 'loving', 'affectionate', 'lovesick', 'infatuated'],
        angry: ['angry', 'mad', 'furious', 'irritated', 'annoyed'],
        bored: ['bored', 'uninterested', 'tired', 'dull', 'apathetic'],
        focused: ['focused', 'concentrated', 'attentive', 'studious', 'alert'],
        nostalgic: ['nostalgic', 'sentimental', 'homesick', 'wistful', 'reminiscent']
    };
    
    for (const [mood, keywords] of Object.entries(moodKeywords)) {
        if (keywords.some(keyword => transcript.includes(keyword))) {
            return mood;
        }
    }
    
    return null;
}

// Show playlist for selected mood
function showPlaylist(mood) {
    moodEmoji.textContent = moodEmojis[mood];
    moodText.textContent = moodNames[mood];
    
    // Generate playlist
    playlistContainer.innerHTML = '';
    moodVideos[mood].forEach(video => {
        const videoId = getYouTubeIdFromUrl(video.url);
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-container">
                <iframe src="${embedUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.artist}</p>
                <a href="${video.url}" class="video-link" target="_blank">
                    <i class="fab fa-youtube"></i> Watch on YouTube
                </a>
            </div>
        `;
        playlistContainer.appendChild(videoCard);
    });
    
    // Show playlist section, hide selector
    moodSelector.style.display = 'none';
    playlistSection.style.display = 'block';
    
    // Scroll to playlist
    playlistSection.scrollIntoView({ behavior: 'smooth' });
}

// Copy playlist link to clipboard
function copyPlaylistLink() {
    const mood = Object.keys(moodEmojis).find(key => moodEmojis[key] === moodEmoji.textContent);
    const url = `${window.location.origin}${window.location.pathname}?mood=${mood}`;
    
    navigator.clipboard.writeText(url).then(() => {
        showNotification();
    });
}

// Reset mood selection to start over
function resetMoodSelection() {
    // Reset form elements
    textMood.value = '';
    emojiMood.value = '';
    voiceResult.textContent = '';
    
    // Show mood selector, hide playlist
    playlistSection.style.display = 'none';
    moodSelector.style.display = 'block';
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show notification
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', null);
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Initialize the app
window.addEventListener('DOMContentLoaded', init);
