// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;
  
      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
  
      // returns:
      //  0        ->  0
      // -0        -> -0
      //  0.2      ->  0
      // -0.2      -> -0
      //  0.7      ->  0
      // -0.7      -> -0
      //  Infinity ->  Infinity
      // -Infinity -> -Infinity
      //  NaN      ->  NaN
      //  null     ->  0
    };
  }
  