import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/Login.css"

const Login = () => {

    const {handleSubmit, register, reset} = useForm()
    const [isLogged, setIsLogged] = useState(false)

    const submit = data => {
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
            .then(res => {
                    console.log(res.data)
                    localStorage.setItem("token", res.data.data.token)
                    setIsLogged(true)
                })
            .catch(err => console.log(err))
    }

    useEffect(() => {
      if(localStorage.getItem("token")){
        setIsLogged(true)
      }else{
        setIsLogged(false)
      }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLogged(false)
    }

    console.log(isLogged);
    

    if(isLogged){
        return(
            <div className="Logout">
                <div className="logout__container">
                    <h2 className='logout__name'>User Logged</h2>
                    <button className='logout__button' onClick={handleLogout} >Log Out</button>
                </div>
            </div>
        )
    }

  return (
    <div className='Login'>
        <form onSubmit={handleSubmit(submit)} action="">
            <div className="input-item">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")}/>
            </div>
            <div className="input-item">
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} />
            </div>
            <button>Loggin</button>
        </form>
    </div>
  )
}

export default Login