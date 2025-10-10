import {
  getAllClubs,
  getClubById,
  applyToClub,
  createClub,
} from "../db/club.js";
import Users from "../models/Users.js";

export const handleGetClubs = async (req, res) => {
  try {
    const clubs = await getAllClubs();
    res.status(200).json(clubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const handleGetClubById = async (req, res) => {
  try {
    const club = await getClubById(req.params.id);
    res.status(200).json(club);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const handleApplyForClub = async (req, res) => {
  try {
    const { message } = req.body;
    const result = await applyToClub(req.params.id, req.user.id, message);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createClubController = async (req, res) => {
  try {
    const { name, description, leader } = req.body;

    if (!name || !description || !leader) {
      return res.status(400).json({ error: "Name, description, and leader are required" });
    }

    const leaderUser = await Users.findOne({ name: leader }) || await Users.findOne({ email: leader });
    if (!leaderUser) {
      return res.status(404).json({ error: "Leader not found" });
    }

    const newClub = await createClub({
      name,
      description,
      leader: leaderUser._id,
    });

    res.status(201).json({
      message: "Club created successfully",
      club: newClub,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};