const express = require("express");
const router = express.Router();

const {sellCompany,createCompany,deleteCompany,getAllCompaniesData} = require("../controllers/companyController");
const { createDomain } = require("../controllers/createDomain");
const {authenticate,teamAuthorization,adminAuthorization} = require("../middleware/auth");

router.put('/company/sellCompany', authenticate, adminAuthorization, sellCompany);
router.post('/company/createCompany', authenticate, adminAuthorization, createCompany);
router.post('/company/createDomain', authenticate, adminAuthorization, createDomain);
router.delete('/company/deleteCompany/:id', authenticate, adminAuthorization, deleteCompany);
router.get('/company/getAllCompanies', authenticate, getAllCompaniesData);

module.exports = router;

