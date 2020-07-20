import React from 'react';
import 'firebase/database';

const OnDark = () => {
  const codeToRunOnClient = `
    if (localStorage.getItem('dark') || (new Date().getHours() >= 22 || new Date().getHours() <= 6)) {
      document.body.classList.add('dark')
      window.localStorage.setItem('dark', 'true')
    }
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<OnDark key='isDarkTheme' />)
}