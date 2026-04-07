// NO WRAPPER - This makes the function "Global" so HTML can always see it
function moveRibbon(index) {
    const ribbon = document.getElementById('flowerRibbon');
    const buttons = document.querySelectorAll('.cat-btn');

    if (!ribbon) {
        console.error("STOP: The HTML ID 'flowerRibbon' was not found!");
        return;
    }

    // Use 'position' consistently
    const position = index * -25;
    ribbon.style.transform = `translateX(${position}%)`;

    // Update buttons
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}