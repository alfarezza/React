import './App.css'

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
      <div>
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
      </div>
    </>
  )
}

export default App
