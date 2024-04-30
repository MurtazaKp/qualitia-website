export function setColor(variableName, color) {
    document.documentElement.style.setProperty(`--${variableName}`, color);
}