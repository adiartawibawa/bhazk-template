<template>
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3"
                style="background-image: url(https://images.unsplash.com/photo-1500213721845-709b85a28da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white font-['Kaushan_Script']">Bhazk</h2>

                        <p class="max-w-xl mt-3 text-sm text-gray-300">
                            Lorem ipsum dolor sit
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2
                            class="text-4xl font-bold text-center text-gray-700 dark:text-white font-['Kaushan_Script']">
                            Register</h2>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">for something awesome</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            <div>
                                <label for="text" class="block mb-2 text-sm text-gray-500 dark:text-gray-200">
                                    Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="John Doe"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <label for="email" class="block mb-2 text-sm text-gray-500 dark:text-gray-200">Email
                                    Address
                                </label>
                                <input type="email" name="email" id="email" placeholder="example@example.com"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <label for="password"
                                    class="block mb-2 text-sm text-gray-500 dark:text-gray-200">Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="Your Password"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <label for="re-password"
                                    class="block mb-2 text-sm text-gray-500 dark:text-gray-200">Retype Password
                                </label>
                                <input type="password" name="re-password" id="re-password"
                                    placeholder="Retype Your Password"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div class="mt-6 flex items-center">
                                <input type="checkbox" class="h-4 w-4 mr-2 checked:bg-blue-500" />
                                <p class="text-sm text-gray-400">
                                    I Agree with <a href="#"
                                        class="text-blue-500 focus:outline-none focus:underline hover:underline">Terms &
                                        Conditions </a>
                                </p>
                            </div>
                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Register Me
                                </button>
                            </div>

                        </form>

                        <p class="mt-6 text-sm text-center text-gray-400">Have an account?
                            <router-link class="text-blue-500 focus:outline-none focus:underline hover:underline"
                                to="/auth/login">Sign in</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>