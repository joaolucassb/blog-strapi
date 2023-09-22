const axios = require('axios').default;

module.exports = {
   async afterCreate(result, data) {
      axios.post('https://api.netlify.com/build_hooks/650da45747c6d7072c088056');
   },

   async afterUpdate(result, params, data) {
    axios.post('https://api.netlify.com/build_hooks/650da45747c6d7072c088056');
  },
}
