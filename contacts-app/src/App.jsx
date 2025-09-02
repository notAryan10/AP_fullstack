import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([])
  const [form, setForm] = useState({fullname: "", phoneno: "", email: ""})

  const API_URL = "http://localhost:3000/contacts"

  const loadcontacts() => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setContacts(data)
  }
 
}

export default App;