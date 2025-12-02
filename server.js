const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const members = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Developer",
    skills: ["React", "Node"],
    location: "India",
    photo: "https://i.pravatar.cc/150?img=1",
    bio: "React developer passionate about UI engineering."
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Designer",
    skills: ["UI/UX", "Figma"],
    location: "India",
    photo: "https://i.pravatar.cc/150?img=2",
    bio: "Design thinker & creative problem solver."
  }
];

app.get("/members", (req, res) => {
  res.json(members);
});

app.get("/members/:id", (req, res) => {
  const member = members.find((m) => m.id == req.params.id);
  member ? res.json(member) : res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port " + PORT));

