import Events from "../models/Events.js";
import Clubs from "../models/Clubs.js";
import Users from "../models/Users.js";
// import QRCode from "qrcode";

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
  const { title, participants_limit } = data;
  // const { title, participants_limit, eventDate } = data;

  if (!title) throw new Error("Missing required fields: title, desc, host");

  // const club = await Clubs.findById(host);
  // if (!club) throw new Error("Host club not found");

  // if (!["ADMIN", "CLUB_LEADER"].includes(user.role))
  //   throw new Error("Not authorized to create event");
  const newEvent = new Events({
    title,
    participants_limit,
    // eventDate: new Date(eventDate),
  });

  await newEvent.save();

  // also update club
  // club.events_hosted.push(newEvent._id);
  // await club.save();

  return newEvent;
};

export const registerEvent = async (eventId, userId) => {
  const event = await Events.findById(eventId);
  if (!event) throw new Error("Event not found");

  const registered = event.participants.find((p) => p.user.toString() === userId);
  if (registered) throw new Error("Already registered");

  if (event.participants.length >= event.participants_limit)
    throw new Error("Event is full");

  // // Create unique payload
  // const qrPayload = {
  //   eventId,
  //   userId,
  //   issuedAt: new Date(),
  // };

  // // Generate QR as base64
  // const qrCode = await QRCode.toDataURL(JSON.stringify(qrPayload));

  // QR key
  const eventKey = Date.now().toString(36).substring(5) + "-" + Math.random().toString().substring(2, 5);

  // Add participant
  event.participants.push({
    user: userId,
    attended: false,
    // qrCode, // save QR for easy retrieval
    eventKey,
  });

  await event.save();
  return eventKey;
};

export const markAttendance = async (eventId, eventKey) => {
  const event = await Events.findById(eventId);
  if (!event) throw new Error("Event not found");

  // const now = new Date();
  // if (now > event.eventDate)
  //   throw new Error("Attendance closed — event already over");

  const participant = event.participants.find((p) => p.eventKey === eventKey)
  if (!participant) throw new Error("User not registered for event");
  
  if (participant.attended) throw new Error("Attendance already marked");
  
  participant.attended = true;
  await event.save();
  
  // Update user's participated events
  const userId = participant.user.toString();
  const user = await Users.findById(userId);
  user.events_participated.push({ event_id: eventId, date: new Date() });
  await user.save();
};
