import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import googleIcon from "../../assets/googleicon.png";
import registerImage from "../../assets/register.jpg"

const Register = () => {
    const { user, register, googleLogin, update, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        const uppercaseError = /(?=.*[A-Z])/;
        const specialCharacterError = /(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
        const minLengthError = /^.{1,5}$/;
        
        if (minLengthError.test(password)) {
            toast("Password must be at least 6 characters long.");
        }

        else if (!uppercaseError.test(password)) {
            toast("Password must contain at least one uppercase letter.");
        }

        else if (!specialCharacterError.test(password)) {
            toast("Password must contain at least one special character.");
        }


        else register(email, password)
            .then(() => {
                toast("User successfully registered!");
                update(name, photo).then(() => {
                    toast("Please sign in with your new credentials!");
                    logout().then(() => {
                        navigate("/login", {state: location.state});
                    })
                });
            })
            .catch((error) => {
                if(error.code === "auth/email-already-in-use") toast("User already exists!");
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast("Successfully logged in!");
                if(location.state) navigate(location.state)
                else navigate("/");
            });
    }

    return (
        <div className="hero">
            <Helmet>
                <title>{titles.register}</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={registerImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="ml-8 text-2xl my-2 font-bold text-primary">Register</h1>
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="name"
                                placeholder="(Ex. https://www.example.com/xyz.jpeg)"
                                name="photo"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary text-white normal-case rounded-none">
                                Register
                            </button> */}
                            <input type="submit" value="Register" className="btn btn-primary text-white normal-case rounded-none" />
                        </div>
                        <h3 className="text-center my-2 text-sm">Or</h3>
                        <a className="btn btn-outline btn-primary rounded-none" onClick={handleGoogleLogin}><img src={googleIcon} alt="" className="w-10" /></a>
                        <p className="text-xs">
                            Already have an account?{" "}
                            <Link to={"/login"} className="text-primary">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
