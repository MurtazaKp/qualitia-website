import { pagePluralForms } from "@/constants";
import { getKeyByValue } from "@/utils/getKeyByValue";

export default async function handler(req, res) {
    const secret = req.query.secret;
    const slug = req.query.slug;
    const innerSlug = req.query.innerSlug;
    const collectionType = req.query.collectionType
    if (secret !== process.env.CLIENT_PREVIEW_SECRET) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    if (!slug) {
        return res.status(400).json({ message: 'Parameter `slug` is not provided' });
    }
    res.setPreviewData({});
    if (collectionType === 'home') {
        res.redirect(307, `/preview`);
    } else if (collectionType === 'resource') {
        res.redirect(307, `/preview/resources/${pagePluralForms[slug?.toLocaleLowerCase()] || slug}/${innerSlug}`);
    } else if (collectionType === 'parent-page') {
        res.redirect(307, `/preview/${slug}`);
    }
    else {
        const page = getKeyByValue(pagePluralForms, collectionType)
        res.redirect(307, `/preview/${"resouce-page" === collectionType ? `resources` : collectionType}/${slug}`);
    }
}