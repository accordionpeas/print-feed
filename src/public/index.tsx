import { hydrateRoot } from 'react-dom/client'
import App from './app'

const container = document.querySelector('#app')

hydrateRoot(container!, <App />)
