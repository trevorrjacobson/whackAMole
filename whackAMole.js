let score = 1;
let topScore = 1;
let secondScore = 0;
let thirdScore = 0;
let gameBoard = document.querySelectorAll(".whackBox");
let timer = 29
let start = document.getElementById("start");
let moleHoles = document.querySelectorAll(".hole")
let moles = document.querySelectorAll(".mole");
start.addEventListener("click", () => { 
    start.classList.add("hideStart")
    let timeLeft = window.setInterval(()=>{
        document.getElementById("timeLeft").innerText = timer;
        timer--;
    }, 1000);
    let whereMole = window.setInterval(() => {
        moleLocation();
        moles = document.querySelectorAll(".mole");
        return moles;
    }, 1000)
    window.setTimeout(() => {
        window.clearInterval(whereMole);
        window.clearInterval(timeLeft);
        start.classList.remove("hideStart");
        score = 1
        document.getElementById("timeLeft").innerText = 30;
        timer = 29
    }, 31005);
})
const moleLocation = () => {
    moleHoles[Math.floor(Math.random() * moleHoles.length)].classList.add("mole");
}
moleHoles.forEach((val)=> {
    val.addEventListener("click", (e) => {
        document.getElementById("score").innerText = score;
        if (e.target.classList.contains("mole")) {
            e.target.classList.replace("mole", "splat")
            score++;
        if (score >= topScore) {
            topScore = score - 1;
            document.getElementById("score1").innerText = topScore;
            console.log(topScore);
        } else if (score >= secondScore) {
            secondScore = score - 1;
            document.getElementById("score2").innerText = score;
        } else if (score >= thirdScore) {
            thirdScore = score - 1;
            document.getElementById("score3").innerText = score;
        }
    }
})
});
let resetHoles = window.setInterval(() => {
    let splats = document.querySelectorAll(".splat");
    splats.forEach((val) => {
        val.classList.replace("splat", "hole");
    })
}, 2000)