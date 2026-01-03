const { Article } = require('../models');
const { Op } = require('sequelize');

const getAllArticles = async (req, res, next) => {
  try {
    const articles = await Article.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

const getArticleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
};

const getArticleBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const article = await Article.findOne({ where: { slug } });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const { title, content, slug } = req.body;

    if (!title || !content || !slug) {
      return res.status(400).json({ message: 'Title, content, and slug are required' });
    }

    const article = await Article.create({ title, content, slug });
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, slug } = req.body;

    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    await article.update({ title, content, slug });
    res.json(article);
  } catch (error) {
    next(error);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    await article.destroy();
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle
};

