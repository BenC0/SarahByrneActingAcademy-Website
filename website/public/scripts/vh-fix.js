function vh_fix() {
    // Calculate 1vh value in pixels
    // based on window inner height
    var vh = window.innerHeight * 0.01;
    // Set the CSS variable to the root element
    // Which is equal to 1vh
    document.documentElement.style.setProperty('--vh', vh + 'px');
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

vh_fix()
window.addEventListener("scroll", debounce(vh_fix, 50))
window.addEventListener("resize", debounce(vh_fix, 50))