import Ficha from '../models/ficha.model.js';

export const createFicha = async (req, res) => {
    try {
        const
            { organizationName,
                organizationType,
                country,
                legalRepName,
                legalRepPosition,
                email,
                phone,
                registrationId,
                team, // Ensure it's passed as an array of objects
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
                files, // Ensure it's properly handled or processed as needed
                video,
                recognition,
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
            accepted
        });
        const savedFicha = await newFicha.save();
        res.json(savedFicha);
    } catch (error) {
        return res.status(500).json({ message: "algo va mal" });
    }
};