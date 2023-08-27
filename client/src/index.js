import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './form';
import Registrationform from './registrationform';

import { ChakraProvider } from '@chakra-ui/react'; // Rename the Switch import from Chakra UI
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Rename the Switch import from react-router-dom
import Dashboard from './Components/Sidebar/Screens/DashboardScreen';
import NavHoverBox from './Components/Sidebar/NavHover';
import FrontendInterviewQuestionsScreen from './Components/Sidebar/Screens/FrontendScreen';
import HtmlCrashCourseScreen from './Components/Sidebar/Screens/HtmlScreen';
import CssCrashCourse from './Components/Sidebar/Screens/CssCrashCourse';
import JavaScriptCrashCourse from './Components/Sidebar/Screens/JavaScriptCrashCourse';
import ReactCrashCourse from './Components/Sidebar/Screens/ReactCrashCourse';
import WebDevkeyNotes from './Components/Sidebar/Screens/WebDevkeyNotes';
import FrontEndQuiz from './Components/Sidebar/Screens/FrontEndQuiz';
import Balance from './Components/Sidebar/Screens/Balance';
import Settings from './Components/Sidebar/Screens/Settings';
import axios from 'axios';
axios.defaults.baseURL ='http://localhost:8000';
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        {/* <Route path="/" element={<HomePage />} />
          <Route path="/next-page" element={<NextPage />} /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
          <Route path="/registrationform" element={<Registrationform />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/FrontendInterviewQuestionsScreen"
            element={<FrontendInterviewQuestionsScreen />}
          />
          <Route path="/HTMLCrashCourse" element={<HtmlCrashCourseScreen />} />
          <Route path="/CssCrashCourse" element={<CssCrashCourse />} />
          <Route
            path="/JavaScriptCrashCourse"
            element={<JavaScriptCrashCourse />}
          />
          <Route path="/ReactCrashCourse" element={<ReactCrashCourse />} />
          <Route path="/WebDevkeyNotes" element={<WebDevkeyNotes />} />
          <Route path="/FrontEndQuiz" element={<FrontEndQuiz />} />
          <Route path="/Balance" element={<Balance />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Logout" element={<App />} />
          <Route path="/" element={NavHoverBox} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
