import Clubs from "../models/Clubs.js";

export const getAllClubs = async () => {
  return await Clubs.find().select("name description leader").populate("leader", "name email");
};

export const getClubById = async (clubId) => {
  const club = await Clubs.findById(clubId)
    .populate("leader", "name email")
    .populate("members.user", "name email");
  if (!club) throw new Error("Club not found");
  return club;
};

export const applyToClub = async (clubId, userId, message) => {
  const club = await Clubs.findById(clubId);
  if (!club) throw new Error("Club not found");

  // Check if user is already a member or has already applied
  const isMember = club.members.some((m) => m.user.toString() === userId);
  const hasApplied = club.requests.some((r) => r.user.toString() === userId);

  if (isMember) throw new Error("You are already a member of this club");
  if (hasApplied) throw new Error("You have already applied to this club");

  // Add a join request
  club.requests.push({ user: userId, message });
  await club.save();

  return { message: "Join request sent successfully" };
};

export const createClub = async (clubData) => {
  const existingClub = await Clubs.findOne({ name: clubData.name });
  if (existingClub) {
    throw new Error("A club with this name already exists");
  }

  const newClub = new Clubs(clubData);
  await newClub.save();

  return newClub;
};