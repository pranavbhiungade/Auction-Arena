const express = require("express");
const router = express.Router();

const {createTeam,getTeamData,getAllTeams} = require("../controllers/teamController");
const { register ,login} = require("../controllers/authController");
const {authenticate,teamAuthorization} = require("../middleware/auth");

router.post("/team/register",register);
router.post("/team/login",login);
// router.post('/team/register', createTeam);
router.get('/team/getTeamData/:id', authenticate, teamAuthorization, getTeamData);
router.get('/team/getAllTeamsData', authenticate,getAllTeams);

module.exports = router;
