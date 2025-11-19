function loadPage(page) {
    fetch(`pages/${page}/${page}.html`)
        .then(res => res.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
        })
        .catch(err => {
            document.getElementById("main-content").innerHTML = "<h2>Page not found</h2>";
        });

// alert("hello")
}
