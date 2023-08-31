'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', {
  count(ctx) {
    var { query } = ctx.request
    return strapi.query('api::post.post').count({ where: query});
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const response  = await strapi.db.query('api::post.post').findOne({
      where: {slug}
    })

    return response;
  }
});
