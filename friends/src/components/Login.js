import React,{useState} from "react";
import api from "../utils/api"

export default function Login(props){
    const [error, setError] = useState(
        ""
    )
    const [data, setData] = useState({
        username:"",
        password:""
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(data);
        api()
            .post("/api/login", data)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/friends")
            })
            .catch(err => {
                console.log(err);
                setError(err);
            })
    }

    return(
    <div className ='container'>
    <div className = "container__form container--signin">

    <form onSubmit = {handleSubmit} id="form1" class="form">
        <h2 className = "form__title">Login</h2>
          {error && <div className = "error">{error}</div>}
          <label>
                Username
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    className="input"
                >
                </input>
          </label>
          <label>
                Password
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="input">
                </input>
          </label>
          <button type='submit'
                className="btn">
              Sign In
          </button>
      </form>
    </div>
    </div>
    )
}