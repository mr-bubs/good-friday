let noClickCount = 0;

function nextScene(sceneNumber) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.scene').forEach(el => el.classList.add('hidden'));

    // Show the requested scene
    const next = document.getElementById(`scene${sceneNumber}`);
    next.classList.remove('hidden');
    next.classList.add('active');

    // Special logic for Scene 4 (Yoongi Reveal Delay)
    if (sceneNumber === 4) {
        setTimeout(() => {
            document.getElementById('yoongi-reveal').classList.remove('hidden-content');
        }, 2000); 
    }
}

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const mainImg = document.getElementById('main-character');
    const samDialogue = document.getElementById('sam-dialogue');
    const questionText = document.getElementById('question-text');
    const scene5 = document.getElementById('scene5');

    // --- PHASE 1: YOSEMITE SAM TAKEOVER ---
    
    // 1. Hide the Question and Buttons immediately
    questionText.classList.add('hidden');
    yesBtn.classList.add('hidden');
    noBtn.classList.add('hidden');

    // 2. Show Yosemite Sam & Dialogue
    mainImg.src = "yosemite-sam.png"; 
    mainImg.style.width = "350px"; 
    samDialogue.classList.remove('hidden');

    // 3. Prepare the size/growth logic for later
    let noScale = 1 - (noClickCount * 0.2);
    if (noScale < 0) noScale = 0;
    noBtn.style.transform = `scale(${noScale})`;

    let yesScale = 1 + (noClickCount * 0.5); 
    yesBtn.style.transform = `scale(${yesScale})`;

    // --- PHASE 2: THE SEQUENCE (After 4 Seconds) ---
    setTimeout(() => {
        // 1. Remove Sam and his dialogue
        samDialogue.classList.add('hidden');
        
        // 2. Switch Image to Cartoon Yoongi (but keep it hidden for a moment)
        mainImg.src = "yoongi-cartoon.png";
        mainImg.style.width = "100%"; 
        mainImg.classList.add('hidden'); // Hide Yoongi initially
        
        // 3. Activate the "Split Layout" (Left/Right positioning)
        scene5.classList.add('split-layout');

        // --- THE REVEAL STEPS ---
        
        // Step A: Bring back the Question (Immediately after Sam leaves)
        questionText.classList.remove('hidden');
        
        // Step B: Bring back YES Button (1 second later)
        setTimeout(() => {
            yesBtn.classList.remove('hidden');
            // Ensure it keeps its grown size
            yesBtn.style.transformOrigin = "top right";
            yesBtn.style.transform = `scale(${yesScale})`; 
        }, 1000);

        // Step C: Bring in Cartoon Yoongi (2 seconds later)
        setTimeout(() => {
            mainImg.classList.remove('hidden');
            // Add a little slide-in animation class if you want, or just pop in
        }, 2000);

        // Step D: Bring back NO Button (3 seconds later)
        setTimeout(() => {
            noBtn.classList.remove('hidden');
        }, 3000);

    }, 4000); // End of Yosemite Sam time
}


function handleYes() {
    nextScene(6);
}
