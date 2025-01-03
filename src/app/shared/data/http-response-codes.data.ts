export const HTTP_RESPONSE_CODES = {
    '1xx': [
      {
        code: '100',
        message: 'Continuar',
        description:
          'El código de respuesta de estado informativo 100 Continue indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarlo si ya está terminado.',
        impacto: 'bajo',
        recursos: ['https://developer.mozilla.org/es/docs/Web/HTTP/Status/100'], 
        deprecated: false,
        note: '',
        type: 'informativo',
        color: '#fffd07a3'
      },
      {
        code: '101',
        message: 'Protocolos de conmutación',
        description:
          'El código de respuesta 101 Switching Protocols que el servidor está cambiando de protocolo al solicitado por un cliente que mandó un mensaje incluyendo la cabecera.',
        impacto: 'bajo',
        recursos: ['https://developer.mozilla.org/es/docs/Web/HTTP/Status/101'], 
        deprecated: false,
        note: '',
        type: 'informativo',
        color: '#fffd07a3'
      },
      {
        code: '102',
        message: 'Tratamiento',
        description:
          'El código de estado de respuesta informativa HTTP 102 Processing indica al cliente que se ha recibido una solicitud completa y que el servidor está trabajando en ella. Este código de estado solo se envía si el servidor espera que la solicitud tarde un tiempo significativo.',
        impacto: 'bajo',
        recursos: ['https://developer.mozilla.org/es/docs/Web/HTTP/Status/102'], 
        deprecated: true,
        note: 'Esta función ya no se recomienda. Aunque es posible que algunos navegadores aún lo admitan, es posible que ya se haya eliminado de los estándares web relevantes, que esté en proceso de eliminación o que solo se conserve por motivos de compatibilidad. Evite usarlo y actualice el código existente si es posible; Consulte la tabla de compatibilidad en la parte inferior de esta página para guiar su decisión. Tenga en cuenta que esta función puede dejar de funcionar en cualquier momento.',
        type: 'informativo',
        color: '#fffd07a3'
      },
      {
        code: '103',
        message: 'Primeras pistas',
        description:
          'La respuesta informativa HTTP 103 Early Hints puede ser enviada por un servidor mientras aún está preparando una respuesta, con sugerencias sobre los sitios y recursos a los que el servidor espera que se vincule la respuesta final. Esto permite que un navegador se preconecte a sitios o comience a precargar recursos incluso antes de que el servidor haya preparado y enviado una respuesta final. El cliente recupera los recursos precargados indicados por las primeras sugerencias tan pronto como se reciben las sugerencias.',
        impacto: 'bajo',
        recursos: ['https://developer.mozilla.org/es/docs/Web/HTTP/Status/103'], 
        deprecated: false,
        note: '',
        type: 'informativo',
        color: '#fffd07a3'
      },
    ],
    '2xx': [
      {
        code: '200',
        message: 'OK',
        description:
          'El código de estado de respuesta correcta HTTP 200 OK indica que una solicitud se ha realizado correctamente. Una respuesta se puede almacenar en caché de forma predeterminada.',
        impacto: 'Bajo',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '201',
        message: 'Creado',
        description:
          'El código de estado de respuesta correcta HTTP 201 Created indica que la solicitud HTTP ha llevado a la creación de un recurso. Este código de estado se envía normalmente como resultado de una solicitud.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '202',
        message: 'Aceptado',
        description:
          'El código de estado de respuesta correcta HTTP 202 Accepted indica que una solicitud se ha aceptado para su procesamiento, pero el procesamiento no se ha completado o es posible que no se haya iniciado. El procesamiento real de la solicitud no está garantizado; Es posible que se produzca un error en una tarea o acción o que no se permita cuando un servidor intenta procesarla.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '203',
        message: 'Información no autorizada',
        description:
          'El código de estado de respuesta correcta HTTP 203 Non-Authoritative Information indica que la solicitud se realizó correctamente, pero un proxy transformador ha modificado los encabezados o el contenido incluido de la respuesta 200 () del servidor de origen.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '204',
        message: 'Sin contenido',
        description:
          'El código de estado de respuesta correcta HTTP 204 Sin contenido indica que una solicitud se ha realizado correctamente, pero el cliente no necesita salir de su página actual. Una respuesta se puede almacenar en caché de forma predeterminada y, en estos casos, se incluye un encabezado ETag.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '205',
        message: 'Restablecer contenido',
        description:
          'El código de estado de respuesta correcta HTTP 205 Reset Content indica que la solicitud se ha procesado correctamente y que el cliente debe restablecer la vista del documento.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205'], 
        deprecated: false,
        note: 'En las aplicaciones web que usan el estado, se supone que el cliente controla el restablecimiento del contenido después de una respuesta. Por lo general, esto se hace a través de JavaScript, ya que los navegadores no manejan de forma nativa el restablecimiento de contenido, como los formularios, después de una respuesta.',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '206',
        message: 'Contenido parcial',
        description:
          'El código de estado de respuesta correcta HTTP 206 Partial Content se envía en respuesta a una solicitud de intervalo. El cuerpo de la respuesta contiene los rangos de datos solicitados, tal como se especifica en el encabezado Range de la solicitud.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206'], 
        deprecated: false,
        note: '',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '207',
        message: 'Estado múltiple',
        description:
          'El código de estado de respuesta correcta HTTP 207 Multi-Status indica una combinación de respuestas. Esta respuesta se utiliza exclusivamente en el contexto de la creación y el control de versiones distribuidos web (WebDAV).',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207'], 
        deprecated: false,
        note: 'Los navegadores que accedan a páginas web nunca encontrarán este código de estado. La capacidad de devolver una colección de recursos forma parte del protocolo WebDAV y solo la encuentran las aplicaciones web que acceden a un servidor WebDAV.',
        type: 'Exitoso',
        color: '#7bf005ad'
      },
      {
        code: '208',
        message: 'Ya reportados',
        description:
          'El código de estado de respuesta correcta HTTP 208 ya notificado se utiliza en una respuesta 207 Multi-Status para ahorrar espacio y evitar conflictos. Esta respuesta se utiliza exclusivamente en el contexto de la creación y el control de versiones distribuidos web (WebDAV).',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208'], 
        deprecated: false,
        note: 'La capacidad de enlazar un recurso a varias rutas de acceso es una extensión del protocolo WebDAV (puede ser recibida por aplicaciones web que acceden a un servidor WebDAV). Los navegadores que accedan a páginas web nunca encontrarán este código de estado.',
        type: 'Exitoso',
        color: '#7bf005ad'
      }
    ],
    '3xx': [
      {
        code: '300',
        message: 'opciones múltiples',
        description:
          'El código de estado de respuesta de redireccionamiento HTTP 300 Multiple Choices indica que la solicitud tiene más de una respuesta posible. El user-agent o el usuario debe elegir uno de ellos.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300'], 
        deprecated: false,
        note: 'En la negociación de contenido controlada por agentes, un cliente y un servidor deciden en colaboración la mejor variante de un recurso determinado cuando el servidor tiene varias variantes. La mayoría de los clientes carecen de un método para elegir automáticamente entre las respuestas, y los viajes de ida y vuelta adicionales ralentizan la interacción cliente-servidor. La negociación de contenido dirigida por el servidor es mucho más común, donde un servidor elige el recurso más apropiado para el cliente en función de los encabezados de la solicitud (Accept-Language, Accept, etc.).',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '301',
        message: 'Trasladado Permanentemente',
        description:
          'El código de estado de respuesta de redireccionamiento HTTP 301 Moved Permanent indica que el recurso solicitado se ha movido permanentemente a la URL en el encabezado Location.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301'], 
        deprecated: false,
        note: 'En el estándar Fetch, cuando un agente de usuario recibe un en respuesta a una solicitud POST, utiliza el método GET en la solicitud de redirección posterior, según lo permitido por la especificación HTTP. Para evitar que los agentes de usuario modifiquen la solicitud, utilice 308 Permanent Redirect en su lugar, ya que está prohibido alterar el método después de una respuesta.',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '302',
        message: 'Encontrados',
        description:
          'El código de estado de respuesta de redireccionamiento HTTP 302 Found indica que el recurso solicitado se ha movido temporalmente a la dirección URL en el encabezado Location.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302'], 
        deprecated: false,
        note: 'En el estándar Fetch, cuando un agente de usuario recibe un en respuesta a una solicitud POST, utiliza el método GET en la solicitud de redirección posterior, según lo permitido por la especificación HTTP. Para evitar que los agentes de usuario modifiquen la solicitud, utilice 307 Temporary Redirect en su lugar, ya que está prohibido alterar el método después de una respuesta.',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '303',
        message: 'Véase Otros',
        description:
          'El código de estado de respuesta de redirección HTTP 303 See Other indica que el explorador debe redirigir a la URL en el encabezado Location en lugar de representar el recurso solicitado.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303'], 
        deprecated: false,
        note: '',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '304',
        message: 'No modificado',
        description:
          'El código de estado de respuesta de redirección HTTP 304 no modificado indica que no es necesario retransmitir los recursos solicitados.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304'], 
        deprecated: false,
        note: '',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '307',
        message: 'Redireccionamiento temporal',
        description:
          'El código de estado de respuesta de redireccionamiento temporal HTTP 307 indica que el recurso solicitado se ha movido temporalmente a la dirección URL en el encabezado Ubicación.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307'], 
        deprecated: false,
        note: '',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
      {
        code: '308',
        message: 'Redireccionamiento permanente',
        description:
          'El código de estado de respuesta de redireccionamiento permanente HTTP 308 indica que el recurso solicitado se ha movido permanentemente a la dirección URL proporcionada por el encabezado Location.',
        impacto: 'Moderado',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308'], 
        deprecated: false,
        note: 'Algunas aplicaciones web pueden utilizar el de una manera no estándar y para diferentes propósitos. Por ejemplo, Google Drive utiliza una respuesta para indicar al cliente cuándo se ha detenido una carga sin terminar. Para obtener más información, consulta Realizar una descarga reanudable en la documentación de Google Drive.',
        type: 'redireccionamiento',
        color: '#f08c05ad'
      },
    ],
    '4xx': [
      {
        code: '400',
        message: 'Solicitud incorrecta',
        description:
          'El código de estado de respuesta de error de cliente HTTP 400 Bad Request indica que el servidor no procesaría la solicitud debido a algo que el servidor consideró un error de cliente. El motivo de una respuesta suele deberse a una sintaxis de solicitud con formato incorrecto, un entramado de mensajes de solicitud no válido o un enrutamiento de solicitud engañoso.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '401',
        message: 'No autorizado',
        description:
          'El código de estado de respuesta de error de cliente no autorizado HTTP 401 indica que una solicitud no se realizó correctamente porque carece de credenciales de autenticación válidas para el recurso solicitado. Este código de estado se envía con un encabezado de respuesta HTTP WWW-Authenticate que contiene información sobre el esquema de autenticación que el servidor espera que el cliente incluya para realizar la solicitud correctamente.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '402',
        message: 'Pago requerido',
        description:
          'El código de estado de respuesta de error de cliente HTTP 402 Payment Required es un código de estado de respuesta no estándar reservado para uso futuro.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '403',
        message: 'Prohibido',
        description:
          'El código de estado de respuesta de error de cliente HTTP 403 Forbidden indica que el servidor entendió la solicitud pero se negó a procesarla. Este estado es similar al 401, excepto que para las respuestas 403 Forbidden, la autenticación o reautenticación no hace ninguna diferencia. El error de la solicitud está vinculado a la lógica de la aplicación, como permisos insuficientes para un recurso o una acción.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '404',
        message: 'No encontrado',
        description:
          'El código de estado de respuesta de error de cliente HTTP 404 Not Found indica que el servidor no puede encontrar el recurso solicitado. Los enlaces que conducen a una página 404 a menudo se denominan enlaces rotos o muertos y pueden estar sujetos a la putrefacción de los enlaces.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '405',
        message: 'Método no permitido',
        description:
          'El código de estado de respuesta de error de cliente HTTP 405 Method Not Allowed indica que el servidor conoce el método de solicitud, pero el recurso de destino no admite este método. El servidor debe generar un encabezado Allow en una respuesta 405 con una lista de métodos que admite actualmente el recurso de destino.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '406',
        message: 'No aceptable',
        description:
          'El código de estado de respuesta de error de cliente HTTP 406 Not Acceptable indica que el servidor no pudo producir una respuesta que coincida con la lista de valores aceptables definida en los encabezados de negociación de contenido proactivo de la solicitud y que el servidor no estaba dispuesto a proporcionar una representación predeterminada.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '407',
        message: 'Autenticación de proxy requerida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 407 Proxy Authentication Required indica que la solicitud no se realizó correctamente porque carece de credenciales de autenticación válidas para el servidor proxy que se encuentra entre el cliente y el servidor con acceso al recurso solicitado.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '408',
        message: 'Tiempo de espera de solicitud',
        description:
          'El código de estado de respuesta de error de cliente HTTP 408 Request Timeout indica que el servidor desea cerrar esta conexión no utilizada. A es enviado en una conexión inactiva por algunos servidores, incluso sin ninguna solicitud previa por parte del cliente.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '409',
        message: 'Conflicto',
        description:
          'El código de estado de respuesta de error del cliente HTTP 409 Conflict indica un conflicto de solicitud con el estado actual del recurso de destino.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '410',
        message: 'Desaparecido',
        description:
          'El código de estado de respuesta de error del cliente HTTP 410 Gone indica que el recurso de destino ya no está disponible en el servidor de origen y que es probable que esta condición sea permanente. Una respuesta 410 se puede almacenar en caché de forma predeterminada.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '411',
        message: 'Longitud requerida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 411 Length Required indica que el servidor se negó a aceptar la solicitud sin un encabezado Content-Length definido.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411'], 
        deprecated: false,
        note: 'Al enviar datos en una serie de fragmentos, se omite el encabezado y, al comienzo de cada fragmento, la longitud del fragmento actual debe incluirse en formato hexadecimal.',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '412',
        message: 'Condición previa fallida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 412 Precondition Failed indica que se denegó el acceso al recurso de destino. Esto sucede con las solicitudes condicionales en métodos distintos de GET o HEAD cuando no se cumple la condición definida por los encabezados If-Unmodified-Since o If-Match.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '413',
        message: 'Contenido demasiado grande',
        description:
          'El código de estado de respuesta de error de cliente HTTP 413 Content Too Large indica que la entidad de solicitud era mayor que los límites definidos por el servidor. Es posible que el servidor cierre la conexión o devuelva un campo de encabezado Retry-After.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '414',
        message: 'URI demasiado largo',
        description:
          'El código de estado de respuesta de error de cliente HTTP 414 URI demasiado largo indica que un URI solicitado por el cliente era más largo de lo que el servidor está dispuesto a interpretar.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '415',
        message: 'Tipo de medio no admitido',
        description:
          'El código de estado de respuesta de error de tipo de medio no admitido HTTP 415 indica que el servidor se negó a aceptar la solicitud porque no se admite el formato de contenido del mensaje.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '416',
        message: 'Rango no satisfecho',
        description:
          'El código de estado de respuesta de error de error HTTP 416 Range Not Satisfiable indica que un servidor no pudo atender los intervalos solicitados. La razón más probable de esta respuesta es que el documento no contiene dichos rangos o que el valor del encabezado Range, aunque sintácticamente correcto, no tiene sentido.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '417',
        message: 'Expectativa fallida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 417 Expectation Failed indica que no se pudo cumplir la expectativa dada en el encabezado Expect de la solicitud. Después de recibir una respuesta 417, un cliente debe repetir la solicitud sin un encabezado de solicitud, incluido el archivo en el cuerpo de la solicitud sin esperar una respuesta 100.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '421',
        message: 'Solicitud mal dirigida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 421 Misdirected Request indica que la solicitud se dirigió a un servidor que no puede producir una respuesta. Esto puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de scheme y authority que se incluyen en el URI de la solicitud.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '422',
        message: 'Contenido no procesable',
        description:
          'El código de estado de respuesta de error del cliente HTTP 422 Unprocessed Content indica que el servidor entendió el tipo de contenido del contenido de la solicitud y que la sintaxis del contenido de la solicitud era correcta, pero no pudo procesar las instrucciones contenidas.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '423',
        message: 'Bloqueado',
        description:
          'El código de estado de respuesta de error de cliente HTTP 423 Locked indica que un recurso está bloqueado, lo que significa que no se puede acceder a él. El cuerpo de la respuesta debe contener información en formato XML de WebDAV.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423'], 
        deprecated: false,
        note: 'La capacidad de bloquear un recurso para evitar conflictos es específica de algunos servidores WebDAV. Los navegadores que accedan a páginas web nunca encontrarán este código de estado; En los casos erróneos en que suceda, lo manejarán como un código de estado 400 genérico.',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '424',
        message: 'Dependencia fallida',
        description:
          'El código de estado de respuesta de error del cliente de dependencia HTTP 424 con errores indica que el método no se pudo realizar en el recurso porque la acción solicitada dependía de otra acción y esa acción falló.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '425',
        message: 'Demasiado pronto',
        description:
          'El código de estado de respuesta de error del cliente HTTP 425 Too Early indica que el servidor no estaba dispuesto a arriesgarse a procesar una solicitud que podría reproducirse para evitar posibles ataques de reproducción.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '426',
        message: 'Actualización requerida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 426 Upgrade Required indica que el servidor se negó a realizar la solicitud mediante el protocolo actual, pero podría estar dispuesto a hacerlo después de que el cliente actualice a un protocolo diferente.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '428',
        message: ' Condición previa requerida',
        description:
          'El código de estado de respuesta de error de cliente HTTP 428 Precondition Required indica que el servidor requiere que la solicitud sea condicional.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '429',
        message: 'Demasiadas solicitudes',
        description:
          'El código de estado de respuesta de error de cliente HTTP 429 Too Many Requests indica que el cliente ha enviado demasiadas solicitudes en un período de tiempo determinado. Este mecanismo de pedirle al cliente que ralentice la tasa de solicitudes se denomina comúnmente "limitación de velocidad".',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '431',
        message: 'Campos de encabezado de solicitud demasiado grandes',
        description:
          'El código de estado de respuesta de error de error de cliente HTTP 431 Request Header Fields Too Large indica que el servidor se niega a procesar la solicitud porque los encabezados HTTP de la solicitud son demasiado largos. La solicitud se puede volver a enviar después de reducir el tamaño de los encabezados de la solicitud.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431'], 
        deprecated: false,
        note: '',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
      {
        code: '451',
        message: 'No disponible por razones legales',
        description:
          'El código de estado de respuesta de error de cliente HTTP 451 No disponible por motivos legales indica que el usuario solicitó un recurso que no está disponible debido a motivos legales, como una página web para la que se ha emitido una acción legal.',
        impacto: 'Alto',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451'], 
        deprecated: false,
        note: 'El encabezado del enlace también puede contener una relación que identifique a la entidad que implementa el bloqueo, no a ninguna otra entidad que lo imponga.rel="blocked-by"',
        type: 'Error del cliente',
        color: '#8b2a00ad'
      },
    ],
    '5xx': [
      {
        code: '500',
        message: 'Error interno del servidor',
        description:
          'El código de estado de respuesta de error del servidor HTTP 500 Internal Server Error indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud. Este error es una respuesta genérica "general" a los problemas del servidor, lo que indica que el servidor no puede encontrar un error 5XX más apropiado para responder.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '501',
        message: 'No implementado',
        description:
          'El código de estado de respuesta de error del servidor HTTP 501 no implementado significa que el servidor no admite la funcionalidad necesaria para cumplir con la solicitud.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '502',
        message: 'Puerta de enlace incorrecta',
        description:
          'El código de estado de respuesta de error del servidor HTTP 502 Bad Gateway indica que un servidor actuaba como puerta de enlace o proxy y que recibió una respuesta no válida del servidor ascendente.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '503',
        message: 'Servicio no disponible',
        description:
          'El código de estado de respuesta de error de servidor HTTP 503 Service Unavailable indica que el servidor no está listo para manejar la solicitud.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '504',
        message: 'Tiempo de espera de puerta de enlace',
        description:
          'El código de estado de respuesta de error del servidor HTTP 504 Gateway Timeout indica que el servidor, aunque actuó como puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor ascendente para completar la solicitud. Esto es similar a una puerta de enlace incorrecta 502, excepto que en un estado, el proxy o la puerta de enlace no recibió ninguna respuesta HTTP del origen dentro de un tiempo determinado.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '505',
        message: 'versión HTTP no compatible',
        description:
          'El código de estado de respuesta de error del servidor HTTP 505 HTTP Version Not Supported indica que la versión HTTP utilizada en la solicitud no es compatible con el servidor.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '506',
        message: 'La variante también negocia',
        description:
          'El código de estado de respuesta de error del servidor HTTP 506 Variant Also Negotiates se devuelve durante la negociación de contenido cuando hay un bucle recursivo en el proceso de selección de un recurso.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '507',
        message: 'Almacenamiento insuficiente',
        description:
          'El código de estado de respuesta de error del servidor HTTP 507 Insufficient Storage indica que no se pudo realizar una acción porque el servidor no tiene suficiente almacenamiento disponible para completar correctamente la solicitud.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '508',
        message: 'Bucle detectado',
        description:
          'El código de estado de respuesta de error del servidor HTTP 508 Loop Detected indica que se produjo un error en toda la operación porque encontró un bucle infinito al procesar una solicitud.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '510',
        message: 'No prorrogado',
        description:
          'El código de estado de respuesta de error del servidor HTTP 510 Not Extended se envía cuando la solicitud del cliente declara una extensión HTTP (RFC 2774) que se debe usar para procesar la solicitud, pero la extensión no es compatible.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
      {
        code: '511',
        message: 'Se requiere autenticación de red',
        description:
          'El código de estado de respuesta de error del servidor HTTP 511 Network Authentication Required indica que el cliente necesita autenticarse para obtener acceso a la red. Este estado no es generado por los servidores de origen, sino por la interceptación de proxies que controlan el acceso a una red.',
        impacto: 'Crítico',
        recursos: ['https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511'], 
        deprecated: false,
        note: '',
        type: 'Error del servidor',
        color: '#910000ad'
      },
    ]
  };
  
