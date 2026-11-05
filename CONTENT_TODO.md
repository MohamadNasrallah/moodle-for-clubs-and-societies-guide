# Content to review (OSA)

## Needs OSA review
- [ ] **Mission:** "Every AUB club in one place, so you can find what's happening, show up, build something, and be part of it." This is a draft.
- [ ] **Site name:** "Moodle for Clubs and Societies Guide".
- [ ] **AUB name and colour:** the site uses a text wordmark ("AUB" badge) and maroon #840132. Confirm that this use is acceptable and whether an official logo or palette should replace it.
- [ ] **Removed content:** the "See it in action" page (IEEE AUB example and ideas for other clubs) was removed on request. Restore it from git history if OSA wants it back.
- [ ] **Feature wording:** the 26 feature descriptions and club examples in `script.js` (for example Attendance, Custom certificate, Reengagement).
- [ ] **Footer:** says "Draft wording, pending OSA review". Remove it once approved.
- [ ] **Help button:** "More questions? Write it in Outlook on the web" opens a new Outlook message addressed to man53@mail.aub.edu. The address is not shown on the page but is inside the link. Confirm this is the right contact, or switch it to a Student Activities address.
- [ ] **Support contact:** "the club's cabinet or the Student Activities team at OSA". Confirm whether a link or email should be added.

- [ ] **Feature icons (`icons/`):** open-source Moodle icons copied from Moodle's GitHub repository (core activities, branch MOODLE_405_STABLE) and from each add-on plugin's own repository (questionnaire, choice group, face-to-face, attendance, certificate, StudentQuiz, reengagement). The checklist icon comes from a fork of the checklist plugin and has a different style. All are GPL-licensed Moodle code. Confirm they are fine to reuse, and replace any that do not match AUB's Moodle look.
- [ ] **Logos:** the site uses a text wordmark. If OSA wants the official AUB or Moodle logos used, OSA needs to supply the files and confirm usage rules.

## Conflicts between the brief and other instructions
- The original brief said to call the platform "Nexus". It was changed on request: the site now says "Moodle" everywhere, and "Get started" became "The pipeline". Confirm OSA is happy with the name Moodle for the platform.
- No `source/` folder was present when the site was built, so no source documents were read. Every fact comes from the brief.
