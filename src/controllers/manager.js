const { supabase } = require("../index");

// Register Manager
exports.registerManager = async (req, res) => {
  const { email, password, name, phone } = req.body;
  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) return res.status(400).json({ error: error.message });

  const { data, dbError } = await supabase
    .from("managers")
    .insert([{ id: user.id, name, email, phone }]);

  if (dbError) return res.status(500).json({ error: dbError.message });

  res.status(201).json({ data });
};

// Update Manager
exports.updateManager = async (req, res) => {
  const { managerId, name, phone } = req.body;
  const { data, error } = await supabase
    .from("managers")
    .update({ name, phone })
    .eq("id", managerId);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ data });
};

// Add Company Information
exports.addCompanyInfo = async (req, res) => {
  const { managerId, companyName, address } = req.body;
  const { data, error } = await supabase
    .from("companies")
    .insert([{ managerId, companyName, address }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ data });
};

// Invite Team Members
exports.inviteTeamMembers = async (req, res) => {
  const { managerId, email, role } = req.body;
  const { data, error } = await supabase
    .from("team_members")
    .insert([{ managerId, email, role }]);

  if (error) return res.status(500).json({ error: error.message });

  // Here, you can implement an email sending service to send invitations

  res.status(201).json({ data });
};

// Get Onboarding Status
exports.getOnboardingStatus = async (req, res) => {
  const { managerId } = req.params;
  const { data, error } = await supabase
    .from("onboarding_status")
    .select("*")
    .eq("managerId", managerId);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ data });
};
