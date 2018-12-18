const IconSelector = (target, returnSelectors = false) => {
    const iconSet = {
        _recent: {
            title: 'Usados más recientemente',
            groupIcon: '🕒',
            set: []
        },
        faces: {
            title: 'Caras',
            groupIcon: '😃',
            set: [
                {
                    name: 'Cara sonriente',
                    icon: '😀'
                }, {
                    name: 'Cara sonriente con la boca abierta',
                    icon: '😃'
                }, {
                    name: 'Cara que ríe con la boca abierta y los ojos sonrientes',
                    icon: '😄'
                }, {
                    name: 'Cara que sonríe con ojos sonrientes',
                    icon: '😁'
                }, {
                    name: 'Cara sonriente con la boca abierta y los ojos cerrados',
                    icon: '😆'
                }, {
                    name: 'Cara sonriente con la boca abierta y sudor frío',
                    icon: '😅'
                }, {
                    name: 'Cara con lágrimas de alegría',
                    icon: '😂'
                }, {
                    name: 'Cara con una leve sonrisa',
                    icon: '🙂'
                }, {
                    name: 'Cara guiñando un ojo',
                    icon: '😉'
                }, {
                    name: 'Cara que sonríe con ojos sonrientes',
                    icon: '😊'
                }, {
                    name: 'Cara sonriente con los ojos en forma de corazón',
                    icon: '😍'
                }, {
                    name: 'Cara que envía un beso',
                    icon: '😘'
                }, {
                    name: 'Cara que da un beso con los ojos cerrados',
                    icon: '😚'
                }, {
                    name: 'Cara que disfruta de una comida deliciosa',
                    icon: '😋'
                }, {
                    name: 'Cara con la lengua fuera que guiña un ojo',
                    icon: '😜'
                }, {
                    name: 'Cara con la lengua fuera y los ojos entrecerrados',
                    icon: '😝'
                }, {
                    name: 'Cara de suficiencia / sonrisa pícara',
                    icon: '😏'
                }, {
                    name: 'Cara de insatisfacción',
                    icon: '😒'
                }, {
                    name: 'Cara de alivio',
                    icon: '😌'
                }, {
                    name: 'Cara pensativa',
                    icon: '😔'
                }, {
                    name: 'Cara somnolienta',
                    icon: '😪'
                }, {
                    name: 'Cara con mascarilla protectora',
                    icon: '😷'
                }, {
                    name: 'Cara aturdida',
                    icon: '😵'
                }, {
                    name: 'Cara con gafas de sol',
                    icon: '😎'
                }, {
                    name: 'Cara asombrada',
                    icon: '😕'
                }, {
                    name: 'Cara de preocupación',
                    icon: '😟'
                }, {
                    name: 'Cara de asombro',
                    icon: '😲'
                }, {
                    name: 'Cara sonrojada',
                    icon: '😳'
                }, {
                    name: 'Cara atemorizada',
                    icon: '😨'
                }, {
                    name: 'Cara con la boca abierta y sudor frío',
                    icon: '😰'
                }, {
                    name: 'Cara decepcionada pero aliviada',
                    icon: '😥'
                }, {
                    name: 'Cara llorosa',
                    icon: '😢'
                }, {
                    name: 'Cara llorando a mares',
                    icon: '😭'
                }, {
                    name: 'Cara helada de miedo',
                    icon: '😱'
                }, {
                    name: 'Cara de consternación',
                    icon: '😖'
                }, {
                    name: 'Cara de sufrimiento',
                    icon: '😣'
                }, {
                    name: 'Cara de decepción',
                    icon: '😞'
                }, {
                    name: 'Cara con sudor frío',
                    icon: '😓'
                }, {
                    name: 'Cara de apatía',
                    icon: '😩'
                }, {
                    name: 'Cara de cansancio',
                    icon: '😫'
                }, {
                    name: 'Cara de triunfo',
                    icon: '😤'
                }, {
                    name: 'Mala cara',
                    icon: '😡'
                }, {
                    name: 'Cara de enfado',
                    icon: '😠'
                }, {
                    name: 'Diablillo',
                    icon: '👿'
                }, {
                    name: 'Calavera',
                    icon: '💀'
                }, {
                    name: 'Caca',
                    icon: '💩'
                }, {
                    name: 'Ogro japonés “Namahage”',
                    icon: '👹'
                }, {
                    name: 'Diablo japonés',
                    icon: '👺'
                }, {
                    name: 'Fantasma',
                    icon: '👻'
                }, {
                    name: 'Criatura extraterrestre',
                    icon: '👽'
                }, {
                    name: 'Monstruo alienígena',
                    icon: '👾'
                }
            ]
        },
        emotions: {
            title: 'Emociones',
            groupIcon: '💋',
            set: [
                {
                    name: 'Marca de un beso',
                    icon: '💋'
                }, {
                    name: 'Carta de amor',
                    icon: '💌'
                }, {
                    name: 'Corazón atravesado por una flecha',
                    icon: '💘'
                }, {
                    name: 'Corazón con lazo',
                    icon: '💝'
                }, {
                    name: 'Corazón resplandeciente',
                    icon: '💖'
                }, {
                    name: 'Corazón creciente',
                    icon: '💗'
                }, {
                    name: 'Corazón palpitante',
                    icon: '💓'
                }, {
                    name: 'Corazones dando vueltas',
                    icon: '💞'
                }, {
                    name: 'Dos corazones',
                    icon: '💕'
                }, {
                    name: 'Decoración de corazón',
                    icon: '💟'
                }, {
                    name: 'Corazón partido',
                    icon: '💔'
                }, {
                    name: 'Corazón negro sólido',
                    icon: '❤'
                }, {
                    name: 'Corazón amarillo',
                    icon: '💛'
                }, {
                    name: 'Corazón verde',
                    icon: '💚'
                }, {
                    name: 'Corazón azul',
                    icon: '💙'
                }, {
                    name: 'Corazón morado',
                    icon: '💜'
                }, {
                    name: 'Símbolo de cien puntos',
                    icon: '💯'
                }, {
                    name: 'Símbolo de enfado',
                    icon: '💢'
                }, {
                    name: 'Símbolo de colisión',
                    icon: '💥'
                }, {
                    name: 'Símbolo de mareo',
                    icon: '💫'
                }, {
                    name: 'Símbolo de gotas de sudor',
                    icon: '💦'
                }, {
                    name: 'Símbolo de correr',
                    icon: '💨'
                }, {
                    name: 'Bomba',
                    icon: '💣'
                }, {
                    name: 'Globo de diálogo',
                    icon: '💬'
                }, {
                    name: 'Símbolo de sueño',
                    icon: '💤'
                }
            ]
        },
        hands: {
            title: 'Manos',
            groupIcon: '👋',
            set: [
                {
                    name: 'Signo de agitar la mano',
                    icon: '👋'
                }, {
                    name: 'Mano alzada',
                    icon: '✋'
                }, {
                    name: 'Signo de OK con la mano',
                    icon: '👌'
                }, {
                    name: 'Mano haciendo la señal de la victoria',
                    icon: '✌'
                }, {
                    name: 'Dedo índice apuntando hacia la izquierda',
                    icon: '👈'
                }, {
                    name: 'Dedo índice apuntando hacia la derecha',
                    icon: '👉'
                }, {
                    name: 'Dedo índice apuntando hacia arriba',
                    icon: '👆'
                }, {
                    name: 'Dedo índice apuntando hacia abajo',
                    icon: '👇'
                }, {
                    name: 'Dedo índice hacia arriba',
                    icon: '☝'
                }, {
                    name: 'Signo de pulgar hacia arriba',
                    icon: '👍'
                }, {
                    name: 'Signo de pulgar hacia abajo',
                    icon: '👎'
                }, {
                    name: 'Puño alzado',
                    icon: '✊'
                }, {
                    name: 'Signo de puño con la mano',
                    icon: '👊'
                }, {
                    name: 'Signo de manos haciendo palmas',
                    icon: '👏'
                }, {
                    name: 'Persona levantando ambas manos en celebración',
                    icon: '🙌'
                }, {
                    name: 'Signo de manos abiertas',
                    icon: '👐'
                }, {
                    name: 'Persona con las manos en oración',
                    icon: '🙏'
                }, {
                    name: 'Esmalte de uñas',
                    icon: '💅'
                }
            ]
        },
        body: {
            title: 'Partes del cuerpo',
            groupIcon: '💪',
            set: [
                {
                    name: 'Bíceps flexionado',
                    icon: '💪'
                }, {
                    name: 'Oreja',
                    icon: '👂'
                }, {
                    name: 'Nariz',
                    icon: '👃'
                }, {
                    name: 'Ojos',
                    icon: '👀'
                }, {
                    name: 'Lengua',
                    icon: '👅'
                }, {
                    name: 'Boca',
                    icon: '👄'
                }
            ]
        },
        people: {
            title: 'Personas y familia',
            groupIcon: '🚶',
            set: [
                {
                    name: 'Bebé',
                    icon: '👶'
                }, {
                    name: 'Niño',
                    icon: '👦'
                }, {
                    name: 'Niña',
                    icon: '👧'
                }, {
                    name: 'Hombre',
                    icon: '👨'
                }, {
                    name: 'Mujer',
                    icon: '👩'
                }, {
                    name: 'Hombre mayor',
                    icon: '👴'
                }, {
                    name: 'Mujer mayor',
                    icon: '👵'
                }, {
                    name: 'Princesa',
                    icon: '👸'
                }, {
                    name: 'Hombre con gua pi mao',
                    icon: '👲'
                }, {
                    name: 'Novia con velo',
                    icon: '👰'
                }, {
                    name: 'Angelito',
                    icon: '👼'
                }, {
                    name: 'Papá Noel',
                    icon: '🎅'
                }, {
                    name: 'Bailarina',
                    icon: '💃'
                }, {
                    name: 'Practicante de snowboard',
                    icon: '🏂'
                }, {
                    name: 'Baño',
                    icon: '🛀'
                }, {
                    name: 'Hombre y mujer de la mano',
                    icon: '👫'
                }, {
                    name: 'Beso',
                    icon: '💏'
                }, {
                    name: 'Pareja con corazón',
                    icon: '💑'
                }, {
                    name: 'Familia',
                    icon: '👪'
                }
            ]
        },
        animals: {
            title: 'Animales',
            groupIcon: '🐵',
            set: [
                {
                    name: 'Cara de mono',
                    icon: '🐵'
                }, {
                    name: 'Mono que no ve el mal',
                    icon: '🙈'
                }, {
                    name: 'Mono que no oye el mal',
                    icon: '🙉'
                }, {
                    name: 'Mono que no dice el mal',
                    icon: '🙊'
                }, {
                    name: 'Mono',
                    icon: '🐒'
                }, {
                    name: 'Cara de perro',
                    icon: '🐶'
                }, {
                    name: 'Caniche',
                    icon: '🐩'
                }, {
                    name: 'Cara de lobo',
                    icon: '🐺'
                }, {
                    name: 'Cara de gato',
                    icon: '🐱'
                }, {
                    name: 'Cara de gato sonriente con la boca abierta',
                    icon: '😺'
                }, {
                    name: 'Cara de gato sonriente con ojos sonrientes',
                    icon: '😸'
                }, {
                    name: 'Cara de gato con lágrimas de alegría',
                    icon: '😹'
                }, {
                    name: 'Cara de gato con corazones en los ojos',
                    icon: '😻'
                }, {
                    name: 'Cara de gato con sonrisa irónica',
                    icon: '😼'
                }, {
                    name: 'Cara de gato dando un beso con los ojos cerrados',
                    icon: '😽'
                }, {
                    name: 'Cara de gato cansada',
                    icon: '🙀'
                }, {
                    name: 'Cara de gato llorando',
                    icon: '😿'
                }, {
                    name: 'Cara de gato enojada',
                    icon: '😾'
                }, {
                    name: 'Cara de tigre',
                    icon: '🐯'
                }, {
                    name: 'Cara de caballo',
                    icon: '🐴'
                }, {
                    name: 'Caballo',
                    icon: '🐎'
                }, {
                    name: 'Cara de unicornio',
                    icon: '🦄'
                }, {
                    name: 'Cara de vaca',
                    icon: '🐮'
                }, {
                    name: 'Cara de cerdo',
                    icon: '🐷'
                }, {
                    name: 'Jabalí',
                    icon: '🐗'
                }, {
                    name: 'Nariz de cerdo',
                    icon: '🐽'
                }, {
                    name: 'Oveja',
                    icon: '🐑'
                }, {
                    name: 'Dromedario',
                    icon: '🐪'
                }, {
                    name: 'Camello bactriano',
                    icon: '🐫'
                }, {
                    name: 'Elefante',
                    icon: '🐘'
                }, {
                    name: 'Cara de ratón',
                    icon: '🐭'
                }, {
                    name: 'Cara de hámster',
                    icon: '🐹'
                }, {
                    name: 'Cara de conejo',
                    icon: '🐰'
                }, {
                    name: 'Cara de oso',
                    icon: '🐻'
                }, {
                    name: 'Koala',
                    icon: '🐨'
                }, {
                    name: 'Cara de panda',
                    icon: '🐼'
                }, {
                    name: 'Huellas de pezuñas',
                    icon: '🐾'
                }, {
                    name: 'Gallina',
                    icon: '🐔'
                }, {
                    name: 'Pollito rompiendo el cascarón',
                    icon: '🐣'
                }, {
                    name: 'Pollito',
                    icon: '🐤'
                }, {
                    name: 'Pollito de frente',
                    icon: '🐥'
                }, {
                    name: 'Pájaro',
                    icon: '🐦'
                }, {
                    name: 'Pingüino',
                    icon: '🐧'
                }, {
                    name: 'Cara de rana',
                    icon: '🐸'
                }, {
                    name: 'Tortuga',
                    icon: '🐢'
                }, {
                    name: 'Serpiente',
                    icon: '🐍'
                }, {
                    name: 'Cara de dragón',
                    icon: '🐲'
                }, {
                    name: 'Ballena soltando chorro',
                    icon: '🐳'
                }, {
                    name: 'Delfín',
                    icon: '🐬'
                }, {
                    name: 'Pez',
                    icon: '🐟'
                }, {
                    name: 'Pez tropical',
                    icon: '🐠'
                }, {
                    name: 'Pez globo',
                    icon: '🐡'
                }, {
                    name: 'Pulpo',
                    icon: '🐙'
                }, {
                    name: 'Concha de caracol',
                    icon: '🐚'
                }, {
                    name: 'Caracol',
                    icon: '🐌'
                }, {
                    name: 'Error',
                    icon: '🐛'
                }, {
                    name: 'Mariposa',
                    icon: '🦋'
                }, {
                    name: 'Hormiga',
                    icon: '🐜'
                }, {
                    name: 'Abeja',
                    icon: '🐝'
                }, {
                    name: 'Mariquita',
                    icon: '🐞'
                }
            ]
        },
        plants: {
            title: 'Plantas',
            groupIcon: '🌼',
            set: [
                {
                    name: 'Ramo de flores',
                    icon: '💐'
                }, {
                    name: 'Flor de cerezo',
                    icon: '🌸'
                }, {
                    name: 'Flor blanca',
                    icon: '💮'
                }, {
                    name: 'Rosa',
                    icon: '🌹'
                }, {
                    name: 'Hibisco',
                    icon: '🌺'
                }, {
                    name: 'Girasol',
                    icon: '🌻'
                }, {
                    name: 'Flor',
                    icon: '🌼'
                }, {
                    name: 'Tulipán',
                    icon: '🌷'
                }, {
                    name: 'Planta joven',
                    icon: '🌱'
                }, {
                    name: 'Árbol de hoja caduca',
                    icon: '🌳'
                }, {
                    name: 'Palmera',
                    icon: '🌴'
                }, {
                    name: 'Cactus',
                    icon: '🌵'
                }, {
                    name: 'Mazorca de arroz',
                    icon: '🌾'
                }, {
                    name: 'Hierba',
                    icon: '🌿'
                }, {
                    name: 'Trébol de cuatro hojas',
                    icon: '🍀'
                }, {
                    name: 'Hoja de arce',
                    icon: '🍁'
                }, {
                    name: 'Hojas caídas',
                    icon: '🍂'
                }, {
                    name: 'Hojas al viento',
                    icon: '🍃'
                }
            ]
        },
        food: {
            title: 'Comida y frutas',
            groupIcon: '🍖',
            set: [
                {
                    name: 'Uvas',
                    icon: '🍇'
                }, {
                    name: 'Melón',
                    icon: '🍈'
                }, {
                    name: 'Sandía',
                    icon: '🍉'
                }, {
                    name: 'Naranja',
                    icon: '🍊'
                }, {
                    name: 'Plátano',
                    icon: '🍌'
                }, {
                    name: 'Piña',
                    icon: '🍍'
                }, {
                    name: 'Manzana roja',
                    icon: '🍎'
                }, {
                    name: 'Manzana verde',
                    icon: '🍏'
                }, {
                    name: 'Melocotón',
                    icon: '🍑'
                }, {
                    name: 'Cerezas',
                    icon: '🍒'
                }, {
                    name: 'Fresa',
                    icon: '🍓'
                }, {
                    name: 'Tomate',
                    icon: '🍅'
                }, {
                    name: 'Berenjena',
                    icon: '🍆'
                }, {
                    name: 'Mazorca de maíz',
                    icon: '🌽'
                }, {
                    name: 'Seta',
                    icon: '🍄'
                }, {
                    name: 'Castaña',
                    icon: '🌰'
                }, {
                    name: 'Pan',
                    icon: '🍞'
                }, {
                    name: 'Carne con hueso',
                    icon: '🍖'
                }, {
                    name: 'Muslo de pollo',
                    icon: '🍗'
                }, {
                    name: 'Hot dog',
                    icon: '🌭'
                }, {
                    name: 'Hamburguesa',
                    icon: '🍔'
                }, {
                    name: 'Patatas fritas',
                    icon: '🍟'
                }, {
                    name: 'Trozo de pizza',
                    icon: '🍕'
                }, {
                    name: 'Sartén',
                    icon: '🍳'
                }, {
                    name: 'Guiso',
                    icon: '🍲'
                }, {
                    name: 'Caja de bento',
                    icon: '🍱'
                }, {
                    name: 'Galleta de arroz',
                    icon: '🍘'
                }, {
                    name: 'Bola de arroz',
                    icon: '🍙'
                }, {
                    name: 'Arroz cocido',
                    icon: '🍚'
                }, {
                    name: 'Arroz con curry',
                    icon: '🍛'
                }, {
                    name: 'Tazón de fideos',
                    icon: '🍜'
                }, {
                    name: 'Espaguetis',
                    icon: '🍝'
                }, {
                    name: 'Patata asada',
                    icon: '🍠'
                }, {
                    name: 'Oden',
                    icon: '🍢'
                }, {
                    name: 'Sushi',
                    icon: '🍣'
                }, {
                    name: 'Gamba frita',
                    icon: '🍤'
                }, {
                    name: 'Pastel de pescado con forma de espiral',
                    icon: '🍥'
                }, {
                    name: 'Mochi',
                    icon: '🍡'
                }, {
                    name: 'Helado suave',
                    icon: '🍦'
                }, {
                    name: 'Granizado',
                    icon: '🍧'
                }, {
                    name: 'Helado',
                    icon: '🍨'
                }, {
                    name: 'Dónut',
                    icon: '🍩'
                }, {
                    name: 'Cookie',
                    icon: '🍪'
                }, {
                    name: 'Tarta de cumpleaños',
                    icon: '🎂'
                }, {
                    name: 'Pedazo de tarta',
                    icon: '🍰'
                }, {
                    name: 'Barra de chocolate',
                    icon: '🍫'
                }, {
                    name: 'Caramelo',
                    icon: '🍬'
                }, {
                    name: 'Piruleta',
                    icon: '🍭'
                }, {
                    name: 'Flan',
                    icon: '🍮'
                }, {
                    name: 'Tarro de miel',
                    icon: '🍯'
                }
            ]
        },
        drink: {
            title: 'Bebida',
            groupIcon: '☕',
            set: [
                {
                    name: 'Bebida caliente',
                    icon: '☕'
                }, {
                    name: 'Taza de té sin mango',
                    icon: '🍵'
                }, {
                    name: 'Botella y tazón de sake',
                    icon: '🍶'
                }, {
                    name: 'Vaso de vino',
                    icon: '🍷'
                }, {
                    name: 'Vaso de cóctel',
                    icon: '🍸'
                }, {
                    name: 'Bebida tropical',
                    icon: '🍹'
                }, {
                    name: 'Jarra de cerveza',
                    icon: '🍺'
                }, {
                    name: 'Jarras de cerveza brindando',
                    icon: '🍻'
                }
            ]
        },
        places: {
            title: 'Lugares',
            groupIcon: '🌏',
            set: [
                {
                    name: 'Globo terráqueo con Asia-Australia',
                    icon: '🌏'
                }, {
                    name: 'Silueta de Japón',
                    icon: '🗾'
                }, {
                    name: 'Volcán',
                    icon: '🌋'
                }, {
                    name: 'Monte Fuji',
                    icon: '🗻'
                }, {
                    name: 'Casa',
                    icon: '🏠'
                }, {
                    name: 'Casa con jardín',
                    icon: '🏡'
                }, {
                    name: 'Edificio de oficinas',
                    icon: '🏢'
                }, {
                    name: 'Oficina de correos japonesa',
                    icon: '🏣'
                }, {
                    name: 'Hospital',
                    icon: '🏥'
                }, {
                    name: 'Banco',
                    icon: '🏦'
                }, {
                    name: 'Hotel',
                    icon: '🏨'
                }, {
                    name: 'Hotel del amor',
                    icon: '🏩'
                }, {
                    name: 'Tienda de 24 horas',
                    icon: '🏪'
                }, {
                    name: 'Colegio',
                    icon: '🏫'
                }, {
                    name: 'Centro comercial',
                    icon: '🏬'
                }, {
                    name: 'Factoría',
                    icon: '🏭'
                }, {
                    name: 'Castillo japonés',
                    icon: '🏯'
                }, {
                    name: 'Castillo europeo',
                    icon: '🏰'
                }, {
                    name: 'Boda',
                    icon: '💒'
                }, {
                    name: 'Torre de Tokio',
                    icon: '🗼'
                }, {
                    name: 'Estatua de la Libertad',
                    icon: '🗽'
                }, {
                    name: 'Iglesia',
                    icon: '⛪'
                }, {
                    name: 'Fuente',
                    icon: '⛲'
                }, {
                    name: 'Tienda de campaña',
                    icon: '⛺'
                }, {
                    name: 'Niebla',
                    icon: '🌁'
                }, {
                    name: 'Noche con estrellas',
                    icon: '🌃'
                }, {
                    name: 'Amanecer entre montañas',
                    icon: '🌄'
                }, {
                    name: 'Amanecer',
                    icon: '🌅'
                }, {
                    name: 'Ciudad al atardecer',
                    icon: '🌆'
                }, {
                    name: 'Puesta de sol sobre edificios',
                    icon: '🌇'
                }, {
                    name: 'Puente de noche',
                    icon: '🌉'
                }, {
                    name: 'Manantial termal',
                    icon: '♨'
                }, {
                    name: 'Vía Láctea',
                    icon: '🌌'
                }, {
                    name: 'Caballito de tiovivo',
                    icon: '🎠'
                }, {
                    name: 'Noria de feria',
                    icon: '🎡'
                }, {
                    name: 'Montaña rusa',
                    icon: '🎢'
                }, {
                    name: 'Poste de barbero',
                    icon: '💈'
                }, {
                    name: 'Carpa de circo',
                    icon: '🎪'
                }
            ]
        },
        transport: {
            title: 'Transporte',
            groupIcon: '🚚',
            set: [
                {
                    name: 'Tren eléctrico',
                    icon: '🚃'
                }, {
                    name: 'Tren de alta velocidad',
                    icon: '🚄'
                }, {
                    name: 'Tren de alta velocidad con punta de bala',
                    icon: '🚅'
                }, {
                    name: 'Metro',
                    icon: '🚇'
                }, {
                    name: 'Estación',
                    icon: '🚉'
                }, {
                    name: 'Autobús',
                    icon: '🚌'
                }, {
                    name: 'Ambulancia',
                    icon: '🚑'
                }, {
                    name: 'Coche de bomberos',
                    icon: '🚒'
                }, {
                    name: 'Coche de policía',
                    icon: '🚓'
                }, {
                    name: 'Taxi',
                    icon: '🚕'
                }, {
                    name: 'Automóvil',
                    icon: '🚗'
                }, {
                    name: 'Autocaravana',
                    icon: '🚙'
                }, {
                    name: 'Camión de reparto',
                    icon: '🚚'
                }, {
                    name: 'Bicicleta',
                    icon: '🚲'
                }, {
                    name: 'Parada de autobús',
                    icon: '🚏'
                }, {
                    name: 'Bomba de gasolinera',
                    icon: '⛽'
                }, {
                    name: 'Sirena de la policía',
                    icon: '🚨'
                }, {
                    name: 'Semáforo horizontal',
                    icon: '🚥'
                }, {
                    name: 'Signo de construcción',
                    icon: '🚧'
                }, {
                    name: 'Ancla',
                    icon: '⚓'
                }, {
                    name: 'Barco de vela',
                    icon: '⛵'
                }, {
                    name: 'Lancha motora',
                    icon: '🚤'
                }, {
                    name: 'Barco',
                    icon: '🚢'
                }, {
                    name: 'Avión',
                    icon: '✈'
                }, {
                    name: 'Asiento',
                    icon: '💺'
                }, {
                    name: 'Cohete',
                    icon: '🚀'
                }, {
                    name: 'Plato volador',
                    icon: '🛸'
                }
            ]
        },
        time: {
            title: 'Tiempo',
            groupIcon: '⌛',
            set: [
                {
                    name: 'Reloj de arena',
                    icon: '⌛'
                }, {
                    name: 'Reloj de arena con la arena cayendo',
                    icon: '⏳'
                }, {
                    name: 'Reloj de pulsera',
                    icon: '⌚'
                }, {
                    name: 'Despertador',
                    icon: '⏰'
                }, {
                    name: 'Esfera de reloj con las doce en punto',
                    icon: '🕛'
                }, {
                    name: 'Esfera de reloj con la uno en punto',
                    icon: '🕐'
                }, {
                    name: 'Esfera de reloj con las dos en punto',
                    icon: '🕑'
                }, {
                    name: 'Esfera de reloj con las tres en punto',
                    icon: '🕒'
                }, {
                    name: 'Esfera de reloj con las cuatro en punto',
                    icon: '🕓'
                }, {
                    name: 'Esfera de reloj con las cinco en punto',
                    icon: '🕔'
                }, {
                    name: 'Esfera de reloj con las seis en punto',
                    icon: '🕕'
                }, {
                    name: 'Esfera de reloj con las siete en punto',
                    icon: '🕖'
                }, {
                    name: 'Esfera de reloj con las ocho en punto',
                    icon: '🕗'
                }, {
                    name: 'Esfera de reloj con las nueve en punto',
                    icon: '🕘'
                }, {
                    name: 'Esfera de reloj con las diez en punto',
                    icon: '🕙'
                }, {
                    name: 'Esfera de reloj con las once en punto',
                    icon: '🕚'
                }
            ]
        },
        sky: {
            title: 'Cielo y clima',
            groupIcon: '🌙',
            set: [
                {
                    name: 'Símbolo de luna nueva',
                    icon: '🌑'
                }, {
                    name: 'Símbolo de luna en cuarto creciente',
                    icon: '🌓'
                }, {
                    name: 'Símbolo de luna gibosa creciente',
                    icon: '🌔'
                }, {
                    name: 'Símbolo de luna nueva',
                    icon: '🌕'
                }, {
                    name: 'Luna creciente',
                    icon: '🌙'
                }, {
                    name: 'Luna en cuarto creciente con cara',
                    icon: '🌛'
                }, {
                    name: 'Sol negro con rayos',
                    icon: '☀'
                }, {
                    name: 'Estrella mediana blanca',
                    icon: '⭐'
                }, {
                    name: 'Estrella brillante',
                    icon: '🌟'
                }, {
                    name: 'Estrella fugaz',
                    icon: '🌠'
                }, {
                    name: 'Nube',
                    icon: '☁'
                }, {
                    name: 'Sol detrás de una nube',
                    icon: '⛅'
                }, {
                    name: 'Ciclón',
                    icon: '🌀'
                }, {
                    name: 'Arcoíris',
                    icon: '🌈'
                }, {
                    name: 'Paraguas cerrado',
                    icon: '🌂'
                }, {
                    name: 'Sombrilla con gotas de lluvia',
                    icon: '☔'
                }, {
                    name: 'Signo de alto voltaje',
                    icon: '⚡'
                }, {
                    name: 'Copo de nieve',
                    icon: '❄'
                }, {
                    name: 'Hombre de nieve sin nieve',
                    icon: '⛄'
                }, {
                    name: 'Fuego',
                    icon: '🔥'
                }, {
                    name: 'Gota',
                    icon: '💧'
                }, {
                    name: 'Ola de mar',
                    icon: '🌊'
                }
            ]
        },
        activities: {
            title: 'Actividades',
            groupIcon: '⚽',
            set: [
                {
                    name: 'Linterna de Halloween',
                    icon: '🎃'
                }, {
                    name: 'Árbol de Navidad',
                    icon: '🎄'
                }, {
                    name: 'Fuegos artificiales',
                    icon: '🎆'
                }, {
                    name: 'Luz de bengala',
                    icon: '🎇'
                }, {
                    name: 'Chispas',
                    icon: '✨'
                }, {
                    name: 'Globo',
                    icon: '🎈'
                }, {
                    name: 'Lanzador de confeti',
                    icon: '🎉'
                }, {
                    name: 'Lluvia de confeti',
                    icon: '🎊'
                }, {
                    name: 'Árbol de Tanabata',
                    icon: '🎋'
                }, {
                    name: 'Decoración de pino',
                    icon: '🎍'
                }, {
                    name: 'Muñecas japonesas',
                    icon: '🎎'
                }, {
                    name: 'Banderín de carpas',
                    icon: '🎏'
                }, {
                    name: 'Campanilla de viento',
                    icon: '🎐'
                }, {
                    name: 'Ceremonia de contemplación de la luna',
                    icon: '🎑'
                }, {
                    name: 'Lazo',
                    icon: '🎀'
                }, {
                    name: 'Regalo envuelto',
                    icon: '🎁'
                }, {
                    name: 'Entrada',
                    icon: '🎫'
                }, {
                    name: 'Trofeo',
                    icon: '🏆'
                }, {
                    name: 'Balón de fútbol',
                    icon: '⚽'
                }, {
                    name: 'Pelota de béisbol',
                    icon: '⚾'
                }, {
                    name: 'Balón de baloncesto y canasta',
                    icon: '🏀'
                }, {
                    name: 'Fútbol americano',
                    icon: '🏈'
                }, {
                    name: 'Pelota y raqueta de tenis',
                    icon: '🎾'
                }, {
                    name: 'Bolos',
                    icon: '🎳'
                }, {
                    name: 'Banderín en agujero',
                    icon: '⛳'
                }, {
                    name: 'Caña pescar con pez',
                    icon: '🎣'
                }, {
                    name: 'Camiseta con banda',
                    icon: '🎽'
                }, {
                    name: 'Esquíes y bastones',
                    icon: '🎿'
                }, {
                    name: 'Diana',
                    icon: '🎯'
                }, {
                    name: 'Billar',
                    icon: '🎱'
                }, {
                    name: 'Bola de cristal',
                    icon: '🔮'
                }, {
                    name: 'Videojuego',
                    icon: '🎮'
                }, {
                    name: 'Máquina tragaperras',
                    icon: '🎰'
                }, {
                    name: 'Dado',
                    icon: '🎲'
                }, {
                    name: 'Palo de espadas negro',
                    icon: '♠'
                }, {
                    name: 'Palo de corazones negro',
                    icon: '♥'
                }, {
                    name: 'Palo de diamantes negro',
                    icon: '♦'
                }, {
                    name: 'Palo de tréboles negro',
                    icon: '♣'
                }, {
                    name: 'Carta de joker negro',
                    icon: '🃏'
                }, {
                    name: 'Ficha de mahjong del dragón rojo',
                    icon: '🀄'
                }, {
                    name: 'Naipes de flor',
                    icon: '🎴'
                }, {
                    name: 'Artes escénicas',
                    icon: '🎭'
                }, {
                    name: 'Paleta de pintor',
                    icon: '🎨'
                }
            ]
        },
        objects: {
            title: 'Objetos',
            groupIcon: '💡',
            set: [
                {
                    name: 'Anteojos',
                    icon: '👓'
                }, {
                    name: 'Nudo de corbata',
                    icon: '👔'
                }, {
                    name: 'Camiseta',
                    icon: '👕'
                }, {
                    name: 'Vaqueros',
                    icon: '👖'
                }, {
                    name: 'Vestido',
                    icon: '👗'
                }, {
                    name: 'Kimono',
                    icon: '👘'
                }, {
                    name: 'Bikini',
                    icon: '👙'
                }, {
                    name: 'Ropa de mujer',
                    icon: '👚'
                }, {
                    name: 'Monedero',
                    icon: '👛'
                }, {
                    name: 'Bolso',
                    icon: '👜'
                }, {
                    name: 'Bolso de mano',
                    icon: '👝'
                }, {
                    name: 'Mochila escolar',
                    icon: '🎒'
                }, {
                    name: 'Zapato de hombre',
                    icon: '👞'
                }, {
                    name: 'Zapatilla deportiva',
                    icon: '👟'
                }, {
                    name: 'Zapato de tacón',
                    icon: '👠'
                }, {
                    name: 'Sandalia de mujer',
                    icon: '👡'
                }, {
                    name: 'Botas de mujer',
                    icon: '👢'
                }, {
                    name: 'Corona',
                    icon: '👑'
                }, {
                    name: 'Sombrero de mujer',
                    icon: '👒'
                }, {
                    name: 'Sombrero de copa',
                    icon: '🎩'
                }, {
                    name: 'Birrete de graduado',
                    icon: '🎓'
                }, {
                    name: 'Lápiz de labios',
                    icon: '💄'
                }, {
                    name: 'Anillo',
                    icon: '💍'
                }, {
                    name: 'Piedra preciosa',
                    icon: '💎'
                }, {
                    name: 'Altavoz con tres ondas de sonido',
                    icon: '🔊'
                }, {
                    name: 'Altavoz de mano',
                    icon: '📢'
                }, {
                    name: 'Megáfono',
                    icon: '📣'
                }, {
                    name: 'Campana',
                    icon: '🔔'
                }, {
                    name: 'Pentagrama musical',
                    icon: '🎼'
                }, {
                    name: 'Nota musical',
                    icon: '🎵'
                }, {
                    name: 'Varias notas musicales',
                    icon: '🎶'
                }, {
                    name: 'Micrófono',
                    icon: '🎤'
                }, {
                    name: 'Auriculares',
                    icon: '🎧'
                }, {
                    name: 'Radio',
                    icon: '📻'
                }, {
                    name: 'Saxofón',
                    icon: '🎷'
                }, {
                    name: 'Guitarra',
                    icon: '🎸'
                }, {
                    name: 'Teclado musical',
                    icon: '🎹'
                }, {
                    name: 'Trompeta',
                    icon: '🎺'
                }, {
                    name: 'Violín',
                    icon: '🎻'
                }, {
                    name: 'Teléfono móvil',
                    icon: '📱'
                }, {
                    name: 'Teléfono móvil con flecha hacia la derecha a la izquierda',
                    icon: '📲'
                }, {
                    name: 'Teléfono negro',
                    icon: '☎'
                }, {
                    name: 'Auricular de teléfono',
                    icon: '📞'
                }, {
                    name: 'Busca',
                    icon: '📟'
                }, {
                    name: 'Máquina de fax',
                    icon: '📠'
                }, {
                    name: 'Batería',
                    icon: '🔋'
                }, {
                    name: 'Enchufe eléctrico',
                    icon: '🔌'
                }, {
                    name: 'Ordenador personal',
                    icon: '💻'
                }, {
                    name: 'Minidisc',
                    icon: '💽'
                }, {
                    name: 'Disquete',
                    icon: '💾'
                }, {
                    name: 'Disco óptico',
                    icon: '💿'
                }, {
                    name: 'DVD',
                    icon: '📀'
                }, {
                    name: 'Cámara cinematográfica',
                    icon: '🎥'
                }, {
                    name: 'Claqueta',
                    icon: '🎬'
                }, {
                    name: 'Televisión',
                    icon: '📺'
                }, {
                    name: 'Cámara',
                    icon: '📷'
                }, {
                    name: 'Videocámara',
                    icon: '📹'
                }, {
                    name: 'Videocasete',
                    icon: '📼'
                }, {
                    name: 'Lupa hacia la izquierda',
                    icon: '🔍'
                }, {
                    name: 'Lupa hacia la derecha',
                    icon: '🔎'
                }, {
                    name: 'Bombilla eléctrica',
                    icon: '💡'
                }, {
                    name: 'Linterna',
                    icon: '🔦'
                }, {
                    name: 'Linterna de izakaya',
                    icon: '🏮'
                }, {
                    name: 'Cuaderno con portada decorada',
                    icon: '📔'
                }, {
                    name: 'Libro cerrado',
                    icon: '📕'
                }, {
                    name: 'Libro abierto',
                    icon: '📖'
                }, {
                    name: 'Libro verde',
                    icon: '📗'
                }, {
                    name: 'Libro azul',
                    icon: '📘'
                }, {
                    name: 'Libro naranja',
                    icon: '📙'
                }, {
                    name: 'Libros',
                    icon: '📚'
                }, {
                    name: 'Cuaderno',
                    icon: '📓'
                }, {
                    name: 'Libro de contabilidad',
                    icon: '📒'
                }, {
                    name: 'Página doblada',
                    icon: '📃'
                }, {
                    name: 'Pergamino',
                    icon: '📜'
                }, {
                    name: 'Página hacia arriba',
                    icon: '📄'
                }, {
                    name: 'Periódico',
                    icon: '📰'
                }, {
                    name: 'Marcadores',
                    icon: '📑'
                }, {
                    name: 'Marcador',
                    icon: '🔖'
                }, {
                    name: 'Bolsa de dinero',
                    icon: '💰'
                }, {
                    name: 'Billete con símbolo de yen',
                    icon: '💴'
                }, {
                    name: 'Billete con el signo de dólar',
                    icon: '💵'
                }, {
                    name: 'Dinero con alas',
                    icon: '💸'
                }, {
                    name: 'Tarjeta de crédito',
                    icon: '💳'
                }, {
                    name: 'Gráfico con símbolos de yen y tendencia ascendente',
                    icon: '💹'
                }, {
                    name: 'Cambio de divisas',
                    icon: '💱'
                }, {
                    name: 'Símbolo de dólar',
                    icon: '💲'
                }, {
                    name: 'Sobre',
                    icon: '✉'
                }, {
                    name: 'Símbolo de correo electrónico',
                    icon: '📧'
                }, {
                    name: 'Sobre de correo entrante',
                    icon: '📨'
                }, {
                    name: 'Sobre con flecha hacia abajo encima',
                    icon: '📩'
                }, {
                    name: 'Bandeja de salida',
                    icon: '📤'
                }, {
                    name: 'Bandeja de entrada',
                    icon: '📥'
                }, {
                    name: 'Paquete',
                    icon: '📦'
                }, {
                    name: 'Buzón cerrado con bandera levantada',
                    icon: '📫'
                }, {
                    name: 'Buzón cerrado con bandera bajada',
                    icon: '📪'
                }, {
                    name: 'Buzón',
                    icon: '📮'
                }, {
                    name: 'Lápiz',
                    icon: '✏'
                }, {
                    name: 'Pluma estilográfica negra',
                    icon: '✒'
                }, {
                    name: 'Nota',
                    icon: '📝'
                }, {
                    name: 'Maletín',
                    icon: '💼'
                }, {
                    name: 'Carpeta de archivos',
                    icon: '📁'
                }, {
                    name: 'Carpeta de archivos abierta',
                    icon: '📂'
                }, {
                    name: 'Calendario',
                    icon: '📅'
                }, {
                    name: 'Calendario con anillas',
                    icon: '📆'
                }, {
                    name: 'Tarjetero',
                    icon: '📇'
                }, {
                    name: 'Gráfico con tendencia ascendente',
                    icon: '📈'
                }, {
                    name: 'Gráfico con tendencia descendente',
                    icon: '📉'
                }, {
                    name: 'Gráfico de barras',
                    icon: '📊'
                }, {
                    name: 'Tabla sujetapapeles',
                    icon: '📋'
                }, {
                    name: 'Chincheta',
                    icon: '📌'
                }, {
                    name: 'Chincheta redonda',
                    icon: '📍'
                }, {
                    name: 'Sujetapapeles',
                    icon: '📎'
                }, {
                    name: 'Regla recta',
                    icon: '📏'
                }, {
                    name: 'Regla triangular',
                    icon: '📐'
                }, {
                    name: 'Tijeras negras',
                    icon: '✂'
                }, {
                    name: 'Candado',
                    icon: '🔒'
                }, {
                    name: 'Candado abierto',
                    icon: '🔓'
                }, {
                    name: 'Candado con pluma estilográfica',
                    icon: '🔏'
                }, {
                    name: 'Candado cerrado con llave',
                    icon: '🔐'
                }, {
                    name: 'Llave',
                    icon: '🔑'
                }, {
                    name: 'Martillo',
                    icon: '🔨'
                }, {
                    name: 'Pistola',
                    icon: '🔫'
                }, {
                    name: 'Llave inglesa',
                    icon: '🔧'
                }, {
                    name: 'Tornillo y tuerca',
                    icon: '🔩'
                }, {
                    name: 'Símbolo de enlace',
                    icon: '🔗'
                }, {
                    name: 'Antena de satélite',
                    icon: '📡'
                }, {
                    name: 'Jeringa',
                    icon: '💉'
                }, {
                    name: 'Píldora',
                    icon: '💊'
                }, {
                    name: 'Puerta',
                    icon: '🚪'
                }, {
                    name: 'Retrete',
                    icon: '🚽'
                }, {
                    name: 'Símbolo de fumadores',
                    icon: '🚬'
                }, {
                    name: 'Moái',
                    icon: '🗿'
                }, {
                    name: 'Cajero automático',
                    icon: '🏧'
                }
            ]
        },
        symbols: {
            title: 'Símbolos',
            groupIcon: '🔞',
            set: [
                {
                    name: 'Símbolo de silla de ruedas',
                    icon: '♿'
                }, {
                    name: 'Símbolo de aseos para hombres',
                    icon: '🚹'
                }, {
                    name: 'Símbolo de aseos para mujeres',
                    icon: '🚺'
                }, {
                    name: 'Aseos',
                    icon: '🚻'
                }, {
                    name: 'Símbolo de bebé',
                    icon: '🚼'
                }, {
                    name: 'Servicios',
                    icon: '🚾'
                }, {
                    name: 'Signo de advertencia',
                    icon: '⚠'
                }, {
                    name: 'Prohibida la entrada',
                    icon: '⛔'
                }, {
                    name: 'Señal de prohibida la entrada',
                    icon: '🚫'
                }, {
                    name: 'Símbolo de no fumar',
                    icon: '🚭'
                }, {
                    name: 'Prohibido menores de 18',
                    icon: '🔞'
                }, {
                    name: 'Flechas hacia arriba y hacia abajo formando un círculo abierto en sentido horario',
                    icon: '🔃'
                }, {
                    name: 'Atrás con flecha hacia la izquierda encima',
                    icon: '🔙'
                }, {
                    name: 'Final con flecha hacia la izquierda encima',
                    icon: '🔚'
                }, {
                    name: 'Adelante con signo de exclamación y flecha hacia la izquierda encima',
                    icon: '🔛'
                }, {
                    name: 'Pronto con flecha hacia la derecha encima',
                    icon: '🔜'
                }, {
                    name: 'Arriba con flecha hacia arriba encima',
                    icon: '🔝'
                }, {
                    name: 'Estrella de seis puntas con punto central',
                    icon: '🔯'
                }, {
                    name: 'Aries',
                    icon: '♈'
                }, {
                    name: 'Tauro',
                    icon: '♉'
                }, {
                    name: 'Géminis',
                    icon: '♊'
                }, {
                    name: 'Cáncer',
                    icon: '♋'
                }, {
                    name: 'Leo',
                    icon: '♌'
                }, {
                    name: 'Virgo',
                    icon: '♍'
                }, {
                    name: 'Libra',
                    icon: '♎'
                }, {
                    name: 'Escorpio',
                    icon: '♏'
                }, {
                    name: 'Sagitario',
                    icon: '♐'
                }, {
                    name: 'Capricornio',
                    icon: '♑'
                }, {
                    name: 'Acuario',
                    icon: '♒'
                }, {
                    name: 'Piscis',
                    icon: '♓'
                }, {
                    name: 'Ofiuco',
                    icon: '⛎'
                }, {
                    name: 'Triángulo negro hacia la derecha',
                    icon: '▶'
                }, {
                    name: 'Triángulo doble negro hacia la derecha',
                    icon: '⏩'
                }, {
                    name: 'Triángulo negro hacia la izquierda',
                    icon: '◀'
                }, {
                    name: 'Triángulo doble negro hacia la izquierda',
                    icon: '⏪'
                }, {
                    name: 'Triángulo rojo pequeño hacia arriba',
                    icon: '🔼'
                }, {
                    name: 'Triángulo doble negro hacia arriba',
                    icon: '⏫'
                }, {
                    name: 'Triángulo rojo pequeño hacia abajo',
                    icon: '🔽'
                }, {
                    name: 'Triángulo doble negro hacia abajo',
                    icon: '⏬'
                }, {
                    name: 'Cine',
                    icon: '🎦'
                }, {
                    name: 'Antena con barras',
                    icon: '📶'
                }, {
                    name: 'Modo vibración',
                    icon: '📳'
                }, {
                    name: 'Teléfono móvil apagado',
                    icon: '📴'
                }, {
                    name: 'Símbolo de reciclaje universal negro',
                    icon: '♻'
                }, {
                    name: 'Emblema con tridente',
                    icon: '🔱'
                }, {
                    name: 'Etiqueta identificativa',
                    icon: '📛'
                }, {
                    name: 'Símbolo japonés para principiante',
                    icon: '🔰'
                }, {
                    name: 'Círculo grande',
                    icon: '⭕'
                }, {
                    name: 'Marca de verificación blanca',
                    icon: '✅'
                }, {
                    name: 'Marcha de tachado',
                    icon: '❌'
                }, {
                    name: 'Marca de tachado en cuadrado negativo',
                    icon: '❎'
                }, {
                    name: 'Signo más',
                    icon: '➕'
                }, {
                    name: 'Signo menos',
                    icon: '➖'
                }, {
                    name: 'Signo de división',
                    icon: '➗'
                }, {
                    name: 'Bucle',
                    icon: '➰'
                }, {
                    name: 'Bucle doble',
                    icon: '➿'
                }, {
                    name: 'Signo de interrogación negro ornamental',
                    icon: '❓'
                }, {
                    name: 'Signo de interrogación blanco ornamental',
                    icon: '❔'
                }, {
                    name: 'Signo de exclamación blanco ornamental',
                    icon: '❕'
                }, {
                    name: 'Signo de exclamación',
                    icon: '❗'
                }, {
                    name: 'Tecla 10',
                    icon: '🔟'
                }, {
                    name: 'Símbolo de letras mayúsculas latinas',
                    icon: '🔠'
                }, {
                    name: 'Símbolo de letras minúsculas latinas',
                    icon: '🔡'
                }, {
                    name: 'Símbolo de números',
                    icon: '🔢'
                }, {
                    name: 'Símbolos',
                    icon: '🔣'
                }, {
                    name: 'Símbolo de letras latinas',
                    icon: '🔤'
                }, {
                    name: 'Grupo sanguíneo A',
                    icon: '🅰'
                }, {
                    name: 'Tipo sanguíneo AB',
                    icon: '🆎'
                }, {
                    name: 'Grupo sanguíneo B',
                    icon: '🅱'
                }, {
                    name: 'Cuadrado con símbolo de borrar',
                    icon: '🆑'
                }, {
                    name: 'Cuadrado con símbolo de interesante',
                    icon: '🆒'
                }, {
                    name: 'Cuadrado con símbolo de gratis',
                    icon: '🆓'
                }, {
                    name: 'Punto de información',
                    icon: 'ℹ'
                }, {
                    name: 'Cuadrado con símbolo de identidad',
                    icon: '🆔'
                }, {
                    name: 'Letra M mayúscula en un círculo',
                    icon: 'Ⓜ'
                }, {
                    name: 'Cuadrado con símbolo de nuevo',
                    icon: '🆕'
                }, {
                    name: 'Cuadrado con símbolo de no bueno',
                    icon: '🆖'
                }, {
                    name: 'Grupo sanguíneo O',
                    icon: '🅾'
                }, {
                    name: 'Cuadrado con símbolo de OK',
                    icon: '🆗'
                }, {
                    name: 'Aparcamiento',
                    icon: '🅿'
                }, {
                    name: 'Cuadrado con símbolo de SOS',
                    icon: '🆘'
                }, {
                    name: 'Cuadrado con símbolo de novedad',
                    icon: '🆙'
                }, {
                    name: 'Cuadrado con símbolo de versus',
                    icon: '🆚'
                }, {
                    name: 'Cuadrado con ideograma japonés para "aquí"',
                    icon: '🈁'
                }, {
                    name: 'Cuadrado con ideograma japonés para "pagado"',
                    icon: '🈶'
                }, {
                    name: 'Cuadrado con ideograma japonés para "asiento reservado"',
                    icon: '🈯'
                }, {
                    name: 'Círculo con ideograma japonés para "ventaja"',
                    icon: '🉐'
                }, {
                    name: 'Cuadrado con ideograma japonés para "descuento"',
                    icon: '🈹'
                }, {
                    name: 'Cuadrado con ideograma japonés para "libre de cargo"',
                    icon: '🈚'
                }, {
                    name: 'Cuadrado con ideograma japonés para "prohibición"',
                    icon: '🈲'
                }, {
                    name: 'Círculo con ideograma japonés para "ocupación completa"',
                    icon: '🉑'
                }, {
                    name: 'Cuadrado con ideograma japonés para "aplicación"',
                    icon: '🈸'
                }, {
                    name: 'Cuadrado con ideograma japonés para "aceptación"',
                    icon: '🈴'
                }, {
                    name: 'Cuadrado con ideograma japonés para "libre"',
                    icon: '🈳'
                }, {
                    name: 'Ideograma de enhorabuena en un círculo',
                    icon: '㊗'
                }, {
                    name: 'Ideograma de secreto en un círculo',
                    icon: '㊙'
                }, {
                    name: 'Cuadrado con ideograma japonés para "negocio"',
                    icon: '🈺'
                }, {
                    name: 'Cuadrado con ideograma japonés para "ocupación completa"',
                    icon: '🈵'
                }, {
                    name: 'Círculo rojo grande',
                    icon: '🔴'
                }, {
                    name: 'Círculo azul grande',
                    icon: '🔵'
                }, {
                    name: 'Círculo blanco mediano',
                    icon: '⚪'
                }, {
                    name: 'Círculo negro mediano',
                    icon: '⚫'
                }, {
                    name: 'Cuadrado mediano negro',
                    icon: '◼'
                }, {
                    name: 'Cuadrado mediano blanco',
                    icon: '◻'
                }, {
                    name: 'Cuadrado pequeño-mediano blanco',
                    icon: '◽'
                }, {
                    name: 'Cuadrado pequeño-mediano negro',
                    icon: '◾'
                }, {
                    name: 'Cuadrado blanco pequeño',
                    icon: '▫'
                }, {
                    name: 'Cuadrado negro pequeño',
                    icon: '▪'
                }, {
                    name: 'Rombo naranja grande',
                    icon: '🔶'
                }, {
                    name: 'Rombo azul grande',
                    icon: '🔷'
                }, {
                    name: 'Rombo naranja pequeño',
                    icon: '🔸'
                }, {
                    name: 'Rombo azul pequeño',
                    icon: '🔹'
                }, {
                    name: 'Triángulo rojo hacia arriba',
                    icon: '🔺'
                }, {
                    name: 'Triángulo rojo hacia abajo',
                    icon: '🔻'
                }, {
                    name: 'Rombo con un punto en el interior',
                    icon: '💠'
                }, {
                    name: 'Botón de opción',
                    icon: '🔘'
                }, {
                    name: 'Botón cuadrado blanco',
                    icon: '🔳'
                }
            ]
        }
    };

    // helpers
    const createElement = code => {
        let div = document.createElement('div');
        div.innerHTML = code.trim();
        return div.firstChild;
    };
    const getStorageValues = () => JSON.parse(localStorage.getItem('iconselector')) || [];
    const setStorageValue = setRow => {

        let current = getStorageValues();
        const len = current.length;

        current = current.filter(el => {
            let objectA = JSON.stringify(el);
            let objectB = JSON.stringify(setRow);
            return objectA !== objectB;
        });

        if (len === 50) current.splice(49, 1);

        current.unshift(setRow);
        localStorage.setItem('iconselector', JSON.stringify(current));
    };

    // structures
    const opener = createElement('<div id="iconselector_opener" title="Insertar emoji">😃</div>');
    const structure = createElement('<div id="iconselector"><div class="close"><span>&times;</span></div><div class="iconlist-wrap"><div class="iconlist"></div></div><div class="grouplist-wrap"><div class="grouplist"></div></div></div>');

    // append styles
    const styles = '#iconselector_opener, #iconselector .close, #iconselector span{cursor:pointer}#iconselector .iconlist-wrap::-webkit-scrollbar, #iconselector .grouplist-wrap::-webkit-scrollbar{width:4px;height:4px}#iconselector .iconlist-wrap::-webkit-scrollbar-button, #iconselector .grouplist-wrap::-webkit-scrollbar-button{display:none}#iconselector .iconlist-wrap::-webkit-scrollbar-track-piece, #iconselector .grouplist-wrap::-webkit-scrollbar-track-piece{background:white}#iconselector .iconlist-wrap::-webkit-scrollbar-thumb, #iconselector .grouplist-wrap::-webkit-scrollbar-thumb{background:#999}#iconselector, #iconselector *{box-sizing:content-box}#iconselector{display:none;width:100%;background:white}#iconselector.active{display:block;border:solid 1px #ccc;border-radius:2px;padding:6px;box-shadow:inset 0 0 5px 0 #ccc}#iconselector span{padding:4px;width:22px;height:22px;font-size:16px}#iconselector span:hover{background:#ccc}#iconselector .close{text-align:right;font-family:Tahoma,sans-serif;margin-bottom:4px}#iconselector .close span{padding:0 4px}#iconselector .close span:hover{background:red;color:white;padding:0 4px}#iconselector .iconlist-wrap{overflow:hidden;height:144px}#iconselector .iconlist-wrap:hover{overflow-y:auto}#iconselector .iconlist{display:flex;flex-wrap:wrap;text-align:center}#iconselector .grouplist-wrap{overflow:hidden;margin-top:9px;border-top:solid 1px #ccc;padding-top:2px}#iconselector .grouplist-wrap:hover{overflow-x:auto}#iconselector .grouplist{display:flex;text-align:center}#iconselector .grouplist span.selected{border-bottom:solid 4px #11aff7}';
    const style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.innerHTML = styles;
    document.head.appendChild(style);

    // methods
    const PositionateThings = () => {
        opener.style.position = 'absolute';
        opener.style.top = 0 + 'px';
        opener.style.left = target.offsetWidth + 4 + 'px';
        structure.style.maxWidth = target.offsetWidth + 'px';
        //structure.style.top = target.getBoundingClientRect().top + window.scrollY + target.offsetHeight + 2 + 'px';
        //structure.style.left = target.getBoundingClientRect().left + 'px';
    };
    const AddToRecents = icon => {
        iconSet._recent.set.some(row => {
            if (row.icon === icon) {
                const index = iconSet._recent.set.indexOf(row);
                iconSet._recent.set.splice(index, 1);
                return true;
            }
        });

        if (iconSet._recent.set.length === 50) iconSet._recent.set.splice(49, 1);

        const oe = Object.entries(iconSet);
        for (let [key, value] of oe) {
            if (key !== '_recent') {
                if( value.set.some(emoji => emoji.icon === icon) ) {
                    iconSet._recent.set.unshift(emoji);
                    setStorageValue(emoji);
                    break;
                }
            }
        }
        RewriteRecents();
    };
    const RewriteRecents = () => {
        structure.querySelectorAll('.iconlist span[data-group="_recent"]').forEach(el => el.remove());
        iconSet._recent.set.forEach(icon => structure.querySelector('.iconlist').innerHTML += `<span title="${icon.name}" data-group="_recent" style="display: none;">${icon.icon}</span>`);
        if (structure.querySelector('.grouplist span[data-group="_recent"]').classList.contains('selected')) {
            structure.querySelectorAll('.iconlist span').forEach(el => el.style.display = 'none');
            structure.querySelectorAll(`.iconlist span[data-group="_recent"]`).forEach(el => el.style.display = 'block');
        }
    };

    // filling
    getStorageValues().forEach(el => iconSet._recent.set.push(el));
    for (let [key, value] of Object.entries(iconSet)) {
        structure.querySelector('.grouplist').innerHTML += `<span data-group="${key}" title="${value.title}">${value.groupIcon}</span>`;
        value.set.forEach(icon => {
            structure.querySelector('.iconlist').innerHTML += `<span title="${icon.name}" data-group="${key}">${icon.icon}</span>`;
        });
    }

    // events & actions
    //window.addEventListener('scroll', () => structure.style.top = target.getBoundingClientRect().top + target.offsetHeight + 2 + 'px');
    target.addEventListener('blur', () => {
        target.dataset.position = target.selectionStart;
    });
    opener.addEventListener('click', ev => {
        ev.preventDefault();
        if (structure.classList.contains('active')) {
            target.focus();
            return;
        }
        PositionateThings();
        structure.classList.add('active');
        target.focus();
    });
    structure.querySelector('.close').addEventListener('click', ev => {
        ev.preventDefault();
        structure.classList.remove('active')
    });
    structure.querySelectorAll('.grouplist span').forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.childNodes.forEach(n => n.classList.remove('selected'));
            el.classList.add('selected');
            structure.querySelectorAll('.iconlist span').forEach(el => el.style.display = 'none');
            structure.querySelectorAll(`.iconlist span[data-group="${el.dataset.group}"]`).forEach(el => el.style.display = 'block');
        });
    });
    structure.querySelector('.grouplist').addEventListener('wheel', ev => {
        ev.preventDefault();
        ev.currentTarget.parentElement.scrollTo(ev.currentTarget.parentElement.scrollLeft += +ev.deltaY, 0)
    });
    structure.querySelector('.iconlist').addEventListener('click', ev => {
        if (ev.target.tagName === 'SPAN') {
            let currentValue = target.value;
            let position = +target.dataset.position || 0;
            target.value = currentValue.substring(0, position) + ev.target.innerText + currentValue.substring(position);
            let newPosition = position + ev.target.innerText.length;
            target.dataset.position = newPosition;
            target.focus();
            target.setSelectionRange(newPosition, newPosition);
            AddToRecents(ev.target.innerText);
        }
    });

    // structure positioning
    PositionateThings();

    // insert to dom
    target.parentElement.style.position = 'relative';
    target.parentElement.appendChild(structure);
    target.parentElement.appendChild(opener);
    //document.body.appendChild(opener);
    //document.body.appendChild(structure);

    // start with recent or first
    if (!!iconSet._recent.set.length) structure.querySelector('.grouplist span[data-group="_recent"]').click();
    else structure.querySelector(`.grouplist span[data-group="${Object.keys(iconSet)[1]}"]`).click();

    if (returnSelectors === true) return [opener, structure];
};
