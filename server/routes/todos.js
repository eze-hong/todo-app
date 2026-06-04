import { Router } from 'express';
import db from '../db.js';

const router = Router();

router.get('/', (req, res) => {
  const todos = db.prepare('SELECT * FROM todos ORDER BY created_at ASC').all();
  res.json(todos.map(t => ({ ...t, completed: t.completed === 1 })));
});

router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'text is required' });
  }
  const result = db.prepare('INSERT INTO todos (text) VALUES (?)').run(text.trim());
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json({ ...todo, completed: todo.completed === 1 });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.prepare('UPDATE todos SET completed = ? WHERE id = ?').run(completed ? 1 : 0, id);
  const todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(id);
  if (!todo) return res.status(404).json({ error: 'not found' });
  res.json({ ...todo, completed: todo.completed === 1 });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const result = db.prepare('DELETE FROM todos WHERE id = ?').run(id);
  if (result.changes === 0) return res.status(404).json({ error: 'not found' });
  res.status(204).send();
});

export default router;
