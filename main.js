/**
 * 2P側のライフ表示を上下逆表示にするかのフラグ
 */
var isReverse2P = false;

/**
 * ライフを増やす
 */
function inc(event) {
    var elms = event.target.parentNode.getElementsByClassName("life");
    var e = elms[0];
    var str = e.innerText;
    var life = parseInt(str);
    e.innerText = ++life;
}

/**
 * ライフを減らす
 */
function dec(event) {
    var elms = event.target.parentNode.getElementsByClassName("life");
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

    elm.addEventListener('click', function(event) {
        var elms = document.getElementsByClassName("life");
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

    elm.addEventListener('click', function(event) {
        isReverse2P = !isReverse2P;
        // rotate変更
        var e = document.getElementById("player2-life");
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

    if (Math.abs(window.orientation) === 90) {
        root.style.flexDirection = "row";
        toolbar.style.height = "100%";
        toolbar.style.width = "4vmin";
        toolbar.style.flexDirection = "column";
    }
    else {
        root.style.flexDirection = "column";
        toolbar.style.height = "4vmin";
        toolbar.style.width = "100%";
        toolbar.style.flexDirection = "row";
    }
}

window.onload = function() {
    addClickGainEvent("btn-north");
    addClickLostEvent("btn-south");
    addResetEvent("reset-btn");
    addReverseEvent("reverse-btn");

    window.addEventListener("orientationchange", onOrientationChange);
    onOrientationChange();
}
