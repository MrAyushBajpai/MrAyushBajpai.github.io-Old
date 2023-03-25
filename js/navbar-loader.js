$(function () {
    $("#navbar").load("navbar.html", function (response, status, xhr) {
      if (status == "error") {
        console.log(
          "Error loading navbar: " + xhr.status + " " + xhr.statusText
        );
      }
    });
  });