import report from "./log";

export const callDocument:()=>string = () => {
    if(app.documents.length < 1){
        alert("there's no any document");
        return new Error("there's no any document").toString();
    }
    alert(app.activeDocument.name);
    return decodeURI(app.activeDocument.name.toString());
}