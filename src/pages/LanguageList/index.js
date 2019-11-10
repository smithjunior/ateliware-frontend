import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function LanguageList() {
  const languages = [
    { name: 'javascript', icon: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png' },
    { name: 'java', icon: 'https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Java.png' },
    { name: 'php', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9613CmT_7_4OPO8E2XI-c8lcUpkOt_Bfmu40SKUmRZlfff2t&s' },
    { name: 'shell', icon: 'https://miro.medium.com/max/600/1*FEE98iWinlZBYkxBAG8MvA.png' },
    { name: 'ruby', icon: 'https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/ruby-512.png' }
  ]
  return (
    <>
      <p>
        Project to list the most popular repositories by language ...
        <span role='img' aria-label='rocket'>🚀</span>
      </p>
      <ul className='language-list'>
        {languages.map(language =>
          (
            <li key={language.name}>
              <header style={{ backgroundImage: `url(${language.icon})` }} />
              <Link to={`/list/${language.name}`}><button className='btn'> {language.name}</button></Link>
            </li>
          )
        )}
      </ul>
    </>
  )
}
