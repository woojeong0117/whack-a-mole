// 마우스 클릭하면 마우스 커서모양 바뀜

const $wrap = document.querySelector(".wrap");

$wrap.addEventListener('mousedown', () => {
    $wrap.style.cursor = `url('img/hammer.png'), auto`;
});

$wrap.addEventListener("mouseup", () => {
    $wrap.style.cursor = `url('img/hammer_click.png'), auto`;
});

const getRandomUniqueNumber = (previousNumber) => {
    let random;
    do {
        random = Math.floor(Math.random() * 9) + 1;
    } while (random === previousNumber);
    return random;
};

const randomNum = () => {
    const previousNumber = randomNum.previousNumber || 0;
    const random = getRandomUniqueNumber(previousNumber);

    // 이전에 선택한 숫자의 up 클래스를 제거
    if (previousNumber !== 0) {
        document.getElementById(`${previousNumber}`).classList.remove("up");
    }

    // 새로운 숫자에 up 클래스를 추가
    document.getElementById(`${random}`).classList.add("up");

    // 이전에 선택한 숫자 기억
    randomNum.previousNumber = random;
};



const $box = document.querySelectorAll('.box')
const $mole = document.querySelectorAll(".mole");
const $button = document.querySelector(".button");
const $num = document.querySelector('.num')
let num = 0

$button.addEventListener("click", () => {
    $button.disabled = true;
    // 맨 처음에 실행하기 위해 호출
    randomNum();
    
    $box.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.classList.contains('up')) {
                num++;
                $num.innerText = num;
            }
        })
    });
    // 1초 간격으로 randomNum 함수 호출
    const intervalId = setInterval(randomNum, 1000);
    // 10초 후에 interval 정지
    setTimeout(() => {
        clearInterval(intervalId);
        $button.disabled = false;
        $box.forEach((box) => {
            box.classList.remove('up')
        });
        num = 0
        $num.innerText = num;
    }, 10000);
})

