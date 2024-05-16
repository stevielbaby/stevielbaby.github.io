const fs = require('fs');
const path = require('path');

const baseDir = '/Users/steviel/stevielbaby.github.io/my-react-app';

const directories = [
  'public/assets/images',
  'src/components/common',
  'src/components/auth',
  'src/components/dashboard',
  'src/components/portal',
  'src/contexts',
  'src/hooks',
  'src/layouts',
  'src/pages',
  'src/services',
  'src/styles/components',
  'src/utils'
];

const files = {
  'src/components/common/Header.js': `import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My React App</h1>
    </header>
  );
};

export default Header;
`,
  'src/contexts/AuthContext.js': `import React, { createContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getCurrentUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
`,
  'src/pages/Home.js': `import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <h2>Welcome to the Home Page</h2>
    </MainLayout>
  );
};

export default Home;
`,
  'src/App.js': `import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
`,
  '.gitignore': '',
  'package.json': `{
  "name": "my-react-app",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
`,
  'README.md': '# My React App',
  'src/index.js': `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`,
  'src/setupTests.js': '',
  'src/styles/globals.css': `body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
`,
};

function createDirectories(baseDir, directories) {
  directories.forEach((dir) => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created directory: ${fullPath}`);
    }
  });
}

function createFiles(baseDir, files) {
  Object.keys(files).forEach((file) => {
    const fullPath = path.join(baseDir, file);
    fs.writeFileSync(fullPath, files[file]);
    console.log(`Created file: ${fullPath}`);
  });
}

createDirectories(baseDir, directories);
createFiles(baseDir, files);

console.log('Directory structure created successfully.');
