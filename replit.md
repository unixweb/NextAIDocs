# Next8AI IT Consulting Website

## Overview

Next8AI is a professional IT consulting website targeting introvertierte (introverted) IT professionals in the German market. The site emphasizes "Business für IT-Menschen ohne Lautstärke" (Business for IT people without loudness), focusing on quiet professionalism and understated design. The platform provides IT consulting services, automation solutions, individual development plans, and custom software development with a philosophy of partnership-based collaboration and sustainable scalability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

**Frontend Architecture**
- React-based single-page application using Vite as the build tool
- TypeScript for type safety and better development experience
- Wouter for lightweight client-side routing
- Component-based architecture with shadcn/ui design system
- Tailwind CSS for styling with custom design tokens matching German precision aesthetic
- TanStack Query for efficient data fetching and state management
- React Hook Form with Zod validation for form handling

**Design System**
- Custom color palette emphasizing deep blues, charcoal, and light grays for professional appearance
- Typography using Inter font for excellent German text rendering
- Component library based on Radix UI primitives for accessibility
- Design philosophy following "quiet professionalism" with clean, structured layouts
- Responsive design with mobile-first approach

**Backend Architecture**
- Express.js server with TypeScript
- RESTful API design for handling contact forms and business logic
- Modular route organization separating concerns
- Custom storage abstraction layer (currently using in-memory storage with interface for future database integration)
- Comprehensive error handling and request logging middleware

**Form Processing**
- Contact form validation using Zod schemas
- Server-side validation with detailed error responses
- Email functionality integrated with Brevo API for contact form submissions
- GDPR-compliant consent handling for German market requirements

**Development Infrastructure**
- Hot module replacement for efficient development workflow
- ESBuild for fast production builds
- Path aliases for clean import statements
- Environment-specific configurations for development and production

## External Dependencies

**Email Service Integration**
- Brevo API for transactional email sending from contact forms
- API key-based authentication for email service
- Template-based email formatting for professional communication

**UI Component Library**
- Radix UI primitives for accessible, unstyled components
- Shadcn/ui component system providing pre-built, customizable components
- Lucide React for consistent iconography

**Database Preparation**
- Drizzle ORM configured for PostgreSQL integration
- Schema definitions ready for user management and future data persistence
- Database migration system prepared but not currently active

**Development Tools**
- Vite plugins for runtime error handling and development banners
- Replit-specific integrations for cartographer and development workflow
- TypeScript configuration optimized for monorepo structure with shared types

**Styling and Assets**
- Google Fonts integration for Inter typography
- PostCSS with Tailwind CSS for utility-first styling approach
- Asset management through Vite's built-in optimization

The architecture prioritizes clean separation of concerns, type safety, and professional German business aesthetics while maintaining scalability for future enhancements.