// Central data file — update this to reflect your real info

import type { Project, Skill, ExperienceItem } from '../types';

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Francisco Honorat',
  title: 'Backend Engineer',
  tagline: 'Building scalable APIs, distributed systems and observable architectures.',
  email: 'franciscohonorat@email.com',
  github: 'https://github.com/FranciscoHonorat',
  linkedin: 'https://linkedin.com/in/franciscohonorat',
  about: `Backend-focused software engineer with hands-on experience building robust REST APIs,
microservices and event-driven systems. Passionate about clean architecture, observability
and developer experience. Currently deepening expertise in distributed systems, performance
optimization and cloud-native technologies.`,
};

// ─── Featured Projects ────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: 'Hermes Observability Platform',
    description:
      'Centralized observability platform for distributed services — collects logs, traces and metrics through a unified pipeline.',
    stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    decisions: [
      'Event-driven ingestion to decouple producers from storage',
      'Redis for low-latency metric aggregation',
      'Structured logging with correlation IDs across services',
    ],
    githubUrl: 'https://github.com/FranciscoHonorat/hermes-observability',
    featured: true,
  },
  {
    id: 2,
    title: 'Student Management API',
    description:
      'Full-featured academic management API with authentication, enrollment workflows and reporting.',
    stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Swagger'],
    decisions: [
      'Role-based access control with JWT + refresh tokens',
      'Prisma ORM for type-safe database interactions',
      'API-first approach with Swagger auto-generated docs',
    ],
    githubUrl: 'https://github.com/FranciscoHonorat/student-management-api',
    featured: true,
  },
  {
    id: 3,
    title: 'Geolocation & Routing System',
    description:
      'Location-aware service for real-time geofencing, route calculation and proximity queries.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'PostGIS', 'Redis', 'Docker'],
    decisions: [
      'PostGIS for spatial queries with sub-100ms response times',
      'Redis Geo commands for nearest-neighbor lookups',
      'Stateless design to support horizontal scaling',
    ],
    githubUrl: 'https://github.com/FranciscoHonorat/geolocation-routing',
    featured: true,
  },
  {
    id: 4,
    title: 'Movies API with JWT Auth',
    description:
      'RESTful movie catalog API featuring full CRUD, JWT authentication and advanced filtering.',
    stack: ['Node.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
    decisions: [
      'Access + refresh token rotation for security',
      'Guard-based authorization middleware in NestJS',
      'Pagination and filter query builder pattern',
    ],
    githubUrl: 'https://github.com/FranciscoHonorat/movies-api',
    featured: false,
  },
  {
    id: 5,
    title: 'AI-Powered Content Analyzer',
    description:
      'Backend service that integrates LLM APIs to classify, summarize and tag user-submitted content at scale.',
    stack: ['Node.js', 'TypeScript', 'NestJS', 'OpenAI API', 'Redis', 'Docker'],
    decisions: [
      'Queue-based processing to handle LLM rate limits gracefully',
      'Response caching in Redis to cut duplicate API costs',
      'Structured prompt engineering for consistent output schemas',
    ],
    githubUrl: 'https://github.com/FranciscoHonorat/ai-content-analyzer',
    featured: false,
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'TypeScript', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  // Database
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Prisma', category: 'database' },
  // DevOps
  { name: 'Docker', category: 'devops' },
  // Tools
  { name: 'Swagger', category: 'tools' },
  { name: 'Git', category: 'tools' },
];

// ─── Experience / Trajectory ──────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    period: '2023 – Present',
    role: 'Backend Engineer',
    company: 'Independent Projects',
    description:
      'Designing and building production-grade backend systems focused on reliability, performance and developer experience.',
    highlights: [
      'Developed the Hermes Observability Platform from architecture to deployment',
      'Created reusable NestJS modules for auth, pagination and error handling',
      'Adopted ADRs (Architecture Decision Records) to document technical decisions',
      'Maintained clear README and API docs for all public repositories',
    ],
  },
  {
    period: '2022 – 2023',
    role: 'Junior Backend Developer',
    company: 'Learning & Open Source',
    description:
      'Intensive self-directed study of backend fundamentals, data structures and system design.',
    highlights: [
      'Built 10+ REST APIs with progressive complexity',
      'Learned Docker, CI/CD pipelines and cloud deployment basics',
      'Contributed to open-source Node.js tooling',
      'Completed courses on system design and distributed systems',
    ],
  },
];
