
const quizData = {
  aura: {
    title: "What's your real aura?",
    questions: [
      { q: "You enter a room. What's your energy?", a: [["Everyone notices me","sun"],["Quiet but intriguing","moon"],["I bring the fun","spark"],["Calm and comforting","cloud"]] },
      { q: "Pick your ideal evening.", a: [["Going out with friends","sun"],["Music and alone time","moon"],["A random adventure","spark"],["A cozy movie night","cloud"]] },
      { q: "Your friends describe you as...", a: [["Confident","sun"],["Mysterious","moon"],["Unpredictable","spark"],["The comfort person","cloud"]] },
      { q: "Choose a color.", a: [["Golden yellow","sun"],["Midnight purple","moon"],["Electric pink","spark"],["Soft blue","cloud"]] }
    ],
    results: {
      sun:["☀️","Golden Aura","You radiate confidence and warmth. You have main-character energy without even trying. Keep shining."],
      moon:["🌙","Midnight Aura","You're thoughtful, intriguing, and a little mysterious. People want to understand you, and that's your magic."],
      spark:["⚡","Electric Aura","You're spontaneous, funny, and full of surprises. Life around you is never boring."],
      cloud:["☁️","Soft Aura","You're a peaceful, comforting presence. People feel safe being themselves around you."]
    }
  },

  friend: {
    title:"What friend are you?",
    questions:[
      {q:"Your group chat is...",a:[["Memes and chaos","comedian"],["Deep conversations","therapist"],["Planning everything","planner"],["Random disappearances","ghost"]]},
      {q:"A friend has a problem. You...",a:[["Make them laugh","comedian"],["Listen for hours","therapist"],["Find a solution","planner"],["Send a supportive message","ghost"]]},
      {q:"At a party, you're...",a:[["Making everyone laugh","comedian"],["Giving advice","therapist"],["Organizing the fun","planner"],["Somewhere chilling","ghost"]]},
      {q:"Your biggest strength?",a:[["My humor","comedian"],["My empathy","therapist"],["My reliability","planner"],["My independence","ghost"]]}
    ],
    results:{
      comedian:["😂","The Funny One","Your jokes keep the group alive. You're the person who can turn a terrible day into a funny story."],
      therapist:["💗","The Therapist Friend","Everyone trusts you with their secrets. Your listening skills are elite — just remember to care for yourself too."],
      planner:["📅","The Organizer","If you don't plan it, is it even happening? You're dependable and the reason plans become real."],
      ghost:["👻","The Mysterious One","You love your people, but your alone time is sacred. You appear with the best advice and disappear again."]
    }
  },

  future:{
    title:"Your future aesthetic",
    questions:[
      {q:"Pick your dream destination.",a:[["A big city","city"],["A beach","coast"],["A mountain cabin","nature"],["A cute European town","classic"]]},
      {q:"Choose your weekend.",a:[["Shopping and cafés","city"],["Sunset by the sea","coast"],["Hiking and fresh air","nature"],["Books and a bakery","classic"]]},
      {q:"Pick a vibe.",a:[["Bold and trendy","city"],["Carefree and colorful","coast"],["Simple and peaceful","nature"],["Timeless and elegant","classic"]]},
      {q:"Choose your dream room.",a:[["Neon lights","city"],["Beachy colors","coast"],["Plants everywhere","nature"],["Vintage decorations","classic"]]}
    ],
    results:{
      city:["🌆","City Lights Era","Your next era is ambitious, stylish, and full of new opportunities. Think late-night cafés and big dreams."],
      coast:["🌊","Coastal Dreamer","You're entering a lighter, more carefree era. Think sunshine, new memories, and choosing happiness."],
      nature:["🌿","Soft Nature Era","Your future vibe is peaceful and grounded. Less pressure, more growth, and room to become yourself."],
      classic:["🕯️","Timeless Era","Your future aesthetic is elegant and intentional. You value meaningful experiences over following every trend."]
    }
  },

  song:{
    title:"What song is your life?",
    questions:[
      {q:"What's your current mood?",a:[["Unstoppable","hype"],["In my feelings","sad"],["Romantic","love"],["Carefree","chill"]]},
      {q:"Pick a time of day.",a:[["Sunrise","hype"],["Midnight","sad"],["Golden hour","love"],["Lazy afternoon","chill"]]},
      {q:"Your life needs more...",a:[["Adventure","hype"],["Understanding","sad"],["Connection","love"],["Peace","chill"]]},
      {q:"Choose a playlist name.",a:[["Watch me win","hype"],["Nobody gets it","sad"],["Love in the air","love"],["No thoughts, just vibes","chill"]]}
    ],
    results:{
      hype:["🔥","The Hype Anthem","Your life sounds like a victory montage. You're ready for your next big moment. Soundtrack suggestion: an upbeat pop or rap anthem."],
      sad:["🌧️","The Late-Night Song","You feel things deeply and find meaning in little moments. Soundtrack suggestion: an emotional, late-night ballad."],
      love:["💘","The Love Song","You notice the little things and romanticize life beautifully. Soundtrack suggestion: a dreamy love song."],
      chill:["🎧","The Chill Track","You don't need constant chaos to feel alive. Soundtrack suggestion: a mellow lo-fi or indie track."]
    }
  },

  social:{
    title:"What's your social battery?",
    questions:[
      {q:"Your perfect Friday night?",a:[["Big party!","extrovert"],["Dinner with close friends","middle"],["Home alone, please","introvert"],["Depends on my mood","wildcard"]]},
      {q:"After a busy week, you...",a:[["Go out again","extrovert"],["See a few friends","middle"],["Cancel plans and recharge","introvert"],["Decide last minute","wildcard"]]},
      {q:"At a gathering, you...",a:[["Talk to everyone","extrovert"],["Stick with my people","middle"],["Find a quiet corner","introvert"],["Become a different person","wildcard"]]},
      {q:"Your energy is usually...",a:[["Always ON","extrovert"],["Balanced","middle"],["Limited edition","introvert"],["Completely unpredictable","wildcard"]]}
    ],
    results:{
      extrovert:["🎉","100% Social Butterfly","Your social battery seems to run on its own power plant. You love the energy of people and making memories together."],
      middle:["🫶","The Balanced Bestie","You enjoy your people but value your peace too. You know how to balance connection with personal space."],
      introvert:["🔋","The Recharge Expert","Your alone time is essential, not boring. You prefer meaningful connections over endless small talk."],
      wildcard:["🎲","The Social Wildcard","Nobody can predict your plans — including you. Some days you're the life of the party; other days, you're offline."]
    }
  },

  era:{
    title:"What's your main-character era?",
    questions:[
      {q:"What do you want most right now?",a:[["To achieve my goals","boss"],["To find myself","discovery"],["To enjoy life","joy"],["To heal and grow","healing"]]},
      {q:"Choose a motto.",a:[["Watch me do it","boss"],["Let's see where life goes","discovery"],["Life is too short","joy"],["One day at a time","healing"]]},
      {q:"Pick your ideal morning.",a:[["A productive start","boss"],["Trying something new","discovery"],["Music and a good breakfast","joy"],["A slow, peaceful morning","healing"]]},
      {q:"What are you leaving behind?",a:[["Self-doubt","boss"],["Old expectations","discovery"],["Overthinking everything","joy"],["Past hurts","healing"]]}
    ],
    results:{
      boss:["👑","The Boss Era","You're ready to back yourself and chase your goals. This chapter is about confidence, discipline, and taking action."],
      discovery:["🧭","The Discovery Era","You're exploring who you are and what matters to you. Stay curious — you don't need every answer yet."],
      joy:["🌈","The Joy Era","You're choosing more laughter, experiences, and little moments that make life feel good."],
      healing:["🦋","The Healing Era","You're giving yourself space to grow at your own pace. Progress isn't always loud, and that's perfectly okay."]
    }
  },

  chaos:{
    title:"Which kind of chaos are you?",
    questions:[
      {q:"You get a text saying 'we need to talk'. You...",a:[["Write a whole movie in my head","overthinker"],["Reply 'WHAT HAPPENED??'","drama"],["Forget to reply for 8 hours","ghost"],["Send a meme","comedian"]]},
      {q:"Your alarm rings. What's the plan?",a:[["Snooze until it's a new day","ghost"],["Panic and speed-run life","drama"],["Overthink whether I need sleep","overthinker"],["Make a joke about it","comedian"]]},
      {q:"In the group chat, you are...",a:[["Typing... then disappearing","ghost"],["The breaking-news department","drama"],["Reading every message twice","overthinker"],["Sending 47 memes","comedian"]]},
      {q:"Pick your personal warning label.",a:[["May vanish without warning","ghost"],["Extra for no reason","drama"],["Overthinks a simple 'ok'","overthinker"],["Cannot be serious for 5 minutes","comedian"]]}
    ],
    results:{
      overthinker:["🧠","The 2 AM Overthinker","You can turn one 'seen' into a 12-episode mystery series. Your brain has 47 tabs open, and at least 12 are playing music."],
      drama:["🎭","The Main-Character Drama","Every minor inconvenience gets a soundtrack. You're not overreacting — you're delivering a premium limited series."],
      ghost:["👻","The Professional Disappearing Act","You love your friends deeply... from a distance. Your reply speed is measured in business days."],
      comedian:["🤡","The Group Chat Clown","You use humor to survive everything. If chaos had a laugh track, you'd be the executive producer."]
    }
  }
};

