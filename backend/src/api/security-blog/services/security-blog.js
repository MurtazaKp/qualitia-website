'use strict';

/**
 * security-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::security-blog.security-blog');
