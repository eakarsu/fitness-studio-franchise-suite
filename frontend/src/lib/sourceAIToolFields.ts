export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-fitness-coach-agentic-coach-3ojp48-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Coach source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCoach.js"
    }
  ],
  "ai-fitness-coach-ai-j615h1-exact-ai": [
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "activity_type",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "asymmetries",
      "label": "Asymmetries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ball_speed",
      "label": "Ball Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carry_distance",
      "label": "Carry Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "channel = 'short'",
      "label": "Channel = 'Short'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "club_type",
      "label": "Club Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cuisine_preferences",
      "label": "Cuisine Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_soreness",
      "label": "Current Soreness",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "distance",
      "label": "Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "elevation_gain",
      "label": "Elevation Gain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exercise",
      "label": "Exercise",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fitnessLevel",
      "label": "Fitness Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "formation",
      "label": "Formation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_avg",
      "label": "Heart Rate Avg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_max",
      "label": "Heart Rate Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "height_cm",
      "label": "Height Cm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history_of_injuries",
      "label": "History Of Injuries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "launch_angle",
      "label": "Launch Angle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "muscle_groups",
      "label": "Muscle Groups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "opponent",
      "label": "Opponent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace",
      "label": "Pace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_intensity",
      "label": "Recent Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_progress",
      "label": "Recent Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "self_description",
      "label": "Self Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sex",
      "label": "Sex",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sleep_quality",
      "label": "Sleep Quality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "spin_rate",
      "label": "Spin Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "strategy",
      "label": "Strategy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "swing_speed",
      "label": "Swing Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "team_name",
      "label": "Team Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "terrain",
      "label": "Terrain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone = 'encouraging'",
      "label": "Tone = 'Encouraging'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "total_distance",
      "label": "Total Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_goal",
      "label": "Upcoming Goal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weekly_volume_hours",
      "label": "Weekly Volume Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-fitness-coach-ai-new-1l6olc-exact-ai": [
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "available_days",
      "label": "Available Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "challenge_type",
      "label": "Challenge Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_days",
      "label": "Duration Days",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_weeks",
      "label": "Duration Weeks",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "height_cm",
      "label": "Height Cm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_weeks = 8",
      "label": "Horizon Weeks = 8",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "sports",
      "label": "Sports",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_metric = 'general_fitness'",
      "label": "Target Metric = 'General Fitness'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "team_id",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-fitness-coach-training-load-balance-7gec0t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training Load Balance source input context",
      "options": [],
      "required": false,
      "source": "server/routes/trainingLoadBalance.js"
    }
  ],
  "ai-fitness-coach-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Coach source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCoach.js"
    },
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "activity_type",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "asymmetries",
      "label": "Asymmetries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ball_speed",
      "label": "Ball Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carry_distance",
      "label": "Carry Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "channel = 'short'",
      "label": "Channel = 'Short'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "club_type",
      "label": "Club Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cuisine_preferences",
      "label": "Cuisine Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_soreness",
      "label": "Current Soreness",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "distance",
      "label": "Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "elevation_gain",
      "label": "Elevation Gain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exercise",
      "label": "Exercise",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fitnessLevel",
      "label": "Fitness Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "formation",
      "label": "Formation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_avg",
      "label": "Heart Rate Avg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_max",
      "label": "Heart Rate Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "height_cm",
      "label": "Height Cm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history_of_injuries",
      "label": "History Of Injuries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "launch_angle",
      "label": "Launch Angle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "muscle_groups",
      "label": "Muscle Groups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "opponent",
      "label": "Opponent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace",
      "label": "Pace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_intensity",
      "label": "Recent Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_progress",
      "label": "Recent Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "self_description",
      "label": "Self Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sex",
      "label": "Sex",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sleep_quality",
      "label": "Sleep Quality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "spin_rate",
      "label": "Spin Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "strategy",
      "label": "Strategy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "swing_speed",
      "label": "Swing Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "team_name",
      "label": "Team Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "terrain",
      "label": "Terrain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone = 'encouraging'",
      "label": "Tone = 'Encouraging'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "total_distance",
      "label": "Total Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_goal",
      "label": "Upcoming Goal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weekly_volume_hours",
      "label": "Weekly Volume Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "available_days",
      "label": "Available Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "challenge_type",
      "label": "Challenge Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_days",
      "label": "Duration Days",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_weeks",
      "label": "Duration Weeks",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_weeks = 8",
      "label": "Horizon Weeks = 8",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "sports",
      "label": "Sports",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_metric = 'general_fitness'",
      "label": "Target Metric = 'General Fitness'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "team_id",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-fitness-coach-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Coach source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticCoach.js"
    },
    {
      "name": "activity_level",
      "label": "Activity Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "activity_type",
      "label": "Activity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "asymmetries",
      "label": "Asymmetries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "ball_speed",
      "label": "Ball Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carry_distance",
      "label": "Carry Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "channel = 'short'",
      "label": "Channel = 'Short'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "club_type",
      "label": "Club Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cuisine_preferences",
      "label": "Cuisine Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_soreness",
      "label": "Current Soreness",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dietary_restrictions",
      "label": "Dietary Restrictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "distance",
      "label": "Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "elevation_gain",
      "label": "Elevation Gain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment",
      "label": "Equipment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "exercise",
      "label": "Exercise",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fitnessLevel",
      "label": "Fitness Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "formation",
      "label": "Formation",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_avg",
      "label": "Heart Rate Avg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "heart_rate_max",
      "label": "Heart Rate Max",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "height_cm",
      "label": "Height Cm",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "history_of_injuries",
      "label": "History Of Injuries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "launch_angle",
      "label": "Launch Angle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "muscle_groups",
      "label": "Muscle Groups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "opponent",
      "label": "Opponent",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace",
      "label": "Pace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_intensity",
      "label": "Recent Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_progress",
      "label": "Recent Progress",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "self_description",
      "label": "Self Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sex",
      "label": "Sex",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sleep_quality",
      "label": "Sleep Quality",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "spin_rate",
      "label": "Spin Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sport",
      "label": "Sport",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "strategy",
      "label": "Strategy",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "swing_speed",
      "label": "Swing Speed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "team_name",
      "label": "Team Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "terrain",
      "label": "Terrain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone = 'encouraging'",
      "label": "Tone = 'Encouraging'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "total_distance",
      "label": "Total Distance",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "upcoming_goal",
      "label": "Upcoming Goal",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weekly_volume_hours",
      "label": "Weekly Volume Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weight_kg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "available_days",
      "label": "Available Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "challenge_type",
      "label": "Challenge Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_days",
      "label": "Duration Days",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "duration_weeks",
      "label": "Duration Weeks",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_weeks = 8",
      "label": "Horizon Weeks = 8",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric",
      "label": "Metric",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "sports",
      "label": "Sports",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "target_metric = 'general_fitness'",
      "label": "Target Metric = 'General Fitness'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "team_id",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ]
};
