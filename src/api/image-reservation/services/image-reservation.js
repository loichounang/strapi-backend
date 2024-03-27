'use strict';

/**
 * image-reservation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::image-reservation.image-reservation');
