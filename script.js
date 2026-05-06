const signBtn = document.getElementById('sign-btn');
const countDisplay = document.getElementById('signature-count');
let count = 12405182;

// Check if already signed
if (localStorage.getItem('carrickSigned') === 'true') {
    setSignedState();
}

signBtn.addEventListener('click', () => {
    if (localStorage.getItem('carrickSigned') !== 'true') {
        signBtn.innerText = "SIGNING...";
        signBtn.disabled = true;

        setTimeout(() => {
            count++;
            countDisplay.innerText = count.toLocaleString();
            localStorage.setItem('carrickSigned', 'true');
            setSignedState();
        }, 1500);
    }
});

function setSignedState() {
    signBtn.innerText = "YOU'VE ALREADY SIGNED";
    signBtn.classList.add('signed');
    signBtn.disabled = true;
}
