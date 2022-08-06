/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { LoginContext } from '../../Context/LoginContext';
const navigation = [
  { name: 'New Email', href: '#', current: true },
  { name: 'Compaign', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  const history = useNavigate();
  const {user,token,setUser,setToken,openModal} = useContext(LoginContext)
  // const {openModal} = props
  const [check,setCheck] = React.useState(true)

  const signUpClick=() => {
     setCheck(true)
     history("/register")
  }

  const signInClick=() =>{
    setCheck(false)
    history("/login")
  }

  const logout =() => {
    setUser(null)
    setToken(null)
    localStorage.clear()
    history("/")
  }
  React.useEffect(() =>{

  },[user,token])
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center" style={{cursor:"pointer"}}>
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://warmer.ai/logo.png"
                    alt="Workflow"
                    onClick={e => history("/")}
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://warmer.ai/logo.png"
                    alt="Workflow"
                    onClick={e => history("/")}
                  />
                </div>
                {(user||token)&&<div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick = {e => openModal(item.name)}
                        className={classNames(
                          item.current ? 'text-black-300 hover:bg-white-700 hover:text-black shadow-md' : 'text-black-300 hover:shadow-md',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {(token||user)&&<Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm h-8 w-8 rounded-full">
                      <span className="sr-only">Open user menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={e => logout()}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>}
                     {(!user&&!token)&&<div>
                     
                        <button className={!check?"btn bg-black text-white":"btn bg-white-500 mx-0.5"} onClick={e => signInClick()}>Sign in</button>
                        <button className={check?"btn bg-black text-white":"btn bg-white-500 mx-0.5"} onClick={e => signUpClick()}>Sign Up</button>
                    </div>}

                    {((user&&!user.Premium)||token)&&<div>
                    <button className="btn bg-green-500 text-white ml-2" onClick={e => history("/premium")}>{user&&user.Emailquantity} - credits -Upgrade Now</button>
                    </div>}

                    {((user&&user.Premium)||token)&&<div>
                    <button className="btn bg-green-500 text-white ml-2" onClick={e => history("/premium")}>{user&&user.Emailquantity} - credits -Premium User</button>
                    </div>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
