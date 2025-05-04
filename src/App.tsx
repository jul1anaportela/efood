import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import AppLayout from './AppLayout'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
