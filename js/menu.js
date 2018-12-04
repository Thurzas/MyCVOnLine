function menu(local){
	if(local!=undefined)
		this.Local=local;
	var list=document.getElementsByClassName("Title");
	var body=document.getElementById("body");

	if(this.Local!=undefined)
	{
		switch(local){
			case "Présentation":
				this.Local="Présentation";
				printMenu(this.Local);
				break;

			case "Compétences":
				this.Local="Compétences";
				printMenu(this.Local);
				break;

			case "Formation":
				this.Local="Formation";
				printMenu(this.Local);
				break;

			case "Expériences Professionnelles":
				this.Local="Expériences Professionnelles";
				printMenu(this.Local);
				break;

			case "Contact":
				this.Local="Contact";
				printMenu(this.Local);
				break;

			case "Projets personnels":
					this.Local="Projets personnels";
					printMenu(this.Local);
					break;
		}
	}
	addEventListener("click", append);
	function printMenu(title){
				switch(title){
			case "Présentation":
				this.Local="Présentation";
				body.innerHTML="                <h1>Présentation:</h1>\
                    <p>Bonjour à vous, cher internaute, je m'appelle Mathieu Miot, de surnom \"Thurzas\", j'ai grandi dans une petite ville qui s'appelle Château-Thierry.\
                J'ai découvert l'informatique très jeune, avec un CPC464 Amstrad (oui je sais, sa place est dans un musée). Je n’ai pas fait de grandes choses dessus (j'étais encore à l'école primaire), par contre j'avais appris à dessiner des figures géométriques en tapant des lignes de codes ( et j'étais content !).</p>\
                <p>Plus tard au collège, j'ai découvert la programmation web avec un simple exercice demandé par mon professeur en cours de technologie. On nous avait demandé de faire un site web avec publisher 98... j'ai tellement détesté le logiciel que j'ai fini par apprendre à faire du html, \
                du css, et du javascript, juste pour arrêter d'utiliser ce programme. Bien que ce ne fut qu'un site vitrine, j'étais fier de ce petit site que j'avais fait.</p>";
				break;

			case "Compétences":
				this.Local="Compétences";
				body.innerHTML="				<h1>Compétences:</h1>\
				<h2>Developpement Web:</h2>\
				<table>\
					<tr>\
						<td><p>HTML5, Javascript, PHP</p></td> 					<td class=\"col2\"><progress max=\"100\" value=\"80\" form=\"form-id\">80%</progress></td>\
					</tr>\
					<tr>\
					<td><p>Angular(Découverte depuis Juillet 2018)</p></td>		<td class=\"col2\"><progress max=\"100\" value=\"25\" form=\"form-id\">25%</progress></td>\
					</tr>\
					<tr>\
					<td><p>node.js</p></td>		<td class=\"col2\"><progress max=\"100\" value=\"25\" form=\"form-id\">30%</progress></td>\
					</tr>\
					</table>\
				<h2>Developpement:</h2>\
				<table>\
					<tr>\
					<td><p>Java, C#</p></td> 										<td class=\"col2\"><progress max=\"100\" value=\"90\" form=\"form-id\">90%</progress></td>\
					</tr>\
					<tr>\
					<td><p>C++(Bases),Python, PL/SQL,Shell</p></td> 				<td class=\"col2\"><progress max=\"100\" value=\"50\" form=\"form-id\">50%</progress></td>\
					</tr>\
				</table>\
				<h2>SGBD:</h2>\
				<table>\
					<tr>\
					<td><p>Oracle SQL+, ACESS</p></td> 						<td class=\"col2\"><progress max=\"100\" value=\"70\" form=\"form-id\">70%</progress></td>\
					</tr>\
				</table>\
					<h2>Langues:</h2>\
				<table>\
					<tr>\
					<td><p>Anglais</p></td> 									<td class=\"col2\"><progress max=\"100\" value=\"60\" form=\"form-id\">60%</progress></td>\
					</tr>\
				</table>\
					<h2>Méthodes</h2>\
				<table>\
					<tr>\
					<td><p>UML,Merise,POO</p></td>								<td class=\"col2\"><progress max=\"100\" value=\"70\" form=\"form-id\">70%</progress></td>\
					</tr>\
				</table>\
					<h2>Autres</h2>\
				<table>\
					<tr>\
					<td><p>Arduino,Inkscape</p></td>		 				<td class=\"col2\"><progress max=\"100\" value=\"60\" form=\"form-id\">60%</progress></td>\
					</tr>\
				</table>";
				break;

			case "Formation":
				this.Local="Formation";
				body.innerHTML="				<h1>Formation:</h1>\
				<p>2012: DUT Informatique I.U.T REIMS CHALONS CHARLEVILLE (Première année).</p>\
				<p>2009-2010: BAC S/SVT Option Physique/Chimie.</p>";
				break;

			case "Expériences Professionnelles":
				this.Local="Expériences Professionnelles";
					body.innerHTML= "				<h1>Mes expérience professionnelles:</h1>\
					<p>Malheureusement, je n'ai eu, jusqu'à maintenant, que des \"Jobs alimentaires\". Ah si seulement une entreprise ou une association me donnais cette chance de prouver ce que je vaux. Toutes contributions pour étoffer le contenu de cette page est la bienvenue.</p>";
					break;

			case "Contact":
				this.Local="Contact";
					body.innerHTML="			<h1>Me Contacter:</h1>\
												<p><img src='img/tel.png'>\
												07.81.77.12.26\</p>\
												<p><img src='img/mail.png'>\
												mathieu.miot@free.fr</p>";
				break;

			case "Projets personnels":
					this.Local="Projets personnels";
					body.innerHTML="			<h1>Mes projets:</h1>\
					<h2>snake en javascript</h2> \
														<p>bien que peu original (après tout, ce jeu date de 1976), ce genre d'exercice est utile pour revoir le fonctionnement des principes de base dans n'importe quels langages. Prenons l'exemple des tableaux: la gestion de \"l'écran\" (la bannière du site) est fait en trois tableaux: deux tableaux pour la gestion des coordonnées X,Y (en fonction d'une taille de pixel et d'une marge), et un troisième tableau pour traiter l'affichage et la couleur des \"pixels\".\
														le tableau de pixel est un tableau à une dimension dans lequel on multiplie la coordonnée X par la largeur maximale du tableau plus la coordonnée Y (accès par double indice sur un ensemble en une dimension)</p>\
														<p>Dans l'ensemble, il suffit de manipuler quatre objets : une classe serpent, une classe écran, une classe jeu, ensuite une dernière classe Lettre me sert à écrire sur les écrans. le reste du code représente les quelques fonctions utiles comme la fonction RandomInt, et le reste du code gère l'interaction entre ces quatres classes.</p>\
														<p>Par ailleurs, vous avez une démonstration de ce snake directement sur le site, il s'agit de la bannière de bienvenue.</p>\
														<h2>Donjon aléatoire (en cours de développement)</h2>\
														<p>Comme beaucoup de monde en informatique, j'ai tenté de faire mon propre jeu, mais pour l'instant, j'ai surtout essayé de faire mes propres assets, j'ai eu l'idée de faire un donjon procéduralement quand je me suis intéressé aux labyrinthes \"parfait\" (labyrinthes conçues procéduralement dont 100% de l'espace est utilisé). Le principe est long à expliquer, mais simple à comprendre:</p>\
														<p>On génère une grande quantité de pièces aléatoirement, de taille aléatoire bien entendu, les deux distributions aléatoires requises sont faites selon une distribution normale (pour bien sur les centrer vers l'emplacement souhaité, et pour orienter vers la taille recherché également).\
														une distribution normale se construit de plusieurs façons en informatique, bien que ce n'est pas la plus économe, j'ai choisi de faire une transformation de Box-Muller (quand j'en aurai l'occasion, j'utiliserai la méthode ziggurat, qui est actuellement la plus efficace, mais pas la plus simple à implémenter).</p>\
														<p>La suite du programme consiste à les séparer, j'ai été au plus simple et j'ai fait un algorithme de séparation/cohésion de groupe. Pour la suite, on garde les donjons qui nous intéresse sur la taille (on garde les autres de coté, certains pourraient resservir pour les couloirs).A l'heure actuel, mon objectif est de relier les pièces, le mieux à ce que l'on m'a dit (sur reddit) est de faire une triangulation de Delaunay et de l'exploiter dans un arbre de poids minimal... pour le moment je chercher à implémenter la triangulation de Delaunay.</p>";
					break;
		}
		burgerBox.checked=false;
	};

	function append(evt){
		switch(evt.target.innerHTML){
			case "Présentation":
				this.Local="Présentation";
				printMenu(this.Local);
				break;

			case "Compétences":
				this.Local="Compétences";
				printMenu(this.Local);
				break;

			case "Formation":
				this.Local="Formation";
				printMenu(this.Local);
				break;

			case "Expériences Professionnelles":
				this.Local="Expériences Professionnelles";
				printMenu(this.Local);
				break;

			case "Contact":
				this.Local="Contact";
				printMenu(this.Local);
				break;

			case "Projets personnels":
					this.Local="Projets personnels";
					printMenu(this.Local);
					break;
		}
	};
}
