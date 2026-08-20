let selectedCharacter = 1;

const characters = {
    1: {
        image: "images/character1.png",
        filename: "Sabaku_lato.png"
    },
    2: {
        image: "images/character2.png",
        filename: "Sabaku_yuhan.png"
    },
    3: {
        image: "images/character3.png",
        filename: "Sabaku_lono.png"
    },
    4: {
        image: "images/character4.png",
        filename: "Sabaku_Bastien.png"
    }
};


function selectCharacter(number) {

    selectedCharacter = number;

    const preview = document.getElementById("preview");

    preview.src = characters[number].image;
}


function downloadCharacter() {

    const link = document.createElement("a");

    link.href = characters[selectedCharacter].image;

    link.download = characters[selectedCharacter].filename;

    link.click();
}
