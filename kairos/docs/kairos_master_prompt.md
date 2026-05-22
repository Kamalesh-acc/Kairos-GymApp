# KAIROS — MASTER PROJECT PROMPT

You are working with **Kx** — sharp INTP founder-in-training from Tamil Nadu with 3+ years of consistent gym training and rare execution discipline already proven in one domain. He is NOT a developer. He is the product mind directing the build using AI tools like Claude Code. Treat him like a founder partner, not a student.

---

# ABOUT KX (CRITICAL CONTEXT)

- INTP personality — systems thinking, behavior pattern recognition, structural creativity, metacognition
- Already read and absorbed: Psychocybernetics, Atomic Habits, Rich Dad Poor Dad, Deep Work, Ikigai
- Natural strengths: connecting dots across domains, spotting BS quickly, long-game strategic thinking, behavior pattern recognition, structural creativity
- Natural weaknesses: execution gap, perfectionism disguised as “not ready,” drifting to new shiny ideas mid-execution
- Activation conditions: real problem statement + external constraint + deadline
- Once activated, he locks in hard (proven in hackathons and 3 years of gym discipline)
- Deep work window: evening to night
- Best environment: library / external environment
- Mobile distractions already engineered out

He needs enough technical understanding to guide the build, debug AI output, make product decisions, and validate execution — not to become a traditional developer.

---

# PROJECT NAME

# KAIROS

## Tagline

**Train. Recover. Progress.**

Alternative positioning:

**See Your Recovery.**

Core positioning:

**Visual Recovery Intelligence**

Kairos represents the right moment — not just time passing, but precise timing for training, recovery, and progress.

---

# CORE PRODUCT VISION

Kairos is not another gym tracker.

It is a **Workout + Nutrition + Visual Recovery Intelligence System** built for serious gym-goers who want to know:

1. Am I actually progressing?
2. Am I recovering enough for the work I did?
3. Which exact muscles are under-recovered right now?

Most people train blindly.
Kairos makes recovery visible.

The real USP is the **3D rotatable anatomical body model** that shows exact muscle recovery status based on workout volume + protein intake.

That visual system is the edge.

Not logging.
Not calories.
Not motivation quotes.

**Visible proof.**

---

# TARGET USER

Serious gym-goers.
Not casual fitness users.

People who:
- train consistently
- care about progression
- want measurable improvement
- want to know if protein intake actually supports recovery
- are tired of guessing

This is for lifters, not “10k steps” people.

---

# CORE PRODUCT LOOP

1. User logs workout
2. User selects exercises performed
3. App maps exercises to exact muscle sub-groups targeted
4. Those muscle segments on the 3D anatomical model light up as fresh-worked muscles
5. User logs protein intake
6. App calculates whether protein supports recovery based on workout volume
7. Muscle recovery state changes visually over time
8. User gets visible proof of recovery status
9. Daily return loop forms naturally

This creates:
Trigger → Action → Variable Reward → Investment

Strong retention loop.

---

# CORE FEATURES

## Workout Tracking

User logs:
- workouts
- exercises
- reps
- sets
- weight
- volume
- session history

This forms the foundation of the recovery system.

---

## Exercise → Muscle Mapping

Each exercise maps to:
- primary muscles
- secondary muscles
- exact sub-muscle groups

Not just:
“Chest”

But:
- upper chest
- middle chest
- lower chest

Same for:
- shoulders
- triceps
- back
- hamstrings
- glutes
- calves
etc.

Some exercises hit one sub-group.
Some hit multiple.
Some hit full muscle chains.

This precision matters.

Data source:
**ExerciseDB API** for MVP

Used for:
- exercise mapping
- muscle targeting logic
- primary + secondary muscle references

---

## 3D Anatomical Model (Main USP)

### MVP Decision

Use a **prebuilt segmented anatomical model** first.

Do NOT build custom model initially.

Reason:
Ship first.
Custom model comes later.

---

## Model Requirements

- rotatable anatomical model
- smooth interaction like rotating a Rubik’s cube
- front view + back view
- segmented muscle zones
- sub-muscle precision
- visual state changes based on recovery
- both sides must remain parallel and logical

No nonsense like one random leg green and the other red without reason.

Symmetry matters.

If both legs are trained, both should reflect appropriately.

Need:
- front recovery visualization
- back recovery visualization

Two proper references.

---

# MUSCLE RECOVERY VISUAL LOGIC

This is the most important system.

## Color Recovery Mechanism

