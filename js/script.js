const up = document.querySelector("#up");
const left = document.querySelector("#left");
const down = document.querySelector("#down");
const right = document.querySelector("#right");
const outputDistance = document.querySelector("#distance");

let player_x = Math.floor(Math.random() * 6);
let player_y = Math.floor(Math.random() * 6);

let suika_x = Math.floor(Math.random() * 6);
let suika_y = Math.floor(Math.random() * 6);

//距離を求める関数
function culc_distance() {
    const diff_x = player_x - suika_x;
    const diff_y = player_y - suika_y;
    const distance = Math.floor(Math.sqrt(diff_x**2 + diff_y**2) * 10) / 10;
    outputDistance.innerHTML = distance + "m";
}
culc_distance();

//リトライ用
function clear() {
    player_x = Math.floor(Math.random() * 5);
    player_y = Math.floor(Math.random() * 5);
    suika_x = Math.floor(Math.random() * 5);
    suika_y = Math.floor(Math.random() * 5);
    culc_distance();
}

//割ったかを判定
function isCrack() {
    if(player_x == suika_x && player_y == suika_y) {
        const res = confirm("スイカを割りました！リトライしますか？");
        if(res) {
            clear();
        }
    }
}

up.addEventListener("click", () => {
    player_y -= 1;
    culc_distance();
    isCrack();
})
down.addEventListener("click", () => {
    player_y += 1;
    culc_distance();
    isCrack()
})
left.addEventListener("click", () => {
    player_x -= 1;
    culc_distance();
    isCrack()
})
right.addEventListener("click", () => {
    player_x += 1;
    culc_distance();
    isCrack()
})


