import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const waves = [
  {
    name: 'DabVibes',
    description: 'Care about yourself and improve yourself.',
    href: 'https://vibes.dabaz.me',
    imageUrl: 'https://vibes.dabaz.me/logos/primary-logo.svg',
    imageAlt: 'DabVibes'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 dark:border-gray-900 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">DabWave</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/dabwave.svg"
                alt="DabWave"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-black p-2 text-gray-400 dark:text-gray-500 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:outline-none transition">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center bg-white text-base hover:text-gray-900 focus:outline-none transition'
                    )}
                  >
                    <span>Waves</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-600',
                        'ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {waves.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                              target="_blank"
                            >
                              <img
                                src={item.imageUrl}
                                alt={item.imageAlt} 
                                className="h-10 w-10 flex-shrink-0" 
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="mailto:contact@dabwave.com" className="text-base text-gray-500 hover:text-gray-900 transition">
              Contact
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="mailto:join@dabwave.com"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-base text-white shadow-sm hover:bg-blue-700 transition"
            >
              Join us
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/dabwave.svg"
                    alt="DabWave"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {waves.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50 transition"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className="h-8 w-8 flex-shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="mailto:contact@dabwave.com" className="text-base text-gray-900 hover:text-gray-700 transition">
                  Contact
                </a>
              </div>
              <div>
                <a
                  href="maito:join@dabwave.com"
                  className="flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-base text-white shadow-sm hover:bg-blue-700 transition"
                >
                  Join us
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}