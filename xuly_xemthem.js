function show() {
  if (document.getElementById("show").style.display == "block") {
    document.getElementById("show").style.display = "none";
    document.getElementById("showmore").innerHTML = "SHOW MORE";
  } else {
    document.getElementById("show").style.display = "block";
    document.getElementById("showmore").innerHTML = "SHOW LESS";
  }
}
