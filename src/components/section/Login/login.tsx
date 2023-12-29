import HeaderWithLogoOnly from "../../other/header/headerWithLogoOnly";

function LoginComponent() {
  return (
    <div className="mt-20 sm:mt-32">
      <div className="hidden sm:block">
        <HeaderWithLogoOnly />
      </div>
      <div className="card sm:w-card sm:m-auto sm:px-16 sm:pt-10 sm:pb-20">
        <div className="w-[118px] h-6 m-auto mb-4">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="email"
            className="text-base font-bold text-t-black-dark2 sm:text-lg"
          >
            Email
          </label>
          <img
            src="img/mail.svg"
            alt="Email Icon"
            className="absolute left-3 top-1/2  w-5 h-5 mt-[2px]"
          />

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full pl-10 h-9 text-sm pr-3 rounded-md bg-gray-light text-t-black-dark2 sm:h-11 sm:pl-11"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="text-base font-bold text-t-black-dark2 sm:text-lg"
          >
            Password
          </label>
          <img
            src="img/lock.svg"
            alt="Lock Icon"
            className="absolute left-3 top-1/2  w-5 h-5 mt-[2px]"
          />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full pl-10 h-9 text-sm pr-3 rounded-md bg-gray-light text-t-black-dark2 sm:h-11 sm:pl-11"
          />
          <img
            src="img/hide.svg"
            alt="Hide Icon"
            className="absolute right-3 top-1/2 w-5 h-5 mt-[2px]"
          />
        </div>
        <div className="flex justify-between items-center my-3 sm:my-4">
          <div>
            <input
              type="checkbox"
              id="remember"
              className="mr-1 sm:mr-2 align-middle"
            />
            <label
              htmlFor="remember"
              className="text-xs sm:text-sm text-t-black-regular checked:bg-primary-regular"
            >
              Keep me logged in
            </label>
          </div>
          <div>
            <a
              href="#"
              className="text-xs sm:text-sm text-primary-regular hover:underline"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-4 bg-primary-regular text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          >
            Sign in
          </button>
        </div>
      </div>
      {/* Illustration */}
      <img
        src="img/bg1.svg"
        alt="Header Illustration"
        className="absolute bottom-0 left-0 w-[180px] h-[180px] sm:w-[350px] sm:h-[350px]"
      />
      <img
        src="img/bg2.svg"
        alt="Side Illustration"
        className="absolute bottom-0 right-0 w-[180px] h-[180px] sm:w-[350px] sm:h-[350px]"
      />
    </div>
  );
}

export default LoginComponent;
