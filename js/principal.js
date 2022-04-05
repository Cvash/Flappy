var juego = new Phaser.Game(370, 550, Phaser.AUTO, 'bloque_juego');
var fondoJuego;
var boton;
var flappy;
//Declaramos teclas de direccionales
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;

var estadoPrincipal= {
    preload: function(){
        // Cargamos todos los recursos
        // juego.stage.backgroundColor="#000"
        juego.load.image('fondo', 'img/bg.jpeg');
        juego.load.spritesheet('pajaro', 'img/pajaro.png',43,30);  //pajaros
        // juego.load.image('btn', 'img/btn.png');
        
    },
    create: function(){
        // mostrar pantalla
        fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
        flappy = juego.add.sprite(100,100,'pajaro');
        flappy.frame = 1;
        flappy.animations.add('vuelo',[0,1,2],10,true);
        // boton = juego.add.sprite(juego.width/2, juego.height/2, 'btn');
        // boton.anchor.setTo(0.5,0.5);
        /*flappy.anchor.setTo(0.5);
        flappy.scale.setTo(1,1);
        flappy.angle = 90;*/

        /** Capturamos el movimiento desde teclado  */
        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    },
    update: function(){
        // animamos el juego
        fondoJuego.tilePosition.x-=1;
        // flappy.angle+=0.2;
        flappy.animations.play('vuelo');

        if( teclaDerecha.isDown ) {
            flappy.x++;
        }
        else if ( teclaIzquierda.isDown ) {
            flappy.x--;
        }
        else if ( teclaArriba.isDown ) {
            flappy.y--;
        }
        else if ( teclaAbajo.isDown ) {
            flappy.y++;
        }

    }
};

// Asignamos el estado que acaba de crear al juego
juego.state.add('principal', estadoPrincipal);
// Iniciamos el juego del estado principal por defecto
juego.state.start('principal');