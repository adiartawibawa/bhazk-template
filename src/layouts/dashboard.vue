<script setup>

import { useDark, useToggle } from "@vueuse/core";
import Icon from "@/components/Icons.vue";

const isDark = useDark();

const toggleDark = useToggle(isDark);

const [isOpen, toggle] = useToggle();

const [dropdownOpen, dropDown] = useToggle();

</script>

<template>
  <div class="relative min-h-screen lg:flex">
    <header class="text-gray-100 bg-white dark:bg-dark-primary lg:hidden">
      <div class="container flex items-center justify-between p-4 mx-auto">
        <a href="#" class="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </a>

        <button @click="toggle()" class="p-2 text-gray-500 rounded-lg focus:outline-none hover:bg-gray-700">
          <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>

          <svg v-show="isOpen" class="w-6 h-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </header>

    <div v-cloak :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden"></div>

    <aside id="sidebar" :class="isOpen ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'"
      class="fixed inset-y-0 left-0 z-30 flex flex-col w-24 min-h-screen space-y-6 overflow-y-auto text-gray-100 transition duration-200 transform bg-white dark:bg-dark-primary lg:translate-x-0 lg:relative lg:inset-0">
      <div class="flex flex-col items-center flex-1 space-y-6">
        <a href="#"
          class="flex items-center justify-center w-full h-20 font-bold text-gray-600 truncate bg-white dark:text-gray-500 dark:bg-dark-secondary border-b dark:border-dark-secondary whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        </a>

        <nav class="flex flex-col items-center space-y-6">
          <router-link to="#" class="p-3 transition-colors duration-300 bg-white rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 stroke-blue-700">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </router-link>

          <a href="#" class="p-3 transition-colors duration-300 bg-white rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-blue-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </a>

          <a href="#" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
            <svg class="w-6 h-6 group-hover:stroke-blue-700" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="group-hover:stroke-blue-700"
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path class="group-hover:stroke-blue-700" d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>

          <a href="#" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
            <svg class="w-6 h-6 group-hover:stroke-blue-700" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="group-hover:stroke-blue-700"
                d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path class="group-hover:stroke-blue-700" d="M13 2V9H20" stroke="#969CBA" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </nav>
      </div>

      <div class="flex justify-center py-5 border-t border-gray-200 dark:border-dark-secondary">
        <a href="#" class="p-3 transition-colors duration-300 rounded-lg group hover:bg-white">
          <Icon icon="gear" class="w-5 h-5 opacity-100 group-hover:stroke-blue-700 text-gray-400" />
        </a>
      </div>
    </aside>

    <main id="content" class="flex-1 space-y-6 overflow-y-auto bg-gray-100 lg:h-screen md:space-y-8 dark:bg-gray-900">
      <header
        class="flex items-center justify-between h-20 px-6 border-b bg-white dark:bg-dark-secondary dark:border-dark-secondary">
        <div class="relative flex items-center">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon icon="magnifying-glass" class="w-5 h-5 text-gray-400" />
          </span>

          <input type="text"
            class="py-3 pl-10 pr-4 text-gray-700 dark:text-gray-400 placeholder-gray-400 bg-gray-100 dark:bg-dark-primary border border-transparent border-gray-200 rounded-lg sm:w-auto w-36 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search" />
        </div>

        <div class="flex items-center">
          <div class="relative">
            <button
              class="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100 dark:hover:bg-dark-primary"
              @click="dropDown()">
              <span class="sr-only">User Menu</span>
              <div class="flex items-center md:-mx-2">
                <div class="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                  <span class="font-semibold text-gray-800 dark:text-white">Adi Arta Wibawa</span>
                  <span class="text-sm text-gray-600 dark:text-gray-500">Teacher</span>
                </div>

                <img class="flex-shrink-0 w-12 h-12 overflow-hidden bg-gray-100 rounded-full md:mx-2"
                  src="https://randomuser.me/api/portraits/men/68.jpg" alt="user profile photo" />
              </div>
            </button>

            <transition enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <div
                class="absolute right-0 z-50 w-56 p-2 bg-white dark:bg-dark-secondary border dark:border-dark-secondary rounded-lg top-16 lg:top-20"
                v-show="dropdownOpen">
                <div
                  class="px-4 py-2 text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-primary">
                  Profile
                </div>
                <div
                  class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  Messages
                </div>
                <div
                  class="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  To-Do's
                </div>
              </div>
            </transition>
          </div>

          <div v-show="dropdownOpen" class="fixed inset-0 z-30" @click="dropdownOpen = false"></div>

          <button
            class="relative p-2 mx-3 text-gray-400 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 dark:hover:bg-dark-primary dark:hover:text-gray-100">
            <span class="sr-only">Notifications</span>
            <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full"></span>
            <span class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full animate-ping"></span>

            <icon icon="bell" />

          </button>

          <!-- Dark Button -->
          <button @click="toggleDark()"
            class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 dark:hover:bg-dark-primary dark:hover:text-gray-100">
            <span v-if="isDark">
              <Icon icon="moon" />
            </span>

            <span v-else>
              <Icon icon="sun" />
            </span>
          </button>
          <!-- End Dark Button -->

          <button
            class="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 dark:hover:bg-dark-primary dark:hover:text-gray-100">
            <span class="sr-only">Log out</span>
            <Icon icon="logout" />
          </button>
        </div>
      </header>

      <router-view />

      <footer class="flex flex-row items-center justify-between p-6 bg-gray-100 dark:bg-gray-900 sm:flex-row">
        <a href="#"
          class="text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-['Kaushan_Script']">Bhazk</a>

        <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

        <div class="flex -mx-2">
          <a href="#"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Reddit">
            <Icon icon="reddit" class="w-5 h-5 fill-current" />
          </a>

          <a href="#"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Facebook">
            <Icon icon="facebook" class="w-5 h-5 fill-current" />
          </a>

          <a href="#"
            class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Github">
            <Icon icon="github" class="w-5 h-5 fill-current" />
          </a>
        </div>
      </footer>

    </main>

  </div>
</template>
