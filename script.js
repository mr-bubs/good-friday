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

    // 1. Shrink the No button
    let noScale = 1 - (noClickCount * 0.2);
    if (noScale < 0) noScale = 0;
    noBtn.style.transform = `scale(${noScale})`;

    // 2. Grow the Yes button
    let yesScale = 1 + (noClickCount * 0.5); // Grows by 50% each click
    yesBtn.style.transform = `scale(${yesScale})`;

    // 3. Change Yoongi to Yosemite Sam
    mainImg.src = "yosemite-sam.png"; 
    mainImg.style.width = "350px"; // FORCE SAM TO BE BIGGER
    
    // 4. Show "Think again deer"
    samDialogue.classList.remove('hidden');

    // 5. WAIT 4 SECONDS (Timing fix)
    setTimeout(() => {
        // Switch to Cartoon Yoongi
        mainImg.src = "yoongi-cartoon.png";
        mainImg.style.width = "250px"; // Reset width for Yoongi
        samDialogue.classList.add('hidden'); // Hide Sam's text
        
        // 6. Move Yes Button to the Left (Where he points)
        // We add a negative margin to push it left, and keep the growth scale
        yesBtn.style.transition = "all 0.5s ease";
        yesBtn.style.transform = `scale(${yesScale}) translateX(-50px)`; 
        
    }, 4000); // 4000 milliseconds = 4 seconds
}

function handleYes() {
    nextScene(6);
}
