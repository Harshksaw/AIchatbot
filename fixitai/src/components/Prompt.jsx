
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function LoginPromptPage() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // Assuming 'auth' is the slice name in your store

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100); // Show animation after a slight delay
  }, []);

  const handleLoginClick = () => {
    if (!auth.isAuthenticated) {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    if (user && isAuthenticated) {
      dispatch(login(user));
    }
  }, [user, isAuthenticated, dispatch]);

  return (
    <div className="bg-[#1f221e] flex h-screen space-x-2 gap-5 mx-auto flex-wrap xl:mr-14 flex-col gap-y-10 justify-center items-center w-full md:px-16 font-serif text-white lg:py-[10rem] my-element">
      <div
        className={`
          bg-gradient-to-br from-[#a19693] to-[#685050] rounded-lg shadow-md p-8 text-center w-[2/5] max-w-md
          translate-y-full transition-all duration-300 ease-in-out
          ${isAnimated ? '' : '-translate-y-full'}
        `}
      >

        <button
          className="bg-transparent rounded-sm border px-3 py-1.5 flex min-w-fit font-bold text-white border-transparent mt-4"
          onClick={handleLoginClick}
        >
                     <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 via-indigo-600">Log In First</h2>


        </button>
      </div>
    </div>
  );
}

export default LoginPromptPage;
