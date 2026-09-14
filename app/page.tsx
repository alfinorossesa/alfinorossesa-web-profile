import styles from "./page.module.css";

const roles = ["Backend Developer/"];

const techStack = [
  "Golang (Gin)",
  "PHP (Laravel)",
  "Python (Django)",
  "SQL (PostgreSQL, MySQL, SQLite)",
  "Web Dev (HTML, CSS, JS, Bootstrap)",
  "API Docs (Postman, Insomnia)",
  "Stored Procedure",
  "Microservices",
  "Git / GitHub",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Notion",
  "LaTeX",
  "AI Tools",
];

const jobs = [
  {
    role: "Backend Developer",
    company: "PT. Iota Cipta Indonesia",
    type: "Fulltime",
    dates: "Nov 2022 — May 2026",
    bullets: [
      "Designed, developed, and maintained RESTful APIs supporting business applications and internal systems, with a focus on reliability, scalability, performance, and maintainability.",
      "Implemented backend services using Golang (Gin), PHP (Laravel), and Python (Django) based on project requirements.",
      "Implemented backend business logic, request validation, authentication, authorization, error handling, and standardized API response structures.",
      "Designed and optimized relational database schemas, including tables, relationships, indexes, queries, constraints, and stored procedures to support application requirements and data integrity.",
      "Integrated backend services with external systems and internal services through well-defined APIs and communication protocols.",
      "Designed and maintained API documentation and collections using Postman, Insomnia, and Swagger to support development, testing, and integration processes.",
      "Investigated and resolved application issues by analyzing logs, API behavior, database operations, and system dependencies.",
      "Collaborated with frontend developers, project teams, and other technical dev to translate business requirements into reliable backend solutions.",
      "Applied software engineering principles such as separation of concerns, clean architecture, modular design, reusable components, and maintainable code practices.",
    ],
    projects: [
      "Bank DKI — Digital Loan Banking App",
      "Bank Jateng — Digital Loan Banking App",
      "Yamaha — Data Management System",
      "KKP (Kementerian Kelautan dan Perikanan) — Data Management System",
    ],
  },
  {
    role: "Web Developer",
    company: "Ruang IT Yogyakarta",
    type: "Freelance",
    dates: "Dec 2021 — Nov 2022",
    bullets: [
      "Designed and developed responsive web applications based on client-specific business requirements.",
      "Translated functional requirements into technical implementations covering frontend interfaces, backend functionality, and database structures.",
      "Performed application testing, debugging, and troubleshooting to identify and resolve functional and technical issues.",
    ],
  },
  {
    role: "Web Developer",
    company: "PT. Dlingo Digital Media",
    type: "Internship",
    dates: "Sep 2020 — Jan 2021",
    bullets: [
      "Contributed to the development of an e-commerce marketplace platform, supporting both application functionality and user-facing features.",
      "Developed and maintained web application components based on defined functional and technical requirements.",
      "Collaborated with the development team to implement new features and maintain existing functionality.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#home" className={styles.navMark}>
          alfino.rossesa/
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#stack">Tech stack</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className={styles.hero}>
          <p className={styles.heroEyebrow}>Hi there, I&rsquo;m</p>
          <h1 className={styles.heroName}>Alfino Rossesa</h1>
          <ul className={styles.heroRoles}>
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <div className={styles.heroStatus}>
            {/* <span>&gt; status: online</span> */}
            {/* <span>&gt; location: Jakarta, Indonesia</span> */}
            {/* <span>&gt; uptime: 3+ years</span> */}
          </div>
          <div className={styles.heroSocials}>
            <a href="#contact">Contact</a>
            <a href="https://alfinorossesa.github.io/files/Alfino_Rossesa_Resume.pdf" target="_blank">View Resume</a>
          </div>
          {/* <p className={styles.scrollHint}>Scroll ↓</p> */}
        </section>

        <section id="about" className={styles.section}>
          <p className={styles.sectionLabel}>01</p>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.lede}>
            💻 Backend Developer 
            <br />
            
            Backend Developer with 3+ years of experience building scalable and maintainable backend systems. 
            Strong in API development, database design, and system integration, with hands-on experience in 
            Golang concurrency using goroutines, channels, and worker pools. Experienced with Redis for caching 
            and RabbitMQ for asynchronous message queuing. Focused on building reliable, efficient, 
            and high-performance systems.
          </p>
          {/* <p className={styles.lede}>
            Backend developer with 3+ years of experience building scalable
            and maintainable backend systems. Strong in API development,
            database design, and system integration, with hands-on experience
            in Golang concurrency using goroutines, channels, and worker
            pools. Experienced with Redis for caching and RabbitMQ for
            asynchronous message queuing. Focused on building reliable,
            efficient, and high-performance systems.
          </p> */}
          <div className={styles.eduBox}>
            <p className={styles.eduSchool}>Universitas Amikom Yogyakarta</p>
            <p className={styles.eduMeta}>
              D3 Informatics Engineering · 2018 – 2021 · GPA 3.63
            </p>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <p className={styles.sectionLabel}>02</p>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>
            {jobs.map((job) => (
              <article className={styles.job} key={job.company}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobRole}>{job.role}</h3>
                  <span className={styles.jobDates}>{job.dates}</span>
                </div>
                <p className={styles.jobMeta}>
                  {job.company} — {job.type}
                </p>
                <ul className={styles.jobList}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {job.projects && (
                  <div className={styles.jobProjects}>
                    <strong>Work in project</strong>
                    <ul className={styles.jobProjectList}>
                      {job.projects.map((project) => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className={styles.section}>
          <p className={styles.sectionLabel}>03</p>
          <h2 className={styles.sectionTitle}>Tech stack</h2>
          <ul className={styles.tags}>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>

        <section id="project" className={styles.section}>
          <p className={styles.sectionLabel}>04</p>
          <h2 className={styles.sectionTitle}>Project</h2>
          <p className={styles.lede}>
            Some projects and stuff that I have worked on. <br />
            (⚙️ always under construction....)
          </p>
          <ul className={styles.contactList}>
            <li>
              <a
                href="https://alfinorossesa-project.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLabel}>Project</span>
                <span className={styles.contactValue}>/alfino.project</span>
              </a>
            </li>
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <p className={styles.sectionLabel}>05</p>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <p className={styles.lede}>
            Open to backend dev opportunities — reach out
            through any of the channels below.
          </p>
          <ul className={styles.contactList}>
            <li>
              <a href="mailto:alfino.zxcvbnm@gmail.com">
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>
                  alfino.zxcvbnm@gmail.com
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alfinorossesa/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLabel}>LinkedIn</span>
                <span className={styles.contactValue}>/in/alfinorossesa</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/alfinorossesa"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.contactLabel}>GitHub</span>
                <span className={styles.contactValue}>/alfinorossesa</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Alfino Rossesa</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
