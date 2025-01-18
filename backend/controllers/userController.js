const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
};

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, points });
  await history.save();

  res.json({ points, user });
};

exports.getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find()
    .populate("userId", "name")
    .sort({ claimedAt: -1 }); // Sort by latest claims;
  res.json(history);
};

exports.getUserClaimHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const history = await ClaimHistory.find({ userId })
      .populate("userId", "name") // Populate the user's name
      .sort({ claimedAt: -1 }); // Sort by latest claims

    if (!history.length) {
      return res
        .status(404)
        .json({ message: "No claim history found for this user" });
    }

    res.json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user claim history", error });
  }
};
