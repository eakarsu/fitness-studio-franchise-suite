export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIFitnessCoach"
    ],
    "examples": [
      "client/src/components/AICoachAdvisor",
      "client/src/components/AIInsights",
      "client/src/components/TrainingLoadBalance",
      "server/routes/agenticCoach",
      "server/routes/ai",
      "server/routes/aiNew"
    ],
    "count": 1
  }
];
