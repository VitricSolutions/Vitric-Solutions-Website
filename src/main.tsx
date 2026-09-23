import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ContactProvider } from "./Context/Context"
import { AssessmentProvider } from "./Context/AssessmentContext"
import { DemoProvider } from "./Context/DemoContext"
import { PartnerProvider } from "./Context/PartnerContext"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactProvider>
      <AssessmentProvider>
        <DemoProvider>
          <PartnerProvider>
            <App />
          </PartnerProvider>
        </DemoProvider>
      </AssessmentProvider>
    </ContactProvider>
  </StrictMode>
)
