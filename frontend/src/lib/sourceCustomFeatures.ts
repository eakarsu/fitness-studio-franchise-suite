import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Fitness Coach Source Feature",
    "href": "/features/source-ai-fitness-coach",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFitnessCoach: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Fitness Coach Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-fitness-coach": {
    "title": "AI Fitness Coach Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIFitnessCoach, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIFitnessCoach: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "8 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "8",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Fitness Coach Source Feature": {
    "sourceOwners": [
      "AIFitnessCoach"
    ],
    "operatingQueues": [
      "Openrouter",
      "Agentic Coach",
      "AI",
      "AI New"
    ],
    "outputs": [
      "AI Fitness Coach merged workflow register",
      "AI Fitness Coach API and route coverage map",
      "AI Fitness Coach AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-fitness-coach": {
    "workItems": [
      {
        "id": "source-ai-fitness-coach-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/utils/openrouter.js"
      },
      {
        "id": "source-ai-fitness-coach-work-2",
        "item": "Agentic Coach",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticCoach.js"
      },
      {
        "id": "source-ai-fitness-coach-work-3",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-fitness-coach-work-4",
        "item": "AI New",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiNew.js"
      },
      {
        "id": "source-ai-fitness-coach-work-5",
        "item": "Training Load Balance",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/trainingLoadBalance.js"
      },
      {
        "id": "source-ai-fitness-coach-work-6",
        "item": "AI Coach Advisor",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for client/src/components/AICoachAdvisor.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-fitness-coach-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-fitness-coach-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-fitness-coach-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-fitness-coach-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-fitness-coach-log-1",
        "message": "Deep-merge feature generated from AIFitnessCoach",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-fitness-coach-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-fitness-coach": {
    "title": "AI Fitness Coach Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-fitness-coach-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-fitness-coach-entity-2",
        "name": "Agentic Coach",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fitness-coach-entity-3",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fitness-coach-entity-4",
        "name": "AI New",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-fitness-coach-entity-5",
        "name": "Training Load Balance",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIFitnessCoach": "/features/source-ai-fitness-coach"
};
