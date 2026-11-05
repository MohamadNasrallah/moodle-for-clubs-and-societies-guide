/* ==========================================================
   Moodle for Clubs and Societies Guide
   ----------------------------------------------------------
   EDIT HERE: the feature list below drives the "All features"
   grid. Each item has:
     name      - the feature name shown on the card
     category  - must match one of the names in CATEGORIES
     meaning   - 1 to 2 short, student-friendly sentences
     example   - one club example (written as "can", not "does")
   Add, remove, or reword items freely. Keep the commas.
   ========================================================== */

const CATEGORIES = [
  "Stay informed",
  "Sign up and join in",
  "Attend and get recognized",
  "Share your voice",
  "Learn",
  "Build together",
  "Stay on track"
];

const FEATURES = [
  /* ---- Stay informed ---- */
  {
    name: "Announcements forum",
    category: "Stay informed",
    meaning: "Official club updates in one place.",
    example: "A club can post meeting times and news here."
  },
  {
    name: "Text and media area",
    category: "Stay informed",
    meaning: "Information, images, and video shown directly on the club page.",
    example: "A club can show a welcome video at the top of its General section."
  },
  {
    name: "Page",
    category: "Stay informed",
    meaning: "A dedicated page for longer information.",
    example: "A club can explain how its committees work on a single page."
  },
  {
    name: "URL",
    category: "Stay informed",
    meaning: "Links to useful outside content.",
    example: "A club can link to an article or a tool it recommends."
  },

  /* ---- Sign up and join in ---- */
  {
    name: "Choice",
    category: "Sign up and join in",
    meaning: "A quick vote or a simple sign-up.",
    example: "A club can let members vote on the topic of the next workshop."
  },
  {
    name: "Questionnaire",
    category: "Sign up and join in",
    meaning: "A detailed sign-up form or survey.",
    example: "A club can use one to collect details for a larger event."
  },
  {
    name: "Group choice",
    category: "Sign up and join in",
    meaning: "Join a team, committee, or interest group.",
    example: "A club can let members pick an interest track."
  },
  {
    name: "Face-to-Face",
    category: "Sign up and join in",
    meaning: "Book a seat for an in-person session. There can be capacity limits and possibly a waitlist.",
    example: "A club can use it for a workshop with limited seats."
  },

  /* ---- Attend and get recognized ---- */
  {
    name: "Attendance",
    category: "Attend and get recognized",
    meaning: "Records who attended an event. The method depends on how the club sets it up.",
    example: "A club can record attendance at its weekly meetings."
  },
  {
    name: "Custom certificate",
    category: "Attend and get recognized",
    meaning: "A participation certificate, when a club offers one.",
    example: "A club can offer one after a workshop series."
  },
  {
    name: "Badges",
    category: "Attend and get recognized",
    meaning: "Digital recognition for milestones.",
    example: "A club can give a badge for taking part regularly."
  },

  /* ---- Share your voice ---- */
  {
    name: "Feedback",
    category: "Share your voice",
    meaning: "Tell the club what worked and what to improve.",
    example: "A club can ask for feedback after each event."
  },
  {
    name: "Forum",
    category: "Share your voice",
    meaning: "Discuss topics, ask questions, and find teammates.",
    example: "A club can start a thread where members look for project partners."
  },

  /* ---- Learn ---- */
  {
    name: "Book",
    category: "Learn",
    meaning: "A structured, multi-page guide or set of workshop notes.",
    example: "A club can turn a workshop into a step-by-step guide."
  },
  {
    name: "H5P interactive content",
    category: "Learn",
    meaning: "Interactive videos and activities.",
    example: "A club can add questions inside a recorded talk."
  },
  {
    name: "Lesson",
    category: "Learn",
    meaning: "Guided, step-by-step learning.",
    example: "A club can walk new members through its basics."
  },
  {
    name: "Quiz",
    category: "Learn",
    meaning: "Test what you learned.",
    example: "A club can offer a short quiz after a workshop."
  },
  {
    name: "StudentQuiz",
    category: "Learn",
    meaning: "Members write and practice each other's questions.",
    example: "A club can build a shared bank of practice questions."
  },
  {
    name: "Glossary",
    category: "Learn",
    meaning: "A shared list of terms.",
    example: "A cultural club can collect words and meanings from members."
  },
  {
    name: "Folder",
    category: "Learn",
    meaning: "Grouped downloadable files.",
    example: "A club can keep slides and handouts together in one folder."
  },

  /* ---- Build together ---- */
  {
    name: "Assignment",
    category: "Build together",
    meaning: "Submit your work for a challenge.",
    example: "A club can run a challenge where members upload their solutions."
  },
  {
    name: "Workshop",
    category: "Build together",
    meaning: "Review each other's submissions.",
    example: "A club can let members give each other feedback on their work."
  },
  {
    name: "Database",
    category: "Build together",
    meaning: "A searchable shared collection.",
    example: "A club can use it for a project showcase or an event archive."
  },
  {
    name: "Wiki",
    category: "Build together",
    meaning: "Pages a group writes and edits together.",
    example: "A project team can keep its notes in one shared wiki."
  },
  {
    name: "Checklist",
    category: "Build together",
    meaning: "Track the steps for a trip, project, or onboarding.",
    example: "An outdoors club can share a preparation checklist for a trip."
  },

  /* ---- Stay on track ---- */
  {
    name: "Reengagement",
    category: "Stay on track",
    meaning: "Automatic reminders and follow-ups set up by the club.",
    example: "A club can set up a reminder for members who have not yet signed up."
  }
];

