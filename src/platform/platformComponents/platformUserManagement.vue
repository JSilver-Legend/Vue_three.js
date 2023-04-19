<template>
  <!-- create user modal -->
  <div v-if="showCreateModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-[80vw] h-[70vh]">
      <!--content-->
      <div class="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
        <div class="space-y-6 pb-6 sm:px-6 lg:px-0 md:col-span-12 lg:col-span-6">
          <section>
            <form>
              <div class="sm:overflow-hidden">
                <!-- dialog topbar -->
                <div class="flex h-12 justify-between px-2 bg-[#4e5962] text-left sm:px-5">
                  <div class="flex justify-start ">
                    <!-- tab buttons -->
                    <div class="flex space-x-2 text-center text-12 font-normal text-white leading-[14px] pl-16">
                      <div @click="selectedTab = 1" :class="[selectedTab == 1 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">LOGIN</div>
                      <div @click="selectedTab = 2" :class="[selectedTab == 2 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">PERSON</div>
                      <div @click="selectedTab = 3" :class="[selectedTab == 3 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">PERMISSIONS</div>
                    </div>
                  </div>
                  <!-- SAVE/CANCEL buttons -->
                  <div
                    class="space flex space-x-2 text-center text-12 font-medium text-gray-200 leading-[14px] tracking-widest">
                    <div v-on:click="toggleCreateDialog()" class="w-32 h-full bg-transparent hover:bg-gray-400 py-5">
                      CANCEL</div>
                    <div @click="onCreatePlatformUser()" class="w-32 h-full bg-primary hover:bg-gray-400 py-5">CREATE
                      USER</div>
                  </div>
                </div>

                <!-- dialog content -->
                <div class="bg-white py-6 px-4 sm:p-6">

                  <!-- content header -->
                  <div class="">
                    <h2 class="flex justify-start pb-2">
                      <a href="#"
                        class="text-primary hover:text-primaryHover pb-0 material-symbols-outlined align-middle pr-2">explicit</a>
                      <div class="text-lg leading-6 font-medium text-gray-900 pt-0">CREATE USER</div>
                    </h2>
                    <hr>
                  </div>

                  <!-- TAB 1 -->
                  <div v-if="selectedTab == 1" class="mt-6 w-full">
                    <h1>Personal data</h1>
                    <div class="flex w-full space-x-4 mt-2">
                      <!-- dialog field select country -->
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">gender</label>
                        <select id="country" v-model="selectedPlatformUser.gender" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>male</option>
                          <option>female</option>
                          <option>diverse</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">salutation</label>
                        <select v-model="selectedPlatformUser.salutation"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>casual1</option>
                          <option>casual2</option>
                          <option>formal1</option>
                          <option>formal2</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">title</label>
                        <select id="country" v-model="selectedPlatformUser.title" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>Dr.</option>
                          <option>Prof.</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex w-full space-x-4 mt-2">
                      <!-- dialog field given name -->
                      <div class="w-1/4">
                        <label for="first_name" class="block text-11 font-normal text-gray-700 pl-0">given name</label>
                        <input type="text" placeholder="given name" v-model="selectedPlatformUser.given_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <div class="w-1/4">
                        <label for="first_name" class="block text-11 font-normal text-gray-700 pl-0">middle name</label>
                        <input type="text" placeholder="middle name" v-model="selectedPlatformUser.middle_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <div class="w-1/4">
                        <label for="first_name" class="block text-11 font-normal text-gray-700 pl-0">family name</label>
                        <input type="text" placeholder="familiy name" v-model="selectedPlatformUser.family_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                    </div>
                    <div class="flex w-full space-x-4 mt-2">
                      <!-- dialog field select country -->
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">Country /
                          Region</label>
                        <select id="country" v-model="selectedPlatformUser.country" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option>Bangladesh</option>
                          <option>Germany</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">Company</label>
                        <select id="country" v-model="selectedPlatformUser.company" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option>dnamy</option>
                          <option>dxpberlin</option>
                          <option>dxpbaerlin</option>
                          <option>utomberlin</option>
                          <option>hauptstadtliebe</option>
                          <option>hillebrand-coating</option>
                          <option>heo-coating</option>
                        </select>
                      </div>
                    </div>

                    <hr class="my-6">

                    <h1>Login data</h1>
                    <div class="inline-flex w-full space-x-4 mt-2">
                      <!-- dialog field email -->
                      <div class="w-1/4">
                        <label for="email_address" class="block text-11 font-normal text-gray-700 pl-0">Email
                          address</label>
                        <input type="text" placeholder="Email address"
                          :disabled="selectedPlatformUser.identID ? 'disabled' : false"
                          v-model="selectedPlatformUser.email" autocomplete="email"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <!-- dialog field phone -->
                      <div class="w-1/4">
                        <label for="email_address" class="block text-11 font-normal text-gray-700 pl-0">Phone
                          number</label>
                        <input type="text" placeholder="+49151******"
                          :disabled="selectedPlatformUser.identID ? 'disabled' : false"
                          v-model="selectedPlatformUser.phone_number" autocomplete="phone_number"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                      </div>
                    </div>
                    <div class="inline-flex w-full space-x-4 mt-8">
                      <div class="w-1/4">
                        <label for="role" class="block text-11 font-normal text-gray-700 pl-0">role</label>
                        <select id="role" v-model="selectedPlatformUser.accessRole"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>user</option>
                          <option>superuser</option>
                          <option>admin</option>
                          <option>superadmin</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="accessLevel" class="block text-11 font-normal text-gray-700 pl-0">access
                          level</label>
                        <select id="accessLevel" v-model="selectedPlatformUser.accessLevel"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>levelOne</option>
                          <option>levelTwo</option>
                          <option>levelThree</option>
                          <option>levelFour</option>
                        </select>
                      </div>
                    </div>

                    <hr class="my-6">

                    <h1>Navigation data</h1>
                    <div class="inline-flex w-full space-x-4 mt-2">
                      <div class="w-1/4">
                        <label for="navigation" class="block text-11 font-normal text-gray-700 pl-0">Navigation
                          type</label>
                        <select id="navigation" v-model="selectedPlatformUser.config.navigation"
                          autocomplete="navigation"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>platformnavigation</option>
                          <option>custom</option>
                        </select>
                      </div>
                    </div>

                    <hr class="my-6">

                    <h1>AWS user parameter</h1>
                    <div class="inline-flex space-x-8 mt-6 w-full">
                      <label class="text-11 font-normal text-gray-700 pl-0 pt-2 w-28">confirm user</label>
                      <div class="">
                        <input type="checkbox"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.confirmed" />
                        <span class="text-13 font-normal text-gray-700 pl-2">confirm user by admin</span>
                      </div>
                    </div>
                    <div class="inline-flex space-x-8 mt-4 w-full">
                      <label class="text-11 font-normal text-gray-700 pl-0 pt-2 w-28">messaging</label>
                      <div class="inline-flex items-center">
                        <input type="radio" checked value="no"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.messageAction" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">send email</span>
                      </div>
                      <div class="inline-flex items-center">
                        <input type="radio" value="SUPPRESS"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.messageAction" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">no email</span>
                      </div>
                    </div>
                    <hr class="my-6">
                    <div class="flex  w-full space-x-8 mt-8">
                      <label class="block text-11 font-normal text-gray-700 pl-0 w-28">MFA settings</label>
                      <div class="inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="no"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">NO MFA</span>
                      </div>
                      <div class="inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="mfa-software"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">MFA Authenticator</span>
                      </div>
                      <div class="ml-4 inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="mfa-sms"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">MFA SMS</span>
                      </div>
                    </div>
                    <hr class="mt-6">
                    <div class="inline-flex space-x-8 mt-4 w-full">
                      <label class="text-11 font-normal text-gray-700 pl-0 pt-5 w-28">permanent password</label>

                      <div class="pt-3">
                        <input type="checkbox"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.permanentPasswordFlag" />
                      </div>
                      <div class="">
                        {{ selectedPlatformUser.permanentPasswordFlag }}
                      </div>
                      <div v-if="selectedPlatformUser.permanentPasswordFlag == true" class="pt-2 w-64">
                        <input type="text" placeholder="permanent password"
                          v-model="selectedPlatformUser.permanentPassword"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                    </div>
                  </div>

                  <!-- TAB 2 -->
                  <div v-else-if="selectedTab == 2" class="flex w-full pt-6">
                    <h1>dynamoDB user data</h1>
                  </div>

                  <!-- TAB 3 -->
                  <div v-else-if="selectedTab == 3" class="mt-6 w-full">
                    <div class="w-1/2">
                      <div class="pb-4">
                        <h1 class="">navigation Path!!!</h1>
                      </div>
                      <BaseTree v-model="platformNavigationPathTree[0].path" :statHandler="statHandler"
                        ref="platformNavigationPathTreeRef" @check:node="onCheckPlatformNavigationPathTreeNode">
                        <template v-slot="{ node, stat }">
                          <div class="h-6 flex">
                            <input class="ml-4 h-3 w-3" type="checkbox" />
                            <!-- {{ stat.checked?.toString() }} -->
                            <div @click="stat.open = !stat.open"
                              class="text-2xl p-0 m-0 flex items-center h-3 pl-4 text-gray-500">
                              {{ stat.open ? '-' : '+' }}
                            </div>
                            <span class="pl-2 text-11">{{ node.text }}</span>
                            <span class="pl-4 text-11 text-red-400">{{ node.permission }}</span>
                          </div>
                        </template>
                      </BaseTree>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- edit user modal -->
  <div v-if="showEditModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-screen h-screen">
      <!--content-->
      <div class="border-0 shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
        <div class="space-y-6 pb-6 sm:px-6 lg:px-0 md:col-span-12 lg:col-span-6">
          <section>
            <form>
              <div class="sm:overflow-hidden">
                <!-- dialog topbar -->
                <div class="flex h-12 justify-between px-2 bg-[#4e5962] text-left sm:px-5">
                  <div class="flex justify-start ">
                    <!-- tab buttons -->
                    <div class="flex space-x-2 text-center text-12 font-normal text-white leading-[14px] pl-16">
                      <div @click="selectedTab = 1" :class="[selectedTab == 1 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">PROFILE</div>
                      <div @click="selectedTab = 2" :class="[selectedTab == 2 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">SIGNATURE</div>
                      <div @click="selectedTab = 3" :class="[selectedTab == 3 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">PERMISSIONS</div>
                      <div @click="selectedTab = 4" :class="[selectedTab == 4 ? 'bg-[#212121]' : 'bg-[#3b4650]']"
                        class="w-32 h-full hover:bg-gray-400 py-5 cursor-pointer">CUSTOM TEXT</div>
                    </div>
                  </div>
                  <!-- SAVE/CANCEL buttons -->
                  <div
                    class="space flex space-x-2 text-center text-12 font-medium text-gray-200 leading-[14px] tracking-widest">
                    <div v-on:click="toggleEditDialog()" class="w-32 h-full bg-[#3b4650] hover:bg-gray-400 py-5">CANCEL
                    </div>
                    <div @click="onUpdatePlatformuser(false)" class="w-32 h-full bg-[#3b4650] hover:bg-gray-400 py-5">
                      SAVE</div>
                    <div @click="onUpdatePlatformuser(true)" class="w-32 h-full bg-primary hover:bg-gray-400 py-5">SAVE
                      + CLOSE</div>
                  </div>
                </div>
                <!-- dialog content -->
                <div class="bg-white py-6 px-4 sm:p-6">
                  <!-- content header -->
                  <div>
                    <h2 class="flex justify-start pb-2">
                      <a href="#"
                        class="text-primary hover:text-primaryHover pb-0 material-symbols-outlined align-middle pr-2">explicit</a>
                      <div class="text-lg leading-6 font-medium text-gray-900 pt-0">EDIT USER</div>
                    </h2>
                    <hr>
                  </div>
                  <!-- TAB 1 -->
                  <div v-if="selectedTab == 1" class="mt-6 w-full">
                    <h1>Personal data</h1>
                    <div class="flex w-full space-x-4 mt-2">
                      <!-- dialog field select country -->
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">gender</label>
                        <select id="country" v-model="selectedPlatformUser.gender" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>male</option>
                          <option>female</option>
                          <option>diverse</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">salutation</label>
                        <select v-model="selectedPlatformUser.salutation"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>casual1</option>
                          <option>casual2</option>
                          <option>formal1</option>
                          <option>formal2</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex w-full space-x-4 mt-2">
                      <div class="w-1/6">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">title</label>
                        <select id="country" v-model="selectedPlatformUser.title" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>Dr.</option>
                          <option>Dr. Dr.</option>
                          <option>Prof. Dr.</option>
                        </select>
                      </div>
                      <div class="w-1/6">
                        <label for="first_name" class="block text-11 font-normal text-gray-700 pl-0">given name</label>
                        <input type="text" placeholder="given name" v-model="selectedPlatformUser.given_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <div class="w-1/6">
                        <label for="first_name" class="block text-11 font-normal text-gray-400 pl-0">middle name</label>
                        <input type="text" placeholder="middle name" v-model="selectedPlatformUser.middle_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-200 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <div class="w-1/6">
                        <label for="first_name" class="block text-11 font-normal text-gray-700 pl-0">family name</label>
                        <input type="text" placeholder="familiy name" v-model="selectedPlatformUser.family_name"
                          autocomplete="cc-given-name"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                    </div>
                    <div class="flex w-full space-x-4 mt-2">
                      <!-- dialog field select country -->
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">Country /
                          Region</label>
                        <select id="country" v-model="selectedPlatformUser.country" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option>Bangladesh</option>
                          <option>Germany</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="country" class="block text-11 font-normal text-gray-700 pl-0">Company</label>
                        <select id="country" v-model="selectedPlatformUser.company" autocomplete="country"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option>dnamy</option>
                          <option>dxpberlin</option>
                          <option>dxpbaerlin</option>
                          <option>utomberlin</option>
                          <option>hauptstadtliebe</option>
                          <option>hillebrand-coating</option>
                          <option>heo-coating</option>
                        </select>
                      </div>
                    </div>

                    <hr class="my-6">

                    <hr class="my-6">

                    <h1>Login data</h1>
                    <div class="inline-flex w-full space-x-4 mt-2">
                      <!-- dialog field email -->
                      <div class="w-1/4">
                        <label for="email_address" class="block text-11 font-normal text-gray-700 pl-0">Email
                          address</label>
                        <input type="text" placeholder="Email address"
                          :disabled="selectedPlatformUser.identID ? 'disabled' : false"
                          v-model="selectedPlatformUser.email" autocomplete="email"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                      <!-- dialog field phone -->
                      <div class="w-1/4">
                        <label for="email_address" class="block text-11 font-normal text-gray-700 pl-0">Phone
                          number</label>
                        <input type="text" placeholder="+49151******"
                          :disabled="selectedPlatformUser.identID ? 'disabled' : false"
                          v-model="selectedPlatformUser.phone_number" autocomplete="phone_number"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                      </div>
                    </div>
                    <div class="inline-flex w-full space-x-4 mt-8">
                      <div class="w-1/4">
                        <label for="role" class="block text-11 font-normal text-gray-700 pl-0">role</label>
                        <select id="role" v-model="selectedPlatformUser.accessRole"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>user</option>
                          <option>superuser</option>
                          <option>admin</option>
                          <option>superadmin</option>
                        </select>
                      </div>
                      <div class="w-1/4">
                        <label for="accessLevel" class="block text-11 font-normal text-gray-700 pl-0">access
                          level</label>
                        <select id="accessLevel" v-model="selectedPlatformUser.accessLevel"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>levelOne</option>
                          <option>levelTwo</option>
                          <option>levelThree</option>
                          <option>levelFour</option>
                        </select>
                      </div>
                    </div>

                    <hr class="my-6">

                    <h1>Navigation data</h1>
                    <div class="inline-flex w-full space-x-4 mt-2">
                      <div class="w-1/4">
                        <label for="navigation" class="block text-11 font-normal text-gray-700 pl-0">Navigation
                          type</label>
                        <select id="navigation" v-model="selectedPlatformUser.config.navigation"
                          autocomplete="navigation"
                          class="mt-0 block w-full bg-white border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm">
                          <option></option>
                          <option>platformNavigation</option>
                          <option>customNavigation</option>
                        </select>
                      </div>
                      <div v-if="selectedPlatformUser.config.navigation == 'customNavigation'"
                        class="pl-4 pt-3.5 w-1/4">
                        <input type="text" placeholder="custom navigation ID"
                          v-model="selectedPlatformUser.config.customNavigation"
                          class="mt-0 block w-full border border-gray-300 py-1 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-13" />
                      </div>
                    </div>

                    <hr class="my-6">

                    <h1>AWS user parameter</h1>
                    <div class="inline-flex space-x-8 mt-4 w-full">
                      <label class="text-11 font-normal text-gray-700 pl-0 pt-2 w-28">messaging</label>
                      <div class="inline-flex items-center">
                        <input type="radio" value="no" checked
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.messageAction" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">no email</span>
                      </div>
                      <div class="inline-flex items-center">
                        <input type="radio" value="RESEND"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.messageAction" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">resend email</span>
                      </div>
                    </div>
                    <hr class="my-6">
                    <div class="flex  w-full space-x-8 mt-8">
                      <label class="block text-11 font-normal text-gray-700 pl-0 w-28">MFA settings</label>
                      <div class="inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="no"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">NO MFA</span>
                      </div>
                      <div class="inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="mfa-software"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">MFA Authenticator</span>
                      </div>
                      <div class="ml-4 inline-flex items-center">
                        <input type="radio" @change="selectedPlatformUser.identID ? onMFASettingsUpdate() : null"
                          value="mfa-sms"
                          class="bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                          v-model="selectedPlatformUser.mfa" />
                        <span class="block text-13 font-normal text-gray-700 pl-2">MFA SMS</span>
                      </div>
                    </div>
                    <hr class="mt-6">
                  </div>

                  <!-- TAB 2 -->
                  <div v-else-if="selectedTab == 2" class="flex w-full">
                    <h1>TAB 2</h1>
                  </div>

                  <!-- TAB 3 -->
                  <div v-else-if="selectedTab == 3" class="mt-6 w-full">
                    <div class="w-1/2">
                      <div class="w-1/4 pb-4">
                        <div class="">
                          <h1 class="">Role</h1>
                        </div>
                        <div class="">
                          <h1 class="text-gray-600">{{ selectedPlatformUser.accessRole }}</h1>
                        </div>
                      </div>
                      <div v-if="selectedPlatformUser.accessRole != 'superadmin'">
                        <div class="pb-4">
                          <h1 class="">Navigation Path</h1>
                        </div>
                        <BaseTree v-model="platformNavigationPathTree[0].path" :statHandler="statHandler"
                          ref="platformNavigationPathTreeRef" @check:node="onCheckPlatformNavigationPathTreeNode">
                          <template v-slot="{ node, stat }">
                            <div class="h-6 flex">
                              <input class="ml-4 h-3 w-3" type="checkbox" v-model="stat.checked" />
                              <!-- <input class="ml-4 h-3 w-3" :checked="stat.checked + '' === 'true' || stat.checked + '' === '0'" type="checkbox" v-model="stat.checked"  /> -->
                              <div @click="stat.open = !stat.open"
                                class="text-2xl p-0 m-0 flex items-center h-3 pl-4 text-gray-500">
                                {{ stat.open ? '-' : '+' }} <!-- ({{ stat.checked + "" }}) -->
                              </div>
                              <span class="pl-2 text-11">{{ node.text }}</span>
                              <span class="pl-4 text-11 text-red-400">{{ node.permission }}</span>
                            </div>
                          </template>
                        </BaseTree>
                      </div>
                      <div class="mt-8">
                        <div class="pb-4">
                          <h1 class="">sampleProject app</h1>
                        </div>
                        <BaseTree v-model="treeDataSampleproject" idKey="id" parentIdKey="pid" :indent="20" :gap="5"
                          triggerClass="handle">
                          <template v-slot="{ node, tree }">
                            <div class="h-6 flex">

                              <!--                          <div class="handle h-[18px] w-4 cursor-pointer p-0 m-0">
                                <svg width="1em" height="1em" viewBox="0 0 512 512"><path d="M0 144h512v32H0z"></path><path d="M0 240h512v32H0z" fill="currentColor"></path><path d="M0 336h512v32H0z" fill="currentColor"></path></svg>
                              </div>-->

                              <input class="ml-4 h-3 w-3" type="checkbox" v-model="node.$checked"
                                @change="tree.updateChecked(node)" />
                              <div class="text-2xl p-0 m-0 flex items-center h-3 pl-4 text-gray-500"
                                @click="tree.toggleFold(node)">{{ node.$folded ? '+' : '-' }}</div>
                              <span class="pl-2 text-11">{{ node.text }}</span>
                              <span class="pl-4 text-11 text-red-400">{{ node.permission }}</span>
                            </div>
                          </template>
                        </BaseTree>
                      </div>
                    </div>
                  </div>

                  <!-- TAB 4 -->
                  <div v-else-if="selectedTab == 4" class="mt-6 w-full">
                    <h1>TAB 4</h1>
                  </div>

                  <!-- TAB 5 -->
                  <div v-else-if="selectedTab == 5" class="mt-6 w-full">
                    <h1>TAB 5</h1>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- delete user modal -->
  <div v-if="showDeleteModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <div class="relative w-1/4 h-06 my-6 mx-auto max-w-6xl">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
        <div class="space-y-6 pb-6 sm:px-6 lg:px-0 md:col-span-12 lg:col-span-6">
          <section>
            <form>
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <!-- dialog header -->
                <div class="flex justify-between px-4 py-2 bg-gray-400 text-left sm:px-6">
                  <div class="item w-full">
                    <h2 class="text-sm leading-6 font-medium uppercase text-white">delete user</h2>
                  </div>
                  <div class="item w-2">
                    <span v-on:click="toggleDeleteDialog()"
                      class="material-symbols-outlined align-middle pr-2 text-right text-white cursor-pointer">close</span>
                  </div>
                </div>
                <!-- dialog content -->
                <div class="bg-white py-6 px-4 sm:p-6">
                  <div class="mt-6">
                    <!-- dialog text -->
                    <div>
                      <h2 class="text-lg leading-6 font-medium text-gray-900">delete platform user: {{
                        selectedPlatformUser.email
                      }}</h2>
                    </div>
                    <!-- dialog field given name -->
                    <div class="col-span-12 sm:col-span-12">
                      <a @click="deletePlatformUser"
                        class="cursor-pointer bg-primary hover:bg-gray-500 font-semibold rounded-sm py-3 px-3 mt-6 text-white inline-block">confirm
                        delete user</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- black transoarent full screen overlay -->
  <div v-if="showCreateModal || showDeleteModal" class="opacity-70 fixed inset-0 z-40 bg-black"></div>

  <!-- contend head -->
  <div class="flex items-center justify-between px-9 bg-contentHead">
    <div class>
      <h4 class="mt-2 text-lg font-bold">
        <span class="text-3xl text-primary">PL</span>USER MANAGEMENT
      </h4>
      <h6 class="mb-2 text-md text-gray-500">platform user</h6>
    </div>
    <div class>
      <div class="material-symbols-outlined text-20 pt-0 text-gray-400 hover:text-primary cursor-pointer">vpn_key</div>
      <div @click="onDocumentSelect(); toggleCreateDialog()"
        class="material-symbols-outlined text-20 pt-0 text-gray-400 hover:text-primary cursor-pointer ml-2">library_add
      </div>
    </div>
  </div>

  <!-- TABLE -->
  <div class="flex flex-col mx-10 my-10">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="ml-8 pl-2 py-1 w-72 text-12 text-gray-300 border border-gray-300">Suche</div>
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200">
          <table class="min-w-full divide-y divide-gray-300">
            <!-- table head -->
            <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                  class="w-72 px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">User ID
                </th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">Last name
                </th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">First name
                </th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">Email</th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">Phone</th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">Usertype
                </th>
                <th scope="col"
                  class="px-2 text-left text-12 font-bold text-black tracking-wider border border-gray-300">Last Login
                </th>
                <th scope="col"
                  class="relative px-6 text-12 font-bold text-black tracking-wider  py-3 border-r border border-gray-300">
                  Actions</th>
              </tr>
            </thead>
            <!-- table body -->
            <tbody>
              <tr v-for="(user, userIdx) in platformUsers" :key="user.email"
                :class="userIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="w-72 flex text-12 font-normal text-gray-900 border-l border-r border-b border-gray-300">
                  <svg width="30" height="32">
                    <rect x="0" y="0" width="10" height="32"
                      :style="[getValueByName(user.Attributes, 'custom:firstLogin') ? { 'fill': '#5ad25a' } : { 'fill': '#d2b6a7' }]" />
                  </svg>
                  <div class="pt-2">
                    {{ user.Username }}
                  </div>
                </td>
                <td class="px-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-gray-300">
                  {{ getValueByName(user.Attributes, 'family_name') }}</td>
                <td
                  class="px-2 py-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-l border-gray-300">
                  {{ getValueByName(user.Attributes, 'given_name') }}</td>
                <td class="px-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-gray-300">
                  {{ getValueByName(user.Attributes, 'email') }}</td>
                <td class="px-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-gray-300">
                  {{ getValueByName(user.Attributes, 'phone_number') }}</td>
                <td class="px-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-gray-300">
                  {{ getValueByName(user.Attributes, 'custom:userType') }}</td>
                <td class="px-2 whitespace-nowrap text-12 font-normal text-gray-900 border-r border-b border-gray-300">
                  {{ new Date(getValueByName(user.Attributes, 'custom:lastLogin') * 1000).toLocaleDateString("de-DE") }}
                </td>
                <td class="px-2 whitespace-nowrap text-right text-sm font-medium border-r border-b border-gray-300">
                  <a v-on:click="onEditPlatformuser(user)/* onDocumentSelect(user); toggleEditDialog() */"
                    class="cursor-pointer mr-4 text-primary text-12 hover:text-indigo-900">Edit</a>
                  <a v-on:click="onDocumentSelect(user); toggleDeleteDialog()"
                    class="mr-4 cursor-pointer text-gray-500 text-12 hover:text-indigo-900">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlatformNavigationStore } from "@/store/platformNavigation"
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { CognitoIdentityProviderClient, AdminCreateUserCommand, ListUsersCommand, AdminSetUserPasswordCommand, AdminSetUserMFAPreferenceCommand, AdminDeleteUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { Auth } from "aws-amplify"
import { ref, computed, onBeforeMount } from "vue"
import { useAuthStore } from "@/store/auth"
import { usePlatformSysStore } from "@/store/platformSys"
import { DynamoDBClient, PutItemCommand, DeleteItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"
import _ from "lodash"

import { BaseTree } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

const selectedTab = ref(1)

const authStore = useAuthStore()
const platformSysStore = usePlatformSysStore()

const showCreateModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedPlatformUser = ref({})

const platformUsers = computed(() => platformSysStore.platformUsers)
const platformConfig = computed(() => platformSysStore.platformConfig)
const tenantIds = computed(() => authStore.tenantIds)

const platformNavigationStore = usePlatformNavigationStore()
const platformNavigationPathTree = ref(platformNavigationStore.platformNavigation.navigationPaths)

const statHandler = (stat) => {
  stat.checked = stat.data.checked
  return stat
}


// get user list table
onBeforeMount(async () => {
  if (!platformSysStore.platformUsers.length) {
    await getAwsUsers()
  }
})

// CREATE AWSuser
const onCreatePlatformUser = async () => {
  console.log('onCreatePlatformUser')

  try {
    let user = await Auth.currentAuthenticatedUser()
    let TemporaryPassword = getTempPassword(8)

    // create cognito user
    const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(await getAWSCconfig());

    if (selectedPlatformUser.value.permanentPasswordFlag) {
      if (selectedPlatformUser.value.permanentPassword) {
        TemporaryPassword = selectedPlatformUser.value.permanentPassword
      } else {
        TemporaryPassword = TemporaryPassword
      }
    }

    let adminCreateUserCommandInput = {
      "UserPoolId": user.pool.userPoolId,
      "Username": selectedPlatformUser.value.email,
      "TemporaryPassword": TemporaryPassword,
      "DesiredDeliveryMediums": ["EMAIL"],
      //"MessageAction": "SUPPRESS",
      "UserAttributes": [
        {
          "Name": "custom:accessRole",
          "Value": selectedPlatformUser.value.accessRole ? selectedPlatformUser.value.accessRole : "user"
        },
        {
          "Name": "custom:accessLevel",
          "Value": selectedPlatformUser.value.accessLevel ? selectedPlatformUser.value.accessLevel : "levelOne"
        },
        {
          "Name": "custom:identID",
          "Value": "noID"
        },
        {
          "Name": "custom:realm-app-id",
          "Value": user.attributes['custom:realm-app-id']
        },
        {
          "Name": "custom:identityPoolID",
          "Value": user.attributes["custom:identityPoolID"]
        },
        {
          "Name": "custom:platformId",
          "Value": platformConfig.value.platformId
        },
        {
          "Name": "custom:MFA",
          "Value": selectedPlatformUser.value.mfa
        },
        {
          "Name": "custom:userType",
          "Value": 'platform-user'
        },
        {
          "Name": "custom:subdomain",
          "Value": window.location.host
        },
        {
          "Name": "phone_number",
          "Value": selectedPlatformUser.value.phone_number ? selectedPlatformUser.value.phone_number : ""
        },
        {
          "Name": "email",
          "Value": selectedPlatformUser.value.email
        },
        {
          "Name": "given_name",
          "Value": selectedPlatformUser.value.given_name ? selectedPlatformUser.value.given_name : ""
        },
        {
          "Name": "family_name",
          "Value": selectedPlatformUser.value.family_name ? selectedPlatformUser.value.family_name : ""
        },
        {
          "Name": "gender",
          "Value": selectedPlatformUser.value.gender ? selectedPlatformUser.value.gender : ""
        },
        {
          "Name": "custom:salutation",
          "Value": selectedPlatformUser.value.salutation ? selectedPlatformUser.value.salutation : ""
        },
        {
          "Name": "email_verified",
          "Value": "true"
        }
      ]
    }
    // set Message action
    if (selectedPlatformUser.value.supress) {
      adminCreateUserCommandInput.MessageAction = "SUPPRESS"
    }


    const adminCreateUserCommand = new AdminCreateUserCommand(adminCreateUserCommandInput)
    const adminCreateUserResponse = await cognitoIdentityProviderClient.send(adminCreateUserCommand);
    console.log('create user response', adminCreateUserResponse)

    // set password
    if (selectedPlatformUser.value.permanentPasswordFlag) {
      await setPassword(adminCreateUserResponse.User.Username, TemporaryPassword)
    }


    // set mfa settings
    let params = { "UserPoolId": user.pool.userPoolId, "Username": selectedPlatformUser.value.email }
    if (selectedPlatformUser.value.mfa == 'mfa-sms') { params.SMSMfaSettings = { "Enabled": true, "PreferredMfa": true } }
    else { params.SMSMfaSettings = { "Enabled": false, "PreferredMfa": false } }
    const mfaCommand = new AdminSetUserMFAPreferenceCommand(params);
    const mfaResponse = await cognitoIdentityProviderClient.send(mfaCommand);
    console.log('mfaResponse', mfaResponse)


    // write helper item to dynamodb
    const dynamoDBClient = new DynamoDBClient(await getAWSCconfig());
    const putItemCommand = new PutItemCommand({
      Item: {
        PK: { S: adminCreateUserResponse.User.Username },
        email: { S: selectedPlatformUser.value.email || "" },
        phone_number: { S: selectedPlatformUser.value.phone_number || "" },
        given_name: { S: selectedPlatformUser.value.given_name || "" },
        middle_name: { S: selectedPlatformUser.value.middle_name || "" },
        family_name: { S: selectedPlatformUser.value.family_name || "" },
        gender: { S: selectedPlatformUser.value.gender || "" },
        salutation: { S: selectedPlatformUser.value.salutation || "" },
        title: { S: selectedPlatformUser.value.title || "" },
        country: { S: selectedPlatformUser.value.country || "" },
        company: { S: selectedPlatformUser.value.company || "" },
        config: { M: selectedPlatformUser.value.config || "" },
      },
      TableName: user.attributes["custom:platformId"] + "-xtra"
    })
    const putItemResponse = await dynamoDBClient.send(putItemCommand)
    console.log('write helper item to dynamodb response', putItemResponse)

    await getAwsUsers()

    // close create dialog
    toggleCreateDialog()

  } catch (error) {
    console.log('error', error)
    toggleCreateDialog()
  }
}

// EDIT dynamoUser
const onEditPlatformuser = async (payload) => {
  console.log('onEditPlatformuser | ', JSON.parse(JSON.stringify(payload)))
  try {

    const identID = getValueByName(payload.Attributes, 'custom:identID')
    let getItemCommandInput = null
    if (identID) {
      getItemCommandInput = {
        Key: marshall({
          identID: getValueByName(payload.Attributes, 'custom:identID'),
          SK: payload.Username,
        }),
        TableName: getValueByName(payload.Attributes, "custom:platformId")
      }
    } else {
      getItemCommandInput = {
        Key: marshall({
          PK: payload.Username
        }),
        TableName: getValueByName(payload.Attributes, "custom:platformId") + "-xtra"
      }
    }

    const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
    const getItemCommand = new GetItemCommand(getItemCommandInput)
    const getItemResponse = await dynamoDBClient.send(getItemCommand)

    // assingn item to store
    selectedPlatformUser.value = unmarshall(getItemResponse.Item)
    selectedPlatformUser.value.config = selectedPlatformUser.value.config ? selectedPlatformUser.value.config : {}
    selectedPlatformUser.value.permittedPlatformNavigationPath = selectedPlatformUser.value.permittedPlatformNavigationPath ? selectedPlatformUser.value.permittedPlatformNavigationPath : []
    // selectedPlatformUser.value.permittedPlatformNavigationPath = ["PsampleTemplateF", "PappSysJson"]

    updateTreeCheckStatus(platformNavigationPathTree.value[0].path, selectedPlatformUser.value.permittedPlatformNavigationPath)

    console.log('READ USER FROM DYNAMODB', unmarshall(getItemResponse.Item))
    toggleEditDialog()
  } catch (error) {
    console.log('DYNAMODB GET ITEM ERROR', error)
  }
  //  selectedPlatformUser.value = _.clone(payload)

}

const updateNodeCheckStatus = (node, checkedArray) => {
  if (checkedArray.includes(node.permission)) {
    node.checked = true
  }
  if (node?.children) {
    node.children.forEach(element => {
      updateNodeCheckStatus(element, checkedArray)
    });
  }
}

const updateTreeCheckStatus = (tree, checkedArray) => {
  tree.forEach(element => {
    updateNodeCheckStatus(element, checkedArray)
  });
}

// DELETE AWSuser + dynamoUser
const deletePlatformUser = async () => {
  try {

    let user = await Auth.currentAuthenticatedUser()
    const client = new CognitoIdentityProviderClient(await getAWSCconfig());
    const command = new AdminDeleteUserCommand({
      "UserPoolId": user.pool.userPoolId,
      "Username": getValueByName(selectedPlatformUser.value.Attributes, 'email')
    });
    const response = await client.send(command);
    console.log('response', response)

    // delete dynamodb item
    const identID = getValueByName(selectedPlatformUser.value.Attributes, 'custom:identID')

    if (identID) {
      const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
      const deleteItemCommand = new DeleteItemCommand({
        Key: marshall({
          identID: identID,
          SK: selectedPlatformUser.value.Username,
        }),
        TableName: getValueByName(selectedPlatformUser.value.Attributes, "custom:platformId")
      })
      const deleteItemResponse = await dynamoDBClient.send(deleteItemCommand)
      console.log('dynamodb item delete response', deleteItemResponse)
    } else {
      const dynamoDBClient = new DynamoDBClient(await getAWSCconfig())
      const deleteItemCommand = new DeleteItemCommand({
        Key: marshall({
          PK: selectedPlatformUser.value.Username
        }),
        TableName: getValueByName(selectedPlatformUser.value.Attributes, "custom:platformId") + "-xtra"
      })
      const deleteItemResponse = await dynamoDBClient.send(deleteItemCommand)
      console.log('dynamodb helper item delete response', deleteItemResponse)
    }

    /* platformSysStore.platformUserDelete({
      userType: _.get(authStore.awsAuthUser, "attributes['custom:userType']"),
      userPoolID: _.get(authStore.awsAuthUser, "attributes['custom:poolID']"),
      userID: selectedPlatformUser.value.identID
    }) */

    await getAwsUsers()
    showDeleteModal.value = false

  } catch (error) {
    console.log('error', error)
  }
}

// UPDATE dynamoUser
const onUpdatePlatformuser = async (close) => {
  console.log('onUpdatePlatformuser')

  try {
    let user = await Auth.currentAuthenticatedUser()
    const dynamoDBClient = new DynamoDBClient(await getAWSCconfig());
    const putItemCommand = new PutItemCommand({
      Item: marshall(selectedPlatformUser.value),
      TableName: user.attributes["custom:platformId"] + (selectedPlatformUser.value.PK ? '-xtra' : '')
    })
    const putItemResponse = await dynamoDBClient.send(putItemCommand)
    console.log('putItemResponse', putItemResponse)
  } catch (error) {
    console.log('DYNAMODB UPDATE ITEM ERROR', error)
  }

  if (close) {
    toggleEditDialog()
  }
}

// update MFT status
const onMFASettingsUpdate = async () => {

  try {
    let user = await Auth.currentAuthenticatedUser()

    // mfa settings
    var params = {
      "UserPoolId": user.pool.userPoolId,
      "Username": selectedPlatformUser.value.email
    }
    if (selectedPlatformUser.value.mfa == 'mfa-sms') {
      params.SMSMfaSettings = {
        "Enabled": true,
        "PreferredMfa": true
      }
    } else {
      params.SMSMfaSettings = {
        "Enabled": false,
        "PreferredMfa": false
      }
    }

    const client = new CognitoIdentityProviderClient(await getAWSCconfig());
    const mfaCommand = new AdminSetUserMFAPreferenceCommand(params);
    const mfaResponse = await client.send(mfaCommand);
    console.log(mfaResponse)

    console.log('onUpdatePlatformuser')
    onUpdatePlatformuser()
    /* platformSysStore.platformUserUpdate({
      userType: _.get(authStore.awsAuthUser, "attributes['custom:userType']"),
      userPoolID: _.get(authStore.awsAuthUser, "attributes['custom:poolID']"),
      userID: selectedPlatformUser.value.identID,
      data: selectedPlatformUser.value

    }) */
  } catch (error) {
    console.log('error', error)
  }
}

// set permanent password
const setPassword = async (username, password) => {
  try {
    let awsUser = await Auth.currentAuthenticatedUser()
    const adminUpdateUserAttributesParams = {
      UserPoolId: awsUser.pool.userPoolId,
      Username: username,
      Password: password, // 'Abcd1234!',
      Permanent: true
    }
    const cognitoIdentityProviderClient = new CognitoIdentityProviderClient(await getAWSCconfig())
    const adminSetUserPasswordCommand = new AdminSetUserPasswordCommand(adminUpdateUserAttributesParams)
    const adminSetUserPasswordResponse = await cognitoIdentityProviderClient.send(adminSetUserPasswordCommand)
    console.log('attribute set passworde response:', adminSetUserPasswordResponse)
  } catch (error) {
    console.log('attribute set passworde error:', error)
  }
}

// dialog toggle
const toggleCreateDialog = () => { showCreateModal.value = !showCreateModal.value }
const toggleEditDialog = () => { showEditModal.value = !showEditModal.value }
const toggleDeleteDialog = async () => { showDeleteModal.value = !showDeleteModal.value }

// functions
const getValueByName = (array, Name) => {
  let Value = null
  array.forEach(element => {
    if (element.Name == Name) Value = element.Value
  });
  return Value
}

const getAWSCconfig = async () => {
  let user = await Auth.currentAuthenticatedUser()
  const config = {
    region: authStore.tenantIds.region,
    credentials: fromCognitoIdentityPool({
      identityPoolId: user.attributes["custom:identityPoolID"],
      logins: {
        [`cognito-idp.eu-west-1.amazonaws.com/${user.pool.userPoolId}`]: user.signInUserSession.idToken.jwtToken
      },
      clientConfig: { region: authStore.tenantIds.region },
    })
  }
  return config
}

const getAwsUsers = async () => {
  try {
    let user = await Auth.currentAuthenticatedUser()
    const client = new CognitoIdentityProviderClient(await getAWSCconfig());
    const command = new ListUsersCommand({ UserPoolId: user.pool.userPoolId, });
    const response = await client.send(command);
    platformSysStore.platformUsers = response.Users;
    //console.log('onBeforeMount | ', response)
  } catch (error) {
    console.log('DYNAMODB GET USER LIST ERROR', error)
  }
}

const onDocumentSelect = (payload) => {
  if (!payload) {
    selectedPlatformUser.value = {
      confirmed: false,
      supress: false,
      mfa: 'mfa-software',
      config: {}
    }
  } else {
    selectedPlatformUser.value = _.clone(payload)
  }
  console.log('selectedPlatformUser.value', JSON.parse(JSON.stringify(selectedPlatformUser.value)))
}

const getTempPassword = (length) => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let retVal = ""
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

const platformNavigationPathTreeRef = ref(null)

const onCheckPlatformNavigationPathTreeNode = () => {
  selectedPlatformUser.value.permittedPlatformNavigationPath = []
  platformNavigationPathTreeRef.value.getChecked().map((node) => {
    if (!selectedPlatformUser.value.permittedPlatformNavigationPath.includes(node.data.permission)) {
      selectedPlatformUser.value.permittedPlatformNavigationPath.push(node.data.permission)
    }
    for (const parentStat of platformNavigationPathTreeRef.value.iterateParent(node, { withSelf: false })) {
      if (!selectedPlatformUser.value.permittedPlatformNavigationPath.includes(parentStat.data.permission)) {
        selectedPlatformUser.value.permittedPlatformNavigationPath.push(parentStat.data.permission)
      }
    }
  })
}
</script>

<script>


export default {
  // components: { BaseTree },
  data() {
    return {
      treeData: [
        {
          "text": "all",
          "custom": { "icon": "group" },
          "class2add": [{ "id": "sp", "value": "" }],
          "permission": "career permission",
          "children": [
            {
              "text": "career folder",
              "custom": { "icon": "group" },
              "class2add": [{ "id": "sp", "value": "" }],
              "permission": "career permission",
              "children": [
                {
                  "text": "job offers",
                  "custom": { "icon": "work" },
                  "appPathAssignementID": "a534325",
                  "permission": "jobOffer permission",
                },
                {
                  "text": "employees",
                  "custom": { "icon": "person" },
                  "appPathAssignementID": "a534325",
                  "permission": "employees permission",
                  "children": [
                    {
                      "text": "apprentice",
                      "custom": { "icon": "work" },
                      "appPathAssignementID": "a534325",
                      "permission": "jobOffer permission",
                      "children": [
                        {
                          "text": "female",
                          "custom": { "icon": "work" },
                          "appPathAssignementID": "a534325",
                          "permission": "jobOffer permission",
                        },
                        {
                          "text": "male",
                          "custom": { "icon": "work" },
                          "appPathAssignementID": "a534325",
                          "permission": "jobOffer permission",
                        }
                      ]
                    },
                    {
                      "text": "blue collar",
                      "custom": { "icon": "work" },
                      "appPathAssignementID": "a534325",
                      "permission": "jobOffer permission",
                    }
                  ]
                }

              ]
            },
            {
              "text": "sampleProject",
              "custom": { "icon": "coronavirus", "iconColor": "bg-blue-200" },
              "appPathAssignementID": "a534325",
              "permission": "sampleProject permission",
            },
            {
              "text": "template management",
              "cellSetID": "custom_templateManagement-parent",
              "beforeHtmlSnippet": "platform-management-snippet",
              "afterHtmlSnippet": "",
              "custom": { "icon": "", "iconColor": "" },
              "permission": "template management permission",
              "children": [
                {
                  "text": "appSysJson",
                  "custom": { "icon": "", "iconColor": "" },
                  "permission": "appSysJson management permission",
                },
                {
                  "text": "tailwind1",
                  "custom": { "icon": "", "iconColor": "" },
                  "permission": "tailwind1 management permission",
                },
                {
                  "text": "tailwind2",
                  "custom": { "icon": "", "iconColor": "" },
                  "permission": "tailwind2 management permission",
                }
              ]
            },
            {
              "text": "platform management",
              "cellSetID": "custom_platformManagement-parent",
              "beforeHtmlSnippet": "",
              "afterHtmlSnippet": "",
              "permission": "platfromManagement management permission",
              "children": [
                {
                  "text": "userManagement",
                  "custom": { "icon": "", "iconColor": "" },
                  "permission": "userManagement management permission"
                },
                {
                  "text": "platform settings",
                  "custom": { "icon": "", "iconColor": "" },
                  "permission": "platformSettings management permission"
                }
              ]
            }
          ]
        }
      ],
      treeDataSampleproject: [
        {
          "text": "sampleProject app parent folder folderNavigation",
          "key1": "value1",
          "children": [
            {
              "text": "sampleProject documentList 1st level view",
              "key1": "value1",
              "children": [
                {
                  "text": "documentList 2nd level view",
                  "key1": "value1",
                }
              ]
            },
            {
              "text": "tables tableGroup tableGroup 1st level view",
              "key1": "value1",
              "children": [
                {
                  "text": "tableGroup 2nd level view",
                  "key1": "value1",
                }
              ]
            },
            {
              "text": "settings typeList 1st level view",
              "children": [
                {
                  "text": "typeList 2nd level view",
                  "key1": "value1"
                },
              ]
            }
          ]
        }
      ],
      treeDataJobOffer: [
        {
          text: "jobOffer app parent folder folderNavigation",
          "key1": "value1",
          "key2": "value2",
          "key3": "value3",
          "key4": "value4",
          children: [
            {
              text: "job offer folderList 1st level view",
              "key1": "value1",
              "key2": "value2",
              "key3": "value3",
              "key4": "value4",
              children: [
                {
                  text: "job offer single project cell 2nd level view",
                  "key1": "value1",
                  "key2": "value2",
                  "key3": "value3",
                  "key4": "value4"
                },
                {
                  text: "candidates folder documentList 2nd level view",
                  "key1": "value1",
                  "key2": "value2",
                  "key3": "value3",
                  "key4": "value4",
                  children: [
                    {
                      text: "candidates documentList 3rd level view"
                    }
                  ]
                }
              ]
            }

          ]
        }
      ]
    }
  },
}
</script>
<style>
.he-tree .tree-node {
  /*background-color: #eebe44;*/
  padding: 0px;
  padding-bottom: 0px;
  height: 18px;
  border: none;

}
</style>
