import React from "react"
export function Admin(props){
    const {user} = props
    const [alldata,setAlldata] = React.useState([])

    const approver = (value) =>{
        console.log(value)
        const data = {
            "email":value,
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
          fetch(`${process.env.REACT_APP_DOMAIN}user/api/approve`,getRequestOptionPost)
              .then(async Response => {
                if(Response.ok){
                const json = await Response.json()
                  setAlldata(json)
                }
                else if(Response.status === 500 || Response.status === 400)
                {
                  alert("Internal Error")
                }
              })
    }
    React.useEffect(() =>{
        if(user){
            const getRequestOptionPost = {
                method:"GET",
                headers:{
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin":"*",
                  "x-auth-token":user.token,
                },
              }
              fetch(`${process.env.REACT_APP_DOMAIN}user/api/getrequestdata`,getRequestOptionPost)
                  .then(async Response => {
                    if(Response.ok){
                      const json = await Response.json() 
                      setAlldata(json)
                    }
                  })
        }
    },[user])
    return(<div className="antialiased bg-gray-100 py-4" style={{display:"flex",justifyContent:"center",textAlign:"center",height:"500px"}}>
            {alldata.length>0?
            
            alldata.map((e,i) =>{
                return(<div>
                 <button className="py-4 px-14 py-2 px-6 rounded hover:shadow-md btn-blue" onClick={e1 => approver(e.email)}>Request from {e.email}</button>
                </div>)
            }):"No data found!!!!"}
        </div>)
}