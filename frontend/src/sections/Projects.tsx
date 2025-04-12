import React, { useState } from 'react'
import Tilty from 'react-tilty';


const Projects = () => {
  const [uberHover, setUberHover] = useState(false)
  const [todoHover, setTodoHover] = useState(false)
  const [pokedexHover, setPokedexHover] = useState(false)
  return (
    <div className='bg-[#08081e]  flex flex-col items-center'>
      <div className='text-white font-extralight text-[30px] flex items-center justify-center gap-10 h-20 w-[90%]'>
        <div className='w-[35%] h-[1px] bg-white'></div>
        <p className='w-[30%] text-center'>Toppers of the Projects List </p>
        <div className='w-[35%] h-[1px] bg-white'></div>
      </div>
      <div id='showcased-projects' className='mt-10 w-[90%] flex flex-wrap px-5 gap-10 justify-between '>

        <Tilty
          perspective={900}
          reset={true}
          max={10}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[45%] rounded-[0.6rem] bg-white mx-auto"
        >
          <div
            id="project-2"
            className="card h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-[0.6rem]"
          >
            <div
              onClick={() => {
                if (uberHover) {
                  window.open("https://todo-crud-app-by-ts.netlify.app/", "_blank");
                }
              }}
              onMouseEnter={() => {
                setUberHover(true);
              }}
              onMouseLeave={() => {
                setUberHover(false);
              }}
              className="relative cursor-[url(car-cursor),_pointer] bg-[url('/src/assets/Uber.png')] bg-center bg-no-repeat bg-cover w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[0.6rem]"
            >
              <div className=" text-white font-semibold bg-gradient-to-t from-black to-transparent text-2xl sm:text-3xl md:text-4xl absolute bottom-0 w-full h-[25%] sm:h-[22%] flex flex-col justify-end gap-1 sm:gap-2 px-4 sm:px-6 pb-2">
                <div
                  className='flex justify-between items-center w-full'
                  onMouseEnter={() => setUberHover(true)}
                  onMouseLeave={() => setUberHover(false)}
                >
                  <p className='m-0 p-0'>Uber Clone</p>
                  <a
                    href="https://github.com/KARUNANS2004/Uber-clone"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl px-2 sm:px-4 "
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>

                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl m-0 p-0 font-extrabold bg-gradient-to-r from-[#d4af37] via-[#b76e79] to-[#e5d4b5] bg-[length:200%_200%]  bg-clip-text text-transparent animate-gradient drop-shadow-md">
                    Technologies Used
                  </h1>

                  <div className="flex items-center my-3">
                    <p className='text-blue-200 text-3xl p-1 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-reactjs-fill font-extralight"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square text-center w-12 border -ml-2 bg-gray-800'><i className="ri-tailwind-css-fill"></i></p>
                    <p className='text-purple-700 text-3xl p-1 rounded-full aspect-square text-center w-12 border -ml-2 bg-gray-800'><i className="font-extralight ri-remixicon-line"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square flex items-center justify-center w-12 border -ml-2 bg-gray-800'>
                      <img className='h-8 w-8 rounded-md' src="/src/assets/ts.svg" />
                    </p>
                    <p className='text-red-600 text-3xl p-1 -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-npmjs-fill"></i></p>
                    <p className='text-green-500 text-3xl p-1 -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-nodejs-fill"></i></p>
                    <p className='text-yellow-100 text-3xl p-1 -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-map-2-line font-extralight"></i></p>
                    <p className='text-yellow-100 text-3xl p-1 flex items-center justify-center -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'>
                      <img src="/src/assets/jwt.svg" />
                    </p>
                    <p className='text-yellow-100 text-3xl p-1 flex items-center justify-start -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'>
                      <img className='h-8 w-10 -ml-1' src="/src/assets/gsap.svg" />
                    </p>
                    <p className='text-yellow-100 text-3xl p-1 flex items-center justify-center -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'>
                      <img className='h-7 w-7' src="/src/assets/express.svg" />
                    </p>
                    <p className='text-yellow-100 text-3xl p-1 flex items-center justify-center -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'>
                      <img className='h-7 w-7' src="/src/assets/mongo.svg" />
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilty>
        <Tilty
          perspective={900}
          reset={true}
          max={10}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[45%] rounded-[0.6rem] bg-white mx-auto"
        >
          <div
            id="project-2"
            className="card h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-[0.6rem]"
          >
            <div
              onClick={() => {
                if (pokedexHover) {
                  window.open("https://todo-crud-app-by-ts.netlify.app/", "_blank");
                }
              }}
              onMouseEnter={() => {
                setPokedexHover(true);
              }}
              onMouseLeave={() => {
                setPokedexHover(false);
              }}
              className="relative cursor-[url(car-cursor),_pointer] bg-[url('/src/assets/todo.jpg')] bg-center bg-no-repeat bg-cover w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[0.6rem]"
            >
              <div className=" text-white font-semibold bg-gradient-to-t from-black to-transparent text-2xl sm:text-3xl md:text-4xl absolute bottom-0 w-full h-[25%] sm:h-[22%] flex flex-col justify-end gap-1 sm:gap-2 px-4 sm:px-6 pb-2">
                <div
                  className='flex justify-between items-center w-full'
                  onMouseEnter={() => setPokedexHover(true)}
                  onMouseLeave={() => setPokedexHover(false)}
                >
                  <p className='m-0 p-0'>To-do List</p>
                  <a
                    href="https://github.com/KARUNANS2004/todo-app-typescript"
                    onClick={(e) => { e.stopPropagation() }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl px-2 sm:px-4 "
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>

                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl m-0 p-0 font-extrabold bg-gradient-to-r from-[#d4af37] via-[#b76e79] to-[#e5d4b5] bg-[length:200%_200%]  bg-clip-text text-transparent animate-gradient drop-shadow-md">
                    Technologies Used
                  </h1>                  <div className="flex items-center my-3">
                    <p className='text-blue-200 text-3xl p-1 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-reactjs-fill font-extralight"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square text-center w-12 border -ml-2 bg-gray-800'><i className="ri-tailwind-css-fill"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square flex items-center justify-center w-12 border -ml-2 bg-gray-800'>
                      <img className='h-8 w-8 rounded-md' src="/src/assets/ts.svg" />
                    </p>
                    <p className='text-red-600 text-3xl p-1 -ml-2 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-npmjs-fill"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilty>
        <Tilty
          perspective={900}
          reset={true}
          max={10}
          className="w-full sm:w-[90%] md:w-[70%] lg:w-[45%] rounded-[0.6rem] bg-white mx-auto"
        >
          <div
            id="project-2"
            className="card h-[50vh] sm:h-[55vh] md:h-[60vh] rounded-[0.6rem]"
          >
            <div
              onClick={() => {
                if (pokedexHover) {
                  window.open("https://pokedex-by-ts.netlify.app/", "_blank");
                }
              }}
              onMouseEnter={() => {
                setPokedexHover(true);
              }}
              onMouseLeave={() => {
                setPokedexHover(false);
              }}
              className="relative cursor-[url(car-cursor),_pointer] bg-[url('/src/assets/Pokedex.jpg')] bg-center bg-no-repeat bg-cover w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[0.6rem]"
            >
              <div className="text-white font-semibold bg-gradient-to-t from-black to-transparent text-2xl sm:text-3xl md:text-4xl absolute bottom-0 w-full h-[25%] sm:h-[22%] flex flex-col justify-end gap-1 sm:gap-2 px-4 sm:px-6 pb-2">
                <div
                  className='flex justify-between items-center w-full'
                  onMouseEnter={() => setPokedexHover(true)}
                  onMouseLeave={() => setPokedexHover(false)}
                >
                  <p className='m-0 p-0'>Pokédex</p>
                  <a
                    href="https://github.com/KARUNANS2004/pokedex-ts"
                    onClick={(e) => { e.stopPropagation() }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl px-2 sm:px-4"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </div>

                <div className="w-full">
                  <h1 className="text-xl sm:text-2xl m-0 p-0 font-extrabold bg-gradient-to-r from-[#d4af37] via-[#b76e79] to-[#e5d4b5] bg-[length:200%_200%]  bg-clip-text text-transparent animate-gradient drop-shadow-md">
                    Technologies Used
                  </h1>                  <div className="flex items-center my-3">
                    <p className='text-blue-200 text-3xl p-1 rounded-full aspect-square text-center border w-12 bg-gray-800'><i className="ri-reactjs-fill font-extralight"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square text-center w-12 border -ml-2 bg-gray-800'><i className="ri-tailwind-css-fill"></i></p>
                    <p className='text-blue-400 text-3xl p-1 rounded-full aspect-square flex items-center justify-center w-12 border -ml-2 bg-gray-800'>
                      <img className='h-8 w-8 rounded-md' src="/src/assets/ts.svg" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilty>
      </div >
    </div >
  )
}

export default Projects
