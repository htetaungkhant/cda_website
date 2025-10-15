# Cambridge Driving Academy (CDA) Website

A modern, full-featured driving school website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.1. The application provides a comprehensive platform for students to explore driving courses, book instructors, make payments, and contact the academy.

## 🚀 Features

### Core Functionality
- **Course Exploration**: Browse automatic, manual, intensive, and bulk booking driving classes
- **Instructor Profiles**: View detailed instructor information and book lessons
- **Online Payments**: Integrated Stripe payment processing for course bookings
- **Contact System**: Contact forms with validation and email notifications
- **AI Chatbot**: Interactive chatbot for customer support
- **Instagram Gallery**: Display latest Instagram posts and media
- **Google Reviews**: Showcase customer testimonials and ratings
- **Responsive Design**: Fully responsive across all devices

### Technical Features
- **Authentication System**: JWT-based auth with automatic token refresh
- **API Proxy Layer**: Server-side API routing for security and CORS handling
- **Form Validation**: Schema-based validation using Zod
- **Type Safety**: Full TypeScript implementation with strict mode
- **Performance**: Turbopack for fast development, optimized production builds
- **Animations**: Smooth transitions using Motion (Framer Motion)
- **Image Optimization**: Next.js Image component with remote pattern support

## 🛠 Tech Stack

### Core Framework
- **Next.js** 15.3.5 (App Router)
- **React** 19.0.0
- **TypeScript** 5
- **Node.js** 20+

### Styling & UI
- **Tailwind CSS** 4.1 with PostCSS plugin
- **shadcn/ui** (Radix UI primitives)
- **Motion** 12.23.3 (Framer Motion)
- **Lucide React** & React Icons for iconography
- **tw-animate-css** for animation utilities

### Forms & Validation
- **React Hook Form** 7.60.0
- **Zod** 4.0.5
- **@hookform/resolvers** 5.1.1
- **React International Phone** 4.6.0

### Payment & Services
- **Stripe** 18.5.0 (payment processing)
- **Sonner** 2.0.6 (toast notifications)

### Development Tools
- **ESLint** 9 with Next.js config
- **Turbopack** (Next.js built-in)

## 📁 Project Structure

```
cda_website/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── chatbot/             # AI chatbot endpoint
│   │   └── proxy/               # API proxy for external services
│   ├── about-us/                # About page
│   ├── cdapedia/                # Knowledge base
│   ├── contact-us/              # Contact form
│   ├── explore-classes/         # Course listings
│   │   ├── automatic-driving-class/
│   │   ├── manual-driving-class/
│   │   ├── bulk-booking-class/
│   │   └── (intensive-driving-class)/
│   ├── our-team/                # Instructor profiles
│   ├── privacy-policy/          # Legal pages
│   └── terms-conditions/
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   └── [business components]    # Feature-specific components
├── hooks/                       # Custom React hooks
│   └── use-auth.tsx            # Authentication hook
├── lib/                         # Utilities and config
│   ├── client/                 # Client-side utilities
│   ├── server/                 # Server-side utilities
│   └── shared/                 # Shared utilities
├── services/                    # API service layer
│   ├── client/                 # Client-side services
│   ├── server/                 # Server-side services
│   └── shared/                 # Shared services
├── types/                       # TypeScript type definitions
├── providers/                   # React context providers
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cda_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # API Configuration
   NEXT_PUBLIC_API_URL=/api/proxy
   
   # Server-only secrets (do NOT prefix with NEXT_PUBLIC_)
   API_HOST=http://your-api-host
   API_KEY=your_api_key
   
   # Chatbot Configuration
   CHATBOT_URL=https://your-chatbot-backend-url.run.app
   
   # Google APIs Configuration
   GOOGLE_PLACE_ID=your_google_place_id
   GOOGLE_PLACE_API_KEY=your_google_place_api_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback
   GOOGLE_SERVICE_ACCOUNT_KEY=""
   
   # Instagram API Configuration
   IG_APP_ID=your_instagram_app_id
   IG_APP_SECRET=your_instagram_app_secret
   IG_ACCESS_TOKEN=your_instagram_access_token
   
   # Stripe API Keys
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
   
   # Environment
   NODE_ENV=development
   ```

   **Environment Variables Explained:**

   | Variable | Type | Description |
   |----------|------|-------------|
   | `NEXT_PUBLIC_API_URL` | Public | API proxy endpoint path (default: `/api/proxy`) |
   | `API_HOST` | Server | Backend API server hostname/IP |
   | `API_KEY` | Server | Authentication key for backend API |
   | `CHATBOT_URL` | Server | AI chatbot backend service URL |
   | `GOOGLE_PLACE_ID` | Server | Google Place ID for displaying reviews |
   | `GOOGLE_PLACE_API_KEY` | Server | Google Places API key for fetching location data |
   | `GOOGLE_CLIENT_ID` | Server | Google OAuth client ID (for authentication) |
   | `GOOGLE_CLIENT_SECRET` | Server | Google OAuth client secret |
   | `GOOGLE_REDIRECT_URI` | Server | OAuth callback URL |
   | `GOOGLE_SERVICE_ACCOUNT_KEY` | Server | Google service account credentials (JSON) |
   | `IG_APP_ID` | Server | Instagram/Facebook App ID |
   | `IG_APP_SECRET` | Server | Instagram/Facebook App secret |
   | `IG_ACCESS_TOKEN` | Server | Instagram Graph API access token |
   | `STRIPE_SECRET_KEY` | Server | Stripe secret key for payment processing |
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public | Stripe publishable key (client-side) |
   | `NODE_ENV` | Both | Environment mode (development/production) |

   > **Security Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never prefix sensitive keys (API keys, secrets) with `NEXT_PUBLIC_`.

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. Start by modifying `app/page.tsx`.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🏗 Architecture

