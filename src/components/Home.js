import React from 'react'
import Header from './Header';
import Projects from './Projects';



const Home = () => (
  <>
  <Header/>

  <div class="p-16">
    <div class="p-8 bg-white mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                <div>
                    <a href="https://www.linkedin.com/in/valentin-hippolyte-b220751b9/"><img class="hover:-lg font-medium transition transform hover:-translate-y-0.5" src="../assets/images/linkedin.png" href="assets/images/cvF.pdf" alt=""></img></a>
                </div>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100009693605480"><img class="hover:-lg font-medium transition transform hover:-translate-y-0.5" src="./../assets/images/facebook.png" alt=""/></a>
                </div>
                <div>
                    <a href="https://github.com/valentinhippolyte"><img class="hover:-lg font-medium transition transform hover:-translate-y-0.5" src="assets/images/github.png" alt=""/></a>
                </div>
            </div>
            <div class="relative">
                <div
                    class="w-48 h-48 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    <img  class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor" src="./../assets/images/avatar.jpg" alt=""/>
                </div> 
            </div>
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"><button
                    class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    <a href='https://firebasestorage.googleapis.com/v0/b/moncv-4ea33.appspot.com/o/CV_Valentin_HIPPOLYTE.pdf?alt=media&token=753bf649-2cbb-46e5-a7f7-d366b5fd18b9' target="blank">Mon CV </a><i class="fa-duotone fa-file-user"></i></button> <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"><a href='mailto:valentin.hippolyte@outlook.fr'>Mail</a> <i class="fa fa-envelope"></i></button> </div>
        </div>
        <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">Valentin HIPPOLYTE, <span
                    class="font-light text-gray-500">20 ans</span></h1>
            <p class="font-light text-gray-600 mt-3">Lille, France</p>
            <p class="mt-8 text-gray-500">Développeur web en alternance chez Worldline</p>
            <p class="mt-2 text-gray-500">Université du Littoral Côte d'Opale, Calais</p>
        </div>
    </div>
</div>
      <Projects/>
  </>
)

export default Home