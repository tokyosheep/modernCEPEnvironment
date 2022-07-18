/**
 * this is console method
 * I use this instead of directoly using $.writeln method 
 */

type DebugArg = number|string|Object;

/**
 * console method
 * DEBUG variable has true value when you develop under development environment.
 * but once you finished and switched to production environment, it never calls $.writeln method.
 */
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
  /**
   * 
   * @param {Object} obj anything Object you want to inspect
   * inspecting object properties. ExtendScript doen't show all of properties like google chrome devetool
   * just showing Object as [Object object]
   * this method inspects all of properties
   */
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
