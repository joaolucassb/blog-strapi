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

  async find(ctx) {
    var { query } = ctx.request;
    const response = await strapi.db.query('api::post.post').findMany({
      where: query,
      populate: [
        'cover',
        'author',
        'category',
      ],
    });
    return response;
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const response  = await strapi.db.query('api::post.post').findOne({
      where: {slug},
        populate: [
          'cover',
          'author',
          'category',
        ],
    })

    return response;
  }
});
