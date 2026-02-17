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
    const scene5 = document.getElementById('scene5'); // Select the scene container

    // 1. Shrink No button
    let noScale = 1 - (noClickCount * 0.2);
    if (noScale < 0) noScale = 0;
    noBtn.style.transform = `scale(${noScale})`;

    // 2. Grow Yes button
    let yesScale = 1 + (noClickCount * 0.5); 
    yesBtn.style.transform = `scale(${yesScale})`;

    // 3. Yosemite Sam logic
    mainImg.src = "yosemite-sam.png"; 
    mainImg.style.width = "350px"; 
    samDialogue.classList.remove('hidden');

    // 4. WAIT 4 SECONDS 
    setTimeout(() => {
        // Switch to Cartoon Yoongi
        mainImg.src = "yoongi-cartoon.png";
        mainImg.style.width = "100%"; // Fit the new column width
        samDialogue.classList.add('hidden');
        
        // --- THE NEW LAYOUT SWITCH ---
        scene5.classList.add('split-layout'); // Activates the CSS we just wrote
        
        // Reset Yes button transform so it sits nicely in the new spot
        // (We keep the size increase but remove manual margins)
        yesBtn.style.transformOrigin = "top right";
        yesBtn.style.transform = `scale(${yesScale})`;
        
    }, 4000); 
}

function handleYes() {
    nextScene(6);
}
