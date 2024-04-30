// ./src/plugins/preview-button/admin/src/components/PreviewLink/index.js
import React from 'react';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import Eye from '@strapi/icons/Eye';
import { LinkButton } from '@strapi/design-system/LinkButton';

const PreviewLink = () => {
    const { initialData, layout } = useCMEditViewDataManager();
    if (!initialData.slug) {
        return null;
    }

    const getHref = () => {
        if (layout?.apiID !== "resource") {
            return `${CLIENT_FRONTEND_URL}/api/preview?secret=${CLIENT_PREVIEW_SECRET}&slug=${initialData?.slug}&collectionType=${layout?.apiID}`
        } else {
            return `${CLIENT_FRONTEND_URL}/api/preview?secret=${CLIENT_PREVIEW_SECRET}&slug=${`${initialData?.category}`.toLocaleLowerCase()?.replace("_", "-")}&collectionType=${layout?.apiID}&innerSlug=${initialData?.slug}`
        }
    }

    return (
        <LinkButton
            size="S"
            startIcon={<Eye />}
            style={{ width: '100%' }}
            href={getHref()}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            title="page preview"
        >Preview
        </LinkButton>
    );
};

export default PreviewLink;