# Design Guidelines for Next8AI IT Consulting Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from professional IT consulting websites like Linear and Notion, emphasizing clean minimalism that appeals to introverted IT professionals.

## Core Design Principles
- **Quiet Professionalism**: Subtle, understated design reflecting the "ohne Lautstärke" (without loudness) philosophy
- **German Precision**: Clean, structured layouts with clear hierarchy
- **Technical Credibility**: Modern but not trendy, emphasizing reliability over flashiness

## Color Palette

**Primary Colors:**
- Deep Blue: 220 85% 25% (primary brand color)
- Charcoal: 220 15% 20% (text and headers)
- Light Gray: 220 10% 95% (backgrounds)

**Supporting Colors:**
- Success Green: 150 60% 45% (for CTAs and positive actions)
- Warm White: 45 15% 98% (page backgrounds)
- Muted Blue: 220 25% 75% (secondary elements)

**Dark Mode:**
- Background: 220 15% 10%
- Surface: 220 10% 15%
- Text: 220 5% 90%

## Typography
- **Primary Font**: Inter (Google Fonts) - excellent for German text and technical content
- **Headings**: Inter Bold (font-bold)
- **Body Text**: Inter Regular (font-normal)
- **Accent Text**: Inter Medium (font-medium)

## Layout System
- **Spacing Units**: Tailwind units of 4, 8, 12, and 16 (p-4, m-8, gap-12, etc.)
- **Container Widths**: max-w-7xl for main content, max-w-2xl for text-heavy sections
- **Grid System**: 12-column grid with generous gutters

## Component Library

### Navigation
- Clean header with logo and minimal navigation items
- Sticky navigation with subtle shadow on scroll
- Mobile hamburger menu with smooth slide-in animation

### Hero Section
- Single viewport height hero with centered content
- Professional headshot of Joachim Hummel (provided image)
- Two-button CTA layout: primary "Jetzt starten" and secondary "Mehr erfahren"
- Subtle background gradient overlay

### Service Cards
- 2x3 grid layout for six services
- Card-based design with hover elevation effects
- Icon + title + bullet points structure
- Consistent padding and rounded corners

### Pricing Section
- Three-column pricing cards with center card highlighted
- Clear pricing hierarchy with euro symbol
- Feature lists with checkmark icons
- Distinct CTA buttons for each tier

### Forms
- Newsletter signup with single email input
- Rounded input fields with subtle borders
- Form validation with inline error messages
- Success states with confirmation messaging

## Images
- **Hero Image**: Professional headshot of Joachim Hummel (provided: joachimhummel6_1759062487839-C_6gDv1q.png) - positioned right side of hero section
- **Service Icons**: Use Heroicons for service section icons (code, chart-bar, user-group, etc.)
- **Background Elements**: Subtle geometric patterns or gradients, no distracting imagery

## Visual Treatments
- **Subtle Gradients**: Light blue to white gradients for section backgrounds
- **Minimal Shadows**: Box shadows for cards and elevated elements
- **Rounded Corners**: Consistent 8px border radius for cards and buttons
- **Gentle Transitions**: 200ms ease-in-out for all interactive elements

## Responsive Considerations
- Mobile-first approach with stacked layouts
- Pricing cards stack vertically on mobile
- Hero section adapts to single column on mobile
- Service grid becomes 1x6 on mobile devices

## German Language Considerations
- Longer German text requires increased line-height (1.6)
- Adequate spacing for compound words
- Proper umlauts and special character support
- Professional tone matching the "stille Macher" positioning