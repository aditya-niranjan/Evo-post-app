import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const inputData = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const Submithandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:5000/create-post", formData)
      .then((response) => {
        // console.log(response);
        navigate("/posts");
      })
      .finally(() => {
        setIsLoading(false);
        inputData.current.value = "";
      });
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 sm:gap-5 items-center justify-center p-3 sm:p-5 bg-amber-200">
      <button onClick={() => navigate("/posts")} className="text-2xl active:scale-95 py-1 px-4 bg-amber-500 mb-4 cursor-pointer rounded-lg">Posts</button>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Create Post</h1>
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 min-h-50 sm:min-h-62.5 flex mb-5 flex-col items-center justify-center gap-4 bg-amber-300 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <form
          onSubmit={Submithandler}
          className="w-full flex flex-col items-center justify-center gap-3 sm:gap-4"
        >
          <input
            ref={inputData}
            className="w-full border-2 border-gray-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-white file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-amber-500 file:text-white hover:file:bg-amber-600 file:cursor-pointer"
            type="file"
            placeholder="image"
            accept="image/*"
            name="image"
            required
          />
          <input
            ref={inputData}
            className="w-full border-2 border-gray-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-sm sm:text-base"
            type="text"
            placeholder="caption"
            name="caption"
            required
          />
          <button
            className="bg-green-400 hover:bg-green-500 py-2 sm:py-2 px-6 sm:px-8 rounded-xl sm:rounded-2xl active:scale-95 transition-all text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
