# crud_firebase

## Descripción General
Este proyecto contiene una aplicación Vue.js con dos componentes principales para la gestión de datos de usuarios: AddUsers y ListUsers. Los usuarios pueden ser agregados y mostrados utilizando Firebase Firestore para el almacenamiento de datos. La tienda de Vuex se usa para la gestión del estado, manejando operaciones de adición, eliminación y obtención de usuarios. <hr/>

## Estructura del Proyecto
### Componentes
* Componente AddUsers
* Componente ListUsers
### Store
* Tienda Vuex para la gestión del estado.
### Configuración de Firebase
* Firebase Firestore para operaciones de base de datos.
#### Explicación del Código
* Componente  [AddUsers](https://github.com/RerreRojas/crud_firebase/blob/main/src/components/AddUsers.vue)
Contiene un formulario para agregar nuevos usuarios.
Utiliza la directiva v-model de Vue para el enlace de datos bidireccional.
Al enviar el formulario, se llama al método addUser.
* Componente [ListUsers](https://github.com/RerreRojas/crud_firebase/blob/main/src/components/ListUsers.vue)
** Muestra una lista de usuarios.
** Cada usuario puede ser eliminado haciendo clic en el botón asociado.
#### Configuración de Firebase
Asegúrate de tener Firebase configurado correctamente en tu proyecto.
Reemplaza la importación de firebaseApp con tu configuración de Firebase.
### Cómo Ejecutar
* Clona el repositorio.
* Instala las dependencias utilizando npm install.
* Asegúrate de tener la configuración de Firebase.
* Ejecuta el servidor de desarrollo utilizando npm run serve.
## Conclusión
Esta aplicación demuestra un sistema simple de gestión de usuarios utilizando Vue.js, Vuex y Firebase Firestore. Incluye componentes para agregar y listar usuarios, con estilos para proporcionar una interfaz limpia

