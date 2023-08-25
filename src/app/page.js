import { FlightyLogo } from '@/assets/svg/Icons'

export default function Home() {
  return (
    <div class="h-screen bg-cover relative bg-[url('./plane.jpeg')]">
      <nav class="w-full absolute border-gray-200 bg-indigo-600 dark:bg-indigo-600 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-4">
          <a href="#" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <FlightyLogo class="w-32 h-16" />
            </span>
          </a>
        </div>
      </nav>

      <div class="flex items-center justify-center h-full">
        <div class="flex items-center justify-center z-10 w-full">
          <div class="max-w-sm lg:max-w-full lg:flex min-w-80">
            <div class="h-80 lg:h-auto lg:w-80 flex-none bg-cover bg-center rounded-l-3xl text-center overflow-hidden bg-[url('./plane1.jpeg')] hidden lg:block" title="Choose your best flight"></div>
            <div class="bg-white dark:bg-gray-900 max-[1024px]:rounded-3xl lg:rounded-r-3xl p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8 w-100">
                <p class="text-sm text-gray-700 dark:text-gray-300 flex items-center justify-center mb-7">
                  Choose your best flight
                </p>
                <div class="flex justify-around text-gray-900 font-bold text-xl mb-7">
                  <div>
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">From:</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>From</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">To:</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>To</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-around text-gray-900 font-bold text-xl mb-7">
                  <div>
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Departure</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Departure</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Return</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Return</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-around text-gray-900 font-bold text-xl mb-2">
                  <div>
                    <label for="countries" class="block text-sm font-medium text-gray-900 dark:text-white">Passenger</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected>Passenger</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                    <div class="flex items-center lg:pr-12">
                      <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="bordered-checkbox-1" class="w-full ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">One-Way</label>
                    </div>
                </div>
                <div class="flex justify-center text-gray-900 font-bold lg:text-xl m-7">
                  <div class="flex items-center px-7 w-full">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                      Search Flights
                    </button>
                  </div>
                </div>
                <p class="text-gray-700 text-xs dark:text-gray-300">Prices may change daily. Please don&apos;t forget to book your chosen flight after making your choice!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 w-full h-screen bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </div>
  )
}
