import 'firebase/compat/auth';
import { ThisIsStatusAuth, WelcomeTexte } from "./ThisIsStatusAuth";

function Header(){
    return(
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"><a href="/">Mon Portfolio</a></span>
            <div class="flex md:order-2">
                <ThisIsStatusAuth/>
            </div>
            <WelcomeTexte/>
            </div>
            </nav>
    )
}

export default Header;