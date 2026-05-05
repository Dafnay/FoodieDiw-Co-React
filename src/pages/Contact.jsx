import { useEffect } from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfoCard from '../components/contact/ContactInfoCard'

function Contact() {
  useEffect(() => { document.title = 'Contacto | Foodie Diw&Co' }, [])
    return (
      <section className="contact-wrapper">
        <ContactHeader />                                                                                                                                                                                                                                                                              
        <div className="contact-container">
          <ContactForm />                                                                                                                                                                                                                                                                              
          <div className="contact-image">
            <img src="/assets/question.png" alt="Contacto" />
          </div>                                                                                                                                                                                                                                                                                       
        </div>
        <ContactInfoCard />                                                                                                                                                                                                                                                                            
      </section>  
    )
  }

export default Contact