let count = 0;
const goal = 150000;
const countEl = document.getElementById('count');
const barEl = document.getElementById('bar');
const signBtn = document.getElementById('signBtn');

// This simulates a high-frequency "global" update every 0.1ms 
// Note: Human eyes see ~60fps, so we update the logic fast but visual slightly slower for performance
function autoIncrement() {
    setInterval(() => {
        if (count < goal) {
            // Randomly jump by small amounts to look "live"
            count += Math.floor(Math.random() * 2); 
            updateDisplay();
        }
    }, 0.1); 
}

function updateDisplay() {
    countEl.innerText = count.toLocaleString();
    let percentage = (count / goal) * 100;
    barEl.style.width = percentage + "%";
}

signBtn.addEventListener('click', () => {
    if (!signBtn.classList.contains('signed')) {
        signBtn.innerText = "SIGNING...";
        
        setTimeout(() => {
            count += 100; // Big jump when you sign
            updateDisplay();
            signBtn.innerText = "YOU'VE ALREADY SIGNED";
            signBtn.classList.add('signed');
            localStorage.setItem('hasSigned', 'true');
        }, 800);
    }
});

// Check if user already signed on refresh
if(localStorage.getItem('hasSigned')) {
    signBtn.innerText = "YOU'VE ALREADY SIGNED";
    signBtn.classList.add('signed');
}

autoIncrement();
