const express = require('express');
const router = express.Router();
const {
  getAllArticles,
  getArticleById,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle
} = require('../controllers/articleController');
const authMiddleware = require('../middleware/auth');

// Public routes
router.get('/', getAllArticles);
router.get('/:id', getArticleById);
router.get('/slug/:slug', getArticleBySlug);

// Admin routes
router.post('/', authMiddleware, createArticle);
router.put('/:id', authMiddleware, updateArticle);
router.delete('/:id', authMiddleware, deleteArticle);

module.exports = router;

