# React + TypeScript + Vite + Zustand + mmaterial ui + Tanstack 
iPrescribe Admin Dashboard
A robust, enterprise-grade healthcare management platform built with React 19, TypeScript, and Vite. This dashboard provides administrative oversight for patient management, consultation tracking, and prescription oversight.

## Key Features

Secure Authentication: Integrated JWT-based login with persistent session management via Zustand.

Responsive Sidebar: A collapsible mobile-friendly navigation system with smooth transitions.

Real-time Statistics: Interactive summary cards showing patient growth, doctor activity, and prescription trends.

Defensive Data Rendering: Advanced error handling for API responses, preventing UI crashes on null or undefined data points.

Dynamic Analytics: Visualized data using Recharts for consultation trends and specialty distribution.

Patient Management Table: Searchable data table with real-time filtering and status tracking.

## Technical Stack

Frontend Framework: React 19 (Functional Components & Hooks)
Language: TypeScript (Strict Mode)
Build Tool: Vite
-UI Library: Material UI (MUI) v6
--State Management: Zustand (with Persist middleware)
-Data Fetching: TanStack Query (React Query) v5 & Axios
-Charts: Recharts
-Styling: Tailwind CSS & MUI Emotion

src/
├── api/             # Axios instance & Interceptors
├── assets/          # Images, SVGs, and Icons
├── components/      # Reusable UI components (Tables, Charts, StatCards)
├── features/        # Feature-based logic (Dashboard, Auth, Landing)
├── hooks/           # Custom React hooks & Mutations
├── layouts/         # Page wrappers (DashboardLayout, MainLayout)
├── services/        # API service layer (DashboardService)
├── store/           # Global State Management (useAuthStore, useUiStore)
├── types/           # TypeScript Interfaces & API Type Definitions
└── theme/           # MUI Theme customization (Onest Font integration)

Installation & Setup
1. Clone the repository:
git clone https://github.com/your-username/iprescribe.git
cd iprescribe

2. Install dependencies:
npm install

3. Environment Setup: Create a .env file in the root directory:

4. npm run dev