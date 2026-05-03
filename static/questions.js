window.questionBank = [
  {
    id: "q1",
    text: "How are you feeling today?",
    tags: ["stress"],
    options: [
      { text: "Good", effect: { stress: -1 } },
      { text: "Okay", effect: { stress: 1 } },
      { text: "Bad", effect: { stress: 2 }, next: "q2" }
    ]
  },

  {
    id: "q2",
    text: "Is your workload heavy?",
    tags: ["stress"],
    options: [
      { text: "Yes", effect: { stress: 2 }, next: "q3" },
      { text: "No", effect: { stress: 0 } }
    ]
  },

  {
    id: "q3",
    text: "Do you take regular breaks?",
    tags: ["stress"],
    options: [
      { text: "No", effect: { stress: 2 } },
      { text: "Yes", effect: { stress: 0 } }
    ]
  },

  {
    id: "q4",
    text: "Do you overthink things?",
    tags: ["anxiety"],
    options: [
      { text: "No", effect: { anxiety: -1 } },
      { text: "Sometimes", effect: { anxiety: 1 } },
      { text: "Yes", effect: { anxiety: 2 }, next: "q5" }
    ]
  },

  {
    id: "q5",
    text: "Do you feel restless without reason?",
    tags: ["anxiety"],
    options: [
      { text: "Yes", effect: { anxiety: 2 } },
      { text: "No", effect: { anxiety: 0 } }
    ]
  },

  {
    id: "q6",
    text: "How is your sleep quality?",
    tags: ["sleep"],
    options: [
      { text: "Good", effect: { sleep: 1 } },
      { text: "Average", effect: { sleep: 0 } },
      { text: "Poor", effect: { sleep: -2 }, next: "q7" }
    ]
  },

  {
    id: "q7",
    text: "Do you use your phone before sleep?",
    tags: ["sleep"],
    options: [
      { text: "Yes", effect: { sleep: -2 } },
      { text: "No", effect: { sleep: 0 } }
    ]
  }
];