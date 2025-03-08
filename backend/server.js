const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const challenges = [
    { id: 1, name: "Run 5KM", description: "Complete a 5KM run today!" },
    { id: 2, name: "50 Push-ups", description: "Do 50 push-ups today!" },
    { id: 3, name: "Yoga for 30 min", description: "Relax with a 30-minute yoga session!" }
];

// Route to get challenges
app.get('/api/challenges', (req, res) => {
    res.json(challenges);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
