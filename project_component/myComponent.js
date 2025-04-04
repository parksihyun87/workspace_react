// import React, { useState } from "react";

const ContactList = () => {
//   const [contacts, setContacts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [newContact, setNewContact] = useState({ name: "", password: "" });

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     setNewContact({ ...newContact, [e.target.name]: e.target.value });
//   };

//   const handleAddContact = () => {
//     if (newContact.name && newContact.password) {
//       setContacts([...contacts, newContact]);
//       setNewContact({ name: "", password: "" });
//     }
//   };

  return (
    <div style={{ margin: "0 auto", textAlign: "center", width: "50%" }}>
      <h1>연락처</h1>
      <div>
        <input type="text" value={search} onChange={handleSearch} placeholder="검색" />
        <button>검색</button>
      </div>
      <div>
        <h4>연락처 추가하기</h4>
        <label>이름</label>
        <input type="text" name="name" value={newContact.name} onChange={handleInputChange} />
        <br />
        <label>비밀번호</label>
        <input type="password" name="password" value={newContact.password} onChange={handleInputChange} />
        <br />
        <button onClick={handleAddContact}>추가</button>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h4>연락처 목록</h4>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>{contact.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
