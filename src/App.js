import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Phaser from 'phaser'
import { useEffect, useState } from 'react';
import Escena from './componentes/Escena';


function App() {
    const [listo, setListo] = useState(false);


    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug :false
                }
            },
            scene: [Escena]
            /*scene: {
                preload: preload,
                create: create
            }*/

        };

        const game = new Phaser.Game(config);

        //Trigger cuando el juego esta completamente listo
        game.events.on("LISTO", setListo);

        //si no pongo esto, se acumulan duplicados del lienzo
        return () => {
            setListo(false);
            game.destroy(true);
        }

    }, [listo]);





}

export default App;