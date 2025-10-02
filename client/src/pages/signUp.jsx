import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Link} from "react-router-dom"

const SignUp = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ fontSize: "32px", fontWeight: "bold",display: "flex", gap: "15px", justifyContent: "center"  }}>
          Sign-Up
        </CardTitle>
        
        <CardDescription>
          <label htmlFor="Email"><b>Email: </b></label>
          <input type="text" id="Email" name="Email" />
          <br/>
          <label htmlFor="Username"><b>Username: </b></label>
          <input type="text" id="Username" name="Username" />
          <br/>
          <label htmlFor="pwd"><b>Password: </b></label>
          <input type="password" id="pwd" name="pwd" />
        </CardDescription>
      </CardHeader>

      <p>Or Sign-Up with</p>
      <CardContent style = {{ display: "flex", gap: "15px", justifyContent: "center" }}>
        {/* Social Buttons */}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <button>
            <img src="/images/google.png" alt="Google" style={{ width: "24px" }} />
          </button>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <button>
            <img src="/images/facebook.png" alt="Facebook" style={{ width: "24px" }} />
          </button>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <button>
            <img src="/images/insta.jpeg" alt="Instagram" style={{ width: "24px" }} />
          </button>
        </a>
      </CardContent>

      <CardFooter>
        {/* ✅ Link to Sign-In Page */}
        <p>Already have an account?  
          <Link to="/sign-in" style={{ marginLeft: "5px", fontWeight: "bold" }}>
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

export default SignUp
