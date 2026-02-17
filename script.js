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
            // Using a simple fade in effect via CSS class if you want, 
            // or just letting it pop in as requested.
        }, 2000); // 2 second delay
    }
}

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('no-btn');
    const mainImg = document.getElementById('main-character');
    const samDialogue = document.getElementById('sam-dialogue');

    // 1. Shrink the No button
    let currentScale = 1 - (noClickCount * 0.2);
    if (currentScale < 0) currentScale = 0;
    noBtn.style.transform = `scale(${currentScale})`;

    // 2. Change Yoongi to Yosemite Sam
    mainImg.src = "yosemite-sam.png"; 
    
    // 3. Show "Think again deer"
    samDialogue.classList.remove('hidden');

    // 4. After a moment, switch to Cartoon Yoongi pointing at Yes
    setTimeout(() => {
        mainImg.src = "yoongi-cartoon.png";
        samDialogue.classList.add('hidden'); // Hide Sam's text
    }, 2000);
}

function handleYes() {
    // Go to final scene
    nextScene(6);
    
    // The mask reveal GIF will auto-play since it's an <img> tag in Scene 6.
    // Ensure your GIF file ("mask-reveal.gif") plays the full animation once.
}
