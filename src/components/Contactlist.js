import React from 'react';
import Contact from './Contact'

const users = [
    {
      name: 'Charles',
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
      online: true
    },
    {
      name: 'Robin',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
      online: true
    },
    {
      name: 'Léo',
      avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
      online: false
    },
    {
      name: 'Eric',
      avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
      online: false
    },
    {
      name: 'Lea',
      avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
      online: true
    }
  ];

  const ContactList = () => (
      <div>
          {users.map(item => (
              <Contact {...item} />
          ))}
      </div>
  )
export default ContactList