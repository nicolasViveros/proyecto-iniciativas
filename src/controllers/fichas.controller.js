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
    const languageMail = savedFicha.language;
    // Separate email sending logic
    let emailSubject, htmlContent, textContent;

    switch(languageMail) {
      case 'en':
        emailSubject = "Thank you for participating. On the way to Equity";
        htmlContent = `
        <div style="color: #5d5593">
          <h1>Your application has been saved</h1>
          <p>Thank you for participating in On the way to Equity. Here are the details of your participation:</p>
          <ul>
            <li><strong>Organization:</strong> ${organizationName}</li>
            <li><strong>Organization Type:</strong> ${organizationType}</li>
            <li><strong>Country:</strong> ${country}</li>
            <li><strong>Legal Representative:</strong> ${legalRepName}</li>
            <li><strong>Representative's Position:</strong> ${legalRepPosition}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Project Name:</strong> ${name}</li>
            <li><strong>City:</strong> ${city}</li>
          </ul>
        </div>
        <img src='https://rumboalaequidad.org/Footer2.png' alt='logo' style="display: block; margin-top: 10px;">
        `;
        textContent = "Your application has been saved. Thank you for participating in On the way to Equity.";
        break;
      case 'pt':
        emailSubject = "Obrigado por participar. Caminho para a Equidade";
        htmlContent = `
        <div style="color: #5d5593">
          <h1>Sua inscrição foi salva</h1>
          <p>Obrigado por participar no Caminho para a Equidade. Aqui estão os detalhes da sua participação:</p>
          <ul>
            <li><strong>Organização:</strong> ${organizationName}</li>
            <li><strong>Tipo de Organização:</strong> ${organizationType}</li>
            <li><strong>País:</strong> ${country}</li>
            <li><strong>Representante Legal:</strong> ${legalRepName}</li>
            <li><strong>Posição do Representante:</strong> ${legalRepPosition}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Telefone:</strong> ${phone}</li>
            <li><strong>Nome do Projeto:</strong> ${name}</li>
            <li><strong>Cidade:</strong> ${city}</li>
          </ul>
        </div>
        <img src='https://rumboalaequidad.org/Footer2.png' alt='logo' style="display: block; margin-top: 10px;">
        `;
        textContent = "Sua inscrição foi salva. Obrigado por participar no Caminho para a Equidade.";
        break;
      default: // Default to Spanish
        emailSubject = "Gracias por participar. Rumbo a la Equidad";
        htmlContent = `
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
        `;
        textContent = "Su postulación ha sido guardada. Gracias por participar en Rumbo a la Equidad.";
    }
    
    try {
      await sendEmail({
        recipientEmail: email,
        recipientName: name,
        emailSubject,
        htmlContent,
        textContent,
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
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
