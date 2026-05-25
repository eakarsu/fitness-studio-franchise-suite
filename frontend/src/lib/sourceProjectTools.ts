export const sourceProjectTools = [
  {
    "id": "ai-fitness-coach-source-workflow",
    "title": "AI Fitness Coach Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIFitnessCoach.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIFitnessCoach to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Fitness Coach source context",
    "outputLabel": "AI Fitness Coach source analysis",
    "signals": [
      "server/utils/openrouter",
      "server/routes/agenticCoach",
      "server/routes/ai",
      "server/routes/aiNew",
      "server/routes/trainingLoadBalance",
      "client/src/components/AICoachAdvisor",
      "client/src/components/AIInsights",
      "client/src/components/TrainingLoadBalance"
    ]
  },
  {
    "id": "ai-fitness-coach-ai-tools",
    "title": "AI Fitness Coach AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIFitnessCoach.",
    "defaultPrompt": "Review AIFitnessCoach AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Fitness Coach AI prompt or tool context",
    "outputLabel": "AI Fitness Coach AI tool response",
    "signals": [
      "server/utils/openrouter.js",
      "server/routes/agenticCoach.js",
      "server/routes/ai.js",
      "server/routes/aiNew.js",
      "server/routes/trainingLoadBalance.js",
      "client/src/components/AICoachAdvisor.js",
      "client/src/components/AIInsights.js",
      "client/src/components/TrainingLoadBalance.js"
    ]
  },
  {
    "id": "ai-fitness-coach-agentic-coach-3ojp48-exact-ai",
    "title": "AI Fitness Coach: Agentic Coach",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticCoach.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Coach\" from AIFitnessCoach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Coach donor inputs",
    "outputLabel": "Agentic Coach AI response",
    "signals": [
      "server/routes/agenticCoach.js"
    ]
  },
  {
    "id": "ai-fitness-coach-ai-j615h1-exact-ai",
    "title": "AI Fitness Coach: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIFitnessCoach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Activity Level",
      "Activity Type",
      "Age",
      "Allergies",
      "Asymmetries",
      "Ball Speed",
      "Carry Distance",
      "Channel = 'Short'"
    ]
  },
  {
    "id": "ai-fitness-coach-ai-new-1l6olc-exact-ai",
    "title": "AI Fitness Coach: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIFitnessCoach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Age",
      "Available Days",
      "Challenge Type",
      "Dietary Restrictions",
      "Duration Days",
      "Duration Weeks",
      "Goal",
      "Height Cm"
    ]
  },
  {
    "id": "ai-fitness-coach-training-load-balance-7gec0t-exact-ai",
    "title": "AI Fitness Coach: Training Load Balance",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/trainingLoadBalance.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Load Balance\" from AIFitnessCoach. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Load Balance donor inputs",
    "outputLabel": "Training Load Balance AI response",
    "signals": [
      "server/routes/trainingLoadBalance.js"
    ]
  }
];
