let n = 10;
let doc = document.getElementById("stars");
console.log(doc);
let rating = document.getElementById("rating");
let allstars;

function clicked(e) {
  allstars = document.getElementsByClassName("star");
  console.log(e.target.number);
  console.log(allstars);
  rating.innerText = `You Have rated : ${e.target.number}/${n}`;

  for (let i = 0; i < e.target.number; i++) {
    allstars[i].classList.add("active");
  }
}
for (let i = 0; i < n; i++) {
  let star = document.createElement("div");
  //   star.appendChild("☆");
  star.classList = "star";
  star.innerText = "☆";
  star.number = i + 1;
  star.addEventListener("click", clicked);
  doc.appendChild(star);
}

document.getElementById("outer").addEventListener("click", function (e) {
  if (e.target.id == "outer" && allstars) {
    for (let i = 0; i < allstars.length; i++) {
      allstars[i].classList.remove("active");
    }
  }
});
