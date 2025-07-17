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
    });

    savedFicha = await newFicha.save();
  } catch (error) {
    console.error("Error during the save operation:", error);
    return res
      .status(500)
      .json({ message: "Algo salió mal", error: error.message });
  }

  // Separate email sending logic

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

  // Respond with the saved Ficha
  return res.json(savedFicha);
};
