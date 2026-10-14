import React, { useState, useMemo } from "react";
import { Search, X, ArrowUpRight, ExternalLink, Star, SlidersHorizontal, FolderGit2 } from "lucide-react";
import { GithubIcon } from "../components/GithubIcon";
import { SectionHeading } from "../components/SectionHeading";
import { allProjects, type Project, type ProjectCategory } from "../data/projects";
import "./FeaturedProjects.css";

const CATEGORIES: Array<"All" | ProjectCategory> = [
  "All",
  "AI & NLP",
  "Computer Vision",
  "Software & Systems",
  "Academic Tools",
  "Interactive & Creative",
];

export const FeaturedProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  // Calculate project count for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allProjects.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = allProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = allProjects;

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter (title, subtitle, description, technologies)
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(q))
      );
    }

    // Sort featured projects first while preserving verified order
    return [...result].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <section id="projects" className="section-wrapper projects-section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          label="Software &amp; AI Engineering"
          title="Project Gallery"
          lead="A comprehensive catalog of 13 technical projects across machine learning, computer vision, systems simulation, and academic tools. Descriptions reflect available repository documentation."
        />

        {/* Gallery Controls: Search and Category Filters */}
        <div className="gallery-controls">
          {/* Search Input Bar */}
          <div className="search-bar">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, keyword, or technology (e.g. PyTorch, NLP, Docker)..."
              className="search-input"
              aria-label="Search projects by title, description, or technology"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="clear-search-btn"
                aria-label="Clear search input"
                title="Clear search"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="category-filters" role="group" aria-label="Filter projects by category">
            <div className="category-filters-label">
              <SlidersHorizontal size={14} aria-hidden="true" />
              <span>Category:</span>
            </div>
            <div className="category-buttons-list">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`category-btn ${isActive ? "category-btn--active" : ""}`}
                    aria-pressed={isActive}
                  >
                    <span>{cat}</span>
                    <span className="category-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="results-summary-bar">
            <span className="results-count-text">
              Showing <strong>{filteredProjects.length}</strong> of <strong>{allProjects.length}</strong> projects
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
              {searchQuery.trim() !== "" && ` matching "${searchQuery}"`}
            </span>

            {(selectedCategory !== "All" || searchQuery.trim() !== "") && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="reset-filters-btn"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid or Empty State */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project: Project) => (
              <article key={project.id} className="project-card">
                <div className="project-card-header">
                  <div className="project-category-row">
                    <div className="badges-group">
                      <span className="academic-badge academic-badge--teal">
                        {project.category}
                      </span>
                      {project.isFeatured && (
                        <span
                          className="academic-badge academic-badge--featured"
                          title="Featured in portfolio selection"
                        >
                          <Star size={11} aria-hidden="true" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>

                    <div className="project-actions-row">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-demo-link-btn"
                          aria-label={`Open live demonstration for ${project.title}`}
                          title="Open Live Demonstration"
                        >
                          <ExternalLink size={13} aria-hidden="true" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                        aria-label={`View ${project.title} repository on GitHub`}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={14} aria-hidden="true" />
                        <span>Code</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                </div>

                <p className="project-card-description">{project.description}</p>

                <div className="project-card-footer">
                  <div className="project-tech-tags" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="gallery-empty-state" role="status">
            <FolderGit2 size={36} className="empty-state-icon" aria-hidden="true" />
            <h3 className="empty-state-title">No projects found</h3>
            <p className="empty-state-text">
              No projects matched your criteria
              {searchQuery ? ` for "${searchQuery}"` : ""}
              {selectedCategory !== "All" ? ` in category "${selectedCategory}"` : ""}.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-secondary empty-state-btn"
            >
              Clear search &amp; filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
