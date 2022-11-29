import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";



import { Login } from './pages/Login'
import { SegundaAula } from './lessons/SegundaAula'
import { TerceiraAula } from './lessons/TerceiraAula'
import { QuartaAula } from './lessons/QuartaAula'
import { QuintaAula } from './lessons/QuintaAula'
import { OitavaAula } from "./lessons/OitavaAula"
import { SetimaAula } from './lessons/SetimaAula'
import { DHGames } from './pages/DHGames'
import { DecimaQuartaAula } from "./lessons/DecimaQuartaAula"
import { DecimaQuintaAula } from "./lessons/DecimaQuintaAula"
import { DecimaTerceiraAula } from "./lessons/DecimaTerceiraAula";
import { ThemeProvider } from "./hooks/useTheme";
import { Configurations } from "./pages/Configurations";
import { ToDo } from "./pages/ToDo"


function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        { path: 'segunda-aula', element: <SegundaAula /> },
        { path: 'terceira-aula', element: <TerceiraAula /> },
        { path: 'quarta-aula', element: <QuartaAula /> },
        { path: 'quinta-aula', element: <QuintaAula /> },
        { path: 'setima-aula', element: <SetimaAula /> },
        { path: 'oitava-aula', element: <OitavaAula /> },
        { path: 'decima-terceira-aula', element: <DecimaTerceiraAula /> },
        { path: 'decima-quarta-aula', element: <DecimaQuartaAula /> },
        { path: 'decima-quinta-aula/:id', element: <DecimaQuintaAula /> },
        { path: 'configurations', element: <Configurations /> },
        { path: 'to-do', element: <ToDo /> },
      ]
    }
  ])

  return (
    <>
      {/* <Login /> */}
      {/* <SegundaAula /> */}
      {/* <TerceiraAula /> */}
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </>
  )

}

export default App