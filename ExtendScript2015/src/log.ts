type DebugArg = number|string|Object;

const report = {
  log: function (v:DebugArg|DebugArg[]) {
    if (DEBUG) {
      if (Array.isArray(v)) {
        v.forEach(n => {
          $.writeln(n);
        });
      } else {
        $.writeln(v);
      }
    }
  },
  inspectObj: function (obj:Object) {
    if (DEBUG) {
      for (const p in obj) {
        try {
          $.writeln('key :' + p);
          $.writeln('value :' + obj[p]);
        } catch (e) {
          $.writeln(e);
        }
      }
    }
  }
};

export default report;
