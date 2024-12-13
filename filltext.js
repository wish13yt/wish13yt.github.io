function fitText() {
    const titles = document.querySelectorAll('.fit-title');
    titles.forEach(title => {
        const parentWidth = title.parentElement.scrollWidth;
        let fontSize = parseFloat(window.getComputedStyle(title).fontSize);
        let letterSpacing = parseFloat(window.getComputedStyle(title).letterSpacing) || 0;
        const maxFontSize = 28;
        const minFontSize = 8;
        //const maxLetterSpacing = 3;

        while (fontSize < maxFontSize && title.scrollWidth <= parentWidth) {
            fontSize += 0.5;
            title.style.fontSize = `${fontSize}px`;
        }

        /*if (!(title.scrollWidth >= parentWidth)) {
            while (title.scrollWidth < parentWidth && letterSpacing < maxLetterSpacing) {
                letterSpacing += 0.5;
                title.style.letterSpacing = `${letterSpacing}px`;
            }
        }*/

        while (title.scrollWidth > parentWidth && fontSize > minFontSize) {
            fontSize -= 0.5;
            title.style.fontSize = `${fontSize}px`;
            letterSpacing = Math.max(0, letterSpacing - 0.5);
            title.style.letterSpacing = `${letterSpacing}px`;
        }

        title.style.lineHeight = `${fontSize - 6}px`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fitText();
});
// stolen from https://graybox.lol/frames/web