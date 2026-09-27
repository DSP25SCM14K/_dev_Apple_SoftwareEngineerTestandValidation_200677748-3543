const jobs = [
 {company:'Sprouts AI',title:'Software Engineer (ML Test Automation & Validation)',place:'Chicago, IL',dates:'Mar 2025 — Present',label:'CURRENT',bullets:[
  'Cut regression cycle time 60% while running 5,000+ automated stress, stability and performance test iterations weekly by building an ML-powered test automation framework in Python and Pytest with parallel execution on containerized infrastructure.',
  'Reduced escaped defects 45% by training predictive models (gradient boosting, anomaly detection) on validation and test telemetry to detect issues early and flag high-risk builds before release.',
  'Accelerated root cause analysis 50% by developing ML-assisted failure analysis that clusters failing tests and auto-drafts problem reports with logs, reproduction steps and suspected root causes.',
  'Tripled test authoring throughput by creating Claude Code workflows, custom MCP servers and skills that generate test cases, query failure data and file problem reports from a single prompt.',
  'Improved model accuracy 35% and release confidence for 1K+ daily users by building evaluation harnesses and Superset/Tableau dashboards on statistical data analysis of pass rates, latency and stability trends.'
 ]},
 {company:'Resilience Inc',title:'Software Engineer (Test Automation & Device Validation)',place:'Chicago, IL',dates:'Aug 2023 — Mar 2025',bullets:[
  'Raised crash-free sessions to 99.8% across 10K+ users by designing automated functional, stress and stability tests for the Selena mobile app on a fleet of 30+ iOS and Android devices using Python and Appium.',
  'Caught 120+ integration defects pre-release by automating real-time audio playback/recording and Bluetooth headset (A2DP/HFP) connect, disconnect and route-switching stress loops across 15+ headphone models.',
  'Cut page load and API latency 30% by building performance testing suites and profiling harnesses isolating backend and on-device bottlenecks.',
  'Detected regressions 2 days earlier on average by applying machine learning anomaly detection and statistical data analysis to test telemetry, visualized in Tableau dashboards for engineering and QA leads.',
  'Reduced release defects 40% by enforcing version control, gated CI/CD (GitHub Actions, Jenkins) test pipelines and structured debugging workflows, collaborating with cross-functional engineering, QA and product teams.'
 ]},
 {company:'Tata Steel',title:'Software Engineer (Embedded Systems Test & Validation)',place:'',dates:'Apr 2018 — Aug 2023',bullets:[
  'Improved hardware/firmware defect detection 50% by building a Python system automation framework executing 10,000+ weekly test iterations on embedded controllers and IoT sensor nodes over UART, Modbus and BLE.',
  'Cut unplanned equipment downtime 25% by developing predictive models (random forest, LSTM) on vibration and acoustic sensor data that predict and prevent critical system failures before they impact production.',
  'Raised surface defect detection accuracy to 92% by building computer vision models (OpenCV, CNN) and validation tools for inline camera inspection.',
  'Shortened firmware release validation 40% by designing hardware/firmware/software integration test plans and HIL regression suites with firmware, hardware and QA/QE teams.',
  'Reduced mean time to root cause 35% by writing and triaging problem reports backed by statistical analysis of failure logs, while adapting to rapid project schedules and shifting priorities.'
 ]}
];

