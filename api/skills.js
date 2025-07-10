// api/skills.js

// Impor hanya data yang diperlukan dari file data.js
import { skills } from './data.js';

// Ekspor fungsi serverless
export default function handler(req, res) {
  res.status(200).json(skills);
}