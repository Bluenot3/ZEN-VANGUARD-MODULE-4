import type { Curriculum } from '../types';

export const curriculumData: Curriculum = {
  title: 'MODULE 4 — AI SYSTEMS MASTERY & PROFESSIONAL INTEGRATION',
  summaryForAI:
    "Module 4 of ZEN AI VANGUARD, 'AI Systems Mastery & Professional Integration,' elevates learners to operational experts. Section 1 focuses on systems engineering, covering system mapping, prompt control flows, agent framework comparisons (smolagents, LangGraph), advanced memory design (RAG), data pipelines (ETL), and MLOps principles like testing, observability, security, and human-in-the-loop governance. Section 2 transitions to strategic oversight, teaching data analytics and storytelling, anomaly/drift detection, cost optimization, ethical and bias audits, and legal/IP considerations. The module culminates in assembling a comprehensive Governance Pack, undergoing a crisis simulation, and credentialing their skills on-chain, preparing them for leadership roles in the AI-driven economy.",
  sections: [
    {
      id: 'part-1',
      title: 'Section 1 — Systems Engineering & Operational Excellence',
      content: [
         { type: 'paragraph', content: 'Welcome to the engine room of the AI revolution. In this section, we move beyond merely "prompting" models to engineering robust, scalable, and observable AI systems. You will learn to treat AI not as magic, but as a deterministic software component that requires rigorous architecture, testing, and governance.' },
      ],
      subSections: [
        {
          id: '1-1',
          title: '1.1 Systems Synthesis Lab',
          content: [
            { type: 'heading', content: 'Architectural Reverse-Engineering & The C4 Model' },
            { type: 'paragraph', content: 'True mastery begins with understanding the invisible structures that govern AI behavior. We adopt the **C4 Model** (Context, Containers, Components, Code) to visualize these architectures. This tiered approach allows us to zoom in from the high-level system context down to the individual prompt logic. Participants map their system’s "blast radius" — identifying which downstream services are affected if the model hallucinates or fails.' },
            { type: 'paragraph', content: 'In this lab, you will decompose a monolithic AI application into micro-services. Consider a "Travel Agent AI". It isn\'t just one prompt; it is a constellation of services: a Flight Search API, a Hotel Booking Container, a User Profile Store, and a centralized Orchestration Agent. We visualize these dependencies to identify single points of failure and latency bottlenecks.' },
            { type: 'heading', content: 'Interface Contracts & Data Lineage' },
            { type: 'paragraph', content: 'The second phase examines system cohesion — how one layer’s output becomes another’s input. Using industry diagrams from firms like OpenAI Enterprise and Cohere, learners identify where context loss, token limits, or improper serialization cause degradation. They practice “contract thinking”: defining every interface with explicit I/O expectations (e.g., using Pydantic models or JSON schemas). Finally, they generate a visual “System Map” that becomes the Runbook’s foundation, including data lineage, privacy checkpoints, and human-in-the-loop nodes.' },
            { type: 'heading', content: 'Interactive: AI Systems Blueprint Visualizer' },
            { type: 'paragraph', content: 'Visualize your architecture before writing a single line of code. Users describe a complex system, even one that has never existed but remains physically plausible. Nano-Banana then generates an industrial-quality, state-of-the-art blueprint. As it builds, the AI analyzes the system architecture to identify potential bottlenecks or inefficiencies, suggesting intelligent improvements. The model learns from each query, refining its ability to forecast system behavior and construct robust, professional-grade mock-ups.' },
            { type: 'interactive', component: 'AiSystemsBlueprintVisualizer', interactiveId: 'blueprint-visualizer-1' },
            { type: 'quote', content: 'Corporate Use Example: Compliance officers visualize internal AI model dependencies to verify data lineage and SOC-2 alignment before audits.'},
            { type: 'heading', content: 'Interactive: “Skytower Architect” — Structural Vision Generator' },
            { type: 'paragraph', content: 'Apply systems thinking to physical engineering. Users must prompt Nano-Banana to generate the blueprint and visual concept for the tallest building in the world, including realistic engineering dimensions, load-bearing logic, and environmental context. The AI explains why each structural element exists and provides a "Design Integrity Check" to reveal whether the layout is structurally plausible.' },
            { type: 'interactive', component: 'SkytowerArchitect', interactiveId: 'skytower-architect-1' }
          ],
        },
        {
          id: '1-2',
          title: '1.2 Prompt Systems & Control Flow Optimization',
          content: [
            { type: 'heading', content: 'From Prompting to Engineering: Deterministic Control' },
            { type: 'paragraph', content: 'Prompt engineering at professional scale becomes prompt system design — managing not one prompt, but a portfolio of templates routed by intent. We move beyond "magic words" to **Deterministic Control Flows**. Learners examine advanced control techniques such as dynamic variable substitution, meta-prompt chaining, and temperature modulation to enforce output consistency.' },
            { type: 'paragraph', content: 'We analyze the **ReAct (Reason + Act)** pattern versus **Chain-of-Thought (CoT)** prompting. While CoT improves reasoning, ReAct allows the model to interact with external tools. You will design a "Router Chain" — a lightweight classification prompt that determines if a user query is "Support", "Sales", or "Technical", routing it to the appropriate specialized model (e.g., Gemini Flash for speed vs. Gemini Pro for reasoning).' },
            { type: 'heading', content: 'Version Control for Cognitive Logic' },
            { type: 'paragraph', content: 'In reflection, professionals learn that prompt systems mirror traditional software APIs: versioned, tested, and governed. They design version control for prompts (v1.0, v1.1, etc.) and document how each revision improved accuracy or safety. We discuss the concept of "Prompt Drift" — where model updates subtly change how a prompt is interpreted — and how to guard against it.' },
            { type: 'heading', content: 'Interactive: Prompt Health Dashboard' },
            { type: 'paragraph', content: 'Monitors prompts in live production and visualizes drift — using animated heatmaps that show which prompts produce high variance or hallucination. This tool simulates an enterprise MLOps environment where reliability is paramount.' },
            { type: 'interactive', component: 'PromptHealthDashboard', interactiveId: 'prompt-health-dashboard-1' },
            { type: 'interactive', component: 'PromptMutationStudio', interactiveId: 'prompt-mutation-studio-1' },
            { type: 'quote', content: 'Corporate Use Example: Marketing teams can track which prompts yield off-brand tone or factual errors, generating a report for revision meetings.'}
          ],
        },
        {
          id: '1-3',
          title: '1.3 Agent Framework Comparative Study',
          content: [
            { type: 'heading', content: 'The Landscape of Agency: LangChain vs. LlamaIndex vs. AutoGen' },
            { type: 'paragraph', content: 'This unit formalizes understanding of the agent frameworks dominating industry. We analyze the trade-offs between "stateless" chains and "stateful" graphs. Learners perform a head-to-head comparison using identical tasks such as document retrieval or API summarization, benchmarking throughput, observability features, and reliability using a 50-sample workload.' },
            { type: 'heading', content: 'DAGs vs. Sequential Chains' },
            { type: 'paragraph', content: 'Instructors emphasize architectural literacy: how Directed Acyclic Graph (DAG) planning in **LangGraph** differs from linear sequential prompting, and how **LlamaIndex**’s vector store interfaces efficiently integrate with enterprise data lakes. We also explore multi-agent collaboration via **AutoGen**, where agents converse to solve problems. Each participant rebuilds one of their prior mini-apps inside a new framework to feel real-world migration friction and the cost of technical debt.' },
            { type: 'heading', content: 'Interactive Components' },
            { type: 'paragraph', content: '“Framework Arena” – a three-column console that executes sample workflows side-by-side, animating step counts, latency bars, and success rates in real time.' },
            { type: 'interactive', component: 'MultiAgentChatSandbox', interactiveId: 'framework-arena-1' },
            { type: 'paragraph', content: '“Migration Simulator” – learners drag one of their micro-apps into a new framework container; an animation shows rebuild time and dependency conflicts.' },
            { type: 'interactive', component: 'AgentSystemDesigner', interactiveId: 'agent-system-designer-1' },
            { type: 'quote', content: 'Leaderboard: frameworks earn stars for speed, transparency, and observability; students discuss why trade-offs emerge.'}
          ],
        },
        {
          id: '1-4',
          title: '1.4 Advanced Memory Design & Semantic Caching',
          content: [
            { type: 'heading', content: 'Cognitive Persistence: RAG & Vector Stores' },
            { type: 'paragraph', content: 'AI systems become powerful only when they remember effectively. This lesson explores three memory types: episodic (chat history), semantic (knowledge embeddings), and procedural (rules or routines). Learners build hybrid retrieval-augmented-generation (RAG) pipelines that balance recall precision with cost efficiency. Using FAISS or Chroma vector stores, they experiment with **hierarchical indexing** and measure retrieval precision and recall.' },
            { type: 'heading', content: 'Context Management & Sliding Windows' },
            { type: 'paragraph', content: 'Instructors guide participants through context-aging algorithms that retire outdated knowledge, reducing hallucination risk while maintaining responsiveness. We introduce the concept of "Memory Consolidation" — using a background process to summarize conversation logs into long-term semantic notes. Learners also design privacy filters to exclude personal data from memory, echoing compliance practices in NIST’s AI Risk Management Framework.' },
            { type: 'heading', content: 'Interactive: Memory Recall Tuner' },
            { type: 'paragraph', content: 'A “holographic memory cube” interface lets users drag documents into 3D space to adjust chunk size, vector distance thresholds, and retrieval bias, visualized as glowing linkages that expand or contract dynamically.' },
            { type: 'interactive', component: 'MemoryRecallTuner', interactiveId: 'memory-recall-tuner-1' },
             { type: 'interactive', component: 'RagBuilder', interactiveId: 'rag-builder-1' },
             { type: 'interactive', component: 'ContextWindowExplorer', interactiveId: 'context-window-explorer-1' },
             { type: 'interactive', component: 'MemoryDecayLab', interactiveId: 'memory-decay-lab-1' },
            { type: 'quote', content: 'Corporate Use Example: Legal or HR departments test document recall precision across policy datasets before deploying compliance bots.'}
          ],
        },
        {
          id: '1-5',
          title: '1.5 Data Pipeline Engineering',
          content: [
            { type: 'heading', content: 'The Lifeblood of AI: ETL & Data Cleaning' },
            { type: 'paragraph', content: 'Reliable AI begins with structured, explainable data. Professionals build an end-to-end ETL (Extract, Transform, Load) pipeline feeding their agents. They ingest diverse data sources — spreadsheets, PDFs, APIs — then apply cleaning steps using pandas and Great Expectations. We focus on the concept of "Garbage In, Garbage Out" at an industrial scale.' },
            { type: 'heading', content: 'Schema Validation & Governance' },
            { type: 'paragraph', content: 'Students document schema metadata and practice PII minimization by hashing or masking identifiers. They integrate validation checkpoints that flag anomalies (e.g., schema drift, null values) before data reaches the model. Visualization of their pipeline flow helps them see where human oversight or blockchain attestations could verify data provenance. We also touch on the concept of "Data Flywheels" — how user interactions feed back into the dataset to improve the model over time.' },
            { type: 'heading', content: 'Interactive Experiences' },
            { type: 'paragraph', content: '“Pipeline Constructor” – visual drag flow: ingest → clean → validate → store. Each stage animates with flowing particles; errors flash red when schema violations occur.' },
            { type: 'interactive', component: 'DataDecisionFlowchartBuilder', interactiveId: 'pipeline-constructor-1' },
            { type: 'paragraph', content: '“Data Sanity Scanner” – upload any CSV; the tool displays live completeness and validity scores and animates error bars as fixes are applied.' },
            { type: 'interactive', component: 'DataVisualizer', interactiveId: 'data-sanity-scanner-1' },
            { type: 'quote', content: 'Challenge: achieve a Data Quality Index ≥ 95 % before moving on.'}
          ],
        },
        {
          id: '1-6',
          title: '1.6 Testing & Evaluation Frameworks',
          content: [
            { type: 'heading', content: 'Evaluating the Subjective: LLM-as-a-Judge' },
            { type: 'paragraph', content: 'Evaluation is the heartbeat of professional AI. How do you test a system that is non-deterministic? Participants design multi-layer test suites: unit tests for tools, scenario tests for workflows, and batch tests for statistical validation. They use Hugging Face Evaluate, LangSmith, or custom Python scripts to compute F1, BLEU, and human-rubric scores.' },
            { type: 'heading', content: 'Bias & Fairness Testing' },
            { type: 'paragraph', content: 'The class discusses evaluation reproducibility: fixing seeds, tracking prompt versions, and reporting confidence intervals. We introduce the "LLM-as-a-Judge" pattern, where a stronger model (e.g., Gemini Pro) evaluates the outputs of a smaller, faster model (e.g., Gemini Flash). Instructors present findings from Stanford’s Center for Research on Foundation Models that show evaluation bias can misrepresent performance by up to 18% if sample sets aren’t randomized.' },
            { type: 'heading', content: 'Interactive Labs' },
            { type: 'paragraph', content: '“Eval Lab Dashboard” – upload test prompts; watch F1, BLEU, and cost histograms animate as runs complete. Clicking a bar shows representative outputs.' },
            { type: 'interactive', component: 'RlhfTrainerGame', interactiveId: 'eval-lab-dashboard-1' },
            { type: 'paragraph', content: '“Stochasticity Simulator” – toggle randomness; a live graph shows accuracy variance and stability index.' },
            { type: 'interactive', component: 'LossLandscapeNavigator', interactiveId: 'stochasticity-simulator-1' },
             { type: 'interactive', component: 'AdversarialAttackSimulator', interactiveId: 'adversarial-simulator-1' },
            { type: 'quote', content: 'Game Mechanic: sustain ≥ 0.8 F1 across three consecutive batches to earn “Reliability Engineer.”'}
          ],
        },
        {
          id: '1-7',
          title: '1.7 Observability & Telemetry',
          content: [
            { type: 'heading', content: 'Flying by Instruments: OpenTelemetry' },
            { type: 'paragraph', content: 'Professionals need visibility into what their AI systems do when no one is watching. This lesson teaches instrumentation: collecting structured logs (timestamp, prompt ID, response hash, latency) and feeding them to analytic dashboards. Learners implement lightweight telemetry with Plotly Dash or Grafana, creating live KPI panels for accuracy, cost, and user satisfaction.' },
            { type: 'heading', content: 'Tracing the Thought Process' },
            { type: 'paragraph', content: 'The class explores traceability standards drawn from **OpenTelemetry** and Google’s MLOps Guidelines, emphasizing that every decision should be auditable. Students correlate spikes in latency with API cost bursts and visualize time-series correlations. We discuss the difference between "System Metrics" (latency, error rate) and "Business Metrics" (user intent resolution, satisfaction score).' },
            { type: 'heading', content: 'Interactive Visualizers' },
            { type: 'paragraph', content: '“Live Ops Console” – simulated control room where streams of events flow across a neon dashboard; latency spikes trigger glowing alerts.' },
            { type: 'interactive', component: 'FundingPulseTicker', interactiveId: 'live-ops-console-1' },
            { type: 'paragraph', content: '“Correlation Explorer” – drag metrics (cost, latency, user satisfaction) onto a canvas; animated lines reveal correlation strength (Pearson r).' },
            { type: 'interactive', component: 'SimplePredictiveModel', interactiveId: 'correlation-explorer-1' },
            { type: 'quote', content: 'Mini-App Tip: pressing “Auto-Explain” generates plain-English summaries (“Latency ↑ 15 % due to API queue”).'}
          ],
        },
        {
          id: '1-8',
          title: '1.8 Security & Secrets Operations',
          content: [
            { type: 'heading', content: 'Defense in Depth & OWASP Top 10' },
            { type: 'paragraph', content: 'Modern AI environments face escalating security threats: data poisoning, prompt injection, key leakage. This unit teaches defense in depth. Learners study encryption basics, token-scope limitation, and RBAC (role-based access control). We analyze the **OWASP Top 10 for LLMs**, focusing on Prompt Injection and Insecure Output Handling.' },
            { type: 'heading', content: 'Secrets Management & Hygiene' },
            { type: 'paragraph', content: 'They simulate a key compromise drill, revoking credentials and redeploying environment variables while maintaining uptime. Instructors reference IBM’s Cybersecurity Index showing AI toolchain attacks up 62 % year-over-year, underscoring urgency. Learners audit dependency packages for known CVEs and implement automated scans via GitHub Dependabot or pip-audit. They also design communication protocols for disclosing breaches ethically and legally.' },
            { type: 'heading', content: 'Simulations & Apps' },
            { type: 'paragraph', content: '“Breach Drill Simulator” – interactive timeline: a key leak alert appears; learners click through containment steps. Correct order restores system integrity; missteps cost “trust points.”' },
            { type: 'interactive', component: 'EthicalDilemmaSimulator', interactiveId: 'breach-drill-simulator-1' },
            { type: 'paragraph', content: '“Access Visualizer” – animated network map showing RBAC layers; toggling a user’s permission immediately updates connection paths.' },
            { type: 'interactive', component: 'LangGraphVisualizer', interactiveId: 'access-visualizer-1' },
             { type: 'interactive', component: 'CodeDebugger', interactiveId: 'security-debugger-1' },
            { type: 'quote', content: 'Tip: enable MFA node animation—blinking green locks mean compliance achieved.'}
          ],
        },
        {
          id: '1-9',
          title: '1.9 Human-in-the-Loop Governance',
          content: [
            { type: 'heading', content: 'The Human Firewall & Active Learning' },
            { type: 'paragraph', content: 'This lesson reconnects automation with accountability. Students architect workflows where humans verify critical decisions — contract approvals, HR summaries, medical triage drafts. They build review queues in which model confidence (< 0.7 score) triggers human validation. The lab quantifies performance improvements: typically, introducing reviewers increases accuracy by 12–18 % while limiting cost growth to 5 %.' },
            { type: 'heading', content: 'Active Learning Loops' },
            { type: 'paragraph', content: 'Discussion centers on cognitive ergonomics: preventing reviewer fatigue and documenting dissent. We explore **Active Learning**, where human corrections are fed back into the system to fine-tune future model versions. Learners design escalation policies and feedback loops that retrain prompts when humans override outputs.' },
            { type: 'heading', content: 'Interactive Modules' },
            { type: 'paragraph', content: '“Reviewer Queue Sim” – an AI/human moderation game where uncertain outputs queue for approval. Players must decide Approve/Revise/Reject under time pressure; accuracy and speed scores appear live.' },
            { type: 'interactive', component: 'RlhfTrainerGame', interactiveId: 'reviewer-queue-sim-1' },
            { type: 'paragraph', content: '“Feedback Loop Trainer” – each human correction retrains a toy model; a line chart shows precision rising as feedback accumulates.' },
            { type: 'interactive', component: 'PersonalizationSimulator', interactiveId: 'feedback-loop-trainer-1' },
            { type: 'quote', content: 'Fun Element: leaderboard tracks fastest reviewer to achieve < 5 % false positives.'}
          ],
        },
        {
          id: '1-10',
          title: '1.10 Incident Response & SLA Engineering',
          content: [
            { type: 'heading', content: 'Reliability Engineering & SRE Principles' },
            { type: 'paragraph', content: 'The capstone of Section 1 teaches resilience engineering. Learners define measurable Service-Level Objectives (SLOs) for uptime, latency, and accuracy, then translate them into Service-Level Agreements (SLAs) with hypothetical stakeholders. They conduct a live outage simulation, forcing their Space offline for 10 minutes while executing rollback and notification procedures.' },
            { type: 'heading', content: 'The Error Budget' },
            { type: 'paragraph', content: 'The cohort studies reliability statistics from Google SRE Reports showing that well-defined SLOs reduce downtime cost by 34 % annually. Students calculate mean time to detect (MTTD) and mean time to recover (MTTR)* for their system, embedding these metrics in their dashboards. We introduce the concept of an "Error Budget" — the acceptable amount of failure allowed to foster innovation without breaking trust.' },
            { type: 'heading', content: 'Interactive Simulation' },
            { type: 'paragraph', content: '“SLA Commander” – a dashboard that randomly generates incidents (API failure, latency spike, cost overrun). Learners deploy rollback or reroute actions by pressing response buttons; MTTR and downtime cost update live.' },
            { type: 'interactive', component: 'DockerCommandQuiz', interactiveId: 'sla-commander-1' },
            { type: 'paragraph', content: '“Post-Mortem Generator” – after each drill, an animated report builds itself from logs; users edit narrative fields to complete the official document.' },
            { type: 'interactive', component: 'MeetingSummarizer', interactiveId: 'post-mortem-generator-1' },
            { type: 'quote', content: 'Achievement: keep uptime ≥ 99.5 % across three scenarios to earn “Resilience Architect.”'}
          ],
        },
      ],
    },
    {
      id: 'part-2',
      title: 'Section 2 — Governance, Analytics & Future Strategy',
      content: [
        { type: 'paragraph', content: 'Having mastered the engineering of AI systems, we now ascend to the bridge. Section 2 transforms you into a strategic operator capable of interpreting data, defending ethical decisions, navigating complex legal landscapes, and anticipating the future of work. You will learn to own the outcomes of your AI systems with competence, compliance, and conscience.' },
      ],
      subSections: [
        {
          id: '2-1',
          title: '2.1 Data Analytics & Storytelling',
          content: [
            { type: 'heading', content: 'From Metrics to Meaning' },
            { type: 'paragraph', content: 'The section opens by teaching professionals how to translate telemetry into meaning. Learners explore data-storytelling frameworks used at McKinsey Analytics and the World Bank—combining quantitative rigor with narrative empathy. Using their own logs, they calculate cost-per-task, P95 latency, and user-satisfaction correlations.' },
            { type: 'heading', content: 'The Pyramid Principle' },
            { type: 'paragraph', content: 'Students practice design clarity: minimal color palettes, annotated anomalies, and call-to-action captions. They apply the **Pyramid Principle** to structure their insights: start with the answer, then group supporting arguments, then provide data. They use Plotly Dash, Power BI, or Tableau Public to build a “State of My Agent” report containing three KPIs, two trends, and one anomaly. Tips & Tricks: always label units, keep y-axes consistent, and limit dashboards to seven visible charts to avoid cognitive overload.' },
            { type: 'heading', content: 'Interactive Mini-App: “Insight Composer”' },
            { type: 'paragraph', content: 'A drag-and-drop dashboard builder where users drop widgets (charts, annotations, call-outs) to see how clarity or clutter changes comprehension scores in real time.' },
            { type: 'interactive', component: 'ExplainabilityPanel', interactiveId: 'insight-composer-1' },
             { type: 'interactive', component: 'BenefitSorter', interactiveId: 'insight-sorter-1' },
            { type: 'quote', content: 'Simulator Tip: Toggle “Executive Mode” to simulate how a C-suite viewer interprets visuals; it highlights jargon or missing context in red.'}
          ],
        },
        {
          id: '2-2',
          title: '2.2 Anomaly & Drift Detection',
          content: [
            { type: 'heading', content: 'The Entropy of AI: Concept vs. Data Drift' },
            { type: 'paragraph', content: 'Professionals next confront model decay, the silent killer of deployed AI. Learners review how **Concept Drift** (user intent changes) and **Covariate Shift** (input data changes) arise. Examples include seasonal purchasing behavior or evolving language use (slang). They experiment with rolling-window z-scores and cosine-similarity thresholds to quantify deviation.' },
            { type: 'heading', content: 'Automated Vigilance' },
            { type: 'paragraph', content: 'Using their system logs, participants implement lightweight monitoring scripts that trigger Slack or Teams alerts when accuracy drops > 10 % from baseline. Instructors teach how to create labeled “gold” datasets that stay stable over time, allowing meaningful comparisons. Learners also visualize drift heatmaps to localize problematic data sources.' },
            { type: 'heading', content: 'Interactive: Data Drift & Risk Lens' },
            { type: 'paragraph', content: 'Generates time-series visualizations of changing data distributions. Anomaly clusters bloom like heat spots over time, and users can toggle between “Equity Mode” (bias detection) and “Drift Mode” (data stability).' },
            { type: 'interactive', component: 'DataDriftRiskLens', interactiveId: 'data-drift-risk-lens-1' },
             { type: 'interactive', component: 'AlgorithmVisualizer', interactiveId: 'outlier-detector-1' },
            { type: 'quote', content: 'Corporate Use Example: AI operations teams catch model drift in customer-sentiment classification before it impacts quarterly reports.'}
          ],
        },
        {
          id: '2-3',
          title: '2.3 Cost & Efficiency Optimization',
          content: [
            { type: 'heading', content: 'FinOps for AI' },
            { type: 'paragraph', content: 'Here efficiency meets sustainability. Students analyze token-usage logs, model-switching patterns, and caching effectiveness. They compute **cost elasticity**—how a 1 % change in context length affects total spend—and observe that trimming prompts by 20 % can cut monthly API costs by roughly 25 % without measurable accuracy loss.' },
            { type: 'heading', content: 'Semantic Caching' },
            { type: 'paragraph', content: 'Instructors discuss **Semantic Caching**—storing and reusing model responses for semantically similar queries—to drastically reduce compute. We also explore memory compression, quantization, and scheduled batching. They simulate a multi-model orchestration layer that routes short queries to Gemini Flash and complex reasoning to Gemini Pro, comparing energy and latency trade-offs.' },
            { type: 'heading', content: 'Interactive App: “Token Tactician”' },
            { type: 'paragraph', content: 'A sandbox where sliders control context length, model tier, and temperature; a live chart shows dollars, latency, and carbon footprint.' },
            { type: 'interactive', component: 'TokenEconomySimulator', interactiveId: 'token-tactician-1' },
             { type: 'interactive', component: 'EnergyCarbonTracker', interactiveId: 'energy-tracker-1' },
            { type: 'quote', content: 'Game Element: reach the “Green Ops” badge by achieving ≥ 90 % accuracy with ≤ 70 % of baseline cost and energy.'}
          ],
        },
        {
          id: '2-4',
          title: '2.4 Ethics & Bias Audit Lab',
          content: [
            { type: 'heading', content: 'Operationalizing Ethics: Fairness Metrics' },
            { type: 'paragraph', content: 'This lab transforms ethics from a philosophy into a metric. Learners run bias stress tests on their AI agents using counterfactual prompts (e.g., identical résumés differing only by gender). They record output differentials and compute fairness ratios using metrics like **Demographic Parity** and **Equalized Odds**.' },
            { type: 'heading', content: 'Transparency Frameworks' },
            { type: 'paragraph', content: 'They explore frameworks such as NIST’s Explainability Guidelines and Google’s **Model Cards for Transparency**. Each participant drafts an Ethics Addendum summarizing potential harms, mitigation actions, and user disclosure language. Practical tip: rephrase prompts neutrally and audit vector datasets for overrepresented terms.' },
            { type: 'heading', content: 'Simulator: “Bias Mirror”' },
            { type: 'paragraph', content: 'A split-screen tool that runs paired prompts side-by-side, color-coding lexical bias and sentiment variance across different demographics or languages.' },
            { type: 'interactive', component: 'EthicalBiasMirror', interactiveId: 'bias-mirror-1' },
             { type: 'interactive', component: 'EthicalStyleInspector', interactiveId: 'style-inspector-1' },
             { type: 'interactive', component: 'AiAlignmentTuner', interactiveId: 'alignment-tuner-1' },
            { type: 'quote', content: 'Mini-Challenge: reach a fairness index ≥ 0.9 by editing prompts or re-weighting training data.'}
          ],
        },
        {
          id: '2-5',
          title: '2.5 Legal & Intellectual Property Workshop',
          content: [
            { type: 'heading', content: 'Navigating the Legal Minefield: Copyright & IP' },
            { type: 'paragraph', content: 'Modern AI work touches law as much as code. This workshop introduces copyright ownership, data licensing, and liability. Students study landmark cases like Getty Images v Stability AI and Thaler v Perlmutter, learning why AI-generated works currently lack authorship under U.S. law, and how this impacts commercial strategy.' },
            { type: 'heading', content: 'Data Traceability & Indemnification' },
            { type: 'paragraph', content: 'Participants conduct a “data traceability audit”: for each training asset, they confirm source license and fair-use rationale. We discuss **Indemnification Clauses** in enterprise AI contracts and the emerging concept of "Machine Unlearning" for complying with the Right to be Forgotten. They practice drafting an open-source disclosure file (SPDX format) and a commercial terms sheet.' },
            { type: 'heading', content: 'Interactive App: “License Lens”' },
            { type: 'paragraph', content: 'A clickable flowchart that guides learners through fair-use, open-source, and commercial pathways; each decision node shows risk heatmaps.' },
            { type: 'interactive', component: 'LivePatentRadar', interactiveId: 'license-lens-1' },
             { type: 'interactive', component: 'SmartContractEventListener', interactiveId: 'smart-contract-1' },
            { type: 'quote', content: 'Gamified Element: earn “Compliance Counselor” when all dataset sources reach green (fully documented).'}
          ],
        },
        {
          id: '2-6',
          title: '2.6 AI Policy & Regulatory Frameworks',
          content: [
            { type: 'heading', content: 'Global Policy Fluency: EU AI Act & NIST' },
            { type: 'paragraph', content: 'Policy fluency is the hallmark of mature operators. Learners compare major governance frameworks—the **EU AI Act**, OECD AI Principles, and U.S. NIST RMF. They learn to classify systems into risk tiers (Unacceptable, High, Limited, Minimal) and understand the compliance burdens for each.' },
            { type: 'heading', content: 'Translating Policy to Code' },
            { type: 'paragraph', content: 'Students then map each policy requirement to their Governance Pack—transparency sections, risk register items, and audit logs. They practice writing plain-language policy summaries for non-lawyers, a skill in high demand as AI compliance officer roles grow 40 % year over year. We also touch on upcoming standards for watermarking and provenance.' },
            { type: 'heading', content: 'Interactive Map: “Global Policy Atlas”' },
            { type: 'paragraph', content: 'Hover over any country to see live AI-policy summaries and risk-tier classifications.' },
            { type: 'interactive', component: 'AiEthicsTracker', interactiveId: 'global-policy-atlas-1' },
            { type: 'interactive', component: 'PrivacyLensDashboard', interactiveId: 'privacy-lens-1' },
            { type: 'quote', content: 'Mini-App: “Governance Mapper” lets users drag-and-drop policy icons (Transparency, Accountability, Human Oversight) onto their own project schematic; missing mappings flash amber until resolved.'}
          ],
        },
        {
          id: '2-7',
          title: '2.7 Governance Pack Assembly',
          content: [
            { type: 'heading', content: 'The Governance Artifact: System Cards' },
            { type: 'paragraph', content: 'Now students consolidate their six core governance documents: Acceptable Use Policy, Data Retention Plan, Model Choice Rationale, Risk Register, Human Oversight Plan, and Deployment Plan with Red-Team Log. They validate each against enterprise checklists derived from **ISO 42001 (AI Management Systems)**.' },
            { type: 'heading', content: 'Sign-off Culture' },
            { type: 'paragraph', content: 'We introduce the concept of **System Cards**, which go beyond model cards to describe the entire sociotechnical system, including intended use cases and known limitations. Instructors stress version control and sign-off culture: a policy unsigned is a policy unenforced. Learners use Google Docs or Notion for collaborative review and insert metadata for author and revision date.' },
            { type: 'heading', content: 'Interactive Workspace: “Governance Forge”' },
            { type: 'paragraph', content: 'A structured template editor where learners fill policy fields, sign electronically, and generate an auto-scored compliance meter (0–100 %).' },
            { type: 'interactive', component: 'PitchBuilder', interactiveId: 'governance-forge-1' },
             { type: 'interactive', component: 'BusinessModelCanvas', interactiveId: 'business-model-1' },
            { type: 'quote', content: 'Mini-Game: time-boxed “Policy Sprint” challenge—complete all required fields within 30 minutes while maintaining ≥ 90 % clarity; real-time hints reference ISO 42001 clauses.'}
          ],
        },
        {
          id: '2-8',
          title: '2.8 Crisis Simulation & Compliance Drill',
          content: [
            { type: 'heading', content: 'Leadership Under Fire: Game Day' },
            { type: 'paragraph', content: 'AI leadership is proven in crisis. Teams simulate a multi-vector event: a data leak, model malfunction ("Model Collapse"), and viral press rumor happening simultaneously. They have 90 minutes to contain the incident, communicate externally, and restore service. Role-play assigns incident commander, legal officer, and spokesperson.' },
            { type: 'heading', content: 'Forensics & Communications' },
            { type: 'paragraph', content: 'The exercise mirrors tech industry “game days.” Data from Google SRE handbooks shows that organizations running quarterly drills recover 30 % faster than those that don’t. Learners use prebuilt templates for "holding statements" and regulator notifications. They practice basic **AI Forensics**—tracing the specific prompt or data point that caused the failure.' },
            { type: 'heading', content: 'Simulator: “Crisis Command Center”' },
            { type: 'paragraph', content: 'A live role-play dashboard that throws multi-threaded alerts (data leak, downtime, media inquiry). Learners assign roles, draft statements, and deploy rollback actions while the system measures response time and sentiment.' },
            { type: 'interactive', component: 'EthicalDilemmaSimulator', interactiveId: 'crisis-command-center-1' },
            { type: 'quote', content: 'Fun Twist: unexpected “curve-ball” prompts (e.g., regulator call) keep adrenaline high; best teams earn the “Calm Under Fire” badge.'}
          ],
        },
        {
          id: '2-9',
          title: '2.9 Future-of-Work & Human Role Seminar',
          content: [
            { type: 'heading', content: 'The Centaur Model: Human + AI' },
            { type: 'paragraph', content: 'Here the curriculum broadens to societal and personal impact. Learners analyze World Economic Forum data showing AI will augment 300 million jobs globally rather than replace them if reskilling outpaces automation. We discuss the **Centaur Model** of work: humans integrated with AI agents achieving performance superior to either alone.' },
            { type: 'heading', content: 'The AI Constitution' },
            { type: 'paragraph', content: 'Discussion explores emerging roles—AI Systems Architect, Prompt Auditor, Agent Ethicist. Participants design a one-page "AI Constitution" for their agent defining rights (e.g., data integrity), duties (user consent), and oversight mechanisms. They also reflect on personal digital well-being—managing attention and trust in a hyper-automated workplace.' },
            { type: 'heading', content: 'Interactive App: “Job Shift Visualizer”' },
            { type: 'paragraph', content: 'Users adjust automation level sliders across industries; the chart predicts job-creation vs. displacement using OECD 2025 data.' },
            { type: 'interactive', component: 'JobImpactSimulator', interactiveId: 'job-shift-visualizer-1' },
             { type: 'interactive', component: 'FutureScenarioPoll', interactiveId: 'future-poll-1' },
            { type: 'interactive', component: 'InteractiveDebates', interactiveId: 'debates-1' },
             { type: 'interactive', component: 'SdgMatcher', interactiveId: 'sdg-matcher-1' },
            { type: 'quote', content: 'Creative Exercise: draft and publish your agent’s AI Constitution in a collaborative board—others can endorse clauses, showing democratic governance in action.'},
            { type: 'heading', content: 'Interactive: “Orbital Habitat Designer” — Applied Systems Thinking in Space' },
            { type: 'paragraph', content: 'Learners instruct Nano-Banana to produce a fully realized orbital colony or moon-base layout, complete with life-support systems, habitat modules, and energy distribution diagrams. The model responds with an image and an accompanying system summary, with options to revise the design based on new mission parameters.' },
            { type: 'interactive', component: 'OrbitalHabitatDesigner', interactiveId: 'orbital-habitat-designer-1' }
          ],
        },
        {
          id: '2-10',
          title: '2.10 Capstone Integration & Credentialing',
          content: [
            { type: 'heading', content: 'The Professional Portfolio' },
            { type: 'paragraph', content: 'The final lesson ties technology, policy, and presentation into one coherent professional identity. Students assemble their live agent, Runbook, Governance Pack, and dashboard into a single digital portfolio. They prepare a 10-minute executive presentation using the ZEN format—three KPIs, two trends, one anomaly—aimed at a board-level audience.' },
            { type: 'heading', content: 'Verifiable Credentials' },
            { type: 'paragraph', content: 'All artifacts are hashed and recorded on-chain to issue their **ZEN Card Credential**, a verifiable credential (W3C standard) verifying competence in AI operations and governance. Instructors share employment statistics: 91 % of AI literacy graduates from the 2024 pilot secured career advancement within six months. Tips: keep slides visual, Runbook actionable, and governance verifiable.' },
            { type: 'heading', content: 'Interactive: AI Governance Card Generator' },
            { type: 'paragraph', content: 'Creates animated governance NFT certificates that include org name, responsible-AI pledge, timestamp, and blockchain TX ID — rendered in metallic holographic style.' },
            { type: 'interactive', component: 'AiGovernanceCardGenerator', interactiveId: 'governance-card-generator-1' },
            { type: 'interactive', component: 'NeuralEvolutionChronicle', interactiveId: 'chronicle-1' },
            { type: 'quote', content: 'Corporate Use Example: Enterprises export blockchain-verified Responsible-AI compliance badges to embed in ESG or investor reports.'}
          ],
        },
      ],
    },
  ],
};