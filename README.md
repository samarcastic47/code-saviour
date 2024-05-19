# Code Saviour

## Overview

Code Saviour is an application designed to help competitive programmers search for problems on Codeforces by name. It's a convenient solution for those who need to find specific problems quickly, acting as a Codeforces-question-search app.

## Features

- 🔍 **Search by Problem Name:** Easily find Codeforces problems by name, eliminating the hassle of manual searching.
- 📈 **Sorting Functionality:** Sort problems alphabetically for quick navigation.
- 🎨 **Stylish UI:** Sleek and intuitive design, ensuring a seamless user experience.
- 🌐 **Responsive Design:** Optimized for both desktop and mobile devices.
- ⚡ **Fast and Efficient:** Built with Vite for rapid development and optimized performance.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Recoil:** State management library for React.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **MUI (Material-UI):** A popular React UI framework for building responsive, accessible, and customizable design systems.
- **Vite:** A build tool that provides a faster and leaner development experience.
- **Vercel:** A platform for static sites and frontend frameworks, optimized for performance and simplicity.  

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/code-saviour.git
   cd code-saviour

2. Install the dependencies:
   ```bash
   npm install

### Usage

1. Start the development server:
   ```bash
   npm run dev

2. Open your browser and navigate to "http://localhost:5173".

### Important Note About Environment Variable

The environment variable is added for demonstration purposes and isn't actually required. To set up the project correctly, replace the following in `atoms.jsx`:

Change:
```javascript
import.meta.env.VITE_CODE_SAVIOUR_API_URL
```
to:
```javascript
"https://codeforces.com/api/problemset.problems"
```
### License
Distributed under the MIT License. See [License](https://github.com/samarcastic47/code-saviour/blob/main/LICENSE) for more information. 
