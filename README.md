# KGMU IT Cell website

    npm install
    npm run dev

All figures come from https://kgmu.org/it_infrastructure.php and live in `src/data/`.

## Structure

    src/
      main.tsx, App.tsx          entry point and page composition
      types/                     shared TypeScript interfaces
      data/                      content only: services, e-services, sites, reports, teaching, cover images, contact
      hooks/                     useCountUp (animated numbers)
      utils/, constants/         number formatting, print helper, chart colours
      components/
        ui/                      Section, Stat, StatGrid, BarChart, PieChart, Chips
        layout/                  Header, Footer
        services/                ServiceTabs, ServicePanel
        digital/                 EserviceCard
        team/                    MemberCard
        sections/                Hero, ServicesSection, PrintServices, SitesSection,
                                 DigitalServicesSection, TeachingSection, TeamSection
      styles/                    one CSS file per area, imported in order by index.css

## Cover image

The cover is a static file in `public/`. `public/cover.svg` is a placeholder. To use a real photo, save it as
`public/cover.jpg` and set `COVER_IMAGE = "/cover.jpg"` in `src/data/cover.ts`.

## Team members

Edit `src/data/team.ts`. The four members there are placeholders.

## Logo

The header logo is the static file `public/kgmu-logo.png`. Replace that file to change it. It is shown in a white band under the header (`components/layout/LogoBar.tsx`); change its size with the `.logobar img` height in `src/styles/header.css`.
