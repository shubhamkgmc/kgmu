// Source: https://kgmu.org/it_infrastructure.php
// Only figures published on that page are used here.

import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "network",
    name: "Networking",
    summary:
      "LAN and Wi-Fi in every building on campus: faculty residences, hostels, offices, patient areas, teaching blocks and the library. Distant units are linked through a central data centre.",
    stats: [
      { label: "Managed access switches", value: 240 },
      { label: "LAN ports", value: 5500, suffix: "+" },
      { label: "Wi-Fi access points", value: 600, suffix: "+" },
      { label: "Internet lines", value: 2 },
    ],
    barsTitle: "Internet capacity by line (Gbps)",
    bars: [
      { label: "BSNL lease line", value: 1 },
      { label: "NKN-NIC (upgraded)", value: 1 },
    ],
  },
  {
    id: "callcenter",
    name: "Call centre",
    summary:
      "A central appointment number with parallel lines helps patients who cannot use the online portal. An SMS service is available for those who cannot call.",
    stats: [
      { label: "Parallel phone lines", value: 30 },
      { label: "IVRS intercoms", value: 900, suffix: "+" },
      { label: "VoIP intercoms", value: 100, suffix: "+" },
      { label: "Patients on e-Hospital", value: 50, suffix: " lakh+" },
    ],
    points: [
      "Appointment helpline: 0522-2258880 (30 parallel lines)",
      "Online appointments and lab reports on mobile through ors.gov.in, free for all patients",
      "SMS service for people who cannot use the portal or phone",
      "Electronic COVID Care Service gave doctor-to-doctor consultation to other hospitals during COVID",
    ],
  },
  {
    id: "assets",
    name: "Asset management",
    summary:
      "The IT Cell runs and monitors the network, security and communication devices spread across the campus through a facility management system.",
    stats: [
      { label: "IP CCTV cameras", value: 300 },
      { label: "Wi-Fi access points", value: 600, suffix: "+" },
      { label: "Managed switches", value: 240 },
      { label: "Connected outside units", value: 6 },
    ],
    barsTitle: "Devices in service",
    bars: [
      { label: "IVRS intercoms", value: 900 },
      { label: "IP CCTV cameras", value: 300 },
      { label: "Wi-Fi access points", value: 600 },
      { label: "Managed switches", value: 240 },
      { label: "VoIP intercoms", value: 100 },
    ],
  },
  {
    id: "nextgen",
    name: "NextGen eHospital",
    summary:
      "KGMU moved from the earlier eHospital to the NextGen eHospital platform on 21 November 2025. It is a cloud-based hospital information system from the National Informatics Centre, used across patient care.",
    stats: [{ label: "Modules in use", value: 11 }],
    modules: [
      "OPD",
      "Clinic",
      "IPD",
      "Billing",
      "Store inventory",
      "Lab",
      "Dietary",
      "Laundry",
      "MRD",
      "Appointment",
      "Payment gateway (POS machine mapping)",
    ],
    featured: true,
    badge: "Live since 21 November 2025",
    taskGroups: [
      {
        title: "Users & access",
        icon: "👤",
        items: ["New user ID creation and deletion", "Role mapping (Jr, Sr, Nurse, Counter mapping)"],
      },
      {
        title: "Wards & beds",
        icon: "🛏️",
        items: ["New ward creation", "Bed increase and decrease", "Unit mapping"],
      },
      {
        title: "Stores",
        icon: "📦",
        items: ["Substore creation", "Substore mapping"],
      },
      {
        title: "Records & data",
        icon: "🗂️",
        items: ["Data fetching (all modules)", "Death certificate verification and modification"],
      },
      {
        title: "Projects & lab",
        icon: "🧪",
        items: ["Scheme / project making (new)", "Lab Information System (LIS)"],
      },
    ],
    points: [
      "Built as containerised microservices that scale with the number of users",
      "Follows Ayushman Bharat Digital Mission standards",
    ],
  },
  {
    id: "eoffice",
    name: "e-Office",
    summary: "Files move between KGMU offices electronically instead of on paper.",
    points: [
      "Files are created, sent and approved on screen",
      "Every step of a file's movement is recorded",
      "Replaces physical file movement between offices",
    ],
    link: { label: "Open e-Office", href: "https://eoffice.gov.in" },
  },
  {
    id: "gem",
    name: "GeM portal",
    summary: "KGMU buys goods and services through the Government e-Marketplace.",
    points: [
      "Purchases are made on the government's online portal",
      "Buying follows a single, common government process",
    ],
    link: { label: "Open GeM", href: "https://gem.gov.in" },
  },
  {
    id: "samarth",
    name: "Samarth",
    summary: "The Samarth portal handles university administration for students and faculty.",
    points: [
      "Student and faculty administration in one portal",
      "PG admissions are handled through Samarth",
    ],
    link: { label: "Open KGMU Samarth", href: "https://kgmu.samarth.ac.in" },
  },
  {
    id: "website",
    name: "University website",
    summary: "kgmu.org is the university's official website, kept running by the IT Cell.",
    points: [
      "Official notices, downloads and information for patients, students and staff",
      "Hosts the yearly IT upgrade reports",
      "Includes the online fee portal",
    ],
    link: { label: "Open kgmu.org", href: "https://kgmu.org" },
  },
  {
    id: "healthcard",
    name: "Health cards",
    summary:
      "Patient health cards are created at registration so every visit, report and bill is tied to one patient record in the e-Hospital system.",
    // To show numbers here, add: stats: [{ label: "Cards issued", value: 0 }]
    points: [
      "Card generated at the registration counter from the patient's e-Hospital (HMIS) record",
      "Unique patient number on the card links OPD visits, lab reports and billing",
      "Reprint and correction of cards that are lost or carry wrong details",
      "Card printers and registration counters kept running by the IT Cell",
    ],
  },
  {
    id: "idcard",
    name: "Identity cards",
    summary:
      "Identity cards for students, faculty, staff and residents are produced and kept up to date by the IT Cell.",
    // To show numbers here, add: stats: [{ label: "ID cards printed", value: 0 }]
    points: [
      "Photo capture and card printing for new students, employees and hostel residents",
      "Every employee has a unique ID linked to e-Hospital, so staff and students can use health services on campus through it",
      "Replacement and renewal when a card is lost or details change",
      "Card printers, photo and data-entry stations maintained by the IT Cell",
    ],
  },
  {
    id: "tickets",
    name: "Complaints & issues",
    summary:
      "IT staff are available round the clock. Every complaint is logged, watched and followed up so pending cases stay few.",
    stats: [
      { label: "Hours of support", value: 24, suffix: "x7" },
      { label: "Ways to log a complaint", value: 2 },
      { label: "Data entry operators", value: 100, suffix: "+" },
      { label: "Daily log reviews", value: 1, suffix: " / day" },
    ],
    points: [
      "Call the helpdesk on its dedicated mobile number for hardware, software or network problems",
      "Post the complaint in the WhatsApp group",
      "An in-house application tracks every complaint log",
      "Daily complaint logs are reviewed for any lapse",
    ],
  },
];
