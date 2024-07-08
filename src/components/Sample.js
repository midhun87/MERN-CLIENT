import React from "react";
export default function Sample(){
    return(
        <div className="container mx-auto p-4"> 
  <div className="flex flex-col items-center justify-center h-screen"> 
    <header className="w-full p-4 bg-blue-500"> 
      <h1 class="text-white">Header</h1> 
    </header> 
    <main class="flex-1 p-4 bg-red-900"> 
      <p>Main content goes here.</p> 
    </main> 
    <footer class="w-full p-4 bg-blue-500"> 
      <p class="text-white">Footer</p> 
    </footer> 
  </div> 
</div> 

        
    )
}