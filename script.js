 // 現在選択されているキャラクター
let selectedCharacter = 1;

// キャラクター情報
const characters = {
    1: {
        image: "images/Sabaku_lato.png",
        filename: "Sabaku_lato.png"
    },

    2: {
        image: "images/Sabaku_yuhan.png",
        filename: "Sabaku_yuhan.png"
    },

    3: {
        image: "images/Sabaku_lono.png",
        filename: "Sabaku_lono.png"
    },

    4: {
        image: "images/Sabaku_Bastien.png",
        filename: "Sabaku_Bastien.png"
    }
};


// キャラクターを選択したとき
function selectCharacter(number) {

    selectedCharacter = number;

    // プレビュー画像を変更
    const preview = document.getElementById("preview");

    preview.src = characters[number].image;

    // 選択中のキャラクターを表示
    const buttons = document.querySelectorAll(".character-button");

    buttons.forEach(function(button) {
        button.classList.remove("selected");
    });

    const selectedButton = document.querySelector(
        '[data-character="' + number + '"]'
    );

    if (selectedButton) {
        selectedButton.classList.add("selected");
    }
}


// ダウンロードボタンを押したとき
function downloadCharacter() {

    const character = characters[selectedCharacter];

    const link = document.createElement("a");

    link.href = character.image;
    link.download = character.filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


// ページを開いたとき
document.addEventListener("DOMContentLoaded", function() {

    // 最初は1人目を選択
    selectCharacter(1);

});
