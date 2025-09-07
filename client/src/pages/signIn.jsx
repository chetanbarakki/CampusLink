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
const SignIn = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ fontSize: "32px", fontWeight: "bold" }}>
          Sign-in
        </CardTitle>
        <CardDescription>
          <label htmlFor="Username"><b>Username: </b></label>
          <input type="text" id="Username" name="Username" />
          <br/>
          <label htmlFor="pwd"><b>Password: </b></label>
          <input type="password" id="pwd" name="pwd" />
        </CardDescription>
        <CardAction>
          <a href="https://www.google.com" target="_blank">
            <button><b>Forgot Password</b></button>
          </a>
        </CardAction>
      </CardHeader>
<p>Or Sign-In with</p>
        
      <CardContent>
       <a href="https://www.google.com" target="_blank" alt="Google">
          <button>          
            <img src="/images/google.png" alt="Google" style={{ verticalAlign: "middle", marginRight: "8px", width: "24px" }} />
         </button>
</a>
        {/* Facebook Button */}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <button>
            <img src="/images/facebook.png" alt="Facebook" style={{ verticalAlign: "middle", marginRight: "8px", width: "24px" }} />
            
          </button>
        </a>

        {/* Instagram Button */}
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <button>
            <img src="/images/insta.jpeg" alt="Instagram" style={{ verticalAlign: "middle", marginRight: "8px", width: "24px" }} />
            
          </button>
        </a>
      </CardContent>

      <CardFooter>
        <a href="https://www.google.com" target="_blank">
          <button>New to Campus Link |        <Link to="/sign-up" style={{ marginLeft: "5px", fontWeight: "bold" }}>
 <b>Join Now</b> </Link> </button>
        </a>
        
      </CardFooter>
    </Card>
  )
}

export default SignIn;
