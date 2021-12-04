function toggle() {
    let div = document.getElementById('extra');
    let span = document.getElementsByClassName('button')[0];

    if (span.textContent === 'MORE') {
        div.style.display = 'block';
        span.textContent = 'LESS';
    } else {
        div.style.display = 'none';
        span.textContent = 'MORE';
    }
}