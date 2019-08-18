import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles'

// Pages
import { Home } from './pages/home'
import { About } from './pages/about'
import { Proyectos } from './pages/proyectos'
import { NotFound404 } from './pages/404'

// Mains components
import BurgerMenu from './components/BurgerMenu/index'
import { Footer } from './components/Footer'

// Pendiente continuar con react helmet

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <BurgerMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Proyectos} />
        <Route component={NotFound404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
