import Ficha from "../models/ficha.model.js";
import { sendEmail } from "../controllers/email.controller.js";

export const createFicha = async (req, res) => {
  let savedFicha;
  try {
    const {
      organizationName,
      organizationType,
      country,
      legalRepName,
      legalRepPosition,
      email,
      phone,
      registrationId,
      team, // Validate array structure
      associations,
      name,
      city,
      startDate,
      isActive,
      reasonInactive,
      need,
      objectives,
      targetAudience,
      activities,
      resultsObtained,
      category,
      innovation,
      impact,
      methodology,
      outcomes,
      transferability,
      sustainability,
      links,
      files, // Handle or convert as needed
      video,
      recognition,
      acceptanceLetter,
      accepted,
      language,
    } = req.body;

    const newFicha = new Ficha({
      organizationName,
      organizationType,
      country,
      legalRepName,
      legalRepPosition,
      email,
      phone,
      registrationId,
      team,
      associations,
      name,
      city,
      startDate,
      isActive,
      reasonInactive,
      need,
      objectives,
      targetAudience,
      activities,
      resultsObtained,
      category,
      innovation,
      impact,
      methodology,
      outcomes,
      transferability,
      sustainability,
      links,
      files,
      video,
      recognition,
      acceptanceLetter,
      accepted,
      language,
    });
    savedFicha = await newFicha.save();
    console.log("savedFicha :", savedFicha);
    // Separate email sending logic
    try {
      await sendEmail({
        recipientEmail: email,
        recipientName: name,
        emailSubject: "Gracias por participar. Rumbo a la Equidad",
        htmlContent: `
        <div style="color: #5d5593">
          <h1>Su postulación ha sido guardada</h1>
          <p>Gracias por participar en Rumbo a la Equidad. Aquí están los detalles de su participación:</p>
          <ul>
            <li><strong>Organización:</strong> ${organizationName}</li>
            <li><strong>Tipo de Organización:</strong> ${organizationType}</li>
            <li><strong>País:</strong> ${country}</li>
            <li><strong>Representante Legal:</strong> ${legalRepName}</li>
            <li><strong>Posición del Representante:</strong> ${legalRepPosition}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${phone}</li>            
            <li><strong>Nombre del Proyecto:</strong> ${name}</li>
            <li><strong>Ciudad:</strong> ${city}</li>
          </ul>
        </div>
        <img src='https://rumboalaequidad.org/Footer2.png' alt='logo' style="display: block; margin-top: 10px;">
      `,
        textContent:
          "Su postulación ha sido guardada. Gracias por participar en Rumbo a la Equidad.",
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Optionally handle email sending errors, e.g., notification or retry logic
    }
  } catch (error) {
    console.error("Error during the save operation:", error);
    return res
      .status(500)
      .json({ message: "Algo salió mal", error: error.message });
  }
  // Respond with the saved Ficha
  return res.json(savedFicha);
};

export const getFichas = async (req, res) => {
  try {
    const fichas = await Ficha.find().select("-files -acceptanceLetter");
    res.json(fichas);
  } catch (error) {
    return res.status(500).json({ message: "algo va mal" });
  }
};

export const getFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findById(req.params.id);
    if (!ficha) return res.status(404).json({ message: "ficha not found" });
    res.json(ficha);
  } catch (error) {
    return res.status(404).json({ message: "ficha not found" });
  }
};

export const deleteFicha = async (req, res) => {
  try {
    console.log(req.params.id);
    const ficha = await Ficha.findByIdAndDelete(req.params.id);
    if (!ficha) return res.status(404).json({ message: "ficha not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "ficha not found" });
  }
};

export const updateFicha = async (req, res) => {
  try {
    const ficha = await Ficha.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ficha) return res.status(404).json({ message: "ficha not found" });
    res.json(ficha);
  } catch (error) {
    return res.status(404).json({ message: "ficha not found" });
  }
};
