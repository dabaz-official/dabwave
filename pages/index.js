import Head from 'next/head'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import WaitlistForm from '../components/WaitlistForm'

export default function Home() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-blue-700 to-blue-500">
      <Head>
        <title>DabWave</title>
        <meta name="description" content="A fashion brand by DabAZ" />
        <link rel="icon" href="/dabwave.svg" />
      </Head>

      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-36">
          <div>
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                <span class="text-gray-200">
                  Announcing our 2023SS. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                </span>
              </div>
            </div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">DabWave</h1>
              <p class="mt-6 text-lg leading-8 text-gray-200 sm:text-center">We design some products on the web and some clothes ready to sell.</p>
              <div class="mt-8 flex gap-x-4 sm:justify-center">
                <button 
                  type="button"
                  onClick={openModal}
                  class="inline-block rounded-xl bg-gray-200 px-4 py-1.5 text-base font-semibold leading-7 text-blue-600 shadow-sm ring-1 ring-gray-200 hover:bg-white hover:ring-white transition duration-200 hover:shadow-lg"
                >
                  Join the waitlist
                  <span class="pl-2 text-blue-600" aria-hidden="true">&rarr;</span>
                </button>
              </div>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-xl font-medium leading-6 text-gray-900"
                          >
                            What&apos;s your email?
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              We will let you know when DabWave.com is ready.
                            </p>
                          </div>
                          <WaitlistForm />
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
