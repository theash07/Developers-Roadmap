import { NavLink, useParams } from 'react-router-dom'

const careerRoadmaps = {
  mern: {
    title: 'MERN Stack',
    subtitle: 'Become a modern full-stack JavaScript developer',
    steps: [
      ['HTML & CSS', 'Semantics, Flexbox, Grid, responsive layouts', ['Semantic HTML', 'Flexbox', 'Grid', 'Forms', 'Media Queries']],
      ['JavaScript', 'ES6+, DOM, async JavaScript and APIs', ['Variables', 'Functions', 'DOM', 'Promises', 'Fetch API', 'Async/Await']],
      ['React', 'Components, hooks, routing and state', ['Components', 'Props', 'useState', 'useEffect', 'Context', 'React Router']],
      ['Node.js', 'Modules, npm, the event loop and servers', ['Node Runtime', 'npm', 'Modules', 'File System', 'Event Loop']],
      ['Express.js', 'Routing, middleware and REST APIs', ['Express', 'Routing', 'Middleware', 'REST', 'Validation', 'Error Handling']],
      ['MongoDB', 'Collections, CRUD, validation and aggregation', ['Collections', 'CRUD', 'Mongoose', 'Indexes', 'Aggregation']],
      ['Full-stack Projects', 'Authentication, forms and connected UI', ['JWT', 'Cookies', 'Password Hashing', 'Protected Routes', 'File Upload']],
      ['Deployment', 'Environment variables, hosting and CI basics', ['Environment Variables', 'Vercel', 'Render', 'CI/CD', 'Testing']],
    ],
  },
  'full-stack': {
    title: 'Full Stack Developer',
    subtitle: 'Build complete products from interface to database',
    steps: [
      ['HTML & CSS', 'Web structure, layouts and accessibility', ['Semantic HTML', 'CSS Grid', 'Flexbox', 'Accessibility']],
      ['JavaScript', 'Core language and browser APIs', ['ES6+', 'DOM', 'Modules', 'Promises', 'Fetch API']],
      ['Frontend Framework', 'React or another component framework', ['Components', 'State', 'Hooks', 'Routing', 'Forms']],
      ['Git & GitHub', 'Version control and collaboration', ['Git Basics', 'Branches', 'Commits', 'Pull Requests']],
      ['Backend Language', 'Node.js and server fundamentals', ['Node.js', 'npm', 'Modules', 'HTTP', 'Environment Variables']],
      ['REST APIs', 'Routes, validation and authentication', ['HTTP Methods', 'Status Codes', 'JWT', 'Middleware', 'Validation']],
      ['Databases', 'Relational or document data design', ['SQL', 'MongoDB', 'Schema Design', 'Relationships', 'Indexing']],
      ['Deployment', 'Cloud hosting, testing and monitoring', ['Docker', 'Vercel', 'CI/CD', 'Testing', 'Logging']],
    ],
  },
  frontend: {
    title: 'Frontend Developer',
    subtitle: 'Create fast, accessible and responsive web experiences',
    steps: [
      ['HTML', 'Semantic structure and accessibility', ['Semantic HTML', 'Forms', 'ARIA', 'SEO Basics']],
      ['CSS', 'Layouts, responsiveness and animations', ['Flexbox', 'Grid', 'Positioning', 'Transitions', 'Animations']],
      ['JavaScript', 'Core language, DOM and async code', ['Functions', 'Objects', 'DOM', 'Closures', 'Promises', 'Async/Await']],
      ['Responsive Design', 'Mobile-first and cross-browser work', ['Media Queries', 'Mobile First', 'Breakpoints', 'Browser DevTools']],
      ['Git & GitHub', 'Branches, commits and pull requests', ['Git', 'Branches', 'Commits', 'Merge', 'GitHub']],
      ['React', 'Components, hooks and routing', ['Components', 'Props', 'Hooks', 'Context', 'React Router']],
      ['TypeScript', 'Types, interfaces and safer applications', ['Types', 'Interfaces', 'Generics', 'React Types']],
      ['Testing & Deployment', 'Unit tests, builds and hosting', ['Vitest', 'Testing Library', 'Build Tools', 'Hosting']],
    ],
  },
  backend: {
    title: 'Backend Developer',
    subtitle: 'Design secure APIs and reliable server systems',
    steps: [
      ['Programming Basics', 'Language syntax and core concepts', ['Variables', 'Control Flow', 'Functions', 'Classes', 'Modules']],
      ['Data Structures', 'Arrays, maps, trees and time complexity', ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Hash Maps', 'Trees']],
      ['Node.js', 'Runtime, modules and server-side code', ['Node.js', 'npm', 'Modules', 'Event Loop', 'Streams']],
      ['REST APIs', 'HTTP methods, routes and validation', ['HTTP', 'Routing', 'JSON', 'Status Codes', 'Validation']],
      ['SQL or MongoDB', 'Schema design and data operations', ['SQL', 'Joins', 'Indexes', 'MongoDB', 'Transactions']],
      ['Authentication', 'Sessions, JWT and authorization', ['Password Hashing', 'Sessions', 'JWT', 'OAuth', 'RBAC']],
      ['Caching & Performance', 'Redis, logging and optimization', ['Redis', 'Caching', 'Logging', 'Rate Limiting', 'Profiling']],
      ['Cloud Deployment', 'Containers, CI/CD and monitoring', ['Docker', 'CI/CD', 'Environment Variables', 'Cloud Hosting', 'Monitoring']],
    ],
  },
  'data-analyst': {
    title: 'Data Analyst',
    subtitle: 'Turn raw data into clear decisions and useful insights',
    steps: [
      ['Excel', 'Spreadsheets, formulas and pivot tables', ['Formulas', 'Pivot Tables', 'Charts', 'Lookup Functions', 'Data Validation']],
      ['SQL', 'Queries, joins, grouping and subqueries', ['SELECT', 'WHERE', 'JOINS', 'GROUP BY', 'Window Functions']],
      ['Python', 'Pandas, NumPy and automation', ['Pandas', 'NumPy', 'Loops', 'Functions', 'DataFrames']],
      ['Statistics', 'Distributions, hypotheses and regression', ['Mean/Median', 'Probability', 'Distributions', 'Hypothesis Tests', 'Regression']],
      ['Data Cleaning', 'Missing values, duplicates and validation', ['Missing Values', 'Duplicates', 'Outliers', 'Data Types', 'Cleaning']],
      ['Tableau or Power BI', 'Dashboards and business reporting', ['Data Models', 'Measures', 'DAX', 'Dashboards', 'Filters']],
      ['Data Visualization', 'Clear charts and data storytelling', ['Matplotlib', 'Seaborn', 'Chart Selection', 'Storytelling']],
      ['Projects & Portfolio', 'Case studies, insights and presentation', ['Business Questions', 'EDA', 'Case Study', 'Presentation', 'Portfolio']],
    ],
  },
}

const stepIcons = {
  'HTML & CSS': 'html5',
  'HTML': 'html5',
  'CSS': 'css',
  'JavaScript': 'javascript',
  'React': 'react',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  'MongoDB': 'mongodb',
  'Frontend Framework': 'react',
  'Git & GitHub': 'github',
  'Backend Language': 'nodedotjs',
  'REST APIs': 'express',
  'Databases': 'mongodb',
  'Deployment': 'vercel',
  'TypeScript': 'typescript',
  'Testing & Deployment': 'jest',
  'Responsive Design': 'css',
  'SQL or MongoDB': 'mongodb',
  'Authentication': 'auth0',
  'Caching & Performance': 'redis',
  'Cloud Deployment': 'docker',
  'Excel': 'microsoftexcel',
  'SQL': 'postgresql',
  'Python': 'python',
  'Tableau or Power BI': 'tableau',
  'Projects & Portfolio': 'github',
  'Full-stack Projects': 'mongodb',
  'Data Cleaning': 'python',
  'Data Visualization': 'tableau',
  'Statistics': 'python',
}

function getStepIcon(step) {
  const iconName = stepIcons[step]
  return iconName ? `/images/roadmap-icons/${iconName}.svg` : null
}

export default function CareerRoadmap() {
  const { role } = useParams()
  const roadmap = careerRoadmaps[role] || careerRoadmaps.frontend

  return (
    <main className="career-page">
      <section className="career-header">
        <NavLink className="career-back" to="/Navbar/Page2">← All roadmaps</NavLink>
        <span>CAREER ROADMAP</span>
        <h1>{roadmap.title}</h1>
        <p>{roadmap.subtitle}</p>
      </section>

      <section className="career-steps" aria-label={`${roadmap.title} learning path`}>
        <div className="mindmap-center">
          <strong>{roadmap.title}</strong>
          <span>Learning path</span>
        </div>
        {roadmap.steps.map(([step, description, topics], index) => (
          <article className={`career-step mindmap-node node-${index + 1}`} key={step}>
            <div className="career-step-number">
              {getStepIcon(step) ? (
                <img src={getStepIcon(step)} alt="" />
              ) : (
                String(index + 1).padStart(2, '0')
              )}
            </div>
            <div className="mindmap-node-content">
              <strong>{step}</strong>
              <span>{description}</span>
              <div className="topic-list" aria-label={`Important topics for ${step}`}>
                {topics.map((topic) => (
                  <span className="topic-chip" key={topic}>{topic}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
