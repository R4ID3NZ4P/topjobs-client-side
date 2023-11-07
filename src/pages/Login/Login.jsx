import { Helmet } from "react-helmet";
import titles from "../../titles/titles";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/googleicon.png";
import loginImage from "../../assets/login.jpg"

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(() => {
                toast("Signed in successfully");
                if(location.state) navigate(location.state)
                else navigate("/");
            })
            .catch(error => {
                if(error.code === "auth/invalid-login-credentials") toast("Invalid email or password!");
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
                <title>{titles.login}</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row justify-between w-full">
                <div className="text-center lg:text-left">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="ml-8 text-2xl my-2 font-bold text-primary">Login</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
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
                                placeholder="Password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white normal-case rounded-none">Login</button>
                        </div>
                        <h3 className="text-center my-2 text-sm">Or</h3>
                        <a className="btn btn-outline btn-primary rounded-none" onClick={handleGoogleLogin}><img src={googleIcon} alt="" className="w-10" /></a>
                        <p className="text-xs">Don&apos;t have an account? <Link state={location.state} to={"/register"} className="text-primary">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
