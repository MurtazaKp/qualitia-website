export function capitalizeFirstLetter(string) {
    const finalSentence = !!string && string.replace(/[^A-Z0-9]/ig, " ").replace(/(^\w{1})|(\s+\w{1})/g, string => string.toUpperCase());
    const text = finalSentence.split(" ").join("")
    return !!text && text[0].toLowerCase() + text.slice(1) || text
}