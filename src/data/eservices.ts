import type { Eservice } from "../types";

export const eservices: Eservice[] = [
  {
    name: "e-Hospital (HMIS)",
    note: "The hospital information system for patient care.",
    details: [
      "Registration, admission, discharge, billing, pathology, diet and laundry in one system",
      "Birth and death certificates",
      "KGMU moved to the NextGen eHospital platform on 21 November 2025",
      "Adopted from the National Informatics Centre under the Digital India mission",
      "Free for KGMU and for patients; over 50 lakh patients have used it",
    ],
    href: "https://ehospital.gov.in",
    linkLabel: "Open e-Hospital",
  },
  {
    name: "Online Registration (ORS)",
    note: "Appointments and lab reports on a phone.",
    details: [
      "Online OPD appointments through the NIC service",
      "Lab reports can be downloaded on a mobile phone",
      "Free of charge for patients",
      "Phone (0522-2258880) and SMS options for people who cannot use the portal",
    ],
    href: "https://ors.gov.in",
    linkLabel: "Open ORS",
  },
  {
    name: "Samarth portal",
    note: "Student and faculty administration.",
    details: ["University administration workflows for students and faculty", "Used for PG admissions"],
    href: "https://kgmu.samarth.ac.in",
    linkLabel: "Open Samarth",
  },
  {
    name: "e-Office",
    note: "Paperless file movement.",
    details: ["Files move between offices electronically, with a record of every step"],
    href: "https://eoffice.gov.in",
    linkLabel: "Open e-Office",
  },
  {
    name: "EHRMS (Manav Sampada)",
    note: "Employee records.",
    details: ["Electronic service book for every employee", "Online leave application"],
    href: "http://ehrms.upsdc.gov.in",
    linkLabel: "Open Manav Sampada",
  },
  {
    name: "GeM",
    note: "Government e-Marketplace purchasing.",
    details: ["Purchases of goods and services made through the government portal"],
    href: "https://gem.gov.in",
    linkLabel: "Open GeM",
  },
  {
    name: "e-Library",
    note: "Medical books and journals, also from home.",
    details: [
      "Thousands of medical books and periodicals for students and faculty",
      "Available from home as well as on campus",
    ],
    href: "https://kgmu.org/library_resources.php",
    linkLabel: "Open library resources",
  },
  {
    name: "University website",
    note: "kgmu.org",
    details: ["Official website of King George's Medical University, including the online fee portal"],
    href: "https://kgmu.org",
    linkLabel: "Open kgmu.org",
  },
];
