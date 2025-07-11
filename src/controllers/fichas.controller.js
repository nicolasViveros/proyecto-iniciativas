import Ficha from '../models/ficha.model.js';

export const createFicha = async (req, res) => {
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
            accepted
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
            accepted
        });

        const savedFicha = await newFicha.save();
        res.json(savedFicha);
    } catch (error) {
        // Proporciona más detalles sobre el error
        console.error("Error during the save operation:", error);
        return res.status(500).json({ message: "Algo salió mal", error: error.message });
    }
};

export const getFichas = async (req, res) => {
    try {
        const fichas = await Ficha.find()
        res.json(fichas)
    } catch (error) {
        return res.status(500).json({ message: "algo va mal" });

    }
};

export const getFicha = async (req, res) =>  {
    try {
     const ficha = await Ficha.findById(req.params.id)
     if (!ficha) return res.status(404).json ({message: "ficha not found"})
     res.json(ficha)
    } catch (error) {
     return res.status(404).json ({message: "ficha not found"})
    }
 };