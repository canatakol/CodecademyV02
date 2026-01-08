# CIQ Style Guideline

A comprehensive design system and component library built with React, TypeScript, and Tailwind CSS. This project provides a collection of accessible, customizable, and reusable UI components for building modern web applications.

## 🚀 Features

- **50+ UI Components**: Pre-built, accessible components including buttons, forms, modals, cards, and more
- **Built with Radix UI**: Leverages Radix UI primitives for accessibility and keyboard navigation
- **TypeScript Support**: Full TypeScript support for type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Dark Mode Ready**: Components designed with theming in mind
- **Form Management**: Integrated with React Hook Form and Zod for robust form handling
- **Responsive Design**: Mobile-first responsive components
- **Interactive Previews**: Live component demonstrations and examples

## 📦 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Primitives**: Radix UI
- **Icons**: Lucide React, Radix Icons, Huge Icons
- **Form Management**: React Hook Form + Zod
- **Charts**: Recharts
- **Animations**: Tailwind CSS Animate

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "CIQ Style Guideline"
   ```

2. **Navigate to the design system directory**
   ```bash
   cd design-system
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 🚀 Getting Started

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📂 Project Structure

```
design-system/
├── src/
│   ├── components/
│   │   ├── ui/              # Core UI components
│   │   ├── Preview/         # Component preview examples
│   │   ├── Blocks/          # Feature blocks (GitHub, Vercel, etc.)
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── CodeBlock.tsx    # Code display component
│   │   └── ComponentCard.tsx # Component showcase card
│   ├── data/
│   │   ├── components.ts    # Component metadata
│   │   └── blocks.ts        # Block configurations
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── dist/                    # Production build output
├── components.json          # Shadcn UI configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies and scripts
```

## 🎨 Available Components

### Layout & Navigation
- **Accordion**: Collapsible content sections
- **Breadcrumb**: Navigation hierarchy display
- **Navigation Menu**: Responsive navigation menus
- **Sidebar**: Collapsible side navigation
- **Tabs**: Tabbed content organization
- **Menubar**: Application menu bar

### Forms & Inputs
- **Button**: Various button styles and variants
- **Input**: Text input fields
- **Textarea**: Multi-line text input
- **Checkbox**: Checkbox inputs
- **Radio Group**: Radio button groups
- **Select**: Dropdown select menus
- **Switch**: Toggle switches
- **Slider**: Range slider inputs
- **Calendar**: Date picker calendar
- **Input OTP**: One-time password input
- **Combobox**: Searchable select dropdowns

### Feedback & Overlays
- **Alert**: Notification messages
- **Alert Dialog**: Modal confirmation dialogs
- **Dialog**: Modal windows
- **Drawer**: Slide-out panels
- **Toast (Sonner)**: Toast notifications
- **Progress**: Progress indicators
- **Skeleton**: Loading placeholders
- **Spinner**: Loading spinners
- **Tooltip**: Contextual tooltips
- **Hover Card**: Hoverable content cards

### Data Display
- **Card**: Content container cards
- **Badge**: Status and label badges
- **Avatar**: User profile images
- **Table**: Data tables
- **Stat Cards**: Statistics display cards
- **Chart**: Data visualization charts
- **Separator**: Visual dividers
- **Scroll Area**: Scrollable content areas

### Interactive
- **Popover**: Contextual popovers
- **Dropdown Menu**: Action menus
- **Context Menu**: Right-click menus
- **Command**: Command palette (⌘K)
- **Collapsible**: Expandable content
- **Carousel**: Image/content carousels
- **Resizable**: Resizable panels
- **Toggle**: Toggle buttons
- **Toggle Group**: Multiple toggle buttons

## 🎯 Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a sample component using the design system.</p>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 🎨 Customization

### Tailwind Configuration

Customize the design system by modifying `tailwind.config.ts`. You can adjust:
- Color schemes
- Typography scales
- Spacing values
- Border radius
- Breakpoints
- Animations

### Component Variants

Components use `class-variance-authority` (CVA) for variant management. You can extend or modify component variants in their respective files.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🔗 Links

- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)

## 📧 Contact

For questions or support, please contact the development team.

---

Built with ❤️ for Codecademy