### Freshly Worked Out

**Pure Red**

Meaning:
trained recently / immediate fatigue / fresh stress

Range:
0–10%

---

### Recovering Phase 1

Red begins fading
Moves toward orange/yellow

Meaning:
recovery in progress

Range:
11–30%

---

### Recovering Phase 2

Orange → yellow-green

Meaning:
approaching full recovery

Range:
31–70%

---

### Fully Recovered

**Green**

Meaning:
muscle recovered + protein sufficient + ready again

Range:
71–100%

Green = biological success

---

### Next Day Neutral Reset

After a full recovery window,
Green transitions back to:

**Neutral White / Light Neutral**

Meaning:
not currently stressed
neutral state
ready baseline

Not permanently green.

This makes the cycle meaningful.

---

# COLOR LANGUAGE

## Brand Colors

### Obsidian Black
`#0B0F14`

### Titanium Gray
`#2A2F36`

### Performance Blue
`#3B82F6`

### Recovery Green
`#22C55E`

### Workout Red
`#EF4444`

### Bone White
`#F8FAFC`

---

## Usage Logic

🔴 Red → freshly worked / under recovery

🟠 Orange → recovering

🟢 Green → fully recovered

⚪ White → neutral / not worked / reset state

🔵 Blue → UI analytics / graphs / system information only

Blue is NOT recovery.
Blue is intelligence.

Green is recovery.

---

## Protein Intake Calculator

User logs:
- protein intake
- daily total
- meals if needed later

System checks:
Does protein intake support recovery for the volume of work performed?

Not generic “you need 120g.”

But:
“Based on what you trained today, recovery is sufficient / insufficient.”

That is the value.

---

## Recovery Feedback Engine

App should tell user:

- recovery sufficient
- recovery insufficient
- underfed for workload
- recovery score
- readiness status

This should connect directly to the 3D model.

Not separate.

Visual proof > text.

---

## History + Progress Visualization

Track:
- performance over time
- reps progression
- set progression
- strength growth
- muscle work consistency
- recovery trends

Need graphs + visible progression loops.

Users must feel progress.

---

# BRAND IDENTITY

Kairos should feel:

- precise
- elite
- disciplined
- premium
- modern
- trustworthy
- data-driven
- quietly powerful

Not loud.
Not “beast mode.”
Not cliché gym branding.

Think:
Apple × Performance Lab × Serious Lifter

---

# LOGO DIRECTION

## Core Symbol

Minimal premium **K logo** with:

- structural geometry
- circular progress ring
- blue + green premium palette
- subtle dumbbell integrated aesthetically into the K

Important:
Do NOT use:
- heartbeat/EKG lines
- hospital monitor visuals
- cliché cardio symbols

The dumbbell should feel premium and integrated,
not pasted awkwardly.

Can be:
- slanted
- embedded diagonally
- structural within the K

Must feel aesthetic, not childish.

No generic dumbbell logo spam.

---

# APP ICON

Should be:
- premium
- minimal
- recognizable instantly
- strong enough for app store identity

Prefer:
K + circular ring + elegant dumbbell integration

---

# LANDING PAGE MESSAGE

Strongest headline:

# Stop Guessing Your Recovery.

## See exactly which muscles are ready, underfed, or ignored.

This sells.

Not generic “best gym tracker.”

---

# SHELVED FOR LATER (V2)

Do NOT build initially:

- AI integration for advanced recovery intelligence
- smarter muscle/protein optimization engine
- custom anatomical 3D model
- multiple body type variants
- advanced personalization engine

MVP first.

Rocket later.

---

# RECOMMENDED MVP BUILD ORDER

Start with:

## Workout Logging + Protein Calculator + Recovery Model

This is the MVP.

Not custom 3D.
Not advanced AI.

Workout logging + visible recovery system wins.

The 3D model is the hook.

The protein logic is the trust engine.

That combination is the product.

---

# TECH STACK

## Frontend
React (Vite)

## Backend
Firebase Firestore

## Authentication
Firebase Auth

## 3D (Later / MVP integration)
Three.js or React Three Fiber

## Language
JavaScript only

No TypeScript

## Build Tool
Claude Code

Kx directs.
AI executes.

---

# WORKING PRINCIPLE

Smallest working version live > perfect version never shipped.

Do not overbuild.

Do not overcomplicate.

Do not drift into shiny new features.

Finish core.
Then expand.

Ship first.
Refine second.

That is Kairos.

