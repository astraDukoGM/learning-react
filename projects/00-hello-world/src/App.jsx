import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { XFollowCard } from './XFollowCard'

export function App() {
  const users = [
    { userName: "midudev", name: "Miguel Ángel Durán", initialIsFollowing: true },
    { userName: "jonamunoz_dev", name: "Jonathan Muñoz" },
    { userName: "freddier", name: "Freddy Vega" }
  ];

  return (
    <section className='App'>
      {users.map((user, index) => (
        <XFollowCard
          key={index}
          userName={user.userName}
          name={user.name}
          initialIsFollowing={user.initialIsFollowing}
        />
      ))}
    </section>
  );
}


