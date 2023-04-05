import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {UserContext} from "../../store/user-context";

const Login = () => {
    const navigate=useNavigate();
    const { login } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const onSubmitHandler = (e) => {
       e.preventDefault();
       login(userInfo.email);
       setUserInfo({email: "",password: "",})
       navigate("/dashboard");
       console.log("value",userInfo)

    };

    const onChangeHandler = ({ target: { name, value } }) => {
        let temp = { ...userInfo };
        temp[name] = value;
        setUserInfo(temp);
        console.log(temp)
    };

    return (
        <div>
            <Card
                sx={{
                    width: "25vw",
                    height: "50vh",
                    margin: "10% 38%",
                    borderRadius: "10px",
                    boxShadow: "0.5px 0.5 #888888",
                    backgroundColor: "##f3f5f4",
                }}
            >
                <div style={{ marginLeft: "1rem" }}>
                    <h2>Login</h2>
                    <ValidatorForm onSubmit={onSubmitHandler}>
                        <TextValidator
                            sx={{ marginBottom: "1rem", width: "90%" }}
                            variant="outlined"
                            size="small"
                            label="User name"
                            onChange={onChangeHandler}
                            type="text"
                            name="email"
                            value={userInfo.email}
                            validators={["required"]}
                            errorMessages={[
                                "this field is required",
                                //'email is not valid',
                            ]}
                        />
                        <TextValidator
                            sx={{ marginBottom: "1rem", width: "90%" }}
                            label="Password"
                            variant="outlined"
                            size="small"
                            onChange={onChangeHandler}
                            name="password"
                            type="password"
                            value={userInfo.password}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />

                        {/* {message && (
                                    <Paragraph sx={{ color: textError }}>
                                        {message}
                                    </Paragraph>
                                )} */}

                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{
                                margin: "1rem 0",
                                width: "90%",
                                borderRadius: "50px",
                                backgroundColor:"#6946c6"
                            }}

                        >
                            Login
                        </Button>
                    </ValidatorForm>
                </div>
            </Card>
        </div>
    );
};

export default Login;