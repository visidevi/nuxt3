<template>
    <div class="container mx-auto max-w-2xl">
        <header class="flex justify-between items-center mt-5">
          <div class="flex items-center space-x-12">
              <div>
                    <NuxtLink to="?" class="text-xl font-semibold p-2 hover:bg-gray-200">
                        My Name
                    </NuxtLink>
                </div>
                <Menu />
          </div>
         <ClientOnly>
             <ColorModeSelector/>
         </ClientOnly>
        </header>
        <main class="p-4 mt-10">
            <slot/>
        </main>
        <footer class="p-4 border-4">
            <p>© 2021</p>
        </footer>
    </div>
</template>
<script setup>

useHead({
    titleTemplate: '%s - Dev Blog',
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
        }
    ]
})
</script>
<style>
body {
    font-family: 'Inter', sans-serif;
     @apply bg-white  text-gray-700;
}

/* .dark-mode body {
    @apply bg-gray-900 text-gray-300;
} */
body {
  font-family: 'Roboto';
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>