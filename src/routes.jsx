import { Route, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { About, Contact, Webinar, WebinarAdmin, UGNEET, PGNEET, Login, SignUp, PrivacyPolicy, PlanCompare } from './Pages'
import { EmailVerification, ResetPassword, PaymentGateway } from "../src/components/index"
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/password-reset",
    element: <ResetPassword />,
  },
  {
    path: "/payment-gateway",
    element: <PaymentGateway />,
  },
  {
    path: 'About',
    element: <About />,
  },
  {
    path: 'OTP',
    element: <EmailVerification />,
  },
  {
    path: 'Contact',
    element: <Contact />,
  },
  {
    path: 'Webinar',
    element: <Webinar />,
  },
  {
    path: 'WebinarAdmin',
    element: <WebinarAdmin />,
  },
  {
    path: 'PremiumDetail',
    element: <PlanCompare />,
  },
  {
    path: 'UGNEET',
    element: <UGNEET />,
  },
  {
    path: 'PGNEET',
    element: <PGNEET />,
  },
  {
    path: 'Login',
    element: <Login />,
  },
  {
    path: 'SignUp',
    element: <SignUp />,
  },
  {
    path: 'LegalTerms',
    element: <PrivacyPolicy />,
  },
]

const router = createBrowserRouter(routes)

export default router