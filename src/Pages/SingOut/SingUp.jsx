import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const SingUp = () => {

    const { handelCreateUser } = useContext(AuthContext)

    const HandelRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)

        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)
        // create user
        handelCreateUser(email, password)
            .then(result => {
                console.log('user create', result)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>
            <div className="w-2/5 mx-auto md:w-2/4 mx-auto">

                <div className=" mb-10">
                    <h2 className="text-3xl text-center">Please Registration !</h2>
                    <div className="card flex-shrink-0 ">
                        <form onSubmit={HandelRegistration} className="card-body">
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
                        <p>You have account? please <Link className="text-indigo-700 underline " to="/signIn">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;