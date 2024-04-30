export function getDisplayName(slug) {
    const refactorSlug = slug?.replaceAll("_", " ").replaceAll("-", " ");
    return refactorSlug
}