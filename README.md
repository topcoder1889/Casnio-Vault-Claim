# Casino Vault Claim

A modern React-based casino vault claim application with a beautiful UI and interactive claiming system. Built with Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Interactive Vault System**: Claim tokens with a countdown timer
- **Real-time Balance Tracking**: Dynamic balance updates with claim history
- **Beautiful Casino Theme**: Gradient backgrounds with animated particles
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI Components**: Built with shadcn/ui and Radix UI
- **TypeScript**: Full type safety throughout the application

## Quick Start

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun** (package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd casino-vault-claim
   ```

2. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```
   
   Using bun:
   ```bash
   bun install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Development Build

To create a development build:

```bash
npm run build:dev
```

### Linting

To run the linter:

```bash
npm run lint
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate


## 🎮 How to Use

1. **Start the application** using `npm run dev`
2. **Wait for the countdown timer** to complete
3. **Click the "Claim" button** to collect your tokens
4. **View your balance** and claim history in real-time
5. **Repeat** the process as the timer resets


### Tailwind CSS

The project uses Tailwind CSS with custom configurations. You can modify the theme in `tailwind.config.ts`.

### TypeScript

TypeScript configuration is in `tsconfig.json`. The project uses strict type checking for better code quality.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint