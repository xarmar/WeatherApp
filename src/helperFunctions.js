export const helperfunction = (() => {

    const appendMultipleNodesToParent = (parentNode, ...childNodes) => {
        childNodes.forEach(child => {
            parentNode.append(child);
        });
    }

    const removeChildNodes = (parentNode) => {
        while(parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }

    return {
        appendMultipleNodesToParent,
        removeChildNodes
    }

})();