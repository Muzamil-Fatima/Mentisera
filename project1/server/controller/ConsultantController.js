import Consultant from "../models/ConsultantModel.js";
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