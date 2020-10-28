// jscs:disable validateLineBreaks
// jscs:disable validateQuoteMarks
// jscs:disable disallowMultipleLineBreaks
// jscs:disable requirePaddingNewLinesBeforeLineComments
// jscs:disable requireTrailingComma
// jscs:disable disallowQuotedKeysInObjects
// jscs:disable requireShorthandArrowFunctions
/* jshint esversion: 8 */

document.addEventListener("DOMContentLoaded", () => {
  const allItems = document.querySelectorAll("li.item");
  let maxHeight = 0;
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].scrollHeight > maxHeight) {
      maxHeight = allItems[i].scrollHeight;
    }
  }

  for (let i = 0; i < allItems.length; i++) {
    allItems[i].style.height = `${maxHeight}px`;
  }
});
