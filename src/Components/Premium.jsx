import { useNavigate } from "react-router-dom";
export function Premium(props){
    const {user} = props
    const history = useNavigate()
    const requestPremium = () => {
        if (!user) alert("Please login first");
        
        const data = {
          "email":user.email,
        }
        const getRequestOptionPost = {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "x-auth-token":user.token,
          },
          body:JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_DOMAIN}user/api/requetsed`,getRequestOptionPost)
            .then(async Response => {
              if(Response.ok){
                history("/dashboard")
              }
              else if(Response.status === 403)
              {
                 alert("Already requested!!")
                 history("/dashboard")
              }
              else if(Response.status === 500 || Response.status === 400)
              {
                alert("Internal Error or Prermium User!!")
                history("/dashboard")
              }
            })
      };

      const cancelPremium = () => {
        if (!user) alert("Please login first");
        
        const data = {
          "email":user.email,
        }
        const getRequestOptionPost = {
          method:"POST",
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "x-auth-token":user.token,
          },
          body:JSON.stringify(data)
        }
        fetch(`${process.env.REACT_APP_DOMAIN}user/api/cancel`,getRequestOptionPost)
            .then(async Response => {
              if(Response.ok){
                history("/dashboard")
              }
              else if(Response.status === 500 || Response.status === 400)
              {
                alert("Internal Error or Prermium User!!")
                history("/dashboard")
              }
            })
      };
    return(<div className="antialiased bg-gray-100 py-4" style={{display:"flex",justifyContent:"center",textAlign:"center",height:"500px"}}>
        
        {((user&&!user.Checkrequest)&&!user.Premium)&&<button className="py-4 px-14 py-2 px-6 rounded hover:shadow-md btn-blue" onClick={e=> requestPremium()}>Request for Premium</button>} 
        {((user&&user.Checkrequest)&&!user.Premium)&&<div>
            <h2>
            Already Requested!!
            </h2>
        </div>}
        {((user&&!user.Checkrequest)&&user.Premium)&&<div className="mt-10">
            <div>
                Already Premium user!!
            </div>
            <button className="py-4 px-14 py-2 px-6 rounded hover:shadow-md btn-red" onClick={e => cancelPremium()}>Cancel Premium</button>
        </div>}
        
        
    </div>)
}