const projects = [
 {name:'Character Device Driver',subtitle:'Embedded firmware stress-test harness',description:'Stress and stability harness covering 1M+ read/write/ioctl iterations, uncovering 12 race conditions and memory leaks.',tags:['C','Linux kernel','Python','Pytest'],group:'systems',repo:'https://github.com/devthedevil/Character-Device-Driver',glyph:'▤'},
 {name:'Test Triage MCP',subtitle:'AI-assisted failure analysis',description:'An MCP server and Claude Code skills that cluster failures with ML and draft problem reports with likely root causes.',tags:['Python','MCP','Claude Code','scikit-learn'],group:'quality',repo:'https://github.com/devthedevil/MCP',glyph:'⌘'},
 {name:'EXPOS',subtitle:'Experimental operating system',description:'A low-level systems project exploring kernel fundamentals and execution behavior.',tags:['OS','C','Kernel'],group:'systems',repo:'https://github.com/devthedevil/EXPOS',glyph:'◩'},
 {name:'CME MDP 3.0 Multicast Feed Handler',subtitle:'High-throughput packet systems',description:'A C++17 multicast receiver with sequence-gap detection, packet recovery and lock-free SPSC queues.',tags:['C++17','UDP multicast','Linux'],group:'systems',repo:'https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-',glyph:'⌁'},
 {name:'16-Bit RISC Processor',subtitle:'Hardware architecture',description:'A 16-bit processor design built through a hardware lab project.',tags:['RISC','CPU','Digital design'],group:'systems',repo:'https://github.com/devthedevil/Hardware-lab',glyph:'▦'},
 {name:'MetalCompositor',subtitle:'GPU-accelerated video rendering',description:'Renders multiple camera streams at 60 fps under 8 ms using Metal shaders, zero-copy textures and triple buffering.',tags:['Swift','Metal','CoreVideo'],group:'systems',repo:'https://github.com/devthedevil/metal-compositor',glyph:'◉'},
 {name:'Oxide-HV',subtitle:'Rust hypervisor',description:'A Rust systems project exploring virtualization and isolation.',tags:['Rust','Hypervisor','Isolation'],group:'systems',repo:'https://github.com/devthedevil/oxide-hv',demo:'https://oxide-hv.vercel.app/',glyph:'⬡'},
 {name:'Keystone',subtitle:'Transactional control-plane metadata store',description:'A Go store with mTLS auth, RBAC-scoped gRPC APIs, signed audit logs and encryption at rest.',tags:['Go','gRPC','mTLS','RBAC'],group:'systems',repo:'https://github.com/devthedevil/keystone',glyph:'⌘'},
 {name:'Strata',subtitle:'C++ storage server',description:'A storage server focused on data paths and systems-level engineering.',tags:['C++','Storage','Systems'],group:'systems',repo:'https://github.com/devthedevil/strata',glyph:'▥'},
 {name:'Real-time Stock Market Analysis',subtitle:'Streaming data pipeline',description:'A data pipeline for collecting and analyzing market events in real time.',tags:['Streaming','Data','Cloud'],group:'platform',repo:'https://github.com/devthedevil/Realtime-Stock-Market-Analysis',glyph:'⌁'},
 {name:'TradeSentinel',subtitle:'Market intelligence dashboard',description:'A market-analysis experience bringing live signals into a focused workflow.',tags:['Analytics','Signals','Web'],group:'platform',repo:'https://github.com/devthedevil/tradesentinel',demo:'https://tradesentinel.vercel.app/',glyph:'◎'},
 {name:'AskMyStore',subtitle:'LangGraph store assistant',description:'A conversational shopping assistant combining retrieval and tool orchestration.',tags:['LangGraph','RAG','Agents'],group:'quality',repo:'https://github.com/devthedevil/AskMyStore',demo:'https://ask-my-store.vercel.app/',glyph:'✳'},
 {name:'LangChain Chat with Search',subtitle:'Grounded conversational search',description:'A search-grounded chat workflow powered by LangChain.',tags:['LangChain','Search','LLM'],group:'quality',repo:'https://github.com/devthedevil/LangChain-Chat-with-Search',glyph:'⌕'},
 {name:'AgentFlow',subtitle:'Agent orchestration',description:'An agent workflow using the OpenAI Agent SDK and tool orchestration.',tags:['Agents','Orchestration','LLM'],group:'quality',repo:'https://github.com/devthedevil/openAI-Agent-SDK',glyph:'⌘'},
 {name:'AgentEval',subtitle:'Swift agent evaluations',description:'Evaluation tooling for assessing agent output quality and behavior.',tags:['Swift','Evaluation','Agents'],group:'quality',repo:'https://github.com/devthedevil/swift-agent-evals',glyph:'◌'},
 {name:'AeroInvoice',subtitle:'Invoice ingestion & quote extraction',description:'An AI-powered API for document ingestion and structured quote extraction.',tags:['AI','API','Documents'],group:'quality',repo:'https://github.com/devthedevil/aero-invoice-intelligence',glyph:'▤'},
 {name:'Voting App',subtitle:'Kubernetes application',description:'A voting application deployed with Kubernetes orchestration.',tags:['Kubernetes','Containers','Cloud'],group:'platform',repo:'https://github.com/devthedevil/Kubernetes-K8',glyph:'▱'},
 {name:'Strangers',subtitle:'Social discovery experience',description:'A React web app for connecting people through a focused discovery flow.',tags:['React','Community','Web'],group:'platform',repo:'https://github.com/devthedevil/Strangers',demo:'https://strangers-react.vercel.app/',glyph:'◉'},
 {name:'HireLoop',subtitle:'Hiring workflow platform',description:'A product workflow that aims to make candidate and recruiter interactions clearer.',tags:['Product','Workflow','Web'],group:'platform',repo:'https://github.com/devthedevil/hireloop',glyph:'⟳'},
 {name:'adserve',subtitle:'Advertising delivery system',description:'A backend project focused on ad-serving and delivery workflows.',tags:['Backend','Serving','APIs'],group:'platform',repo:'https://github.com/devthedevil/adserve',glyph:'▣'},
 {name:'Pitch Perfect',subtitle:'iOS audio experience',description:'A Swift iOS project for voice recording and audio effects.',tags:['iOS','Swift','Audio'],group:'platform',repo:'https://github.com/devthedevil/Pitch_Perfect',glyph:'♫'},
 {name:'Tic Tac Toe',subtitle:'Android game',description:'An Android implementation of the classic game with a mobile interaction model.',tags:['Android','Kotlin','Mobile'],group:'platform',repo:'https://github.com/devthedevil/TicTacToe-Game',glyph:'⊞'}
];

