import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SignIn = () => {
    const signInArr = [
        {
            email: "andrei.s@gmail.com",
            password: "asd123"
        },
        {
            email: "andrei.s1@gmail.com",
            password: "asd1233"
        },
        {
            email: "andrei.ss1@gmail.com",
            password: "asd125633"
        },
        {
            email: "andrei.s31@gmail.com",
            password: "asd12333"
        }
    ]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    );

    const changeEmail = (event) => {
        setEmail(event.target.value)
    };
    const changePassword = (event) => {
        setPassword(event.target.value)
    };



    const logIn = () => {
        let exist = false;

        signInArr.forEach((obj) => {
            if (obj.email === email && obj.password === password) {
                exist = true;
                setUser(
                    {
                        email: obj.email,
                        password: obj.password
                    }
                );
            }
        })
        setEmail("");
        setPassword("");

    }

    console.log(user);

    return user.email && user.password ? <h1>You are loged in</h1 > :
        <div>
            <h1>Sign In</h1>

            <TextField
                sx={{ margin: "5px" }}
                label="Email"
                color="primary"
                focused
                type="email"
                value={email}
                onChange={changeEmail}
            />
            <TextField
                sx={{ margin: "5px" }}
                label="Password"
                color="primary"
                focused
                type="password"
                value={password}
                onChange={changePassword}
            />
            <Button
                variant="outlined"
                // disabled={isButtonDisable()}
                size="large"
                sx={{ marginLeft: "20px", margin: "5px", height: "50%" }}
                onClick={logIn}
            >
                Log In
            </Button>
        </div>

}

export default SignIn