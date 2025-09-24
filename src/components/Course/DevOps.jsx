import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function DevOps() {
  const modules = [
    {
      title: "Module 1: Introduction to DevOps & SDLC",
      objective:
        "Understand the fundamentals of DevOps, its principles (CALMS model), SDLC alignment, and real-world use cases.",
      topics: [
        "What is DevOps?",
        "Benefits & Business Value",
        "DevOps vs Agile vs Traditional SDLC",
        "Key Principles: Culture, Automation, Lean, Measurement, Sharing",
        "DevOps Lifecycle Phases (Plan → Monitor)",
        "Overview of Waterfall, Agile, and DevOps SDLC models",
        "DevOps Toolchain Overview",
        "DevOps Roles & Responsibilities",
        "Introduction to Site Reliability Engineering (SRE)",
        "Key Metrics: Lead Time, Deployment Frequency, MTTR, Change Failure Rate",
      ],
      labs: [
        "Visualize DevOps lifecycle using a workflow diagram",
        "Map popular DevOps tools to each phase",
        "Compare Traditional SDLC vs Agile vs DevOps",
        "Case Study – Netflix/Amazon DevOps practices",
        "Analyze a DevOps job listing (tools & responsibilities)",
      ],
    },
    {
      title: "Module 2: Linux Fundamentals",
      objective:
        "Gain Linux skills needed for DevOps: commands, permissions, users, networking, and shell scripting.",
      topics: [
        "Linux role in DevOps",
        "Common Linux distros (Ubuntu, CentOS, Amazon Linux)",
        "SSH Access",
        "Filesystem structure (/etc, /var, /usr, etc.)",
        "File/Directory commands: ls, cp, mv, rm, mkdir, etc.",
        "Permissions: chmod, chown",
        "Users & Groups management",
        "File compression (tar, gzip, zip)",
        "Package management (APT, YUM, DNF)",
        "Processes (ps, top, kill)",
        "Environment variables",
        "Networking tools (ifconfig, ping, curl, wget)",
        "System services (systemctl, journalctl, /var/log)",
      ],
      labs: [
        "Connect to a Linux server via SSH",
        "Perform file operations",
        "Create users & groups",
        "Install/remove packages",
        "Write a simple shell script",
        "Monitor running processes",
        "View system logs",
        "Download file using curl/wget",
      ],
    },
    {
      title: "Module 3: Version Control with Git, GitHub & GitHub Actions",
      objective:
        "Master Git & GitHub for version control, branching, collaboration, and CI/CD automation with Actions.",
      topics: [
        "Version control basics",
        "Local vs Remote repositories",
        "Git setup & configuration",
        "Git operations: init, add, commit, log, diff",
        "Branching & Merging",
        "Git tags & release management",
        "GitHub collaboration (PRs, issues, forks)",
        "SSH keys & authentication",
        ".gitignore usage",
        "GitHub Actions: workflows, jobs, triggers",
      ],
      labs: [
        "Install Git and configure user",
        "Create local repo & push to GitHub",
        "Branching & merging",
        "Pull request & code review",
        "Setup SSH key or PAT for GitHub",
        "Create GitHub Actions workflow (Hello World)",
        "Use GitHub Actions Marketplace",
      ],
    },
    {
      title: "Module 4: CI/CD with Jenkins",
      objective:
        "Implement CI/CD using Jenkins pipelines, integrations, plugins, and automation.",
      topics: [
        "CI/CD concepts & importance",
        "Installing Jenkins (Linux/Docker/Windows)",
        "Jenkins dashboard & job creation",
        "Integrating Git & GitHub",
        "Build triggers (webhooks, polling)",
        "Plugins & Blue Ocean UI",
        "Pipeline as Code (Jenkinsfile)",
        "Pipeline stages: Build, Test, Deploy",
        "Integrations with Maven, npm, Docker",
        "Security: Users, Roles, Credentials",
      ],
      labs: [
        "Install Jenkins & setup plugins",
        "Create a freestyle job with GitHub integration",
        "Configure GitHub webhook",
        "Write a Jenkinsfile pipeline",
        "Build Docker image via Jenkins & push to Docker Hub",
        "Setup email/Slack notifications",
        "Backup & restore Jenkins configs",
      ],
    },
    {
      title: "Module 5: Build Tools & Artifact Management",
      objective:
        "Learn Maven, Gradle, npm, and manage artifacts with Nexus, JFrog, and GitHub Packages.",
      topics: [
        "Build tools overview",
        "Maven: pom.xml, builds, dependencies",
        "Gradle: Groovy/Kotlin DSL, build.gradle",
        "npm: package.json, scripts",
        "Artifact management: Nexus, JFrog, GitHub Packages",
        "Best practices: versioning, securing repos, cleaning artifacts",
      ],
      labs: [
        "Maven build & push artifact to Nexus",
        "Gradle build & push to JFrog Artifactory",
        "npm build & publish package to GitHub Packages",
      ],
    },
    {
      title: "Module 6: Configuration Management with Ansible",
      objective:
        "Automate infrastructure provisioning & configuration using Ansible playbooks and roles.",
      topics: [
        "What is Ansible?",
        "Architecture & SSH communication",
        "Inventory files (static & dynamic)",
        "YAML playbooks",
        "Modules: apt, yum, service, copy, file, user",
        "Variables, conditionals, loops",
        "Handlers & roles",
        "Ansible Vault for secrets",
        "Templates (Jinja2), tags, best practices",
      ],
      labs: [
        "Install Ansible & configure managed nodes",
        "Run ad-hoc commands",
        "Write playbook to install Nginx",
        "Use variables, handlers, and roles",
        "Encrypt secrets with Ansible Vault",
        "Apply Jinja2 templates",
      ],
    },
    {
      title: "Module 7: Containerization with Docker",
      objective:
        "Learn Docker fundamentals, image creation, networking, and multi-container applications.",
      topics: [
        "Containerization vs Virtualization",
        "Docker architecture (Engine, CLI, Daemon)",
        "Basic Docker commands",
        "Dockerfiles & custom images",
        "Volumes & persistence",
        "Docker Compose & multi-container apps",
        "Pushing images to Docker Hub",
        "Docker security & cleanup",
      ],
      labs: [
        "Install Docker & run a container",
        "Build & push a custom image",
        "Write docker-compose.yml for web+DB app",
        "Inspect logs & simulate crash recovery",
      ],
    },
    {
      title: "Module 8: Orchestration with Kubernetes",
      objective:
        "Deploy, scale, and manage containers using Kubernetes clusters.",
      topics: [
        "Kubernetes architecture (Control Plane, Nodes)",
        "Core objects: Pods, Deployments, Services, Namespaces",
        "Cluster setup with kubeadm",
        "Workloads & scheduling (Jobs, CronJobs)",
        "Networking (Ingress, Network Policies, CNI)",
        "Storage (PV, PVC, StorageClass)",
        "RBAC & security",
        "Monitoring with Prometheus & Grafana",
        "Helm for package management",
        "Cluster upgrades & backup",
      ],
      labs: [
        "Install multi-node Kubernetes cluster",
        "Deploy app with Deployments & Services",
        "Setup Ingress Controller",
        "Create PV/PVC for storage",
        "RBAC roles & bindings",
        "Deploy Prometheus & Grafana",
        "Backup & restore etcd",
      ],
    },
    {
      title: "Module 9: Monitoring",
      objective:
        "Implement observability with Prometheus & Grafana for apps and infra monitoring.",
      topics: [
        "Monitoring vs Logging vs Observability",
        "Prometheus architecture & PromQL",
        "Alertmanager & notifications",
        "Grafana dashboards & alerts",
        "Kubernetes monitoring with kube-state-metrics",
        "Best practices for scalable monitoring",
      ],
      labs: [
        "Install Prometheus & node_exporter",
        "Write PromQL queries",
        "Setup alert rules & Alertmanager",
        "Install Grafana & create dashboards",
        "Visualize Kubernetes metrics",
      ],
    },
    {
      title: "Module 10: Infrastructure as Code with Terraform",
      objective:
        "Automate cloud infrastructure using Terraform IaC.",
      topics: [
        "What is IaC? Terraform vs other IaC tools",
        "Terraform architecture",
        "HCL basics: Resources, Variables, Outputs",
        "Terraform workflow (init, plan, apply, destroy)",
        "Modules & workspaces",
        "Terraform State & remote storage",
        "Secrets management",
        "Integrating Terraform with Git & CI/CD",
      ],
      labs: [
        "Install Terraform & create EC2/S3",
        "Use variables & outputs",
        "Store state in AWS S3 with DynamoDB locking",
        "Trigger Terraform via CI/CD pipeline",
        "Use Terraform Registry modules",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 mt-30 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          DevOps Training in Hyderabad
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Accelerate your career with Ganatech’s DevOps Training. Learn CI/CD,
          Docker, Kubernetes, Terraform, Jenkins, Git, AWS Cloud, and more with
          real-time projects.
        </p>
        <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Join Free Demo Session
        </button>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          DevOps Course Curriculum
        </h2>
        <div className="space-y-8">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-3">{mod.title}</h3>
              <p className="mb-3 text-gray-700">
                <span className="font-semibold">Objective:</span>{" "}
                {mod.objective}
              </p>
              <p className="font-semibold">Topics:</p>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                {mod.topics.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
              <p className="font-semibold">Hands-On Labs:</p>
              <ul className="list-disc list-inside text-gray-700">
                {mod.labs.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certification */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get DevOps Certification</h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Showcase your DevOps expertise with globally recognized certification
          and boost your career with CI/CD, automation, and cloud skills.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Certified
        </button>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Kickstart Your DevOps Career!</h2>
        <p className="mb-6 text-lg">
          Enroll in Ganatech’s DevOps Training in Hyderabad to master automation,
          Kubernetes, Terraform, CI/CD, and cloud deployment with placement support.
        </p>
        <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Register Now
        </button>
      </section>
      <a
        href="https://wa.me/918340901901" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
