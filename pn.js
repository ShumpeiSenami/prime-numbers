(function () {
    'use strict';

    function primeNumber(num) {
        //２ は素数なので true を返す
        if (num === 2) {
            document.write(2);
        } else {
            for (var i = 2; i < num; i++) {
                //２以上の数で割った時の余りが０になれば falese を返す。つまり素数でない
                if (num % i === 0) {
                    document.write(num +'は素数ではありません');
                    console.log(num);
                    return false;
                    break;
                }
                //ループが最後ま行くと、、つまり割り切れるが最後までなかったら true を返す。つまり素数
                if (i + 1 === num) {
                    document.write(num + 'は素数です');                
                }
            }
        }
    }
    primeNumber(4);
})();