/* ==========================================================
   Everything below makes the page work. You do not need to
   edit it to change the content.
   ========================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  function init() {
    setupMenu();
    setupFeatures();
  }

  /* ---------- Mobile menu ---------- */
  function setupMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Feature grid ---------- */
  function setupFeatures() {
    var grid = document.getElementById("feature-grid");
    var tools = document.getElementById("tools");
    var search = document.getElementById("feature-search");
    var filterBox = document.getElementById("filters");
    var count = document.getElementById("result-count");
    var empty = document.getElementById("empty");
    if (!grid || !search || !filterBox) return;

    var activeCategory = "All";
    var cards = [];

    function el(tag, className, text) {
      var node = document.createElement(tag);
      if (className) node.className = className;
      if (text) node.textContent = text;
      return node;
    }

    // Build cards
    FEATURES.forEach(function (f) {
      var card = el("article", "feature-card");
      card.appendChild(el("p", "feature-cat", f.category));
      card.appendChild(el("h3", "", f.name));
      card.appendChild(el("p", "feature-meaning", f.meaning));
      var ex = el("p", "feature-example");
      ex.appendChild(el("span", "feature-example-label", "Club example: "));
      ex.appendChild(document.createTextNode(f.example));
      card.appendChild(ex);
      grid.appendChild(card);
      cards.push({
        node: card,
        category: f.category,
        text: (f.name + " " + f.category + " " + f.meaning + " " + f.example).toLowerCase()
      });
    });

    // Build filter buttons
    var buttons = [];
    ["All"].concat(CATEGORIES).forEach(function (name) {
      var b = el("button", "chip", name);
      b.type = "button";
      b.setAttribute("aria-pressed", name === "All" ? "true" : "false");
      b.addEventListener("click", function () {
        activeCategory = name;
        buttons.forEach(function (x) {
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        apply();
      });
      buttons.push(b);
      filterBox.appendChild(b);
    });

    function apply() {
      var q = search.value.trim().toLowerCase();
      var words = q ? q.split(/\s+/) : [];
      var shown = 0;
      cards.forEach(function (c) {
        var inCategory = activeCategory === "All" || c.category === activeCategory;
        var matches = words.every(function (w) { return c.text.indexOf(w) !== -1; });
        var visible = inCategory && matches;
        c.node.hidden = !visible;
        if (visible) shown++;
      });
      count.textContent = "Showing " + shown + " of " + cards.length + " features";
      empty.hidden = shown !== 0;
    }

    search.addEventListener("input", apply);
    tools.hidden = false;
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
