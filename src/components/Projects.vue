<template>
<section class="mt-48 md:mt-40 pb-40 relative ">
          <div class="justify-center text-center flex flex-wrap mt-24 ">
        <div class="w-full md:w-6/12 px-12 md:px-4">
          <h2 class="font-semibold text-4xl">Projects</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-600">
            Vue Notus is a completly new product built using our past experience
            in web templates. Take the examples we made for you and start
            playing with them.
          </p>
        </div>
      </div>
</section>

        <section class="block relative z-1">
      <div class="container mx-auto">
        <div class="justify-center flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 -mt-24">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  SuperChat App
                </h5>
                <router-link to="/auth/login">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="login"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Sniffgames Website
                </h5>
                <router-link to="/profile">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="profile"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Gadacts
                </h5>
                <router-link to="/landing">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="landing"
                    />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script> 
import login from "@/assets/login.jpg";
import profile from "@/assets/profile.jpg";
import landing from "@/assets/landing.jpg";

export default {
    name: 'Projects',
    data() {
        return{
            profile,
            login,
            landing
        }
    }
}
</script>