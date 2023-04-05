import * as React from "react";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userRegistration, setuserRegistration] = React.useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    confPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRegistration);
    setuserRegistration({
      name: "",
      surname: "",
      email: "",
      username: "",
      password: "",
      confPassword: "",
    });
    navigate("/");
  };
  return (
    <div>
    
      <Paper
        elevation={3}
        sx={{ minWidth: "275px", margin: "20px", padding: "15px" }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems={"center"}>
            <Grid item>
              <Typography variant="h4" marginY={2}>
                Registration Details
              </Typography>
            </Grid>
            <Grid container item spacing={2} justifyContent={"center"}>
              <Grid item>
                <TextField
                  required
                  id="name"
                  label="Name"
                  value={userRegistration.name}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      name: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="surname"
                  label="Surname"
                  value={userRegistration.surname}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      surname: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>

            <Grid container item spacing={2} justifyContent={"center"}>
              <Grid item>
                <TextField
                  required
                  id="email"
                  label="Email"
                  placeholder="name@example.com"
                  type="email"
                  value={userRegistration.email}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      email: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="username"
                  label="Username"
                  value={userRegistration.username}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      username: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item spacing={2} justifyContent="center">
              <Grid item>
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  helperText="Max 10 characters"
                  value={userRegistration.password}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      password: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="password"
                  label="Confirm Password"
                  type="password"
                  helperText="Max 10 characters"
                  value={userRegistration.confPassword}
                  onChange={(e) =>
                    setuserRegistration({
                      ...userRegistration,
                      confPassword: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid item>
              <Button   variant="contained"
                            type="submit"
                            sx={{
                                margin: "1rem 0 ",
                                borderRadius: "50px",
                                backgroundColor:"#6946c6"
                            }}>
                Register Now
              </Button>
            </Grid>
            <Grid item>
              <Link to={"/"}>
                Already have an account? Click here to login.
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};
export default Signup;
