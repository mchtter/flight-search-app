"use client";
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ArrowRightIcon, SortIcon } from '@/assets/svg/Icons';
import Toast from '@/components/Toast';

export default function Flights() {
    const [flights, setFlights] = useState([])
    const [departureFlights, setDepartureFlights] = useState([])
    const [returnFlights, setReturnFlights] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortType, setSortType] = useState('ASC')
    const [way, setWay] = useState('departure')
    const [toastText, setToastText] = useState("")
    const [alert, setAlert] = useState(false)


    useEffect(() => {
        fetch('/api/flights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: getURLParams().from,
                to: getURLParams().to,
                departure: getURLParams().departure,
                returnDate: getURLParams().returnDate,
                passenger: getURLParams().passenger
            })
        })
            .then((response) => {
                if (response.status !== 200) {
                    showToast("Something went wrong. Please try again later.")
                }
                return response.json()
            })
            .then((data) => {
                setDepartureFlights(data.departure)
                setReturnFlights(data.returnFlights)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        if (way === 'departure') {
            setFlights(departureFlights)
        } else if (way === 'return') {
            setFlights(returnFlights)
        }
    }, [departureFlights, returnFlights, way])

    function getURLParams() {
        const urlParams = new URLSearchParams(window.location.search)
        const from = urlParams.get('from')
        const to = urlParams.get('to')
        const departure = urlParams.get('departure')
        const returnDate = urlParams.get('return')
        const passenger = urlParams.get('passenger')

        return { from, to, departure, returnDate, passenger }
    }

    function sortData(key) {
        return (e) => {
            e.preventDefault()
            setSortType(sortType === 'ASC' ? 'DESC' : 'ASC')
            const sorted = [...flights].sort((a, b) => {
                const parsedA = a[key].split(':').join('')
                const parsedB = b[key].split(':').join('')

                return sortType === 'ASC' ? parsedA - parsedB : parsedB - parsedA
            })

            setFlights(sorted)
        }
    }

    function changeWay() {
        return (e) => {
            e.preventDefault()
            setWay(way === 'departure' ? 'return' : 'departure')
        }
    }

    function showToast(text) {
        setToastText(text)
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }

    return (
        <div className="dark:bg-zinc-900 h-screen bg-gray-300">
            {/* navbar */}
            <Navbar />

            {/* loading */}
            {loading && (
                <LoadingSpinner />
            )}

            {/* flights */}
            {!loading && (
                <div className="flex items-center justify-center relative top-32">
                    <div className="flex items-center justify-center z-30 w-full">
                        <div className="max-w-sm lg:max-w-full max-h-96 flex flex-col min-w-80">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center">
                                    <div>
                                        {way == 'departure' ? getURLParams().from : getURLParams().to}
                                    </div>
                                    <button onClick={changeWay()} disabled={!getURLParams().returnDate}>
                                        <ArrowRightIcon className="w-5 h-5 mx-5" />
                                    </button>
                                    <div>
                                        {way == 'departure' ? getURLParams().to : getURLParams().from}
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 sticky top-0 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Airline
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                From
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                To
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                <div className="flex items-center">
                                                    Departure Time
                                                    <a onClick={sortData('departureTime')} href="">
                                                        <SortIcon className="w-3 h-3 ml-1.5" />
                                                    </a>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                <div className="flex items-center">
                                                    Price
                                                    <a onClick={sortData('price')} href="">
                                                        <SortIcon className="w-3 h-3 ml-1.5" />
                                                    </a>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {flights?.length === 0 && (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td colSpan="5" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    No flights found
                                                </td>
                                            </tr>
                                        )}
                                        {flights?.map((flight, index) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {flight?.airline}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {flight?.from}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {flight?.to}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {flight?.departureTime}
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${flight?.price * getURLParams().passenger}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* alert toast */}
            {alert && (
                <Toast text={toastText} />
            )}
        </div>
    )
}