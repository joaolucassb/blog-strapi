"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize } = require('@strapi/utils');

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const entity = await strapi.entityService.findMany("api::post.post", query);

    const sanitizedEntity = await sanitize.contentAPI.output(entity, ctx);

    return sanitizedEntity;
  },
}));

module.exports = createCoreController('api::post.post', {
  count(ctx) {
    var { query } = ctx.request
    return strapi.query('api::post.post').count({ where: query});
  },
});
