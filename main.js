document.getElementById("inputButton").addEventListener("click", function () {
  var x = document.getElementById("textInput").value;
  var results = document.getElementById("checker");
  if (x % 5 === 0 && x % 3 === 0) {
    results.innerHTML = `<text><em style="color: #ff85ff">"${x}"</em> FIZZBUZZ!</text>`;
    return "fizzbuzz";
  }
  if (x % 3 === 0 && x % 5 !== 0) {
    results.innerHTML = `<text><em style="color: #ff85ff">"${x}"</em> FIZZ</text>`;
    return "fizz";
  } else if (x % 5 === 0 && x % 3 != 0) {
    results.innerHTML = `<text><em style="color: #ff85ff">"${x}"</em> BUZZ</text>`;
    return "buzz";
  }
  results.innerHTML = `<text><em style="color: #ff85ff">"${x}"</em> </text>`;
});
