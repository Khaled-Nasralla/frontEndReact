import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SignUpPage} from "./components/page/sign-up-page/SignUpPage.tsx";
import {EPaths} from "./enums/EPaths.ts";
import '@styles/global.sass'
import '@styles/mixins.sass'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from "./components/page/home-page/HomePage.tsx";
const router = createBrowserRouter([
    {
        path: EPaths.SignUp,
        element: <SignUpPage/>,


    },{
       path:EPaths.HomaPage,
        element: <HomePage/>
    }

])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
