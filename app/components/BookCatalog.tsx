// BookCatalog.tsx
"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "./data";
import BookCard from "./BookCard";
import { Book, Category as CategoryType } from "./types";

const BookCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "rating" | "language">("title");

  // Filter and sort logic
  const filteredAndSortedCategories = useMemo(() => {
    let filteredCategories = categories;

    // Filter by search query
    if (searchQuery) {
      filteredCategories = categories.map(category => ({
        ...category,
        books: category.books.filter(book =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(category => category.books.length > 0);
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filteredCategories = filteredCategories.filter(
        category => category.id === selectedCategory
      );
    }

    // Sort books within categories
    return filteredCategories.map(category => ({
      ...category,
      books: [...category.books].sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return (b.rating || 0) - (a.rating || 0);
          case "language":
            return (a.language || "").localeCompare(b.language || "");
          case "title":
          default:
            return a.title.localeCompare(b.title);
        }
      })
    }));
  }, [selectedCategory, searchQuery, sortBy]);

  // Get all unique languages for filter
  const allLanguages = useMemo(() => {
    const languages = new Set<string>();
    categories.forEach(category => {
      category.books.forEach(book => {
        if (book.language) languages.add(book.language);
      });
    });
    return Array.from(languages).sort();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-teal-200 to-rose-200 bg-clip-text text-transparent">
            Book Catalog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of programming books, cookbooks, and learning resources
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-800/50 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-neutral-700"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books, topics, languages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-4 flex-wrap justify-center">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.title}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              >
                <option value="title">Sort by Title</option>
                <option value="rating">Sort by Rating</option>
                <option value="language">Sort by Language</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20"
          >
            {filteredAndSortedCategories.map((category, categoryIndex) => (
              <motion.section
                key={category.id}
                variants={categoryVariants}
                layout
                className="scroll-mt-20"
                id={category.id}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {category.title}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-rose-400 rounded-full mt-2"></div>
                    </div>
                    {category.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                    {category.description}
                  </p>
                </div>

                {/* Books Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {category.books.map((book, bookIndex) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      index={bookIndex}
                    />
                  ))}
                </motion.div>

                {category.books.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">
                      No books found in this category matching your search.
                    </p>
                  </div>
                )}
              </motion.section>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredAndSortedCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-2">No books found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BookCatalog;