'use strict';

/**
 * parent-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::parent-page.parent-page');
