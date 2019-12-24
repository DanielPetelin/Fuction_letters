(function(){
    var laters = {},
        inp = document.getElementById("input-field"),
        val,
        oldVal,
        lastChar;
    inp.addEventListener("keyup", function(e) {
        val = this.value;
        if (e.keyCode === 8) {

        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            if(val.length) {
                strToArr(val);
            }
        }
    });
    function strToArr(str) {

    }
})();