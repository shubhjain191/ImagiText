import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if(user){
            navigate('/result')
        } else {
            setShowLogin(true)
        }

    }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
        See the Magic. Try Now
      </h1>

      {/* Generate Button with Star Group */}
      <div className="relative inline-block">
        <button onClick={onClickHandler} className=" flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl group">
          <span className="mr-3">Generate Image</span>
          {/* Star Group Image */}
          <img 
            src={assets.star_group} 
            alt="Star Group" 
            className=" w-6 h-6 sm:w-8 sm:h-8 transition duration-300 group-hover:rotate-12"/>
        </button>
      </div>
    </div>
  )
}

export default GenerateBtn