#!/bin/bash

# Base directory
mkdir -p src

# Components directory and subdirectories
mkdir -p src/components/layout
touch src/components/layout/Header.jsx
touch src/components/layout/Footer.jsx
touch src/components/layout/Navigation.jsx

mkdir -p src/components/common
touch src/components/common/ServiceBox.jsx
touch src/components/common/ContactForm.jsx
touch src/components/common/QuoteForm.jsx

mkdir -p src/components/ui
touch src/components/ui/Button.jsx
touch src/components/ui/Card.jsx

# Pages directory and subdirectories
mkdir -p src/pages
touch src/pages/Home.jsx
touch src/pages/About.jsx
touch src/pages/Contact.jsx
touch src/pages/QuickQuote.jsx

mkdir -p src/pages/services
touch src/pages/services/SecurityServices.jsx
touch src/pages/services/InvestigationServices.jsx

# Styles directory
mkdir -p src/styles
touch src/styles/globals.css

# Utils directory
mkdir -p src/utils
touch src/utils/constants.js

# Assets directory
mkdir -p src/assets/images

# Main App.jsx file
touch src/App.jsx

echo "File structure created successfully!"

