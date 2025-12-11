// BookCatalog.tsx
"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ------------------------------------------------------------------
// 1. Internal Type Definitions (Replacing ./types)
// ------------------------------------------------------------------

interface Book {
    id: string;
    title: string;
    description?: string;
    rating?: number;
    language?: string;
    tags?: string[];
    // Add other properties you might use here (e.g., coverImage, author)
}

interface Category {
    id: string;
    title: string;
    description: string;
    icon: string;
    featured?: boolean;
    books: Book[];
}

interface BookCardProps {
    book: Book;
    index: number;
}

type SortKey = "title" | "rating" | "language";

// ------------------------------------------------------------------
// 2. Mock Data (Replacing ./data)
// NOTE: This data MUST be defined here as requested.
// ------------------------------------------------------------------

const categories: Category[] = [
    {
        id: "programming",
        title: "Programming & Development",
        description: "Deep dive into algorithms, frameworks, and coding best practices.",
        icon: "💻",
        featured: true,
        books: [
            { id: "101", title: "Effective TypeScript", rating: 4.8, language: "English", tags: ["typescript", "javascript"] },
            { id: "102", title: "Clean Code", rating: 4.5, language: "English", tags: ["java", "architecture"] },
            { id: "103", title: "The Go Programming Language", rating: 4.6, language: "English", tags: ["go", "concurrency"] },
            { id: "104", title: "Design Patterns", rating: 4.3, language: "English", tags: ["oop", "patterns"] },
        ],
    },
    {
        id: "cooking",
        title: "Culinary Arts",
        description: "From quick weeknight meals to gourmet techniques, master the kitchen.",
        icon: "🍳",
        books: [
            { id: "201", title: "Salt Fat Acid Heat", rating: 4.9, language: "English", tags: ["basics", "flavor"] },
            { id: "202", title: "The French Laundry Cookbook", rating: 4.7, language: "English", tags: ["gourmet", "french"] },
        ],
    },
    {
        id: "science",
        title: "Science & Mathematics",
        description: "Explore the frontiers of physics, chemistry, and abstract math.",
        icon: "🔬",
        books: [
            { id: "301", title: "A Brief History of Time", rating: 4.4, language: "English", tags: ["physics", "cosmology"] },
            { id: "302", title: "Cosmos", rating: 4.6, language: "Spanish", tags: ["astronomy", "science"] },
        ],
    },
];


// ------------------------------------------------------------------
// 3. Internal BookCard Component (Replacing ./BookCard)
// ------------------------------------------------------------------

// Variants for staggered entrance animation
const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.05, // Staggered delay based on index
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
    return (
        <motion.div
            variants={cardVariants}
            custom={index} // Pass the index to the variants function
            initial="hidden"
            animate="visible"
            layout // Essential for smooth reordering on filter/sort changes
            className="bg-neutral-800 border border-neutral-700/70 rounded-xl p-5 shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300"
        >
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                {book.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {book.description || "No description provided."}
            </p>

            {/* Book details/footer */}
            <div className="flex justify-between items-center text-sm text-gray-400 pt-3 border-t border-neutral-700">
                <span className="flex items-center gap-1 font-medium text-teal-300">
                    {book.rating ? "⭐ " + book.rating.toFixed(1) : "—"}
                </span>
                <span className="px-2 py-0.5 bg-neutral-700/60 rounded-full text-xs text-gray-300">
                    {book.language || "N/A"}
                </span>
            </div>
        </motion.div>
    );
};

// ------------------------------------------------------------------
// 4. Main Component Logic
// ------------------------------------------------------------------

