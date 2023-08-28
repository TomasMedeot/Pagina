document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("all").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "block";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("chocolate").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "block";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("showpice").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "block";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("desserts").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "block";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("viennoiserie").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "block";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("events").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "block";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("confectionery").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "block";
    });

});

function m_image_1() {
    var overlay = document.getElementById("image-1");
    overlay.style.display = "block";
}
function m_image_2() {
    var overlay = document.getElementById("image-2");
    overlay.style.display = "block";
}
function m_image_3() {
    var overlay = document.getElementById("image-3");
    overlay.style.display = "block";
}
function m_image_4() {
    var overlay = document.getElementById("image-4");
    overlay.style.display = "block";
}
function close_1() {
    var overlay = document.getElementById("image-1");
    overlay.style.display = "none";
}
function close_2() {
    var overlay = document.getElementById("image-2");
    overlay.style.display = "none";
}
function close_3() {
    var overlay = document.getElementById("image-3");
    overlay.style.display = "none";
}
function close_4() {
    var overlay = document.getElementById("image-4");
    overlay.style.display = "none";
}