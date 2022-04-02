import React from 'react'
import Header from './Header'

const Skills = () => (
  <>
  <Header/>
  
  <div id ="liencompetences" class="container-fluid competences">
    <div class="container">

    <h2 class="titrecompetences">Mes compétences</h2><br/><br/>
      <div class="row">      
      
        <div class="col-md-3 col-lg-3 col-xs-6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="./../assets/images/competences/web.png" alt="" class="imgcompetences"/>
          <p class="title_competence">Web design</p>
          <p class="texte_competences">HTML5 / CSS3 / PHP / JS / JQuery </p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/programmation.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Programmation</p>
          <p class="texte_competences">Java / Python</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/sql.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Base de données</p>
          <p class="texte_competences">MySQL / PostgreSQL / PLSQL</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/reseaux.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Réseaux</p>
          <p class="texte_competences">Routage / IP configuration</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/os.png" alt="" class="imgcompetences"></img>

          <p class="title_competence">Systèmes</p>
          <p class="texte_competences">Windows / linux</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/bulle.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Langues</p>
          <p class="texte_competences">Français / Anglais informatique</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/gitlab.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Outils collaboratifs</p>
          <p class="texte_competences">Gitlab</p>
        </div>

        <div class="col-md-3 col-lg-3 col-xs 6 col-sm-6 competence" data-cues="fadeIn" data-group="images" data-duration="500">
          <img src="images/competences/framework.png" alt="" class="imgcompetences"></img>
          <p class="title_competence">Framework</p>
          <p class="texte_competences">Bootstrap / Laravel</p>
        </div>
        
        </div>
        </div>
      </div>
  </>
  
)

export default Skills