import React, { useEffect, useState } from 'react'
import palavras from './palavras'
 
import forca0 from '../assets/forca0.png'
import erro1 from '../assets/forca1.png'
import erro2 from '../assets/forca2.png'
import erro3 from '../assets/forca3.png'
import erro4 from '../assets/forca4.png'
import erro5 from '../assets/forca5.png'
import erro6 from '../assets/forca6.png'


export default function App(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let erro = 0
    const [palavraAleatoria, setpalavraAleatoria] = useState([]) 
    const [underline, setUnderline] = useState([])
    const [habilitado, setDesabilitar] = useState('habilitado')
    
    let under = []
    

   

    function MudaImagem(){

    }
    function Chute(){
        alert('ok');
        
    }
    
    function SelecionarLetra(l){
        alert(l)
    //     underline.forEach(element => {
    //       if(l === underline)  
    //     });
        
    }
    
    function EscolherPalavra(){
    let randomIndice = Math.floor(Math.random()*palavras.length)
    let palavra = palavras[randomIndice].split("")
    const arr = palavra.map((elemento) => elemento = " _" )
    setpalavraAleatoria([...arr])
    // let novaUnderline = palavra.forEach(() => underline.push('_'))
    
    // for(let i=0; i<palavra.length; i++){
        
    //     under.push(" _");
        
    // }
    // setUnderline(under)
    console.log(palavra)
   
}
    
    return (
        <>
        
        <div className='corpo'>
            
            <img src={forca0}/>
            <div className='direita'>
                <button className='escolherPalavra' 
                onClick={EscolherPalavra}>Escolher Palavra</button>
                <p className='palavraAleatoria'>{palavraAleatoria}</p>
            </div>
        </div>

        <div className='baixo'>
            <ul className='letras'>
                {alfabeto.map((letra, indice)=> 
                <li key={indice}>
                    <button className='letrinha' 
                        onClick={() => SelecionarLetra(letra)}>{letra.toUpperCase()}
                    </button>
                </li>)}
            </ul>
            
            
            <div className='teclado'>
                <p>Ja sei a palavra</p>
                <input type ='text' placeholder='' />
                <button className='Chute' onClick={Chute}> Chutar </button>
            </div>
        </div>
        
        </>

    )
}