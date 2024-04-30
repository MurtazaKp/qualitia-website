'use strict';

/**
 * parent-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parent-page.parent-page');
