import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Form from './form'
import Registrationform from './registrationform'

import { ChakraProvider } from '@chakra-ui/react' // Rename the Switch import from Chakra UI
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Rename the Switch import from react-router-dom

const root = ReactDOM.createRoot(document.getElementById('root'))
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
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
)
