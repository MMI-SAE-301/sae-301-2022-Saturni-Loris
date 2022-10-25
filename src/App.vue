<template >
  <nav class="">
    <div class="relative bg-noirfond">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="index">
              <img class="h-8 w-auto sm:h-10" src="../public/TIKTAKLOGO.svg" alt="">
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <button type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/bars-3 -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <nav class="hidden space-x-20 md:flex">

            <a href="index" class="text-sm font-semibold hover:text-beige text-blanctext hover:underline">ACCUEIL</a>
            <a href="produits"
              class="text-sm font-semibold hover:text-beige text-blanctext hover:underline">PRODUITS</a>
            <a href="#" class="text-sm font-semibold text-blanctext hover:text-beige hover:underline">CONTACT</a>


          </nav>
          <div class="hidden items-center space-x-5 justify-end md:flex md:flex-1 lg:w-0">
            <a href="login">
              <img class="p-2 w-auto sm:h-10" src="../public/person_icon.svg" alt="icon de panier">
            </a>
            <a href="#">
              <img class="p-2 w-auto sm:h-10" src="../public/panier_icon.svg" alt="icon de panier">
            </a>

            <a href="form"
              class="ml-8 inline-flex items-center justify-center whitespace-nowrap border border-transparent bg-blanctext px-4 py-2 font-roboto font-semibold text-sm text-noirfond shadow-sm hover:bg-noirfond hover:text-blanctext">PERSONNALISER</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div class="space-y-5 pl-4 bottom-10 left-0 fixed">
    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.54375 10.883C9.77679 10.7143 9.88929 10.4357 9.88929 10.0527C9.89732 9.87054 9.85982 9.69107 9.77946 9.52768C9.70714 9.39643 9.6 9.28661 9.46875 9.20893C9.33266 9.1264 9.18151 9.07177 9.02411 9.04821C8.85268 9.01607 8.67857 9 8.50714 9.00268H6.62411V11.1375H8.6625C9.01339 11.1402 9.31071 11.0545 9.54375 10.883V10.883ZM9.85982 12.8116C9.59732 12.6107 9.24643 12.5116 8.80982 12.5116H6.61875V15.0295H8.76696C8.96786 15.0295 9.15268 15.0107 9.33214 14.9732C9.50194 14.94 9.6638 14.8745 9.80893 14.7804C9.94554 14.692 10.0554 14.5714 10.1384 14.4161C10.2188 14.2607 10.2589 14.0625 10.2589 13.8241C10.2589 13.35 10.125 13.0152 9.85982 12.8116V12.8116ZM12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM14.317 7.68482H18.0241V8.5875H14.317V7.68482ZM12 15.1286C11.8266 15.4577 11.579 15.742 11.2768 15.9589C10.9607 16.1786 10.6098 16.3393 10.2375 16.433C9.84796 16.5374 9.44613 16.5888 9.04286 16.5857H4.60714V7.44911H8.91964C9.35625 7.44911 9.75268 7.48929 10.1143 7.56429C10.4732 7.63929 10.7786 7.76786 11.0357 7.94196C11.2902 8.11607 11.4911 8.34911 11.633 8.63839C11.7723 8.925 11.8446 9.28393 11.8446 9.70982C11.8446 10.1705 11.7402 10.5509 11.5313 10.8589C11.3196 11.167 11.0143 11.4161 10.5991 11.6116C11.1643 11.7723 11.5795 12.0589 11.8527 12.4607C12.1313 12.8679 12.2679 13.3554 12.2679 13.9286C12.2679 14.3946 12.1795 14.7937 12 15.1286ZM19.4679 13.7143H14.6893C14.6893 14.2339 14.8688 14.7321 15.1393 15C15.4125 15.2652 15.8036 15.3991 16.3152 15.3991C16.6848 15.3991 16.9982 15.3054 17.2661 15.1205C17.5312 14.9357 17.692 14.7402 17.7509 14.5366H19.3527C19.0955 15.3321 18.7045 15.9 18.1741 16.2429C17.6491 16.5857 17.0063 16.7571 16.2589 16.7571C15.7366 16.7571 15.2679 16.6714 14.8473 16.508C14.4429 16.35 14.0786 16.1089 13.7786 15.7982C13.4828 15.4791 13.2541 15.1038 13.1062 14.6946C12.9429 14.242 12.8625 13.7652 12.8679 13.2857C12.8679 12.7902 12.9509 12.3295 13.1116 11.9009C13.4196 11.0679 14.0598 10.4009 14.8768 10.0554C15.3134 9.87321 15.7821 9.78214 16.2563 9.7875C16.8188 9.7875 17.3063 9.89464 17.7295 10.1143C18.1369 10.324 18.4906 10.6246 18.7634 10.9929C19.0339 11.3598 19.2241 11.7777 19.3446 12.2491C19.4598 12.7125 19.5 13.2 19.4679 13.7143V13.7143ZM16.2 11.1536C15.9107 11.1536 15.667 11.2045 15.4795 11.3036C15.292 11.4027 15.1366 11.5259 15.0188 11.6679C14.9065 11.8049 14.8236 11.9635 14.775 12.1339C14.7321 12.2759 14.7027 12.4205 14.692 12.5679H17.6518C17.6089 12.1045 17.4482 11.7616 17.2339 11.5205C17.0089 11.2821 16.6473 11.1536 16.2 11.1536V11.1536Z"
          fill="#FEF9F5" />
      </svg>
    </div>

    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
          fill="#FEF9F5" />
      </svg>
    </div>

    <div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12946 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C7.03855 13.074 6.43359 12.7084 5.99951 12.1762C5.56542 11.644 5.32898 10.9779 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6312C6.26476 10.3596 5.93051 9.99164 5.69923 9.5599C5.46794 9.12817 5.34676 8.64603 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C6.49795 7.5759 7.43017 8.32806 8.48696 8.86384C9.54375 9.39961 10.7014 9.70702 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554V9.04554Z"
          fill="#FEF9F5" />
      </svg>

    </div>
  </div>

  <Suspense>
    <router-view class="" />
  </Suspense>
</template>

<script setup lang="ts">


</script>

<style>
body {
  background-color: #1A1B20;
}
</style>