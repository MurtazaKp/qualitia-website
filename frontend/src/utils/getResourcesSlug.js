import { pagePluralForms } from "@/constants"

export function getResourcesSlug(slug) {
    const formattedSlug = slug.toLocaleLowerCase().replace(" ", "-").replace("-", "_")
    return pagePluralForms[formattedSlug] || formattedSlug
}