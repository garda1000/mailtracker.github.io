function showLoader(event, url) {
    event.preventDefault(); 
    document.getElementById('spinner').style.display = 'block';

    setTimeout(() => {
        window.location.href = url;
    }, 2000);
}
