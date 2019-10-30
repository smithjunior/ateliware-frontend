import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import LanguageList from './pages/LanguageList'
import RepositoriesList from './pages/RepositoriesList'
import RepositoryDetail from './pages/RepositoryDetail'

export default function Routes() {
  return ( <
    BrowserRouter >
    <
    Switch >
    <
    Route path = '/'
    exact component = {
      LanguageList
    }
    /> <
    Route path = '/list/'
    exact component = {
      RepositoriesList
    }
    /> <
    Route path = '/repository/'
    exact component = {
      RepositoryDetail
    }
    /> <
    /Switch> <
    /BrowserRouter>
  )
}