### Client/Server Separation
- **Server Components**: Default in Next.js 15 for better performance
- **Client Components**: Use `"use client"` directive for interactivity

### Service Layer Pattern
API calls are abstracted into service modules:
- `services/client/` - Browser-side API calls
- `services/server/` - Server-side API calls
- `services/shared/` - Shared authentication logic

### Authentication Flow
1. User logs in via `authService.login()`
2. JWT tokens stored securely (access + refresh tokens)
3. Automatic token refresh before expiry
4. `useAuth` hook provides auth state globally
5. Session validation with auto-logout on expiry

### API Proxy Pattern
All external API calls route through `/api/proxy/[...path]`:
- Handles CORS issues
- Injects API keys server-side
- Provides security layer
- Centralized error handling

## 🎨 Styling Guidelines

### Tailwind CSS 4.1
- Import via `@import "tailwindcss"` in `globals.css`
- Use utility-first approach
- Custom CSS variables in `globals.css` (e.g., `--custom-primary`)

### Class Management
```typescript
import { cn } from "@/lib/shared/utils";

// Merge classes with conflict resolution
<div className={cn("base-classes", conditionalClass && "conditional-classes")} />
```

### Component Variants
```typescript
import { cva } from "class-variance-authority";

const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { sm: "...", lg: "..." }
  }
});
```

## 📋 Key Features Implementation

### Forms
- React Hook Form + Zod validation
- Validation schemas in `lib/shared/validations.ts`
- shadcn/ui Form components for consistent UI

### Payments
- Stripe Elements integration
- Payment intent creation
- Secure checkout flow
- Success/failure handling

### Image Handling
- Next.js Image component for optimization
- Configured remote patterns for:
  - AWS S3 (course images)
  - Google (user avatars)
  - Instagram CDN (gallery posts)

### Animations
- Motion (Framer Motion) for complex animations
- Tailwind utilities for simple transitions
- Custom keyframe animations in `globals.css`

## 🧪 Development Guidelines

### Code Style
- Follow existing patterns and conventions
- Use TypeScript strict mode
- Leverage path aliases (`@/*`)
- Keep components modular and reusable

### Component Organization
- Page-specific components in route groups: `(components)/`
- Shared components in `components/`
- UI primitives in `components/ui/`

### State Management
- Local state: `useState`, `useReducer`
- Global state: Context API via providers
- Async operations: `useAsyncOperation` hook

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Stripe Documentation](https://stripe.com/docs)

## 📄 License

Private and confidential - All rights reserved.

## 🤝 Contributing

Please read `llm-instruction.md` for detailed development guidelines and coding standards before contributing to this project.
