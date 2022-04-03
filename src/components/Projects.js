import { db } from "../firebaseConf";
import {useEffect, useState} from "react"

function Projects(){
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjectsFromFirebase = [];

        const myPoject = db
        .collection("projets")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getProjectsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
            });
            setProjects(getProjectsFromFirebase);
            setLoading(false);
        });
        return () => myPoject();
    }, [loading]);

    if (loading) {
        return <h1>Chargement...</h1>;
    }

      return (
        <div>
           <div class="flex items-stretch justify-center items-center">
               <p class="text-4xl ml-1.5">Mes Projets</p>
                <div class="justify-around">
                    <div class="flex flex-col">
                        <a href="add-project">
                            <button
                                class="p-0 w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            
            <div class="flex flex-wrap">
                {projects.length > 0 ? (
                    projects.map((project) => 
                    <div class="border-2 bg-slate-900 m-10 p-4 rounded-xl w-1/5">
                    <div class="px-6 py-4">
                        <div class="text-white font-bold text-xl mb-2">{project.nom}</div>
                        <p class="text-white text-base">
                            {project.description}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <a href={project.lien}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            voir
                        </button></a>
                    </div>
                    </div>
                )
                ) : (
                    <h1>Actuellement en train de charbonner...</h1>
                )}
            </div>
        </div>  
      );
}

export default Projects;




