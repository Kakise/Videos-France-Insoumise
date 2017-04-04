# Videos-France-Insoumise

Le site fonctionne à partir du CMS Drupal, fonctionnant sur PHP.
Actuellement, c'est la version majeure 7 qui est utilisé (7.54). Disponible en téléchargement ici : https://www.drupal.fr/

En gros, il vaut mieux ne pas toucher au coeur de Drupal, et de ne modifier que les fichiers de thèmes et de modules importés.
Pour le theme, le chemin  est le suivant: sites/all/themes/videofis_subtheme/css/style.css.

Pour les modules importés, ils sont ici : sites/all/modules.

Les modules customisés, c'est à dire, qui relèvent plus de l'expérimental, voir du bricolage perso, que du véritable module prêt à l'emploi sur n'importe quel site, sont situés un étage plus bas, dans le sous dossier sites/all/modules/_custom.


# INSTALLATION

1°) Charger la base de données :
Il vous faut créer une nouvelle base de données sur votre serveur MYSQL et importer le fichier dump situé à la racine du répertoire :
VidosFranceInsoumise-2017-04-04T12-23-53.mysql.gz


2°) Paramétrer l'accès à la base de données :

Aller dans sites/default et cloner le fichier default.settings.php en le nommant settings.php.

Editer ce nouveau fichier settings.php pour y donner les informations nécessaires à l'accès à la base de données contenant les données importées dans le 1°).

Un très bon guide (en anglais) se trouve ici :
https://www.ostraining.com/blog/drupal/change-the-database-connection/

3°) Accéder au site :

Rentrer l'url indiquant votre site dans un navigateur. Le site devrait s'afficher désormais.

Plutot que de créer un nouveau compte, connectez vous avec le compte admin (Mot de passe: admin).

Vous aurez accès au back-office et à tous les paramétrages du site.
