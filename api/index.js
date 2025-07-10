import express from 'express';
import cors from 'cors';
import dataRoutes from './data.js';
import educationRoutes from './education.js';
import projectsRoutes from './projects.js';
import skillsRoutes from './skills.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Export for Vercel
export default app; 