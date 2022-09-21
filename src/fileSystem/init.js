export const csInterface = new CSInterface();
export const extensionId = csInterface.getExtensionID();
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx/';

/** 
 * register event on Window.
 * once panel closed or opened, it reloads.
*/
const reload = () =>{
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

/**
 * prevent dragging image file on panel accidentally
 */

const preventDragEvent = () =>{
    window.addEventListener('drop' ,preventDragnaddrop,false);
    
    window.addEventListener('dragover' ,preventDragnaddrop,false);
    
    function preventDragnaddrop(e){
        e.stopPropagation();
        e.preventDefault();
    }
};

/**
 * load ExtendScript Webpack transpiled.
 * reloaded it once you closed and opned panel.
 */
const loadJsx = () =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}transpiled.js")`);
};

/**
 * 
 * @param {Object} obj something you wnat to send to ExtendScript as a parameter 
 * this time I don't use this.
 * it writes Object as a JSON file.
 * if you want check parameter as a json file,
 * this may be usefull
 */
export const writeDebugData = obj =>{
    if(!ISDEVELOP)return;
    fs.writeFileSync(`${extensionRoot}/data.json`,JSON.stringify(obj));
}

/** 
 *load ExtendScript and register window event
*/
export const init = () => {
    try{
        preventDragEvent();
        if (ISDEVELOP) reload();
        loadJsx();
    }catch (e) {
        console.log(e);
    }
};

export const alertFromJSX = msg => {
    return new Promise(resolve => {
        csInterface.evalScript(`$.evalFile(alert("${msg}"))`,() => {
            resolve();
        })
    })
};