const modal = document.getElementById("quizModal");
const content = document.getElementById("quizContent");
const closeButton = document.getElementById("closeModal");

let currentQuiz = null;
let currentQuizKey = "";
let currentQuestion = 0;
let scores = {};

document.querySelectorAll("[data-quiz]").forEach(button => {
  button.addEventListener("click", () => startQuiz(button.dataset.quiz));
});

function startQuiz(key) {
  if (!quizData[key]) return;
  currentQuizKey = key;
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
    <div class="eyebrow">VIBECHECK QUIZ ✨</div>
    <div class="quiz-progress">QUESTION ${currentQuestion + 1} OF ${total}
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
    </div>
    <h2>${currentQuiz.title}</h2>
    <h3 style="font-size:16px;margin-bottom:17px">${question.q}</h3>
    <div class="answer-list">
      ${question.a.map((answer,index)=>`
        <button class="answer-button" data-answer="${index}">
          ${answer[0]} <span style="float:right">↗</span>
        </button>`).join("")}
    </div>
  `;

  content.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      const answer = question.a[Number(button.dataset.answer)];
      scores[answer[1]] = (scores[answer[1]] || 0) + 1;
      currentQuestion++;
      if (currentQuestion < total) renderQuestion();
      else renderResult();
    });
  });
}

function renderResult() {
  const winner = Object.keys(scores).sort((a,b)=>scores[b]-scores[a])[0];
  const result = currentQuiz.results[winner];
  const [emoji,title,description] = result;
  const pageUrl = window.location.href.split("#")[0];
  const shareText = `My VibeCheck result is ${emoji} ${title}! ✨\n${description}\n\nTake the quiz: ${pageUrl}`;

  content.innerHTML = `
    <div class="result-label">YOUR VIBECHECK RESULT</div>
    <div id="shareableResultCard" style="margin:18px auto;padding:26px 20px;max-width:430px;border-radius:22px;text-align:center;color:#fff;background:linear-gradient(135deg,#6d28d9,#db2777 55%,#f97316);box-shadow:0 14px 36px rgba(0,0,0,.22)">
      <div style="font-size:12px;letter-spacing:2px;font-weight:800">VIBECHECK ✦ YOUR VIBE, YOUR RULES</div>
      <div style="font-size:64px;line-height:1.35;margin:12px 0">${emoji}</div>
      <h2 style="margin:0 0 12px;color:#fff">${title}</h2>
      <p style="margin:0;line-height:1.65;color:#fff">${description}</p>
      <div style="margin-top:22px;font-size:12px;font-weight:700">WHAT'S YOUR VIBE? TAKE THE QUIZ!</div>
    </div>
    <div class="result-actions" style="display:grid;gap:10px">
      <button class="share-main" id="shareResult">Share my result ↗</button>
      <button id="whatsappResult">Share on WhatsApp 💬</button>
      <button id="copyResult">Copy result 📋</button>
      <button id="copyLinkResult">Copy quiz link 🔗</button>
      <button id="downloadResult">Download result card 📸</button>
      <button id="retryQuiz">Try again ↻</button>
    </div>
    <p id="shareMessage" style="margin-top:14px;color:#d8ff72;font-size:12px;overflow-wrap:anywhere"></p>
  `;

  document.getElementById("shareResult").addEventListener("click",async()=>{
    if(navigator.share){
      try { await navigator.share({title:`My VibeCheck result: ${title}`,text:shareText,url:pageUrl}); }
      catch(error){if(error.name!=="AbortError")showShareMessage("Sharing unavailable. Try WhatsApp or Copy result!");}
    } else {
      openWhatsApp(shareText);
    }
  });

  document.getElementById("whatsappResult").addEventListener("click",()=>openWhatsApp(shareText));

  document.getElementById("copyResult").addEventListener("click",async()=>{
    try {
      await navigator.clipboard.writeText(shareText);
      showShareMessage("Copied! Ab apna result friends ko bhejo 💚");
    } catch(error) {
      showShareMessage("Copy nahi ho saka. Result text ko manually select karke copy karo.");
    }
  });

  document.getElementById("copyLinkResult").addEventListener("click",async()=>{
    try {
      await navigator.clipboard.writeText(pageUrl);
      showShareMessage("Quiz link copied! Friends ke saath share karo 🔗");
    } catch(error) {
      window.prompt("Copy your VibeCheck link:",pageUrl);
    }
  });

  document.getElementById("downloadResult").addEventListener("click",()=>downloadResultCard(emoji,title,description));

  document.getElementById("retryQuiz").addEventListener("click",()=>startQuiz(currentQuizKey));
}

function openWhatsApp(text) {
  window.open("https://wa.me/?text="+encodeURIComponent(text),"_blank","noopener,noreferrer");
}

function downloadResultCard(emoji,title,description) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0,0,1080,1350);
  gradient.addColorStop(0,"#6d28d9");
  gradient.addColorStop(.55,"#db2777");
  gradient.addColorStop(1,"#f97316");
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,1080,1350);

  ctx.fillStyle="rgba(255,255,255,.12)";
  ctx.beginPath();ctx.arc(940,150,220,0,Math.PI*2);ctx.fill();
  ctx.beginPath();ctx.arc(110,1200,260,0,Math.PI*2);ctx.fill();

  ctx.textAlign="center";
  ctx.fillStyle="#fff";
  ctx.font="bold 34px Arial";
  ctx.fillText("VIBECHECK ✦ YOUR VIBE, YOUR RULES",540,115);
  ctx.font="150px Arial";
  ctx.fillText(emoji,540,350);
  ctx.font="bold 64px Arial";
  wrapCanvasText(ctx,title,540,485,900,78,2);
  ctx.font="34px Arial";
  wrapCanvasText(ctx,description,540,650,850,52,6);
  ctx.font="bold 30px Arial";
  ctx.fillText("TAKE THE QUIZ • SHARE YOUR VIBE",540,1190);
  ctx.font="26px Arial";
  ctx.fillText(window.location.host,540,1240);

  canvas.toBlob(blob=>{
    if(!blob){showShareMessage("Card nahi ban saka. Screenshot try karo.");return;}
    const url=URL.createObjectURL(blob);
    const link=document.createElement("a");
    link.href=url;
    link.download="vibecheck-result.png";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
    showShareMessage("Your result card downloaded! 📸");
  },"image/png");
}

function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines) {
  const words=String(text).split(/\s+/);
  const lines=[];
  let line="";
  for(const word of words){
    const test=line?`${line} ${word}`:word;
    if(ctx.measureText(test).width>maxWidth&&line){
      lines.push(line);
      line=word;
    }else line=test;
  }
  if(line)lines.push(line);
  if(lines.length>maxLines){
    lines.length=maxLines;
    lines[maxLines-1]+="…";
  }
  lines.forEach((item,index)=>ctx.fillText(item,x,y+index*lineHeight,maxWidth));
}

function showShareMessage(message) {
  const el=document.getElementById("shareMessage");
  if(el)el.textContent=message;
}

function closeQuiz() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

if(closeButton)closeButton.addEventListener("click",closeQuiz);

if(modal)modal.addEventListener("click",event=>{
  if(event.target===modal)closeQuiz();
});

document.addEventListener("keydown",event=>{
  if(event.key==="Escape")closeQuiz();
});

// Add a floating Chaos Quiz button automatically.
(function addChaosQuizButton(){
  if(document.getElementById("chaosQuizButton"))return;
  const button=document.createElement("button");
  button.id="chaosQuizButton";
  button.type="button";
  button.textContent="🤡 Chaos Quiz";
  button.setAttribute("aria-label","Start the funny Chaos Quiz");
  button.style.cssText="position:fixed;right:18px;bottom:18px;z-index:9998;border:0;border-radius:999px;padding:14px 19px;background:linear-gradient(135deg,#7c3aed,#db2777);color:#fff;font-weight:800;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.25);cursor:pointer";
  button.addEventListener("click",()=>startQuiz("chaos"));
  document.body.appendChild(button);
})();
