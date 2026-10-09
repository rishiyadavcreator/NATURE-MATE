
const $ = (selector) => document.querySelector(selector);

const STORAGE = {
  completed: "naturemate-completed",
  journal: "naturemate-journal"
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

let completed = readStorage(STORAGE.completed, []);
let journal = readStorage(STORAGE.journal, []);

function saveStorage() {
  localStorage.setItem(STORAGE.completed, JSON.stringify(completed));
  localStorage.setItem(STORAGE.journal, JSON.stringify(journal));
}

function updateStats() {
  $("#completedCount").textContent = completed.length;
  $("#journalCount").textContent = journal.length;

  document.querySelectorAll(".complete-btn").forEach((button) => {
    const isDone = completed.includes(button.dataset.title);
    button.classList.toggle("done", isDone);
    button.textContent = isDone ? "Completed ✓" : "Mark as done ✓";
    button.setAttribute("aria-pressed", String(isDone));
  });
}

// Challenge completion tracker
document.querySelectorAll(".complete-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.title;

    if (completed.includes(title)) {
      completed = completed.filter((item) => item !== title);
    } else {
      completed.push(title);
    }

    saveStorage();
    updateStats();
  });
});

// Safely display text returned by the AI
function showResult(element, text) {
  element.replaceChildren();

  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  element.appendChild(paragraph);
}

async function askAI(prompt, resultElement, button, fallbackMessage) {
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Thinking...";

  showResult(resultElement, "Your AI assistant is preparing a response...");

  try {
    const response = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "The AI request failed.");
    }

    showResult(resultElement, data.answer);
  } catch (error) {
    showResult(
      resultElement,
      `${error.message}\n\n${fallbackMessage}`
    );
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

// AI outdoor mission generator
$("#generateBtn").addEventListener("click", () => {
  const interest = $("#interest").value;

  const prompt = `
You are NatureMate, a friendly outdoor activity assistant.
Create one original, practical outdoor mission about "${interest}".

Requirements:
- Suitable for a beginner.
- Takes 10 to 20 minutes.
- Give it a short title.
- Include three clear steps.
- Explain what the person can learn.
- Encourage observing nature without disturbing wildlife.
- Include a simple safety tip.
- Do not suggest eating wild plants or approaching wild animals.
- End with one short encouraging sentence.
- Use plain text and concise formatting.
`;

  askAI(
    prompt,
    $("#missionResult"),
    $("#generateBtn"),
    "You can still try the Leaf Detective, Bird Watcher, or Cloud Explorer challenge above."
  );
});

// AI garden planner
$("#gardenBtn").addEventListener("click", () => {
  const city = $("#city").value.trim();
  const space = $("#space").value;
  const experience = $("#experience").value;

  if (!city) {
    $("#city").focus();
    showResult($("#gardenResult"), "Please enter your city or region first.");
    return;
  }

  const prompt = `
You are NatureMate, a beginner-friendly gardening assistant.

Region entered by the user: ${city}
Available growing space: ${space}
Gardening experience: ${experience}

Create a practical garden plan with:
1. Three possible plants to research for this region and space.
2. Sunlight and watering guidance for each, where known.
3. Simple supplies needed.
4. A seven-day starter plan.
5. One environmental or gardening safety tip.

Be honest if local climate or seasonal information is uncertain.
Do not invent current weather or frost dates.
Suggest checking local planting calendars before buying plants.
Use concise headings and plain text.
`;

  askAI(
    prompt,
    $("#gardenResult"),
    $("#gardenBtn"),
    "You can start by researching locally suitable plants and checking how much sunlight your space receives."
  );
});

// Nature journal
function renderJournal() {
  const container = $("#journalEntries");
  container.replaceChildren();

  if (journal.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Your nature notes will appear here after you save one.";
    empty.style.color = "#6e7d72";
    container.appendChild(empty);
    updateStats();
    return;
  }

  journal.forEach((note) => {
    const card = document.createElement("article");
    card.className = "journal-entry";

    const title = document.createElement("h3");
    title.textContent = `🌱 ${note.title}`;

    const description = document.createElement("p");
    description.textContent = note.text;

    const date = document.createElement("small");
    date.className = "entry-date";
    date.textContent = note.date;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-note";
    deleteButton.textContent = "Delete note";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", () => {
      journal = journal.filter((entry) => entry.id !== note.id);
      saveStorage();
      renderJournal();
    });

    card.append(title, description, date, deleteButton);
    container.appendChild(card);
  });

  updateStats();
}

$("#journalForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = $("#noteTitle").value.trim();
  const text = $("#noteText").value.trim();

  if (!title || !text) return;

  journal.unshift({
    id: crypto.randomUUID(),
    title,
    text,
    date: new Date().toLocaleString()
  });

  saveStorage();
  renderJournal();
  $("#journalForm").reset();
});

// Load saved information when the page opens
updateStats();
renderJournal();
