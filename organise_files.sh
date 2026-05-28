#!/bin/bash

################################################################################
# Next.js Folder Structure Generator
# 
# This script creates a complete Next.js project folder structure
# Usage: bash setup-folders.sh
# Or:    chmod +x setup-folders.sh && ./setup-folders.sh
################################################################################

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directories to create
echo -e "${BLUE}🚀 Creating Next.js Project Structure...${NC}\n"

# Root level directories
mkdir -p src
mkdir -p public
mkdir -p .github/workflows

# src directories
mkdir -p src/app
mkdir -p src/components
mkdir -p src/components/ui
mkdir -p src/components/sections
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/utils
mkdir -p src/types
mkdir -p src/styles
mkdir -p src/contexts
mkdir -p src/config

# public subdirectories (optional but common)
mkdir -p public/images
mkdir -p public/icons
mkdir -p public/fonts
mkdir -p public/videos

# docs directory (optional)
mkdir -p docs

# tests directory (optional)
mkdir -p __tests__
mkdir -p __tests__/unit
mkdir -p __tests__/integration

echo -e "${GREEN}✓ Core directories created${NC}"

# Create essential files in src/app
mv layout.tsx src/app/layout.tsx
mv page.tsx src/app/page.tsx
mv globals.css src/app/globals.css

echo -e "${GREEN}✓ App files created${NC}"

# Create sample component files
mv Navigation.tsx src/components/Navigation.tsx
mv Footer.tsx src/components/Footer.tsx
mv Button.tsx src/components/ui/Button.tsx

echo -e "${GREEN}✓ Component files created${NC}"

# Create library files
mv metadata.ts src/lib/metadata.ts
mv schemas.ts src/lib/schemas.ts
mv utils.ts src/lib/utils.ts

echo -e "${GREEN}✓ Library files created${NC}"

# Create root configuration files
# touch tsconfig.json
# touch next.config.js
# touch tailwind.config.ts
# touch postcss.config.js
# touch .eslintrc.json
# touch .prettierrc
# touch .gitignore
# touch .env.example
# touch package.json
# touch README.md

echo -e "${GREEN}✓ Configuration files created${NC}"

# Display folder structure
echo -e "\n${BLUE}📁 Folder Structure:${NC}\n"

cat << 'EOF'
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── actions.ts (create as needed)
│   │   └── api/ (create as needed)
│   │
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── ui/
│   │   │   └── Button.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesSection.tsx
│   │       └── ...
│   │
│   ├── hooks/
│   │   └── useForm.ts
│   │
│   ├── lib/
│   │   ├── metadata.ts
│   │   ├── schemas.ts
│   │   └── utils.ts
│   │
│   ├── utils/
│   │   └── (utility functions)
│   │
│   ├── types/
│   │   └── (TypeScript types)
│   │
│   ├── styles/
│   │   └── (additional CSS)
│   │
│   ├── contexts/
│   │   └── (React Context files)
│   │
│   └── config/
│       └── (configuration files)
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── videos/
│
├── docs/
│   └── (documentation)
│
├── __tests__/
│   ├── unit/
│   └── integration/
│
├── .github/
│   └── workflows/
│       └── (GitHub Actions)
│
├── Configuration Files:
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   ├── .eslintrc.json
│   ├── .prettierrc
│   ├── .gitignore
│   ├── .env.example
│   ├── package.json
│   └── README.md
EOF

echo -e "\n${GREEN}✅ Next.js folder structure created successfully!${NC}\n"

echo -e "${YELLOW}Next Steps:${NC}"
echo "1. cd to your project directory"
echo "2. Run: npm install"
echo "3. Organize your files into the created folders"
echo "4. Update configuration files as needed"
echo ""
echo -e "${YELLOW}Optional: Create additional folders as needed:${NC}"
mkdir -p src/app/api           # For API routes"
echo "  mkdir -p src/middleware        # For Next.js middleware"
echo "  mkdir -p src/modules           # For feature modules"
echo ""