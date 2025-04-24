var DEFAULT_LIFE = 20;

var app = new Vue({
    el: '#app',
    data: {
        /**
         * 2P側のライフ表示を上下逆表示にするかのフラグ
         */
        isReverse2P: false,

        life1p: DEFAULT_LIFE,
        life2p: DEFAULT_LIFE,

        normal: {
            transform: "rotate(0deg)"
        },
        reverse: {
            transform: "rotate(180deg)"
        }
    },
    methods: {
        /**
         * ライフを増やす
         */
        inc: function (p) {
            if (p === 1) {
                this.life1p++;
            }
            else if (p === 2) {
                this.life2p++;
            }
        },
        /**
         * ライフを減らす
         */
        dec: function (p) {
            if (p === 1) {
                this.life1p = Math.max(0, this.life1p - 1);
            }
            else if (p === 2) {
                this.life2p = Math.max(0, this.life2p - 1);
            }
        },
        reset: function () {
            this.life1p = DEFAULT_LIFE;
            this.life2p = DEFAULT_LIFE;
        },
        reverse2P: function () {
            this.isReverse2P = !this.isReverse2P;
        }
    },
    computed: {
        root: function() {
            if (Math.abs(window.orientation) === 90) {
                return "root-h";
            }
            else {
                return "root-v";
            }
        },
        toolbar: function() {
            if (Math.abs(window.orientation) === 90) {
                return "toolbar-h";
            }
            else {
                return "toolbar-v";
            }
        },
        life: function() {
            if (Math.abs(window.orientation) === 90) {
                return "life-h";
            }
            else {
                return "life-v";
            }
        },
        lifeIn: function() {
            if (Math.abs(window.orientation) === 90) {
                return "life-inner life-inner-h";
            }
            else {
                return "life-inner life-inner-v";
            }
        },
        isReverse: function() {
            if (this.isReverse2P) {
                return this.reverse;
            }
            else {
                return this.normal;
            }
        }
    }
});
