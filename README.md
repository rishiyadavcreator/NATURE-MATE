# 🌿 NatureMate AI — Touch Grass, Explore More

**NatureMate AI** is an AI-powered outdoor companion designed to help people spend less time on screens and more time exploring the natural world.

Built using **HTML, CSS, JavaScript, Node.js, and an open-weight AI model**, NatureMate generates personalized outdoor activities, provides beginner-friendly gardening suggestions, and helps users record their nature observations.

The project is inspired by the **"Touch Grass"** theme: using technology to encourage real-world experiences instead of endless screen time.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [AI Integration](#-ai-integration)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Installation and Setup](#-installation-and-setup)
- [How to Use](#-how-to-use)
- [API Documentation](#-api-documentation)
- [Privacy and Offline Support](#-privacy-and-offline-support)
- [Limitations](#-current-limitations)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌱 Project Overview

NatureMate AI combines the simplicity of a web application with the capabilities of locally running AI.

Instead of using AI only for tasks performed on a screen, NatureMate helps users discover activities they can perform outdoors.

Users can generate nature challenges, explore gardening ideas, track completed activities, and maintain a personal nature journal.

The application uses Ollama to communicate with an open-weight language model running on the user's computer.

**Project type:** AI-powered web application  
**Theme:** Touch Grass — Outdoor Exploration  
**Primary goal:** Encourage real-world interaction with nature  
**AI approach:** Local inference using an open-weight model

---

## ❗ Problem Statement

Modern technology makes information easily accessible, but people can spend excessive time using digital devices without engaging with the physical world.

Beginners may also find it difficult to decide how to start exploring nature, develop a gardening habit, or make outdoor activities part of their daily routine.

NatureMate AI addresses this problem by turning AI into a tool for discovering and completing practical outdoor activities.

---

## 💡 Our Solution

NatureMate AI provides a simple website where users can:

1. Discover beginner-friendly outdoor challenges.
2. Generate personalized missions using AI.
3. Receive gardening suggestions based on their region and available space.
4. Record interesting nature observations.
5. Track completed outdoor challenges.

The aim is to make technology the starting point of an outdoor experience, rather than the main activity itself.

---

## ✨ Features

### 1. 🧭 AI Adventure Generator

Generates personalized outdoor missions based on the user's interests.

Example activities include:
- Observing different leaf shapes.
- Watching birds from a safe distance.
- Exploring cloud formations.
- Practising nature photography.
- Discovering interesting features of a local garden.

The AI is instructed to provide practical activities with clear steps and safety tips.

### 2. 🪴 Smart Garden Planner

Provides beginner-friendly gardening suggestions using information such as:

- City or region.
- Available gardening space.
- Gardening experience.

The AI can suggest plants to research, basic watering and sunlight guidance, supplies, and a starter plan.

Suggestions should be checked against reliable local gardening information before being acted upon.

### 3. 📔 Personal Nature Journal

Users can save observations about their outdoor experiences.

Each entry contains:
- A title.
- An observation or description.
- A saved date and time.

Journal entries are stored in the browser using LocalStorage.

Users can also delete entries they no longer need.

### 4. ✅ Outdoor Challenge Tracker

Users can mark predefined nature activities as completed.

The dashboard updates the number of completed challenges and saves the progress in browser storage.

### 5. 📱 Responsive Interface

The application uses HTML, CSS, and JavaScript to provide a responsive interface for desktop and mobile browsers.

The design includes nature-inspired colours, activity cards, garden-planning forms, and journal entries.

### 6. 🔓 Open-Weight AI Integration

NatureMate connects to a locally running AI model through Ollama.

This approach allows the application to generate responses without sending prompts to an external hosted AI provider, provided the local setup is used as configured.

---

## 🖥️ Screenshots

Add screenshots of your actual running application to a folder named `screenshots`.

Suggested files:

- `screenshots/homepage.png`
- `screenshots/adventure-generator.png`
- `screenshots/garden-planner.png`
- `screenshots/nature-journal.png`

After adding the images, display them here using Markdown:

```markdown
![NatureMate AI Homepage](screenshots/homepage.png)
```

Replace these example paths with your actual screenshots. Do not add screenshots until you have captured the corresponding features.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structures the web pages and forms |
| CSS3 | Provides layout, styling, and responsive design |
| JavaScript | Handles interactions, requests, and browser storage |
| Node.js | Runs the application server |
| Ollama | Runs and exposes the local AI model |
| Qwen2.5 1.5B | Generates outdoor activities and gardening suggestions |
| LocalStorage | Stores challenge progress and journal entries |
| Git and GitHub | Version control and project hosting |

### Why this stack?

The frontend uses familiar web technologies, making the project accessible to beginner developers.

Node.js connects the frontend to the AI service, while Ollama provides a convenient way to run the selected open-weight model locally.

This design avoids requiring a paid, externally hosted AI API for the core AI features.

---

## 🤖 AI Integration

### Model

The project is configured to use:

**Qwen2.5 1.5B through Ollama**

Model information and downloads:

- [Ollama](https://ollama.com/)
- [Qwen2.5 model on Ollama](https://ollama.com/library/qwen2.5)
- [Qwen2.5 on Hugging Face](https://huggingface.co/Qwen)

The model is downloaded and run separately from the website.

### How AI requests work

1. The user selects an activity or enters garden details.
2. JavaScript creates a prompt.
3. The frontend sends the prompt to the Node.js backend.
4. The backend forwards the request to Ollama's local API.
5. The model generates a response.
6. The backend returns the result to the frontend.
7. The response is displayed on the page.

The application uses the Ollama chat endpoint:

`POST http://127.0.0.1:11434/api/chat`

### Why use open-weight AI?

- **Local processing:** Prompts can remain on the user's computer.
- **Reduced API dependency:** Core AI features do not require a third-party hosted AI API.
- **Model flexibility:** The application can be configured to use another compatible Ollama model.
- **Learning and experimentation:** Developers can experiment with prompts, models, and generation settings.
- **Offline inference:** After installation and model download, AI requests can work without internet, provided Ollama is running locally.

The Qwen2.5 model family is available under the Apache 2.0 license. Review the terms for the specific model and version you use before redistribution or deployment.

---

## 🏗️ Project Architecture

```text
                 USER
                   |
                   v
       +------------------------+
       | HTML, CSS and JavaScript|
       |     Web Interface      |
       +------------------------+
                   |
                   | HTTP request
                   v
       +------------------------+
       |      Node.js Server    |
       |       server.js        |
       +------------------------+
                   |
                   | Local API request
                   v
       +------------------------+
       |     Ollama Runtime     |
       +------------------------+
                   |
                   v
       +------------------------+
       |  Qwen2.5 1.5B Model    |
       +------------------------+
                   |
                   v
       Generated AI Response
                   |
                   v
             Web Interface

Browser LocalStorage:
- Completed challenges
- Nature journal entries
```

The Node.js server serves the frontend files and handles AI requests. Browser LocalStorage separately maintains the user's journal and challenge progress.

---

## 📂 Folder Structure

```text
NatureMate-AI/
│
├── index.html       # Main website structure
├── style.css        # Styling and responsive layout
├── script.js        # Frontend interactions and AI requests
├── server.js        # Node.js server and Ollama integration
├── package.json     # Project metadata and start command
├── README.md        # Project documentation
│
└── screenshots/     # Optional application screenshots
    ├── homepage.png
    ├── adventure-generator.png
    ├── garden-planner.png
    └── nature-journal.png
```

The screenshots are optional and should be added when available.

---

## 🚀 Installation and Setup

Follow these instructions to run NatureMate AI on your computer.

### Prerequisites

Install the following software:

1. **Node.js 18 or later** — [Download Node.js](https://nodejs.org/)
2. **Ollama** — [Download Ollama](https://ollama.com/download)
3. **Visual Studio Code** — [Download VS Code](https://code.visualstudio.com/)
4. **Git** — [Download Git](https://git-scm.com/downloads), if you want to upload the project to GitHub.

You should also have enough available storage and memory to download and run the selected AI model.

### Step 1: Clone the repository

After uploading your project to GitHub, clone it using:

```bash
git clone https://github.com/YOUR-USERNAME/NatureMate-AI.git
```

Replace `YOUR-USERNAME` with your GitHub username.

Alternatively, download the repository as a ZIP file and extract it.

### Step 2: Open the project

Open the `NatureMate-AI` folder in Visual Studio Code.

Open the integrated terminal using:

**Terminal → New Terminal**

Make sure the terminal is inside your project directory.

### Step 3: Download the AI model

Run:

```bash
ollama pull qwen2.5:1.5b
```

Wait for the model download to finish.

You only need to download the model once unless you remove it or choose another model.

### Step 4: Start Ollama

Open the Ollama application and ensure its local service is running.

You can check the model installation using:

```bash
ollama list
```

You should see `qwen2.5:1.5b` in the list.

### Step 5: Start NatureMate AI

From the project directory, run:

```bash
npm start
```

The terminal should display a message similar to:

```text
NatureMate AI running at http://localhost:3000
Using Ollama model: qwen2.5:1.5b
```

### Step 6: Open the website

Visit:

[http://localhost:3000](http://localhost:3000)

You can now use the website and test the AI features.

**Note:** Do not open `index.html` directly as a file when testing the AI integration. Open the local server address instead, so the frontend can send requests to the backend.

---

## 🎮 How to Use

### Generate an outdoor mission

1. Open NatureMate AI.
2. Navigate to the adventure section.
3. Select an interest, such as bird watching or gardening.
4. Click **Generate mission**.
5. Read the suggested activity and try it outdoors.

### Create a garden plan

1. Navigate to the Smart Garden Planner.
2. Enter your city or region.
3. Select your available space.
4. Choose your gardening experience.
5. Click **Plan my garden**.
6. Review the AI suggestions and verify local growing conditions.

### Track a challenge

1. Choose one of the predefined outdoor activities.
2. Complete the activity in the real world.
3. Click **Mark as done**.
4. View the updated completion count.

### Save a nature observation

1. Navigate to My Nature Journal.
2. Enter a title for your observation.
3. Write what you saw, heard, or learned.
4. Click **Save nature note**.
5. Your entry will appear in the journal.

Journal entries remain in the same browser profile unless the browser's site data is cleared.

---

## 🔌 API Documentation

NatureMate uses a small backend API to communicate with the local AI model.

### Endpoint

`POST /api/ai`

### Request format

```json
{
  "prompt": "Suggest a 15-minute bird-watching activity for a beginner."
}
```

### Successful response

```json
{
  "answer": "Choose a safe, quiet spot and observe birds from a distance..."
}
```

The answer above is an illustrative example, not a recorded model response.

### Error handling

The server returns an appropriate HTTP error when the prompt is invalid, Ollama is unavailable, or the model cannot generate a response.

Common status codes include:

| Status | Meaning |
|---|---|
| 200 | AI response generated |
| 400 | Invalid request |
| 403 | Requested file access denied |
| 404 | File not found |
| 502 | AI service or response error |
| 503 | Cannot connect to Ollama |
| 500 | Unexpected server error |

---

## 🔐 Privacy and Offline Support

Privacy and local AI are important design goals of NatureMate.

### Local AI processing

The supplied backend sends AI requests to Ollama at `127.0.0.1`, which refers to the local computer.

In the default configuration, prompts are processed by the locally running model rather than a remote AI API.

### Browser-based storage

NatureMate uses LocalStorage to maintain:

- Completed challenges.
- Nature journal entries.

This information is stored in the user's browser rather than in a remote database.

### Offline capabilities

Once Node.js, Ollama, and the model are installed and downloaded, the main website and AI features can work without an internet connection, provided the local services are running.

The current project does not yet implement a service worker for a dedicated offline web-app experience.

---

## ⚠️ Current Limitations

NatureMate AI is an early-stage project. The following limitations should be considered:

- Plant identification from photos is not implemented.
- Live weather and real-time seasonal data are not fetched.
- Gardening recommendations may be inaccurate and should be verified.
- AI response quality depends on the selected model and available hardware.
- Journal entries are stored locally and do not automatically synchronize across devices.
- The current implementation does not include user accounts or cloud backups.
- A publicly hosted static website cannot directly access an Ollama instance running on a visitor's computer without additional configuration.
- Local inference requires sufficient device resources and an installed model.

---

## 🔮 Future Improvements

Planned improvements include:

- **Plant identification:** Add a suitable open-source image classification model.
- **Bird identification:** Explore open models for bird sounds and species recognition.
- **Local discovery:** Add a map interface for parks, gardens, and walking routes.
- **Weather-aware planning:** Integrate a reliable weather source where connectivity is available.
- **Progress dashboard:** Add activity streaks, achievements, and weekly summaries.
- **Offline web support:** Implement a service worker and cache the static application files.
- **Accessibility:** Improve keyboard navigation, contrast, and screen-reader support.
- **Optional deployment:** Host the frontend publicly and configure a separately secured AI backend.
- **More open models:** Let developers switch compatible models through configuration.

The long-term goal is to build an open, flexible AI companion that encourages users to explore and appreciate the world around them.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application locally.
5. Submit a pull request describing your improvements.

Suggested areas for contributions include better outdoor challenges, accessibility, local gardening knowledge, and integrations with open AI models.

---

## 📄 License

The project source code does not currently declare a separate license.

Before publishing, choose a license for your own code, such as the MIT License, if that matches your intentions. Add a `LICENSE` file to the repository.

The project's source-code license and the AI model's license are separate. Review the license terms of every model and dependency you distribute or use.

---

## 👨‍💻 Author

**Rishi Yadav**

B.Tech Computer Science and Engineering — Artificial Intelligence and Machine Learning

Interests: Artificial Intelligence, Web Development, Open-Source Software, and Real-World Problem Solving.

---

## 🌍 Our Vision

**Technology should help us experience more of the real world, not just spend more time online.**

NatureMate AI combines open-weight AI with a simple web interface to make exploring nature easier, more engaging, and accessible to beginners.

🌿 **Touch Grass. Explore More. Build Open.**
