# ATIVAR — Enterprise AI Hero Section
## Production-Ready UI/UX Implementation Brief for OpenCode

### 1. Your Role

Act as a senior product designer, enterprise UX architect, design systems engineer, and senior frontend developer.

Your task is to implement a premium, production-ready homepage hero section for ATIVAR (ativar.ir), an enterprise AI, digital transformation, and intelligent solutions company.

Do not merely create a visual mockup. Implement the actual responsive website interface using the existing project architecture and coding conventions.

The target audience includes:
- CEOs and board members
- CIOs, CTOs, and IT directors
- Enterprise digital transformation leaders
- Financial institutions and fintech decision-makers
- Organizations seeking secure, practical AI adoption

The first screen must communicate credibility, business relevance, implementation capability, and a clear path to engaging ATIVAR.

### 2. Mandatory First Step: Inspect the Existing Project

Before making changes:

1. Inspect the repository structure, package.json, framework, routing, existing homepage, CSS architecture, assets, fonts, and reusable components.
2. Identify the existing design system, brand colors, logo assets, and supported language direction.
3. Inspect the current homepage and preserve its existing navigation, footer, shared components, analytics, SEO metadata, and functional integrations.
4. Reuse existing components and dependencies whenever practical.
5. Do not replace the framework, rewrite the application, or install unnecessary packages.
6. If the project already uses Next.js, React, Vue, or another framework, follow its established architecture.
7. If an ATIVAR logo asset exists, use the actual logo. Never invent or redraw the brand logo.
8. If a required asset is missing, create a suitable local asset or document the missing dependency without blocking unrelated work.

After inspection, proceed directly with implementation. Do not stop at a plan or ask for approval unless an essential dependency makes implementation impossible.

### 3. Brand Positioning

ATIVAR must not look like a generic AI tool vendor or a speculative technology startup.

Position ATIVAR as:

"An enterprise AI and digital transformation partner that translates organizational challenges into secure, integrated, measurable solutions."

The interface must express three core capabilities:

01 — Discover & Strategize
Understand the organization's real needs, assess AI readiness, map processes and data, identify high-value use cases, and establish a practical implementation roadmap.

02 — Architect & Implement
Design and integrate appropriate AI solutions, organizational knowledge systems, enterprise assistants, and intelligent workflows with existing systems and infrastructure.

03 — Measure & Improve
Focus on operational efficiency, decision quality, cost optimization, measurable business outcomes, governance, and continuous improvement.

Do not claim that every capability is already commercially available unless the existing website or project materials substantiate it.

### 4. Visual Direction

Create a LIGHT, BRIGHT, premium enterprise design.

The visual identity must combine:
- White and very light blue surfaces
- Turquoise and cyan as primary accents
- Deep navy for strong text and selected headings
- Natural photography of real enterprise environments
- Subtle, restrained Persian-Islamic geometric details
- Clear spacing, precise alignment, and professional typography
- Soft shadows, fine borders, and restrained rounded corners

Suggested design tokens:

--color-primary: #079BC5;
--color-primary-dark: #08799D;
--color-turquoise: #21B5C8;
--color-navy: #153653;
--color-text: #24384B;
--color-muted: #647789;
--color-background: #F7FBFE;
--color-surface: #FFFFFF;
--color-border: #DCEAF2;
--color-accent-light: #E8F7FC;

Use these as initial tokens, not immutable values. Align them with the actual ATIVAR logo and existing brand identity after inspection.

Avoid:
- Dark, full-screen backgrounds
- Neon cyberpunk styling
- Purple AI gradients
- Excessive glassmorphism
- Futuristic robots and humanoid AI
- Floating holograms and fictional technology
- Overloaded dashboards
- Excessive decorative patterns
- Fake customer logos, certifications, statistics, and testimonials

The result should feel established, intelligent, trustworthy, contemporary, and appropriate for enterprise procurement.

### 5. Hero Layout

Implement the hero as a carefully composed RTL split layout.

Desktop reference:
- Full-width, light background
- Existing site header at the top
- Main hero approximately 580–700 px tall, depending on viewport
- Persian headline and supporting copy on the right
- Authentic enterprise photograph on the left, occupying approximately 45–52% of the content width
- Three-step value proposition cards directly beneath or partially overlapping the hero, without obscuring text or controls
- A compact trust and capability strip at the bottom of the first viewport

Use a centered content container with a maximum width of approximately 1440 px and responsive side padding.

The layout must remain readable and balanced at 1440 px, 1280 px, 1024 px, 768 px, and mobile widths.

On mobile:
- Show the headline and primary CTA first.
- Keep text readable without clipping.
- Move the image below the essential message when necessary.
- Stack the three capability cards vertically or use a compact accessible layout.
- Avoid horizontal page overflow.

### 6. Header and Navigation

Preserve the existing ATIVAR header if it already exists.

If a replacement is necessary, implement:
- Actual ATIVAR logo on the right
- RTL Persian navigation
- Links for Services, Solutions, Projects, Knowledge, About, and Contact, adapted to actual available routes
- One prominent turquoise CTA: "درخواست مشاوره"
- Accessible mobile navigation

Do not create dead navigation links. Use existing routes and pages wherever available.

The header should be white or subtly translucent, with a fine bottom border and restrained shadow if appropriate.

### 7. Hero Copy — Use This Persian Content

Eyebrow:

"هوش مصنوعی سازمانی | معماری راهکارهای هوشمند"

Main heading:

"هوش مصنوعی برای حل مسائل واقعی سازمان شما"

Supporting text:

"آتیوار به سازمان‌ها کمک می‌کند دانش، داده‌ها، فرایندها و سامانه‌های خود را به راهکارهای هوشمند، یکپارچه و قابل‌کنترل تبدیل کنند؛ از تدوین نقشه راه تا طراحی، پیاده‌سازی و بهبود مستمر."

Primary CTA:

"ارزیابی آمادگی هوش مصنوعی سازمان"

Secondary CTA:

"معرفی آتیوار"

The primary CTA should lead to an existing consultation or contact route, or open a functional accessible form if the project already supports one.

The secondary CTA should link to the existing About page or company introduction section.

Do not implement buttons that look interactive but do nothing.

Use correct Persian typography, punctuation, and right-to-left text flow.

### 8. The Three Core Value Cards

Place three connected cards beneath the main hero or within the lower portion of the first screen.

CARD 01
Title: "شناخت و طراحی راهبرد"
Description: "درک نیازهای واقعی سازمان، ارزیابی آمادگی داده و فناوری، و تدوین نقشه راه اجرایی هوش مصنوعی."
Icon concept: assessment, target, or strategic planning.

CARD 02
Title: "معماری و پیاده‌سازی"
Description: "طراحی راهکارهای متناسب با نیاز سازمان و یکپارچه‌سازی هوش مصنوعی با دانش، داده‌ها و سامانه‌های موجود."
Icon concept: connected systems, architecture, or workflow.

CARD 03
Title: "بهره‌برداری و خلق ارزش"
Description: "تمرکز بر افزایش بهره‌وری، بهبود تصمیم‌گیری، کنترل ریسک و سنجش نتایج کسب‌وکار."
Icon concept: analytics, measurable performance, or growth.

Connect the cards using subtle directional cues, not large arrows or heavy visual effects