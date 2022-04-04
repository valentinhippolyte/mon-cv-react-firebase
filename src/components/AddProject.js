import { db } from "../firebaseConf";
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

export class AddProject extends Component {

    state = {
        nom: "",
        description: "",
        lien: "",
    }

    render(){
        const addMyProject = (e) => {
            e.preventDefault();
            db.collection("projets").add({
                description: this.state.description,
                lien: this.state.lien,
                nom: this.state.nom
            })
            this.setState({
                description: "",
                lien: "",
                nom: ""
            })
        }

        const updateInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

          return (
              <>
              <Header/>
            <form onSubmit={addMyProject}>
            <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
                <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">Ajouter un projet</h1>
                <div class="space-y-4">
                    <div>
                    <label for="nom" class="text-lx font-serif">Nom :</label>
                    <input class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" type="text" name="nom" placeholder="Nom de votre projet..." onChange={updateInput} value={this.state.nom} />
                    </div>
                    <div>
                    <label for="description" class="block mb-2 text-lg font-serif">Description :</label>
                    <textarea cols="30" rows="10" placeholder="Décrivez le projet..." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" type="text" name="description" onChange={updateInput} value={this.state.description}></textarea>
                    </div>
                    <div>
                    <label for="lien" class="text-lx font-serif">lien du projet :</label>
                    <input type="text" placeholder="lien..." name="lien" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" onChange={updateInput} value={this.state.lien}/>
                    </div>
                    <button class="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600" type="submit">Ajouter</button>
                </div>
                <Link style={{color: "black"}} to="/">Revenir à l'accueil</Link>
                </div>
            </div>
            </form>
             </>
          )
    }
}

export default AddProject; 