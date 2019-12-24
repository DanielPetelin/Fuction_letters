(function(){
    let laters = {},
        inp = document.getElementById("input-field"),
        val,
        oldVal,
        lastChar;
    inp.addEventListener("keyup", function(e) {
        val = this.value;
        console.log(val);
        if (e.keyCode === 8) {

        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            if(val.length) {
                strToArr(val);
            }
        }
        oldVal = val;
    });
    function strToArr(str) {
        var arr = str.split(""),
            letter = arr[arr.length - 1].toUpperCase();
    if (letters[letter]) {
        letters[letter] = letters[letter] + 1;
    } else {
        letters[letter] - 1;
    }
  }
})();