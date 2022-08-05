import { createContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { useNavigate} from "react-router-dom"
export default function Dashboard(){
    const {user} = createContext(LoginContext)
    const history = useNavigate()
    return(<div className="antialiased bg-gray-100">
        {user&&(user.Emailquantity<15)&&<div class="text-white text-center bg-red-400 py-2 font-medium">
        Uh-oh...You have {user.Emailquantity} credits left. <a class="font-regular underline" href="https://warmer.ai/settings/plan">Upgrade now!</a>
        </div>}
        
        <div className="ml-10">
                <h2 className="text-4xl text-black font-medium ">
                    Home
                </h2>
        </div>
        <div class="flex justify-center mt-10">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <div class="p-6 justify-center text-center">
            <h5 class="text-gray-900 text-xl font-medium mb-2 mt-5">Create New Email</h5>
            <p class="text-gray-700 text-base mb-8">
            Let's help you build a high-converting email using 1-1 personalized info.
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={e => history("/new")}>Create New Email</button>
            </div>
        </div>
        </div>
    </div>)
}