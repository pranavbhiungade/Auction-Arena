const express = require("express");
const router = express.Router();

const { getAllDomains,createDomain} = require("../controllers/createDomain");
const{authenticate,adminAuthorization}=require("../middleware/auth")


router.get('/domain/getAllDomains', authenticate,adminAuthorization,getAllDomains);
router.post('/domain/createDomain', authenticate, adminAuthorization, createDomain);
module.exports = router;