
const quizData = {
  aura: {
    title: "What's your real aura?",
    questions: [
      { q: "You enter a room. What's your energy?", a: [
        ["Everyone notices me", "sun"], ["Quiet but intriguing", "moon"],
        ["I bring the fun", "spark"], ["Calm and comforting", "cloud"]
      ]},
      { q: "Pick your ideal evening.", a: [
        ["Going out with friends", "sun"], ["Music and alone time", "moon"],
        ["A random adventure", "spark"], ["A cozy movie night", "cloud"]
      ]},
      { q: "Your friends describe you as...", a: [
        ["Confident", "sun"], ["Mysterious", "moon"],
        ["Unpredictable", "spark"], ["The comfort person", "cloud"]
      ]},
      { q: "Choose a color.", a: [
        ["Golden yellow", "sun"], ["Midnight purple", "moon"],
        ["Electric pink", "spark"], ["Soft blue", "cloud"]
      ]}
    ],
    results: {
      sun: ["☀️", "Golden Aura", "You radiate confidence and warmth. You have main-character energy without even trying. Keep shining."],
      moon: ["🌙", "Midnight Aura", "You're thoughtful, intriguing, and a little mysterious. People want to understand you, and that's your magic."],
      spark: ["⚡", "Electric Aura", "You're spontaneous, funny, and full of surprises. Life around you is never boring."],
      cloud: ["☁️", "Soft Aura", "You're a peaceful, comforting presence. People feel safe being themselves around you."]
    }
  },

  friend: {
    title: "What friend are you?",
    questions: [
      { q: "Your group chat is...", a: [
        ["Memes and chaos", "comedian"], ["Deep conversations", "therapist"],
        ["Planning everything", "planner"], ["Random disappearances", "ghost"]
      ]},
      { q: "A friend has a problem. You...", a: [
        ["Make them laugh", "comedian"], ["Listen for hours", "therapist"],
        ["Find a solution", "planner"], ["Send a supportive message", "ghost"]
      ]},
      { q: "At a party, you're...", a: [
        ["Making everyone laugh", "comedian"], ["Giving advice", "therapist"],
        ["Organizing the fun", "planner"], ["Somewhere chilling", "ghost"]
      ]},
      { q: "Your biggest strength?", a: [
        ["My humor", "comedian"], ["My empathy", "therapist"],
        ["My reliability", "planner"], ["My independence", "ghost"]
      ]}
    ],
    results: {
      comedian: ["😂", "The Funny One", "Your jokes keep the group alive. You're the person who can turn a terrible day into a funny story."],
      therapist: ["💗", "The Therapist Friend", "Everyone trusts you with their secrets. Your listening skills are elite — just remember to care for yourself too."],
      planner: ["📅", "The Organizer", "If you don't plan it, is it even happening? You're dependable, thoughtful, and the reason plans become real."],
      ghost: ["👻", "The Mysterious One", "You love your people, but your alone time is sacred. You appear with the best advice and disappear again."]
    }
  },

  future: {
    title: "Your future aesthetic",
    questions: [
      { q: "Pick your dream destination.", a: [
        ["A big city", "city"], ["A beach", "coast"],
        ["A mountain cabin", "nature"], ["A cute European town", "classic"]
      ]},
      { q: "Choose your weekend.", a: [
        ["Shopping and cafés", "city"], ["Sunset by the sea", "coast"],
        ["Hiking and fresh air", "nature"], ["Books and a bakery", "classic"]
      ]},
      { q: "Pick a vibe.", a: [
        ["Bold and trendy", "city"], ["Carefree and colorful", "coast"],
        ["Simple and peaceful", "nature"], ["Timeless and elegant", "classic"]
      ]},
      { q: "Choose your dream room.", a: [
        ["Neon lights", "city"], ["Beachy colors", "coast"],
        ["Plants everywhere", "nature"], ["Vintage decorations", "classic"]
      ]}
    ],
    results: {
      city: ["🌆", "City Lights Era", "Your next era is ambitious, stylish, and full of new opportunities. Think late-night cafés and big dreams."],
      coast: ["🌊", "Coastal Dreamer", "You're entering a lighter, more carefree era. Think sunshine, new memories, and choosing happiness."],
      nature: ["🌿", "Soft Nature Era", "Your future vibe is peaceful and grounded. Less pressure, more growth, and room to become yourself."],
      classic: ["🕯️", "Timeless Era", "Your future aesthetic is elegant and intentional. You value meaningful experiences over following every trend."]
    }
  },

  song: {
    title: "What song is your life?",
    questions: [
      { q: "What's your current mood?", a: [
        ["Unstoppable", "hype"], ["In my feelings", "sad"],
        ["Romantic", "love"], ["Carefree", "chill"]
      ]},
      { q: "Pick a time of day.", a: [
        ["Sunrise", "hype"], ["Midnight", "sad"],
        ["Golden hour", "love"], ["Lazy afternoon", "chill"]
      ]},
      { q: "Your life needs more...", a: [
        ["Adventure", "hype"], ["Understanding", "sad"],
        ["Connection", "love"], ["Peace", "chill"]
      ]},
      { q: "Choose a playlist name.", a: [
        ["Watch me win", "hype"], ["Nobody gets it", "sad"],
        ["Love in the air", "love"], ["No thoughts, just vibes", "chill"]
      ]}
    ],
    results: {
      hype: ["🔥", "The Hype Anthem", "Your life sounds like a victory montage. You're ready for your next big moment. Soundtrack suggestion: an upbeat pop or rap anthem."],
      sad: ["🌧️", "The Late-Night Song", "You feel things deeply and find meaning in little moments. Soundtrack suggestion: an emotional, late-night ballad."],
      love: ["💘", "The Love Song", "You notice the little things and romanticize life beautifully. Soundtrack suggestion: a dreamy love song."],
      chill: ["🎧", "The Chill Track", "You don't need constant chaos to feel alive. Soundtrack suggestion: a mellow lo-fi or indie track."]
    }
  },

  social: {
    title: "What's your social battery?",
    questions: [
      { q: "Your perfect Friday night?", a: [
        ["Big party!", "extrovert"], ["Dinner with close friends", "middle"],
        ["Home alone, please", "introvert"], ["Depends on my mood", "wildcard"]
      ]},
      { q: "After a busy week, you...", a: [
        ["Go out again", "extrovert"], ["See a few friends", "middle"],
        ["Cancel plans and recharge", "introvert"], ["Decide last minute", "wildcard"]
      ]},
      { q: "At a gathering, you...", a: [
        ["Talk to everyone", "extrovert"], ["Stick with my people", "middle"],
        ["Find a quiet corner", "introvert"], ["Become a different person", "wildcard"]
      ]},
      { q: "Your energy is usually...", a: [
        ["Always ON", "extrovert"], ["Balanced", "middle"],
        ["Limited edition", "introvert"], ["Completely unpredictable", "wildcard"]
      ]}
    ],
    results: {
      extrovert: ["🎉", "100% Social Butterfly", "Your social battery seems to run on its own power plant. You love the energy of people and making memories together."],
      middle: ["🫶", "The Balanced Bestie", "You enjoy your people but value your peace too. You know how to balance connection with personal space."],
      introvert: ["🔋", "The Recharge Expert", "Your alone time is essential, not boring. You prefer meaningful connections over endless small talk."],
      wildcard: ["🎲", "The Social Wildcard", "Nobody can predict your plans — including you. Some days you're the life of the party; other days, you're offline."]
    }
  },

  era: {
    title: "What's your main-character era?",
    questions: [
      { q: "What do you want most right now?", a: [
        ["To achieve my goals", "boss"], ["To find myself", "discovery"],
        ["To enjoy life", "joy"], ["To heal and grow", "healing"]
      ]},
      { q: "Choose a motto.", a: [
        ["Watch me do it", "boss"], ["Let's see where life goes", "discovery"],
        ["Life is too short", "joy"], ["One day at a time", "healing"]
      ]},
      { q: "Pick your ideal morning.", a: [
        ["A productive start", "boss"], ["Trying something new", "discovery"],
        ["Music and a good breakfast", "joy"], ["A slow, peaceful morning", "healing"]
      ]},
      { q: "What are you leaving behind?", a: [
        ["Self-doubt", "boss"], ["Old expectations", "discovery"],
        ["Overthinking everything", "joy"], ["Past hurts", "healing"]
      ]}
    ],
    results: {
      boss: ["👑", "The Boss Era", "You're ready to back yourself and chase your goals. This chapter is about confidence, discipline, and taking action."],
      discovery: ["🧭", "The Discovery Era", "You're exploring who you are and what matters to you. Stay curious — you don't need every answer yet."],
      joy: ["🌈", "The Joy Era", "You're choosing more laughter, experiences, and little moments that make life feel good. Let yourself enjoy the journey."],
      healing: ["🦋", "The Healing Era", "You're giving yourself space to grow at your own pace. Progress isn't always loud, and that's perfectly okay."]
    }
  }
};

