import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-2',
  standalone: true,
  template: `
    <div class="flex justify-center h-full p-6 bg-gray-200 dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex flex-col justify-center p-6 mx-auto sm:py-6 lg:py-12 lg:flex-row lg:justify-between">
        <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="assets/svg/Business_SVG.svg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        </div>
        <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 class="text-5xl font-bold leadi sm:text-6xl">Ac mattis
            <span class="dark:text-lime-400">senectus</span>erat pharetra
          </h1>
          <p class="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
            <br class="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem
          </p>
          <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold rounded dark:bg-lime-400 dark:text-gray-900">Suspendisse</a>
            <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Malesuada</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Slide2Component {

}
