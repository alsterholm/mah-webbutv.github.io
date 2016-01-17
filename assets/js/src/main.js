import {
    byId,
    bySelector,
    getUrlParams
} from "./helpers.js";

import {
    setExternalHrefs,
    setStickyFooter,
    setAnchorsToHeaders,
    highlightNavigation,
    setSidebar,
    addLineNumberButton,
    addCodePenButton,
    addSpoilerButton
} from "./core.js";

function main() {
    // Elements used to activate certain features
    let sidebar = byId("sidebar"),
        codeExamples = bySelector(".highlight"),
        spoilers = bySelector(".spoiler");

    // Common stuff
    setExternalHrefs();
    setStickyFooter();
    setAnchorsToHeaders();
    highlightNavigation();
    // Sidebar
    if (sidebar) {
        setSidebar();
    }
    // Code examples
    if (codeExamples.length) {
        codeExamples.map(e => {
            addLineNumberButton(e);
            addCodePenButton(e);
        });
    }
    // Spoilers
    if (spoilers.length) {
        spoilers.map(e => addSpoilerButton(e));
    }
}

window.addEventListener("load", function load() {
    window.removeEventListener("load", load, false);
    main();
}, false);
