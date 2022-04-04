# Ejercicio propuesto

> Una web para reservas de viajes espaciales (Astro Bookings)

## 0. Estructura y configuración de la aplicación

- [x] Mostrar un listado de las agencias de viajes colaboradoras
- [x] Mostrar un listado de los viajes disponibles

## 1. Componentes para presentación de información

- [x] Mostrar un mensaje mientras se está cargando la información
- [x] Mostrar un mensaje de error cuando no puede cargar la información
- [x] Mostrar un mensaje de advertencia cuando no hay datos disponibles
- [x] Mostrar los datos en modo lista
- [x] Transformar los enumerados en iconos

## 2. Rutas, datos y control de accesos

- [x] Una página para la gestión de agencias espaciales
- [x] Resolver los datos antes de entrar en la página
- [x] Una página para el alta de una nueva agencia
- [x] Proteger la entrada a la página de usuarios no autorizados
- [x] Redirigir a los no autenticados a la página de login
- [x] Redirigir tras el login a la página de inicio
- [x] Proteger la salida para datos no guardados

## 3. Formularios y validación

- [x] Formulario de registro de usuario
- [x] Validaciones de campos obligatorios
- [x] Validaciones asíncrona de email
- [x] Validaciones duplicada de contraseña
- [x] Usar componente email común (CVA)
- [x] Usar componente genérico con template (CVA)
- [x] Re utilización de lógica de formularios

## 4. Inyección de dependencias

- [x] Servicio pesado para cálculos de precios
- [x] Servicios para mostrar pesos en distintos sistemas de medidas
- [x] Servicio de Logging
- [x] Provider as a resolver para un componente

## 5. RxJS y HTTP

- [x] Caché de llamadas HTTP (filter, tap)
- [x] Gestión de estado de las comunicaciones HTTP (para usar más adelante con un store)
- [x] Control de errores de las comunicaciones HTTP (retryWhen, catchError, mergeMap)
- [x] Obtener lista de viajes de la agencia activa (switchMap vs mergeMap)
- [x] Obtener total de plazas ofertadas por todas las agencias (forkJoin)
- [x] Un buscador de vuelos (fromEvent, debounceTime, distinctUntilChanged)
- [x] Compartir resultados asíncronos (share, shareReplay)

## 6. Redux

- [x] Un Store reactivo para el control de autorización del usuario
- [x] Un Store reactivo con acciones y consultas al estado de llamadas HTTP
- [x] Un Store con Akita para el estado de las reservas

## 7. SSR

- [x] Add Server side capabilities
- [x] Run the app in a server
- [x] Use a different log logic on client or server
- [x] Use a different strategy abstract service on client or server
- [x] Transfer state
- [x] SEO friendly (home page)
