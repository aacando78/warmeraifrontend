import { createContext } from "react"
import { LoginContext } from "../../Context/LoginContext"
export default function New(){
    const {user} = createContext(LoginContext)
    return(<div className="antialiased bg-gray-100">
         {user&&(user.Emailquantity<15)&&<div class="text-white text-center bg-red-400 py-2 font-medium">
        Uh-oh...You have {user.Emailquantity} credits left. <a class="font-regular underline" href="https://warmer.ai/settings/plan">Upgrade now!</a>
        </div>}
        
                <main>
                <div class="max-w-full md:w-12/12 mx-auto sm:p-5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="py-4">
                <div class="max-w-7xl mx-auto my-4 space-y-2">
                <h1 class="text-2xl font-semibold text-gray-900">New Email Wizard</h1>
                </div>
        <form>
        <nav aria-label="Progress">
            <ol class="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0 bg-white">
            <li class="relative md:flex-1 md:flex cursor-default">
            <div class="px-6 py-4 flex items-center text-base font-medium" aria-current="step" x-description="Current Step">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-blue-600 rounded-full">
            <span class="text-blue-600">1</span>
            </span>
            <div class="mt-0.5 ml-4 min-w-0 flex flex-col">
            <span class="text-base font-medium text-blue-600">Who We Are</span>
            <span class="text-sm font-normal text-gray-500">What are we pitching?</span>
            </div>
            </div>
            <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round"></path>
            </svg>
            </div>
            </li>
            <li class="relative md:flex-1 md:flex cursor-default">
            <div class="group flex items-center" x-description="Upcoming Step">
            <span class="px-6 py-4 flex items-center text-base font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="text-gray-500 group-hover:text-gray-900">2</span>
            </span>
            <div class="mt-0.5 ml-4 min-w-0 flex flex-col">
            <span class="text-base font-medium text-blue-600">Goal</span>
            <span class="text-sm font-normal text-gray-500">What should this email to lead to?</span>
            </div>
            </span>
            </div>
            <div class="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
            <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round"></path>
            </svg>
            </div>
            </li>
            <li class="relative md:flex-1 md:flex cursor-default">
            <div class="group flex items-center" x-description="Upcoming Step">
            <span class="px-6 py-4 flex items-center text-base font-medium">
            <span class="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
            <span class="text-gray-500 group-hover:text-gray-900">3</span>
            </span>
            <div class="mt-0.5 ml-4 min-w-0 flex flex-col">
            <span class="text-base font-medium text-blue-600">Personalization Type</span>
            <span class="text-sm font-normal text-gray-500">Personalize using LinkedIn or Website?</span>
            </div>
            </span>
            </div>
            </li>
            </ol>
            </nav>

            <div class="bg-white overflow-hidden rounded-lg mt-4 shadow font-lg">
            <div class="px-4 py-5 sm:p-6" style={{minHeight: "350px"}}>
            <div x-cloak x-data="{ show: false }" x-init="setTimeout(() => { show = true })">
            <fieldset>
            <div class="bg-white rounded-md space-y-2">
                <label class="border-gray-200 relative border p-4 cursor-pointer group shadow-sm relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition duration-300 ease-in-out hover:border-4 hover:border-blue-400 justify-between">
                <div class="flex">
                <span class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow border group-hover:border-blue-200 group-hover:shadow-lg transition duration-300 ease-in-out">
                <img src="/img/favicon.png" class="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition duration-300 ease-in-out" onerror="this.src='/img/default.png'" />
                </span>
                <input type="radio" class="hidden cursor-pointer text-blue-600 border-gray-300 focus:ring-blue-500" />
                <div class="ml-3 flex flex-col">
                <span class="text-gray-900 block text-sm font-medium">
                Personalizations only
                </span>
                <span class="text-gray-500 block text-sm">
                Write just the first line personalizations, I don't need the whole email written
                </span>
                </div>
                </div>
                </label>
                <div class="bg-white py-5">
                <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                <div class="ml-4 mt-4">
                <h3 class="text-md leading-6 font-medium text-gray-700"></h3>
                </div>
                <div class="ml-4 mt-4 flex-shrink-0">
                <button onclick="Livewire.emit('openModal', 'add-value-prop')" type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                </svg> <span>Add New Identity</span>
                </button>
                </div>
                </div>
                </div>
                </div>
            </fieldset>
            </div>
            </div>
            </div>
            <div class="md:flex md:items-center md:justify-between mt-4">
            <div class="flex-1 min-w-0">
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
            </div>
            </div>
            </form>
            </div>
            </div>
            </div>
            </main>

            <div class="max-w-screen-xl mx-auto py-2 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div>
            <p class="text-center text-base leading-6 text-gray-400">
            &copy; 2022 Warmer, Inc. All rights reserved.
            </p>
            </div>
            <div class="text-center text-blue-400 text-base leading-6 mt-2">
            <a href="https://warmer.firstpromoter.com" target="_blank">
            Become an affiliate?
            </a>
            </div>
            </div>
            
    </div>)
}