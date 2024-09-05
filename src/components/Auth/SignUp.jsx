import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import midlogo from "../../assets/midlogo.png";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.svg";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signUp, googleSignIn, updateUserProfile } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const showPassword = () => {
    setPassword(!password);
  };
  const from = location.state?.from?.pathname || '/';
  const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("sign up success full");
        navigate(from, { replace: true });
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            reset();
          })
          .catch((error) => {
            console.error(error);
            toast.error("Update profile Unsuccess full");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("sign up Unsuccess full");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);

        navigate(from, { replace: true });

        toast.success("google SignIn successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error("google SignIn successfully Unsuccessfully");
      });
  };
  return (
    <div className="flex w-full mb-10 max-w-sm mx-auto my-10 h-[700px]  overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="text-center space-y-2">
          <h2 className="text-4xl">Welcome To</h2>
          <img src={logo} alt="" className="md:w-[150px] mx-auto" />
          <p>Enter your Credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="capitalize">
          <div className="md:flex justify-between gap-5">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-black ">
                name
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  Name is required
                </span>
              )}
            </div>
            {/* for img */}
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-black">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="url"
                name="photoURL"
                placeholder="Photo URL"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.photoURL && (
                <span className="text-red-600 font-semibold">
                  Photo URL is required
                </span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-black ">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              name="email"
              type="email"
              placeholder="Email Address"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <span className="text-red-600 font-semibold">
                email is required is required
              </span>
            )}
          </div>

          <div className="mt-4 relative">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-black ">
                Password
              </label>
            </div>

            <input
              {...register("password", { required: true })}
              name="password"
              autoComplete="off"
              placeholder="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg   dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type={password ? "text" : "password"}
            />
            {errors.password && (
              <span className="text-red-600 font-semibold">
                password is required is required
              </span>
            )}
            {/* password icon form react icon */}
            <div
              className="flex justify-end p-1 absolute top-10 right-5"
              onClick={showPassword}
            >
              {password ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="flex justify-end ">
            <a href="" className="text-blue-800">
              Forgot Password
            </a>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" required />{" "}
            <p className="pl-2"> I agree to the Terms & Policy</p>
          </div>

          <div className="mt-6 gap-5 space-y-3">
            {/*  */}
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign up
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="#"
            className="text-xs text-center text-black uppercase  hover:underline"
          >
            or
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <div className="flex items-center justify-between gap-5">
          {/* google sign in */}
          <div
            onClick={handleGoogleSignIn}
            href="#"
            className="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <FcGoogle />
            </div>

            <p className="w-5/6 px-4 py-3  text-center hover:text-white text-[10px]">
              Sign in with Google
            </p>
          </div>
          {/* for apple */}
          <div
            href="#"
            className="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <FaApple />
            </div>

            <p className="w-5/6 px-4 py-3  text-center hover:text-white text-[10px]">
              Sign in with Apple
            </p>
          </div>
        </div>

        <div className="flex items-center py-5 text-center justify-center w-full ">
          <p className="text-center">Have an account? </p>
          <Link to="/Login" className="text-blue-800">
            Login
          </Link>
        </div>
      </div>
      {/* for img */}
      <div className="hidden bg-cover lg:block lg:w-1/2 char object-cover bg-no-repeat rounded-md ">
        <div className="flex flex-col justify-center items-center text-center p-5 pt-52">
          <img src={midlogo} alt="" />
          <p className="text-gray-300 ">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
