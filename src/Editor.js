const state = {
    boldMode: false,
    italicMode: false,
    element: null
};

const toggleMode = mode => {
    const prop = `${mode}Mode`;

    state[prop] = !state[prop];
};

const insertMarkers = (mode, cb) => {
    const element = state.element;
    const { selectionStart, selectionEnd, value } = element;

    toggleMode(mode);

    let marker;

    switch (mode) {
        case "italic":
            marker = "_";
            break;
        case "bold":
            marker = "*";
            break;
        default:
            return;
    }

    let newValue;

    if (selectionStart >= 0 && selectionStart === selectionEnd) {
        newValue = `${value}${marker}`;
    } else if (selectionStart >= 0) {
        newValue = [
            value.slice(0, selectionStart),
            value.slice(selectionStart, selectionEnd),
            value.slice(selectionEnd)
        ].join(marker);

        this.toggleMode(mode);
    }

    if (cb) {
        cb(newValue);
    }
};

class Editor {
    checkCtrlKey(event, cb) {
        const { key, ctrlKey, metaKey } = event;
        const element = event.target;

        state.element = element;

        if (key === "b" && (ctrlKey || metaKey)) {
            insertMarkers("bold", cb);
        } else if (key === "i" && (ctrlKey || metaKey)) {
            insertMarkers("italic", cb);
        }
    }
}

export default Editor;
