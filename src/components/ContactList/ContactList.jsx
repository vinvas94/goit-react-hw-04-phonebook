const ContactList = ({ contacts, title, onDelete }) => {
  return (
    <div>
      <ul>
        {<h2>{title}</h2>}
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button
              onClick={() => onDelete(contact.id)}
              style={{ marginLeft: '20px', marginBottom: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