const BookCatalog: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<SortKey>("title");
    const [showScrollButton, setShowScrollButton] = useState(false);

    // --- Helper Functions ---

    const sortBooks = (books: Book[], sortBy: SortKey): Book[] => {
        return [...books].sort((a, b) => {
            switch (sortBy) {
                case "rating":
                    return (b.rating || 0) - (a.rating || 0);
                case "language":
                    return (a.language || "").localeCompare(b.language || "");
                case "title":
                default:
                    return a.title.localeCompare(b.title);
            }
        });
    };

    // --- Data Processing ---

    const filteredAndSortedCategories = useMemo(() => {
        let filteredCategories = categories;

        // 1. Filter by search query
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

        // 2. Filter by category
        if (selectedCategory !== "all") {
            filteredCategories = filteredCategories.filter(
                category => category.id === selectedCategory
            );
        }

        // 3. Sort books within categories
        return filteredCategories.map(category => ({
            ...category,
            books: sortBooks(category.books, sortBy),
        }));
    }, [selectedCategory, searchQuery, sortBy]);

    // --- UX Logic: Scroll-to-Top ---

    const handleScroll = useCallback(() => {
        setShowScrollButton(window.scrollY > 300);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // --- Framer Motion Variants ---

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

    // ------------------------------------------------------------------
    // 5. Render
    // ------------------------------------------------------------------

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900 py-12 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-50 via-teal-300 to-rose-300 bg-clip-text text-transparent tracking-tighter">
                        The Digital Library
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive, animated catalog for your entire knowledge base.
                    </p>
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-neutral-800/60 backdrop-blur-xl rounded-3xl p-6 mb-16 shadow-2xl border border-neutral-700/50"
                >
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search Input */}
                        <div className="flex-1 w-full lg:max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search titles, descriptions, and tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-3 pl-14 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all shadow-inner shadow-neutral-950"
                                />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400 text-xl">
                                    🔍
                                </div>
                            </div>
                        </div>

                        {/* Category Filter and Sort */}
                        <div className="flex gap-4 flex-wrap justify-center">
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="select-style" // Use custom class for better styling
                            >
                                <option value="all">📚 All Categories</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.icon} {category.title}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortKey)}
                                className="select-style" // Use custom class for better styling
                            >
                                <option value="title">A-Z Title</option>
                                <option value="rating">⭐ Top Rated</option>
                                <option value="language">🌐 Language</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Styles for select-style (internal definition) */}
                <style jsx>{`
                    .select-style {
                        padding: 0.75rem 1rem;
                        background-color: #171717; /* neutral-900 */
                        border: 1px solid #404040; /* neutral-700 */
                        border-radius: 0.75rem; /* rounded-xl */
                        color: white;
                        transition: all 0.2s;
                        cursor: pointer;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
                        background-repeat: no-repeat;
                        background-position: right 1rem center;
                        background-size: 1.5em;
                    }
                    .select-style:focus {
                        outline: none;
                        box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.5), 0 0 0 4px rgba(20, 184, 166, 0.3); /* ring-teal-500 */
                        border-color: transparent;
                    }
                `}</style>

                {/* Categories Grid */}
                <AnimatePresence>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-24" 
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
                                <div className="mb-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="text-4xl text-teal-400">{category.icon}</div>
                                        <div>
                                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                                {category.title}
                                            </h2>
                                            {/* Vibrant Underline Effect */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ delay: 0.5, duration: 1 }}
                                                className="h-1 bg-gradient-to-r from-teal-400 to-rose-400 rounded-full mt-2"
                                            />
                                        </div>
                                        {category.featured && (
                                             <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                                 Featured
                                             </span>
                                        )}
                                    </div>
                                    <p className="text-gray-300 text-lg leading-relaxed max-w-4xl border-l-4 border-teal-500/50 pl-4 py-1">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Books Grid */}
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                                >
                                    {category.books.map((book, bookIndex) => (
                                        <BookCard
                                            key={book.id}
                                            book={book}
                                            index={bookIndex}
                                        />
                                    ))}
                                </motion.div>

                                {/* Category Empty State */}
                                {category.books.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-12 bg-neutral-800/40 rounded-xl mt-6 border border-neutral-700/50"
                                    >
                                        <p className="text-gray-400 text-lg">
                                            😔 No books in **{category.title}** matched your search or filter.
                                        </p>
                                    </motion.div>
                                )}
                            </motion.section>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Global Empty State */}
                {filteredAndSortedCategories.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-neutral-800/40 rounded-xl mt-6 border-2 border-dashed border-teal-500/40"
                    >
                        <div className="text-6xl mb-4">🚫</div>
                        <h3 className="text-2xl font-extrabold text-white mb-2">No Results Found</h3>
                        <p className="text-gray-400">
                            Your search criteria returned no matching categories or books. Try broadening your search!
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Animated Scroll To Top Button */}
            <AnimatePresence>
                {showScrollButton && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-4 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-lg shadow-teal-500/50 transition-all z-50 focus:outline-none focus:ring-4 focus:ring-teal-500/50"
                        aria-label="Scroll to top"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BookCatalog;