BACKEND

-application.properties
	En este fichero se han guardado los parametros de conexion para la BBDD.

-MODEL
	Donde se crea la estructura de la BBDD.

-REPOSITORY
	Es el encargado de operar directamente con la BBDD a traves de repositorios.

-SERVICE
	Encargada de comunicar el CONTROLLER con el REPOSITORY.
	UUID genera número ID para la partida.
	Los setters asignan propiedades al objeto que acabamos.
	El objeto nace vacío.
	partidaRepository.save(partida) --> Envía datos al repositorio.
	return --> Devuelve resultado del repositorio al Controller

-CONTROLLER
	RestController es una anotación de Sprinboot para indicar que es una clase de tipo Controlador
	RequestMapping es la anotación utilizada para saber a través de que enlace "escucha" el Controlador
	Autowired es una anotación de Java utilizada para inyectar los servicios sin tener que crearlos manualmente.
	CrossOrigin es una anotación encargada de solo permitir las peticiones desde los enlaces indicados en "origins"
	GetMapping es la anotación utilizada para saber a través de que enlace se tiene que utilizar la función
	El controlador se encarga de "escuchar" las peticiones del Front-End y comunicarse con el Servicio


TECNOLOGIA BACKEND
	-BBDD: MySQL con SpringBoot JPA para la generación automática de la BBDD
	-Para el proyecto se ha utilizado SpringBoot para aprovechar las anotaciones
	-Para la instalación de dependencias y compilación del proyecto se ha utilizado Maven
	-Es un proyecto REST.


TECNOLOGIA FRONTEND
	-Angular y para la instalación de dependencias 'npm'.
	-Para la comunicación un cliente Http.

