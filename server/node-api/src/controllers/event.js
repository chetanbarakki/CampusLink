import {
  getAllEvents,
  getEventById,
  createEvent,
  registerEvent,
} from "../db/event.js";

export const handleGetEvents = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const handleGetEventById = async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const handleCreateEvent = async (req, res) => {
  try {
    const event = await createEvent(req.body, req.user);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const handleRegisterEvent = async (req, res) => {
  try {
    const event = await registerEvent(req.params.id, req.user._id);
    res.status(200).json({ message: "Registered successfully", event });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