const experienceRoot=document.querySelector('#experience-list');
experienceRoot.innerHTML=jobs.map((job,i)=>`<article class="job ${i===0?'expanded':''}"><button class="job-head" aria-expanded="${i===0}"><span class="job-no"><i></i>0${i+1}</span><span class="job-title"><b>${job.company} ${job.label?`<small>${job.label}</small>`:''}</b><em>${job.title}${job.place?` · ${job.place}`:''}</em></span><span class="job-dates">${job.dates}</span><span class="job-plus">+</span></button><div class="job-body"><ul>${job.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div></article>`).join('');

const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.12});
const grid=document.querySelector('#project-grid');
function renderProjects(filter='all'){
 const list=projects.filter(p=>filter==='all'||p.group===filter);
 grid.innerHTML=list.map((p,i)=>`<article class="project-card" style="--order:${i}"><div class="project-top"><span class="project-glyph">${p.glyph}</span><span class="project-group">${p.group.toUpperCase()}</span><span class="project-arrow">↗</span></div><h3>${p.name}</h3><small>${p.subtitle}</small><p>${p.description}</p><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-actions"><a href="${p.repo}" target="_blank" rel="noreferrer">SourceCode <b>↗</b></a>${p.demo?`<a href="${p.demo}" target="_blank" rel="noreferrer">Technical Demo <b>↗</b></a>`:''}</div></article>`).join('');
 document.querySelector('#project-count').textContent=list.length.toString().padStart(2,'0');
 grid.querySelectorAll('.project-card').forEach(el=>reveal.observe(el));
}
renderProjects();
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));button.classList.add('active');renderProjects(button.dataset.filter)}));
document.querySelectorAll('.job-head').forEach(button=>button.addEventListener('click',()=>{const job=button.closest('.job');job.classList.toggle('expanded');button.setAttribute('aria-expanded',String(job.classList.contains('expanded')))}));
const dynamicLines=['The corner case hiding in the noise','A failure reproduced before release','A flaky signal turned into a clear report','Confidence built from thousands of runs'];let line=0;
setInterval(()=>{const el=document.querySelector('#rotating');el.classList.add('fade');setTimeout(()=>{line=(line+1)%dynamicLines.length;el.textContent=dynamicLines[line];el.classList.remove('fade')},250)},3300);
const states=['BUILD STABLE','5,184 ITERATIONS','NO BLOCKING REGRESSIONS','TELEMETRY INGESTED'];let state=0;setInterval(()=>{const el=document.querySelector('#build-state');el.classList.add('fade');setTimeout(()=>{state=(state+1)%states.length;el.textContent=states[state];el.classList.remove('fade')},220)},2900);
document.querySelectorAll('.method-card,.quality-band,.job,.paper-card').forEach(el=>reveal.observe(el));
document.querySelector('.hero').addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--my',`${e.clientY-r.top}px`)});