const modal = document.getElementById("quizModal");
const content = document.getElementById("quizContent");
const closeButton = document.getElementById("closeModal");

let currentQuiz = null;
let currentQuestion = 0;
let scores = {};

document.querySelectorAll("[data-quiz]").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.quiz);
  });
});

function startQuiz(key) {
  currentQuiz = quizData[key];
  currentQuestion = 0;
  scores = {};
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuiz.questions[currentQuestion];
  const total = currentQuiz.questions.length;
  const progress = Math.round((currentQuestion / total) * 100);

  content.innerHTML = `
    <div class="eyebrow">VIBECHECK QUIZ</div>
    <div class="quiz-progress">
      QUESTION ${currentQuestion + 1} OF ${total}
      <div class="progress-track">
        <div class="progress-fill" style="width:${progress}%"></div>
      </div>
    </div>
    <h2>${currentQuiz.title}</h2>
    <h3 style="font-size:16px;margin-bottom:17px">
      ${question.q}
    </h3>
    <div class="answer-list">
      ${question.a.map((answer, index) => `
        <button class="answer-button" data-answer="${index}">
          ${answer[0]} <span style="float:right">↗</span>
        </button>
      `).join("")}
    </div>
  `;

  content.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      const answer = question.a[Number(button.dataset.answer)];
      scores[answer[1]] = (scores[answer[1]] || 0) + 1;
      currentQuestion++;

      if (currentQuestion < total) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  });
}

