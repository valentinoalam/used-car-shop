import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-1',
  standalone: true,
  template: `
    <!-- <img src="https://source.unsplash.com/random/480x320" alt=""
      class="absolute -z-10 w-screen bg-cover opacity-25 mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"> -->
    <div class="container pt-[60px] lg:pt-[90px] flex flex-col items-center px-4 py-3 pb-24 mx-auto text-center lg:pb-56 md:py-6 md:px-10 lg:px-32 dark:text-gray-900">

      <h1 class="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
      <p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
      <div class="flex flex-wrap justify-center">
        <button type="button" class="px-8 py-3 m-2 text-lg font-semibold rounded group dark:bg-gray-800 dark:text-gray-50">Get started
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-6 h-6 transition delay-100 group-hover:translate-x-2 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg></button>
        <button type="button" class="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
      </div>
    </div>
  `,
})
export class Slide1Component {

}
