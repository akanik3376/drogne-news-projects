import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const SignIn = () => {
    const { loginUser } = useContext(AuthContext)

    const HandelLogin = (e) => {

        // stop reloading page 
        e.preventDefault();

        // form defiend 
        const form = new FormData(e.currentTarget)

        // get value
        const email = form.get('email');
        const password = form.get('password');

        // login user
        loginUser(email, password)
            .then(res => {
                console.log('user login', res)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>



            <div className="hero min-h-screen bg-base-200">

                <div className="">
                    <h2 className="text-3xl text-center">Please Login !</h2>
                    <div className="card flex-shrink-0 ">
                        <form onSubmit={HandelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label mt-3">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>Don`t have account? please <Link className="text-indigo-700 underline" to="/signUp">Register</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;