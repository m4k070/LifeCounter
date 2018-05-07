function inc(elm) {
    var life = parseInt(elm.getElementsByClassName("life").innnerHTML);
    life++;
    elm.innnerHTML = life;
}

function dec(elm) {
    var e = elm.getElementsByClassName("life")[0];
    var str = e.innerText;
    var life = parseInt(str);
    life--;
    e.innerText = life;
}

function onClickGain(event) {
    inc(event.target);
}

function addClickEvent(id) {
    var elm = document.getElementById(id);

    elm.addEventListener('click', function(event) {
        dec(elm);
    });
}

window.onload = function() {
    addClickEvent("player1-area");
    addClickEvent("player2-area");
}
