import mongoose from "mongoose";

const fichaSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
    },
    organizationType: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    legalRepName: {
      type: String,
      required: true,
    },
    legalRepPosition: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    registrationId: {
      type: String,
    },
    team: [
      {
        name: {
          type: String,
        },
        position: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    ],
    associations: [String],
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    reasonInactive: {
      type: String,
    },
    need: {
      type: String,
      required: true,
    },
    objectives: {
      type: String,
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
    },
    activities: {
      type: String,
      required: true,
    },
    resultsObtained: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    innovation: {
      type: String,
    },
    impact: {
      type: String,
    },
    methodology: {
      type: String,
    },
    outcomes: {
      type: String,
    },
    transferability: {
      type: String,
      required: true,
    },
    sustainability: {
      type: String,
      required: true,
    },
    links: [String],
    files: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        content: {
          type: String, // Assuming content is stored as base64 string
          required: true,
        },
      },
    ],
    video: {
      type: String,
    },
    recognition: {
      type: String,
    },
    acceptanceLetter: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        content: {
          type: String, // Assuming content is stored as base64 string
          required: true,
        },
      },
    ],
    accepted: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: "es",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ficha", fichaSchema);
