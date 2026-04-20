import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Contact from '../pages/Contact.jsx'
import Faqs from '../pages/Faqs.jsx'
import Cart from '../pages/Cart.jsx'
import Starters from '../pages/Starters.jsx'
import Mains from '../pages/Mains.jsx'
import Desserts from '../pages/Desserts.jsx'
import Drinks from '../pages/Drinks.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="starters" element={<Starters />} />
          <Route path="mains" element={<Mains />} />
          <Route path="desserts" element={<Desserts />} />
          <Route path="drinks" element={<Drinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
