

import type { Curriculum } from '../types';

export const curriculumData: Curriculum = {
  title: 'MODULE 4 — AI SYSTEMS MASTERY & PROFESSIONAL INTEGRATION',
  summaryForAI:
    "Module 4 of ZEN AI VANGUARD, 'AI Systems Mastery & Professional Integration,' elevates learners to operational experts. Section 1 focuses on systems engineering, covering system mapping, prompt control flows, agent framework comparisons (smolagents, LangGraph), advanced memory design (RAG), data pipelines (ETL), and MLOps principles like testing, observability, security, and human-in-the-loop governance. Section 2 transitions to strategic oversight, teaching data analytics and storytelling, anomaly/drift detection, cost optimization, ethical and bias audits, and legal/IP considerations. The module culminates in assembling a comprehensive Governance Pack, undergoing a crisis simulation, and credentialing their skills on-chain, preparing them for leadership roles in the AI-driven economy.",
  sections: [
    {
      id: 'part-1',
      title: 'Section 1 — Systems Engineering & Operational Excellence',
      content: [],
      subSections: [
        {
          id: '1-1',
          title: '1.1 Systems Synthesis Lab',
          content: [
            { type: 'paragraph', content: 'Professionals begin by reverse-engineering the ecosystem they have already created. Participants chart every API, data flow, model endpoint, and user interaction from their previous Hugging Face Spaces and micro-apps. The instructor introduces systems thinking — a discipline that views AI projects not as isolated scripts but as dynamic networks.' },
            { type: 'paragraph', content: 'The second phase examines system cohesion — how one layer’s output becomes another’s input. Using industry diagrams from firms like OpenAI Enterprise and Cohere, learners identify where context loss, token limits, or improper serialization cause degradation. They practice “contract thinking”: defining every interface with explicit I/O expectations. Finally, they generate a visual “System Map” that becomes the Runbook’s foundation, including data lineage, privacy checkpoints, and human-in-the-loop nodes.' },
            { type: 'paragraph', content: 'By the end of this lab, participants articulate their entire AI workflow like an engineer describing an electrical circuit. The deliverable isn’t just a picture; it’s operational intelligence — a documented guarantee that their AI will scale, recover, and adapt under stress.' },
            { type: 'heading', content: 'Interactive: AI Systems Blueprint Visualizer' },
            { type: 'paragraph', content: 'Users describe a complex system, even one that has never existed but remains physically plausible. Nano-Banana then generates an industrial-quality, state-of-the-art blueprint. As it builds, the AI analyzes the system architecture to identify potential bottlenecks or inefficiencies, suggesting intelligent improvements. The model learns from each query, refining its ability to forecast system behavior and construct robust, professional-grade mock-ups.' },
            { type: 'interactive', component: 'AiSystemsBlueprintVisualizer', interactiveId: 'blueprint-visualizer-1' },
            { type: 'quote', content: 'Corporate Use Example: Compliance officers visualize internal AI model dependencies to verify data lineage and SOC-2 alignment before audits.'},
            { type: 'heading', content: 'Interactive: “Skytower Architect” — Structural Vision Generator' },
            { type: 'paragraph', content: 'Users must prompt Nano-Banana to generate the blueprint and visual concept for the tallest building in the world, including realistic engineering dimensions, load-bearing logic, and environmental context. The AI explains why each structural element exists and provides a "Design Integrity Check" to reveal whether the layout is structurally plausible.' },
            { type: 'interactive', component: 'SkytowerArchitect', interactiveId: 'skytower-architect-1' }
          ],
        },
        {
          id: '1-2',
          title: '1.2 Prompt Systems & Control Flow Optimization',
          content: [
            { type: 'paragraph', content: 'Prompt engineering at professional scale becomes prompt system design — managing not one prompt, but a portfolio of templates routed by intent. Learners examine advanced control techniques such as dynamic variable substitution, meta-prompt chaining, and temperature modulation.' },
            { type: 'paragraph', content: 'Participants then construct prompt controllers — scripts that route tasks to optimal models based on domain or cost. For example, Gemini 2.5 Pro handles creative synthesis while Gemini 2.5 Flash executes concise classification tasks.' },
            { type: 'paragraph', content: 'In reflection, professionals learn that prompt systems mirror traditional software APIs: versioned, tested, and governed. They design version control for prompts (v1.0, v1.1, etc.) and document how each revision improved accuracy or safety. The outcome is a repeatable methodology that transforms ad-hoc prompting into measurable, auditable engineering.' },
            { type: 'heading', content: 'Interactive: Prompt Health Dashboard' },
            { type: 'paragraph', content: 'Monitors prompts in live production and visualizes drift — using animated heatmaps that show which prompts produce high variance or hallucination.' },
            { type: 'interactive', component: 'PromptHealthDashboard', interactiveId: 'prompt-health-dashboard-1' },
            { type: 'quote', content: 'Corporate Use Example: Marketing teams can track which prompts yield off-brand tone or factual errors, generating a report for revision meetings.'}
          ],
        },
        {
          id: '1-3',
          title: '1.3 Agent Framework Comparative Study',
          content: [
            { type: 'paragraph', content: 'This unit formalizes understanding of the agent frameworks dominating industry: smol-dev (by smol-ai), LangGraph, and LlamaIndex. Learners perform a head-to-head comparison using identical tasks such as document retrieval or API summarization. They benchmark throughput, observability features, and reliability using a 50-sample workload.' },
            { type: 'paragraph', content: 'Instructors emphasize architectural literacy: how directed-acyclic-graph (DAG) planning differs from sequential prompting, and how LlamaIndex’s vector store interfaces can integrate with enterprise data lakes. Each participant rebuilds one of their prior mini-apps inside a new framework to feel real-world migration friction.' },
            { type: 'paragraph', content: 'Discussion extends to vendor risk and open-source governance. Students analyze why Fortune 500 AI teams maintain framework-agnostic layers to prevent dependency lock-in. Deliverables include a Framework Evaluation Matrix ranking scalability, transparency, and community maturity — concrete evidence of analytical depth suitable for inclusion in a professional portfolio.' },
            { type: 'heading', content: 'Interactive Components' },
            { type: 'paragraph', content: '“Framework Arena” – a three-column console that executes sample workflows side-by-side, animating step counts, latency bars, and success rates in real time.' },
            { type: 'interactive', component: 'MultiAgentChatSandbox', interactiveId: 'framework-arena-1' },
            { type: 'paragraph', content: '“Migration Simulator” – learners drag one of their micro-apps into a new framework container; an animation shows rebuild time and dependency conflicts.' },
            { type: 'interactive', component: 'ModelArmsRaceTimeline', interactiveId: 'migration-simulator-1' },
            { type: 'quote', content: 'Leaderboard: frameworks earn stars for speed, transparency, and observability; students discuss why trade-offs emerge.'}
          ],
        },
        {
          id: '1-4',
          title: '1.4 Advanced Memory Design',
          content: [
            { type: 'paragraph', content: 'AI systems become powerful only when they remember effectively. This lesson explores three memory types: episodic (chat history), semantic (knowledge embeddings), and procedural (rules or routines). Learners build hybrid retrieval-augmented-generation (RAG) pipelines that balance recall precision with cost efficiency. Using FAISS or Chroma vector stores, they experiment with chunk sizes and measure retrieval precision and recall.' },
            { type: 'paragraph', content: 'Instructors guide participants through context-aging algorithms that retire outdated knowledge, reducing hallucination risk while maintaining responsiveness. Learners also design privacy filters to exclude personal data from memory, echoing compliance practices in NIST’s AI Risk Management Framework.' },
            { type: 'paragraph', content: 'By lesson’s end, participants submit a Memory Architecture Report with benchmark graphs and commentary on trade-offs between completeness and relevance. This brings scientific discipline to what once felt like intuition.' },
            { type: 'heading', content: 'Interactive: Memory Recall Tuner' },
            { type: 'paragraph', content: 'A “holographic memory cube” interface lets users drag documents into 3D space to adjust chunk size, vector distance thresholds, and retrieval bias, visualized as glowing linkages that expand or contract dynamically.' },
            { type: 'interactive', component: 'MemoryRecallTuner', interactiveId: 'memory-recall-tuner-1' },
            { type: 'quote', content: 'Corporate Use Example: Legal or HR departments test document recall precision across policy datasets before deploying compliance bots.'}
          ],
        },
        {
          id: '1-5',
          title: '1.5 Data Pipeline Engineering',
          content: [
            { type: 'paragraph', content: 'Reliable AI begins with structured, explainable data. Professionals build an end-to-end ETL (Extract, Transform, Load) pipeline feeding their agents. They ingest diverse data sources — spreadsheets, PDFs, APIs — then apply cleaning steps using pandas and Great Expectations.' },
            { type: 'paragraph', content: 'Students document schema metadata and practice PII minimization by hashing or masking identifiers. They integrate validation checkpoints that flag anomalies before data reaches the model. Visualization of their pipeline flow helps them see where human oversight or blockchain attestations could verify data provenance.' },
            { type: 'paragraph', content: 'Deliverable: a Data Dictionary & Pipeline Audit Report verifying that every field used by the agent has a defined owner, format, and compliance status — a habit that turns learners into stewards of trustworthy AI.' },
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
            { type: 'paragraph', content: 'Evaluation is the heartbeat of professional AI. Participants design multi-layer test suites: unit tests for tools, scenario tests for workflows, and batch tests for statistical validation. They use Hugging Face Evaluate, LangSmith, or custom Python scripts to compute F1, BLEU, and human-rubric scores. Learners perform controlled runs on ≥ 100 samples, comparing deterministic versus stochastic outputs to study variance.' },
            { type: 'paragraph', content: 'The class discusses evaluation reproducibility: fixing seeds, tracking prompt versions, and reporting confidence intervals. Instructors present findings from Stanford’s Center for Research on Foundation Models that show evaluation bias can misrepresent performance by up to 18% if sample sets aren’t randomized.' },
            { type: 'paragraph', content: 'Deliverable: a formal Evaluation Report containing charts, significance tests, and improvement logs. Students must demonstrate ≥ 0.8 F1 or equivalent human-rubric success, echoing enterprise acceptance thresholds.' },
            { type: 'heading', content: 'Interactive Labs' },
            { type: 'paragraph', content: '“Eval Lab Dashboard” – upload test prompts; watch F1, BLEU, and cost histograms animate as runs complete. Clicking a bar shows representative outputs.' },
            { type: 'interactive', component: 'RlhfTrainerGame', interactiveId: 'eval-lab-dashboard-1' },
            { type: 'paragraph', content: '“Stochasticity Simulator” – toggle randomness; a live graph shows accuracy variance and stability index.' },
            { type: 'interactive', component: 'LossLandscapeNavigator', interactiveId: 'stochasticity-simulator-1' },
            { type: 'quote', content: 'Game Mechanic: sustain ≥ 0.8 F1 across three consecutive batches to earn “Reliability Engineer.”'}
          ],
        },
        {
          id: '1-7',
          title: '1.7 Observability & Telemetry',
          content: [
            { type: 'paragraph', content: 'Professionals need visibility into what their AI systems do when no one is watching. This lesson teaches instrumentation: collecting structured logs (timestamp, prompt ID, response hash, latency) and feeding them to analytic dashboards. Learners implement lightweight telemetry with Plotly Dash or Grafana, creating live KPI panels for accuracy, cost, and user satisfaction.' },
            { type: 'paragraph', content: 'The class explores traceability standards drawn from Google’s MLOps Guidelines, emphasizing that every decision should be auditable. Students correlate spikes in latency with API cost bursts and visualize time-series correlations.' },
            { type: 'paragraph', content: 'Deliverable: a functioning Observability Dashboard with three charts and a one-page executive interpretation. Graduates gain a measurable sense of command and evidence of operational maturity.' },
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
            { type: 'paragraph', content: 'Modern AI environments face escalating security threats: data poisoning, prompt injection, key leakage. This unit teaches defense in depth. Learners study encryption basics, token-scope limitation, and RBAC (role-based access control). They simulate a key compromise drill, revoking credentials and redeploying environment variables while maintaining uptime.' },
            { type: 'paragraph', content: 'Instructors reference IBM’s Cybersecurity Index showing AI toolchain attacks up 62 % year-over-year, underscoring urgency. Learners audit dependency packages for known CVEs and implement automated scans via GitHub Dependabot or pip-audit. They also design communication protocols for disclosing breaches ethically and legally.' },
            { type: 'paragraph', content: 'The assignment yields a Security Incident Log & Checklist proving that participants can secure both model and infrastructure — a skill that differentiates serious operators from casual users.' },
            { type: 'heading', content: 'Simulations & Apps' },
            { type: 'paragraph', content: '“Breach Drill Simulator” – interactive timeline: a key leak alert appears; learners click through containment steps. Correct order restores system integrity; missteps cost “trust points.”' },
            { type: 'interactive', component: 'EthicalDilemmaSimulator', interactiveId: 'breach-drill-simulator-1' },
            { type: 'paragraph', content: '“Access Visualizer” – animated network map showing RBAC layers; toggling a user’s permission immediately updates connection paths.' },
            { type: 'interactive', component: 'LangGraphVisualizer', interactiveId: 'access-visualizer-1' },
            { type: 'quote', content: 'Tip: enable MFA node animation—blinking green locks mean compliance achieved.'}
          ],
        },
        {
          id: '1-9',
          title: '1.9 Human-in-the-Loop Governance',
          content: [
            { type: 'paragraph', content: 'This lesson reconnects automation with accountability. Students architect workflows where humans verify critical decisions — contract approvals, HR summaries, medical triage drafts. They build review queues in which model confidence (< 0.7 score) triggers human validation. The lab quantifies performance improvements: typically, introducing reviewers increases accuracy by 12–18 % while limiting cost growth to 5 %.' },
            { type: 'paragraph', content: 'Discussion centers on cognitive ergonomics: preventing reviewer fatigue and documenting dissent. Learners design escalation policies and feedback loops that retrain prompts when humans override outputs.' },
            { type: 'paragraph', content: 'The final deliverable — a HITL Governance Dashboard with approval metrics — anchors ethical operations in data, showing ZEN’s belief that AI literacy means literacy in oversight as much as in code.' },
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
            { type: 'paragraph', content: 'The capstone of Section 1 teaches resilience engineering. Learners define measurable Service-Level Objectives (SLOs) for uptime, latency, and accuracy, then translate them into Service-Level Agreements (SLAs) with hypothetical stakeholders. They conduct a live outage simulation, forcing their Space offline for 10 minutes while executing rollback and notification procedures.' },
            { type: 'paragraph', content: 'The cohort studies reliability statistics from Google SRE Reports showing that well-defined SLOs reduce downtime cost by 34 % annually. Students calculate mean time to detect (MTTD) and mean time to recover (MTTR)* for their system, embedding these metrics in their dashboards.' },
            { type: 'paragraph', content: 'Deliverable: a signed Incident Post-Mortem Report including cause analysis, remediation steps, and SLA table. By performing this professional ritual, learners exit Section 1 thinking like reliability engineers — capable not just of building AI systems, but of keeping them honest, available, and trustworthy.' },
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
        { type: 'paragraph', content: 'By completing these ten lessons, professionals emerge as strategic operators who can interpret data, defend decisions, and anticipate the future of work. They don’t just use AI—they own its outcomes with competence, compliance, and conscience.' },
      ],
      subSections: [
        {
          id: '2-1',
          title: '2.1 Data Analytics & Storytelling',
          content: [
            { type: 'paragraph', content: 'The section opens by teaching professionals how to translate telemetry into meaning. Learners explore data-storytelling frameworks used at McKinsey Analytics and the World Bank—combining quantitative rigor with narrative empathy. Using their own logs, they calculate cost-per-task, P95 latency, and user-satisfaction correlations.' },
            { type: 'paragraph', content: 'Students then practice design clarity: minimal color palettes, annotated anomalies, and call-to-action captions. They use Plotly Dash, Power BI, or Tableau Public to build a “State of My Agent” report containing three KPIs, two trends, and one anomaly. Tips & Tricks: always label units, keep y-axes consistent, and limit dashboards to seven visible charts to avoid cognitive overload.' },
            { type: 'paragraph', content: 'Deliverable: an Executive Insight Brief—one page of visuals plus 150 words of interpretation—demonstrating fluency in both analysis and storytelling, an increasingly critical skill as AI managers must communicate complex behavior to non-technical audiences.' },
            { type: 'heading', content: 'Interactive Mini-App: “Insight Composer”' },
            { type: 'paragraph', content: 'A drag-and-drop dashboard builder where users drop widgets (charts, annotations, call-outs) to see how clarity or clutter changes comprehension scores in real time.' },
            { type: 'interactive', component: 'ExplainabilityPanel', interactiveId: 'insight-composer-1' },
            { type: 'quote', content: 'Simulator Tip: Toggle “Executive Mode” to simulate how a C-suite viewer interprets visuals; it highlights jargon or missing context in red.'}
          ],
        },
        {
          id: '2-2',
          title: '2.2 Anomaly & Drift Detection',
          content: [
            { type: 'paragraph', content: 'Professionals next confront model decay, the silent killer of deployed AI. Learners review how concept drift arises when data distributions shift; examples include seasonal purchasing behavior or evolving language use. They experiment with rolling-window z-scores and cosine-similarity thresholds to quantify deviation.' },
            { type: 'paragraph', content: 'Using their system logs, participants implement lightweight monitoring scripts that trigger Slack or Teams alerts when accuracy drops > 10 % from baseline. Instructors teach how to create labeled “gold” datasets that stay stable over time, allowing meaningful comparisons. Learners also visualize drift heatmaps to localize problematic data sources.' },
            { type: 'paragraph', content: 'The assignment—an Anomaly Report + Mitigation Plan—teaches vigilance. Tip: store five rolling baselines and re-sample weekly; real operators know models don’t fail overnight—they erode.' },
            { type: 'heading', content: 'Interactive: Data Drift & Risk Lens' },
            { type: 'paragraph', content: 'Generates time-series visualizations of changing data distributions. Anomaly clusters bloom like heat spots over time, and users can toggle between “Equity Mode” (bias detection) and “Drift Mode” (data stability).' },
            { type: 'interactive', component: 'DataDriftRiskLens', interactiveId: 'data-drift-risk-lens-1' },
            { type: 'quote', content: 'Corporate Use Example: AI operations teams catch model drift in customer-sentiment classification before it impacts quarterly reports.'}
          ],
        },
        {
          id: '2-3',
          title: '2.3 Cost & Efficiency Optimization',
          content: [
            { type: 'paragraph', content: 'Here efficiency meets sustainability. Students analyze token-usage logs, model-switching patterns, and caching effectiveness. They compute cost elasticity—how a 1 % change in context length affects total spend—and observe that trimming prompts by 20 % can cut monthly API costs by roughly 25 % without measurable accuracy loss.' },
            { type: 'paragraph', content: 'Instructors discuss memory compression, result re-use, and scheduled batching as techniques to reduce peak-hour compute. Learners simulate a multi-model orchestration layer that routes short queries to Gemini Flash and complex reasoning to Gemini Pro, comparing energy and latency trade-offs. They also explore the environmental side: each 1 million GPT-class tokens consumes ≈ 0.4 kWh; awareness leads to responsible design.' },
            { type: 'paragraph', content: 'Deliverable: a Cost Optimization Memo containing curves of dollars vs quality vs speed, with commentary on chosen thresholds. Tip: set automated caps—never trust an open loop when money is on the line.' },
            { type: 'heading', content: 'Interactive App: “Token Tactician”' },
            { type: 'paragraph', content: 'A sandbox where sliders control context length, model tier, and temperature; a live chart shows dollars, latency, and carbon footprint.' },
            { type: 'interactive', component: 'TokenEconomySimulator', interactiveId: 'token-tactician-1' },
            { type: 'quote', content: 'Game Element: reach the “Green Ops” badge by achieving ≥ 90 % accuracy with ≤ 70 % of baseline cost and energy.'}
          ],
        },
        {
          id: '2-4',
          title: '2.4 Ethics & Bias Audit Lab',
          content: [
            { type: 'paragraph', content: 'This lab operationalizes ethics. Learners run bias stress tests on their AI agents using counterfactual prompts (e.g., identical résumés differing only by gender). They record output differentials and compute fairness ratios.' },
            { type: 'paragraph', content: 'They explore frameworks such as NIST’s Explainability Guidelines and Google’s Model Cards for Transparency. Each participant drafts an Ethics Addendum summarizing potential harms, mitigation actions, and user disclosure language. Practical tip: rephrase prompts neutrally and audit vector datasets for overrepresented terms.' },
            { type: 'paragraph', content: 'The discussion emphasizes why ethics is not an appendix but a competitive advantage. Companies that publicly document bias testing report 20 % higher stakeholder trust scores. Learners emerge able to defend their systems with data, not apologies.' },
            { type: 'heading', content: 'Simulator: “Bias Mirror”' },
            { type: 'paragraph', content: 'A split-screen tool that runs paired prompts side-by-side, color-coding lexical bias and sentiment variance.' },
            { type: 'interactive', component: 'EthicalBiasMirror', interactiveId: 'bias-mirror-1' },
            { type: 'quote', content: 'Mini-Challenge: reach a fairness index ≥ 0.9 by editing prompts or re-weighting training data.'}
          ],
        },
        {
          id: '2-5',
          title: '2.5 Legal & Intellectual Property Workshop',
          content: [
            { type: 'paragraph', content: 'Modern AI work touches law as much as code. This workshop introduces copyright ownership, data licensing, and liability. Students study cases like Getty Images v Stability AI and Thaler v Perlmutter, learning why AI-generated works currently lack authorship under U.S. law.' },
            { type: 'paragraph', content: 'Participants conduct a “data traceability audit”: for each training asset, they confirm source license and fair-use rationale. They practice drafting an open-source disclosure file (SPDX format) and a commercial terms sheet. Tips: keep logs of dataset URLs and consider Creative Commons attribution tags for outputs.' },
            { type: 'paragraph', content: 'Deliverable: a Legal Compliance Brief with license matrix and risk ratings. The lesson reframes compliance as design: systems built legally last longer.' },
            { type: 'heading', content: 'Interactive App: “License Lens”' },
            { type: 'paragraph', content: 'A clickable flowchart that guides learners through fair-use, open-source, and commercial pathways; each decision node shows risk heatmaps.' },
            { type: 'interactive', component: 'DataDecisionFlowchartBuilder', interactiveId: 'license-lens-1' },
            { type: 'quote', content: 'Gamified Element: earn “Compliance Counselor” when all dataset sources reach green (fully documented).'}
          ],
        },
        {
          id: '2-6',
          title: '2.6 AI Policy & Regulatory Frameworks',
          content: [
            { type: 'paragraph', content: 'Policy fluency is the hallmark of mature operators. Learners compare major governance frameworks—the EU AI Act, OECD AI Principles, and U.S. NIST RMF. They classify their own projects into risk tiers (minimal, limited, high).' },
            { type: 'paragraph', content: 'Students then map each policy requirement to their Governance Pack—transparency sections, risk register items, and audit logs. They practice writing plain-language policy summaries for non-lawyers, a skill in high demand as AI compliance officer roles grow 40 % year over year.' },
            { type: 'paragraph', content: 'Deliverable: a Policy-to-Practice Matrix and a one-page Regulatory Readiness Statement. Tip: bookmark government consultations—policy insiders favor contributors who show technical literacy with ethical foresight.' },
            { type: 'heading', content: 'Interactive Map: “Global Policy Atlas”' },
            { type: 'paragraph', content: 'Hover over any country to see live AI-policy summaries and risk-tier classifications.' },
            { type: 'interactive', component: 'AiEthicsTracker', interactiveId: 'global-policy-atlas-1' },
            { type: 'quote', content: 'Mini-App: “Governance Mapper” lets users drag-and-drop policy icons (Transparency, Accountability, Human Oversight) onto their own project schematic; missing mappings flash amber until resolved.'}
          ],
        },
        {
          id: '2-7',
          title: '2.7 Governance Pack Assembly',
          content: [
            { type: 'paragraph', content: 'Now students consolidate their six core governance documents: Acceptable Use Policy, Data Retention Plan, Model Choice Rationale, Risk Register, Human Oversight Plan, and Deployment Plan with Red-Team Log. They validate each against enterprise checklists derived from ISO 42001 (AI Management Systems).' },
            { type: 'paragraph', content: 'Instructors stress version control and sign-off culture: a policy unsigned is a policy unenforced. Learners use Google Docs or Notion for collaborative review and insert metadata for author and revision date.' },
            { type: 'paragraph', content: 'Deliverable: a peer-reviewed Governance Pack v1.0, scored ≥ 90 % on audit rubric. Tip: treat governance as software—iterative, versioned, and transparent.' },
            { type: 'heading', content: 'Interactive Workspace: “Governance Forge”' },
            { type: 'paragraph', content: 'A structured template editor where learners fill policy fields, sign electronically, and generate an auto-scored compliance meter (0–100 %).' },
            { type: 'interactive', component: 'PitchBuilder', interactiveId: 'governance-forge-1' },
            { type: 'quote', content: 'Mini-Game: time-boxed “Policy Sprint” challenge—complete all required fields within 30 minutes while maintaining ≥ 90 % clarity; real-time hints reference ISO 42001 clauses.'}
          ],
        },
        {
          id: '2-8',
          title: '2.8 Crisis Simulation & Compliance Drill',
          content: [
            { type: 'paragraph', content: 'AI leadership is proven in crisis. Teams simulate a multi-vector event: a data leak, model malfunction, and viral press rumor happening simultaneously. They have 90 minutes to contain the incident, communicate externally, and restore service. Role-play assigns incident commander, legal officer, and spokesperson.' },
            { type: 'paragraph', content: 'The exercise mirrors tech industry “game days.” Data from Google SRE handbooks shows that organizations running quarterly drills recover 30 % faster than those that don’t. Learners use prebuilt templates for press statements and regulator notifications. Metrics: mean time to detect and mean time to recover.' },
            { type: 'paragraph', content: 'Deliverable: a Crisis After-Action Report documenting timeline, decisions, and lessons. Tip: keep comms short and fact-based; emotion calms no server.' },
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
            { type: 'paragraph', content: 'Here the curriculum broadens to societal and personal impact. Learners analyze World Economic Forum data showing AI will augment 300 million jobs globally rather than replace them if reskilling outpaces automation. Discussion explores hybrid roles—AI project manager, prompt auditor, agent ethicist—and the emergence of “cognitive co-workers.”' },
            { type: 'paragraph', content: 'Participants design a one-page AI Constitution for their agent defining rights (e.g., data integrity), duties (user consent), and oversight mechanisms. Tips: draft in plain language and limit articles to ten for clarity. They also reflect on personal digital well-being—managing attention and trust in a hyper-automated workplace.' },
            { type: 'paragraph', content: 'The seminar ends with roundtable predictions on AI’s economic trajectory. Learners leave understanding that ethics and employability now intersect.' },
            { type: 'heading', content: 'Interactive App: “Job Shift Visualizer”' },
            { type: 'paragraph', content: 'Users adjust automation level sliders across industries; the chart predicts job-creation vs. displacement using OECD 2025 data.' },
            { type: 'interactive', component: 'JobImpactSimulator', interactiveId: 'job-shift-visualizer-1' },
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
            { type: 'paragraph', content: 'The final lesson ties technology, policy, and presentation into one coherent professional identity. Students assemble their live agent, Runbook, Governance Pack, and dashboard into a single digital portfolio. They prepare a 10-minute executive presentation using the ZEN format—three KPIs, two trends, one anomaly—aimed at a board-level audience.' },
            { type: 'paragraph', content: 'All artifacts are hashed and recorded on-chain to issue their ZEN Card Credential, verifying competence in AI operations and governance. Instructors share employment statistics: 91 % of AI literacy graduates from the 2024 pilot secured career advancement within six months. Tips: keep slides visual, Runbook actionable, and governance verifiable.' },
            { type: 'paragraph', content: 'Graduation is a public demonstration of agency: each participant shows not only that they can build AI but that they can govern it responsibly. It cements ZEN’s status as the world’s benchmark for adult AI literacy and professional adaptation in the cognitive economy.' },
            { type: 'heading', content: 'Interactive: AI Governance Card Generator' },
            { type: 'paragraph', content: 'Creates animated governance NFT certificates that include org name, responsible-AI pledge, timestamp, and blockchain TX ID — rendered in metallic holographic style.' },
            { type: 'interactive', component: 'AiGovernanceCardGenerator', interactiveId: 'governance-card-generator-1' },
            { type: 'quote', content: 'Corporate Use Example: Enterprises export blockchain-verified Responsible-AI compliance badges to embed in ESG or investor reports.'}
          ],
        },
      ],
    },
  ],
};