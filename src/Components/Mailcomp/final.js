import { createContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
export function Final(props){
    const {email,emailScore} = props
    return(<>
        {email&&emailScore&&<div class="bg-white overflow-hidden rounded-lg mt-4 shadow font-lg">
            <div class="px-4 py-5 sm:p-6" style={{minHeight: "350px"}}>
                    {Object.values(email).map(e => {
                         return({e})
                    })}
                    {Object.keys(emailScore).map(e => {
                         return(<div>
                            {e}
                            {emailScore[e]}
                         </div>)
                    })}
            </div>
    </div>}
    </>
    )
}