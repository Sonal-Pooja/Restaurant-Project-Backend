// Author - Sonal Pooja
const {express, app} = require('../config/server')

const dbMethods = require('../databaseHelpers/contactDatabaseFunctions');
const contactRouter = express.Router();

contactRouter.get('/', dbMethods.getContactDetails);

module.exports = contactRouter;
