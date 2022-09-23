(function (callback) {
  var script = document.createElement("script");
  script.textContent = "(" + callback.toString() + ")();";
  document.body.appendChild(script);
})(function () {
  document.addEventListener("keydown", function (e) {
    switch (e.which) {
    // Enter Code
    case 13:
      location.assign('https://ja.wikipedia.org/wiki/Special:Randompage')
      break;
    }
  });
});
