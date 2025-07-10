export default function handler(req, res) {
  res.status(200).json({
    message: 'API endpoints available:',
    endpoints: ['/api/education', '/api/skills', '/api/projects']
  });
} 