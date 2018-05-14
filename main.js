/**
 * 2P側のライフ表示を上下逆表示にするかのフラグ
 */
var isReverse2P = false;
/**
 * ライフを増やす
 */
function inc(event) {
    var elms = event.target.parentNode.getElementsByClassName("life-inner");
    var e = elms[0];
    var str = e.innerText;
    var life = parseInt(str);
    e.innerText = ++life;
}
/**
 * ライフを減らす
 */
function dec(event) {
    var elms = event.target.parentNode.getElementsByClassName("life-inner");
    var e = elms[0];
    var str = e.innerText;
    var life = parseInt(str);
    life = Math.max(0, life - 1);
    e.innerText = life;
}
/**
 *
 */
function addClickLostEvent(cls) {
    var elms = document.getElementsByClassName(cls);
    for (var i = 0; i < elms.length; i++) {
        var elm = elms[i];
        elm.addEventListener('click', dec);
    }
}
/**
 *
 */
function addClickGainEvent(cls) {
    var elms = document.getElementsByClassName(cls);
    for (var i = 0; i < elms.length; i++) {
        var elm = elms[i];
        elm.addEventListener('click', inc);
    }
}
/**
 *
 */
function addResetEvent(id) {
    var elm = document.getElementById(id);
    elm.addEventListener('click', function (event) {
        var elms = document.getElementsByClassName("life-inner");
        for (var i = 0; i < elms.length; i++) {
            var life = elms[i];
            life.innerText = 20;
        }
    });
}
/**
 *
 */
function addReverseEvent(id) {
    var elm = document.getElementById(id);
    elm.addEventListener('click', function (event) {
        isReverse2P = !isReverse2P;
        // rotate変更
        var e = document.getElementById("player2-area");
        if (isReverse2P) {
            e.style.MozTransform = "rotate(180deg)";
            e.style.webkitTransform = "rotate(180deg)";
        }
        else {
            e.style.MozTransform = "rotate(0deg)";
            e.style.webkitTransform = "rotate(0deg)";
        }
    });
}
/**
 *
 */
function onOrientationChange() {
    var root = document.getElementById("root");
    var toolbar = document.getElementById("toolbar");
    var life1p = document.getElementById("player1-life");
    var life2p = document.getElementById("player2-life");
    var life1pIn = document.getElementById("life-1p");
    var life2pIn = document.getElementById("life-2p");

    if (Math.abs(window.orientation) === 90) {
        root.className = "root-h";
        toolbar.className ="toolbar-h";
        life1p.className = "life-h";
        life2p.className = "life-h";
        life1pIn.className = "life-inner life-inner-h";
        life2pIn.className = "life-inner life-inner-h";
    }
    else {
        root.className = "root-v";
        toolbar.className ="toolbar-v";
        life1p.className = "life-v";
        life2p.className = "life-v";
        life1pIn.className = "life-inner life-inner-v";
        life2pIn.className = "life-inner life-inner-v";
    }
}

window.onload = function () {
    addClickGainEvent("btn-north");
    addClickLostEvent("btn-south");
    addResetEvent("reset-btn");
    addReverseEvent("reverse-btn");
    window.addEventListener("orientationchange", onOrientationChange);
    onOrientationChange();
};
