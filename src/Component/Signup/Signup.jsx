import { useFormik } from "formik";
import { SignupSchemas } from "../../Schema";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Signup() {
  const { values, touched, handleBlur, handleSubmit, handleChange, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchemas,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);
  function checkallfields() {
    return (
      values.name && values.email && values.password && values.confirm_password
    );
  }

  return (
    <div className="w-4/5  mx-auto my-12 border flex rounded-md bg-white">
      <div className="w-1/2 p-20 border">
        <h1 className="text-xl text-red-900 font-extrabold mx-3">Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="name"
              className="w-full text-xs text-red-900 font-bold"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-gray-400 outline-none"
            />
            {errors.name && touched.name ? (
              <p className="text-xs text-red-800">{errors.name}</p>
            ) : null}
          </div>
          <div className=" flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="email"
              className="w-full text-xs text-red-900 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-gray-400 outline-none"
            />
            {errors.email && touched.email ? (
              <p className="text-xs text-red-800">{errors.email}</p>
            ) : null}
          </div>
          <div className=" flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="password"
              className="w-full text-xs text-red-900 font-bold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-gray-400 outline-none"
            />
            {errors.password && touched.password ? (
              <p className="text-xs text-red-800">{errors.password}</p>
            ) : null}
          </div>
          <div className=" flex flex-col p-2 border text-sm m-3">
            <label
              htmlFor="confirm_password"
              className="w-full text-xs text-red-900 font-bold"
            >
              Confirm_password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-white text-gray-400 outline-none"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="text-xs text-red-800">{errors.confirm_password}</p>
            ) : null}
          </div>

          <div className="flex justify-center items-center">
            <button
              disabled={!checkallfields()}
              type="submit"
              className={`${
                !checkallfields()
                  ? "bg-[#ccc] cursor-not-allowed "
                  : "bg-[#55311c] cursor-pointer"
              } w-1/3`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="rounded-tr-md rounded-br-md">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-full rounded-tr-md rounded-br-md"
        />
      </div>
    </div>
  );
}
export default Signup;
