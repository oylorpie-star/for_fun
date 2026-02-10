// Function to replay the animation
function replayAnimation() {
    // Get all message elements
    const messages = document.querySelectorAll('.message');
    const footer = document.querySelector('.footer');
    const replayBtn = document.querySelector('.replay-btn');
    
    // Remove animations
    messages.forEach(message => {
        message.style.animation = 'none';
    });
    footer.style.animation = 'none';
    replayBtn.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void messages[0].offsetWidth;
    
    // Re-add animations
    messages.forEach((message, index) => {
        message.style.animation = '';
    });
    footer.style.animation = '';
    replayBtn.style.animation = '';
}

// Optional: Add sparkle effect on click anywhere
document.addEventListener('click', function(e) {
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 0.6s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);