function renderResult() {
  const winner = Object.keys(scores).sort((a, b) => scores[b] - scores[a])[0];
  const result = currentQuiz.results[winner];
  const title = result[1];
  const description = result[2];

  content.innerHTML = `
    <div class="result-label">YOUR VIBECHECK RESULT</div>
    <div class="result-emoji">${result[0]}</div>
    <h2>${title}</h2>
    <p class="result-description">${description}</p>
    <div class="result-actions">
      <button class="share-main" id="shareResult">Share my result ↗</button>
      <button id="copyResult">Copy result</button>
      <button id="retryQuiz">Try again ↻</button>
    </div>
    <p id="shareMessage" style="margin-top:14px;color:#d8ff72;font-size:12px"></p>
  `;

  const shareText = `My VibeCheck result is "${title}"! ✨ ${description} Take a quiz and find your vibe!`;

  document.getElementById("shareResult").addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My VibeCheck Result",
          text: shareText
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          showShareMessage("Sharing isn't available. Try Copy result!");
        }
      }
    } else {
      const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(shareText);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  });

  document.getElementById("copyResult").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      showShareMessage("Copied! Send your result to your friends 💚");
    } catch (error) {
      showShareMessage("Copy isn't available here. Try selecting the result text.");
    }
  });

  document.getElementById("retryQuiz").addEventListener("click", () => {
    startQuiz(Object.keys(quizData).find(key => quizData[key] === currentQuiz));
  });
}

function showShareMessage(message) {
  const el = document.getElementById("shareMessage");
  if (el) el.textContent = message;
}

function closeQuiz() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeButton.addEventListener("click", closeQuiz);

modal.addEventListener("click", event => {
  if (event.target === modal) closeQuiz();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeQuiz();
});
