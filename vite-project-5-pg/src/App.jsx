//Password Generator App in React


import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword]=useState('')
  const [copied, setCopied] = useState(false);


  //useRef hook for copy functionality
  const passwordRef = useRef(null);

  // this is a function definition
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character, setPassword]) // here setPassword is not necessary but good practice to include it

  // copy password function
  const copyPassword = useCallback(() => {
    passwordRef.current?.select() // ? means optional chaining
    passwordRef.current?.setSelectionRange(0, 9999) // it select the text range
    window.navigator.clipboard.writeText(password)

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, number, character, passwordGenerator]
)
  return (


    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center font-bold text-3xl my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={password}
          className = "outline-none w-full py-2 px-3 bg-white text-gray-700 rounded-lg"
          placeholder='Your Password'
          readOnly
          ref={passwordRef}
          />
          <button 
            onClick={copyPassword}
            className={`outline-none px-4 py-2 rounded-lg transition-all duration-300
            ${copied ? "bg-green-600" : "bg-blue-700"}
            text-white`}
          >
          {copied ? "Copied!" : "Copy"}
          </button>

        </div>
        <div className = "flex text sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type = "range"
            min={8}
            max={100}
            value={length}
              className = "cursor-pointer"
              onChange={(e) => setLength(e.target.value)}

            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type = "checkbox"
            defaultChecked={number}
            id="number"
            onChange={() => {
              setNumber(prev => !prev)
              passwordGenerator()
              }
            }

            />
            <label htmlFor='number'>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
            type = "checkbox"
            defaultChecked={character}
            id="character"
            onChange={() => {
              setCharacter(prev => !prev)
              passwordGenerator()
              }
            }
            />
            <label htmlFor="character">Characters</label>
          </div>
        </div>  
      </div>
  )
}

export default App
