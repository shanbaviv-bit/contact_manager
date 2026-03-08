const contacts = require('./contacts/contacts.service');

module.exports = function (app) {
  app.configure(contacts);
};