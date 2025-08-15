import React from 'react'
import UrlForm from '../components/UrlForm'
import { useNavigate } from '@tanstack/react-router'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center flex-1">URL Shortener</h1>
         
        </div>
        <UrlForm/>
      </div>
    </div>
  )
}

export default HomePage