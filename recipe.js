//document.getElementById("searchInput").addEventListener("keyup", function(event) {
//    if (event.key === "Enter") {
//        performSearch();
//    }
//});

//function performSearch() {
//    var searchText = document.getElementById("searchInput").value;
    // Busqueda
//    console.log("Realizar búsqueda de: " + searchText);
//}
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

        document.getElementById("all-img").style.display = "block";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "block";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "block";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "block";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "block";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "block";
        document.getElementById("confectionery-img").style.display = "none";
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

        document.getElementById("all-img").style.display = "none";
        document.getElementById("chocolate-img").style.display = "none";
        document.getElementById("showpice-img").style.display = "none";
        document.getElementById("desserts-img").style.display = "none";
        document.getElementById("viennoiserie-img").style.display = "none";
        document.getElementById("events-img").style.display = "none";
        document.getElementById("confectionery-img").style.display = "block";
    });

});