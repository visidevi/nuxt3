<template>
  <article class="prose dark:prose-invert prose-h1:text-2xl ">
    <ContentDoc path="/projects" v-slot="{ doc }">
      {{ doc.toc }} ---> {{ doc.title }}
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'cols-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div class="cols-span-2" v-if="doc.toc">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">
              Table of Contents
            </div>
            <nav>
              Links
            </nav>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>
