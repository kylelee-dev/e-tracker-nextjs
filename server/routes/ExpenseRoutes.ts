import express from 'express';
import Expense from '../models/Expense.ts';

const router = express.Router();

router.get('/', (req,res) => {
    res.send("hi")
})
// Get all expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new expense
router.post('/expenses', async (req, res) => {
  const { description, amount, date } = req.body;
  try {
    const newExpense = new Expense({ description, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
