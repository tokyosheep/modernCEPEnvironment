export const csInterface = new CSInterface();
export const extensionId = csInterface.getExtensionID();
export const extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + '/jsx/';

const reload = () =>{
    csInterface.addEventListener("com.adobe.csxs.events.WindowVisibilityChanged",()=>{location.reload(true)},false);
}

const preventDragEvent = () =>{
    window.addEventListener('drop' ,preventDragnaddrop,false);
    
    window.addEventListener('dragover' ,preventDragnaddrop,false);
    
    function preventDragnaddrop(e){
        e.stopPropagation();
        e.preventDefault();
    }
};

const loadJsx = () =>{
    csInterface.evalScript(`$.evalFile("${extensionRoot}/transpiled.js")`);
};

export const writeDebugData = obj =>{
    if(!ISDEVELOP)return;
    fs.writeFileSync(`${extensionRoot}/data.json`,JSON.stringify(obj));
}

export const init = () => {
    preventDragEvent();
    if (!ISDEVELOP) reload();
    loadJsx(jsxParts);
};