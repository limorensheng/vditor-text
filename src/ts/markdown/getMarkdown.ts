import {code160to32} from "../util/code160to32";

export const getMarkdown = (vditor: IVditor , status = false) => {
    if (vditor.currentMode === "sv") {
        return code160to32(`${vditor.sv.element.textContent}\n`.replace(/\n\n$/, "\n"));
    } else if (vditor.currentMode === "wysiwyg") {
        let str = vditor.wysiwyg.element.innerHTML
        if(status){
            const br = "<p data-block=\"0\"><wbr></p>";
            const Blank = '<p data-block="0"></p>';
            const replacement = '[newline]';
            str = str.replace(new RegExp(br, 'g'), replacement);
            str = str.replace(new RegExp(Blank, 'g'), replacement);
        }
        return vditor.lute.VditorDOM2Md(str);
    } else if (vditor.currentMode === "ir") {
        return vditor.lute.VditorIRDOM2Md(vditor.ir.element.innerHTML);
    }
    return "";
};
