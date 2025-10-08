import Events from "../models/Events.js";
import Clubs from "../models/Clubs.js";
import Users from "../models/Users.js";

export const getAllEvents = async () => {
  return await Events.find()
    .populate("host", "title desc")
    .populate("event_leaders.user", "name email")
    .populate("participants", "name email");
};

export const getEventById = async (id) => {
  return await Events.findById(id)
    .populate("host", "title desc")
    .populate("event_leaders.user", "name email")
    .populate("participants", "name email");
};

export const createEvent = async (data, user) => {
  const { title, desc, host, participants_limit } = data;

  if (!title || !desc || !host)
    throw new Error("Missing required fields: title, desc, host");

  const club = await Club.findById(host);
  if (!club) throw new Error("Host club not found");

  if (!["ADMIN", "CLUB_LEADER"].includes(user.role))
    throw new Error("Not authorized to create event");

  const newEvent = new Event({
    title,
    desc,
    host,
    participants_limit,
    event_leaders: [{ user: user._id, rank: user.role }],
  });

  await newEvent.save();

  // also update club
  club.events_hosted.push(newEvent._id);
  await club.save();

  return newEvent;
};

export const registerEvent = async (eventId, userId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");

  if (event.participants.includes(userId))
    throw new Error("Already registered");

  if (event.participants.length >= event.participants_limit)
    throw new Error("Event is full");

  event.participants.push(userId);
  await event.save();

  // Update user's participated events
  const user = await User.findById(userId);
  user.events_participated.push({ event_id: eventId, date: new Date() });
  await user.save();

  return event;
};
