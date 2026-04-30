const DEFAULT_ITEMS = [
  { label: 'Teléfono', value: '+34 985 123 456' },
  { label: 'Email', value: 'info@foodiediwco.com' },
  { label: 'Dirección', value: 'Calle Principal 123, 33001 Oviedo, Asturias' },
]

function ContactInfoCard({ title = 'O puedes contactarnos en:', items = DEFAULT_ITEMS }) {
  return (
    <div className="contact-info-card">
      <h3>{title}</h3>
      <div className="info-items">
        {items.map((item) => (
          <div key={item.label} className="info-item">
            <strong>{item.label}:</strong>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactInfoCard
