import { educationHistory } from '../backend/data.js';

export default function handler(req, res) {
  res.status(200).json(educationHistory);
} 