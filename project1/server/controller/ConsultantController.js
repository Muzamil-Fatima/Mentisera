import Consultant from "../models/ConsultantModel.js";
// create A new Consultant
export const createConsultant = async (req, res) => {
  try {
    const newConsultant = new Consultant(req.body);

    await newConsultant.save();

    res.status(201).json({
      success: true,
      message: "Consultant registered successfully",
      data: newConsultant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving consultant",
      error: error.message,
    });
  }
};
// Get All Consultant
export const getAllConsultant = async (req, res) => {
  try {
    const consultants = await Consultant.find({});
    res.json({ success: true, consultants });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// get all pending consultant
export const getPendingConsultant = async (req, res) => {
  try {
    const pendingConsultant = await Consultant.find({ status: "pending" });
    if (!pendingConsultant.length) {
      return res.status(404).json({
        success: false,
        message: "No pending consultants found",
      });
    }
    res.status(200).json({ success: true, pendingConsultant });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
