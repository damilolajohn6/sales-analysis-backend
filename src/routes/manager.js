const express = require("express");
const {
  registerManager,
  updateManager,
  addCompanyInfo,
  inviteTeamMembers,
  getOnboardingStatus,
} = require("../controllers/manager");

const router = express.Router();

// Register Manager
router.post("/register", registerManager);

// Update Manager
router.put("/update", updateManager);

// Add Company Information
router.post("/company", addCompanyInfo);

// Invite Team Members
router.post("/invite", inviteTeamMembers);

// Get Onboarding Status
router.get("/status/:managerId", getOnboardingStatus);

module.exports = router;
