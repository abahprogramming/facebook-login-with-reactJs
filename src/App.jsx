function App() {
  return (
    <div className="flex justify-center items-center min-h-screen box-border bg-zinc-100">
      <div className="p-10 w-2/5">
        <h1 className="text-6xl font-bold text-blue-600">facebook</h1>
        <p className="flex flex-wrap text-3xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="w-96 h-96 border-solid border-slate-200 bg-white border-2 rounded-lg mx-20 shadow-md items-center shadow-zinc-400 flex justify-start p-5 flex-col ">
        <div className="w-full mb-5">
          <input
            placeholder="Email address or phone number"
            type="text"
            className="w-full outline-slate-500 px-2 py-4 text-xl border-2 border-solid border-slate-300 rounded-md"
          />
        </div>
        <div className="w-full mb-5">
          <input
            placeholder="Password"
            type="text"
            className="placeholder:text-shadow-5 w-full outline-slate-500 px-2 py-4 text-xl border-2 border-solid border-slate-300 rounded-md"
          />
        </div>
        <div className="flex justify-center flex-col w-full mb-3">
          <button className="block bg-blue-600 w-full py-3 rounded-md font-bold text-white mb-3 text-xl">
            Log In
          </button>
          <a href="" className="text-center text-blue-500">
            Forgetten password?
          </a>
        </div>
        <hr className="text-blue-500 border-1 block border-solid border-slate-300 w-full mb-3" />
        <div className="w-52 text-center mt-1">
          <button className="block text-white w-full h-12 font-bold border-solid rounded-md text-lg bg-hijau">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
