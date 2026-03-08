const { Contacts } = require('./contacts.class');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  app.use('/contacts', new Contacts(options));
};