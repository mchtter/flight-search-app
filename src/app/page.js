"use client";
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Navbar from '@/components/Navbar';
import Toast from '@/components/Toast';
import { useState, useEffect } from 'react';

export default function Home() {
  let today = new Date().toISOString().slice(0, 10)
  const [loading, setLoading] = useState(true)
  const [isOneWay, setIsOneWay] = useState(false)
  const [from, setFrom] = useState([])
  const [selectedFrom, setSelectedFrom] = useState("")
  const [to, setTo] = useState([])
  const [departureDate, setDepartureDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [alert, setAlert] = useState(false)
  const [toastText, setToastText] = useState("")

  useEffect(() => {
    fetch('/api/directions')
      .then((response) => response.json())
      .then((data) => {
        setFrom(data.from)
        setTo(data.to)
        setDepartureDate(today)
        setLoading(false)
      })
  }, [today])

  function handleFromChange(e) {
    setSelectedFrom(e.target.value)
  }

  function handleDepartureChange(e) {
    if (e.target.value < today) {
      showToast("Departure date cannot be less than today")
      return
    }
    setDepartureDate(e.target.value)
  }

  function handleReturnChange(e) {
    if (e.target.value < departureDate) {
      showToast("Return date cannot be less than departure date")
      return
    }
    setReturnDate(e.target.value)
  }

  function handleOneWayChange(e) {
    setIsOneWay(!isOneWay)
  }

  function showToast(text) {
    setToastText(text)
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 3000)
  }

  return (
    <div className="h-screen bg-cover relative bg-[url('./plane.jpeg')]">
      {/* navbar */}
      <Navbar />

      {/* loading spinner */}
      {loading && (
        <LoadingSpinner />
      )}

      <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-zinc-950 to-transparent z-10"></div>

      {/* form */}
      {!loading && (
        <form action="/flights" className="relative flex items-center justify-center h-full z-30">
          <div className="flex items-center justify-center z-10 w-full">
            <div className="max-w-sm lg:max-w-full lg:flex min-w-80">
              <div className="h-80 lg:h-auto lg:w-80 flex-none bg-cover bg-center rounded-l-3xl text-center overflow-hidden bg-[url('./plane1.jpeg')] hidden lg:block" title="Choose your best flight"></div>
              <div className="bg-white dark:bg-gray-900 max-[1024px]:rounded-3xl lg:rounded-r-3xl p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8 w-100">
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center mb-7">
                    Choose your best flight
                  </p>
                  <div className="flex justify-around text-gray-900 font-bold text-xl mb-7">
                    <div>
                      <label htmlFor="fromDatalist" className="block text-sm font-medium text-gray-900 dark:text-white">From:</label>
                      <input onChange={(e) => handleFromChange(e)} list="fromDatalist" id="fromDataInput" name="from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From" required />
                      <datalist id="fromDatalist">
                        {from?.map((item, index) => (
                          <option key={index} value={item?.name} />
                        ))}
                      </datalist>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">To:</label>
                      <input id="toInput" list="toDatalist" name="to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required disabled={selectedFrom == ""} />
                      <datalist id="toDatalist">
                        {to?.map((item, index) => (
                          <option key={index} value={item?.name} disabled={selectedFrom == item?.name} />
                        ))}
                      </datalist>
                    </div>
                  </div>
                  <div className="flex justify-around text-gray-900 font-bold text-xl mb-7">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">Departure</label>
                      <div className="relative max-w-sm">
                        <input value={departureDate} onChange={(e) => handleDepartureChange(e)} id="departureDate" type="date" name="departure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Departure" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">Return</label>
                      <div className="relative max-w-sm">
                        <input value={returnDate} onChange={(e) => handleReturnChange(e)} id="returnDate" type="date" name="Date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Return" disabled={isOneWay} required={!isOneWay} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around text-gray-900 font-bold text-xl mb-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">Passenger</label>
                      <input type="number" id="passenger" name="passenger" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Passenger" required min={1} max={4} />
                    </div>
                    <div className="flex items-center lg:pr-12 w-40">
                      <input onChange={(e) => handleOneWayChange(e)} id="oneWayCheckbox" type="checkbox" value={isOneWay} name="one-way" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="w-full ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">One-Way</label>
                    </div>
                  </div>
                  <div className="flex justify-center text-gray-900 font-bold lg:text-xl m-7">
                    <div className="flex items-center px-7 w-full">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Search Flights
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 text-xs dark:text-gray-300">Prices may change instant or daily. Please don&apos;t forget to book your chosen flight after making your choice!</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-zinc-950 to-transparent"></div>

      {/* alert toast */}
      {alert && (
        <Toast text={toastText} />
      )}
    </div>
  )
}
