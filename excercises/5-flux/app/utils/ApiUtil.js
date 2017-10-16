var xhr = require('../lib/xhr');
var { API, ActionTypes } = require('../Constants');
var ServerActionCreators = require('../actions/ServerActionCreators');

var ApiUtils = {
  loadContacts () {
    xhr.getJSON(`${API}/contacts`, (err, res) => {
      ServerActionCreators.loadedContacts(res.contacts);
    });
  },
  deleteContact(contact) {

    setTimeout( () => {
       ServerActionCreators.deletedContact(contact);
    }, 3000);
    //xhr.deleteJSON(`${API}/contacts`, (err,res ) => {

    //})
  }
};

module.exports = ApiUtils;

