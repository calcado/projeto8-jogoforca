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
    const imagens =[forca0,erro1,erro2,erro3,erro4,erro5,erro6]
    
    const [palavraAleatoria, setpalavraAleatoria] = useState([]) 
    const [underline, setUnderline] = useState([palavraAleatoria])
    
    const [imagem, setImagem] = useState(forca0)
    const [clicada, setClicada] =useState([]) 
    const [erros, setContador] = useState(0)
    const [input, setInput] = useState('')
    
   function Errou(letra){
    
    setContador(erros+1)
    
    setImagem(imagens[{erros}])
   }

   function Venceu(){
    alert("alou")
    
   }
   function Perdeu(){
    alert("perdeu")
   }
   
    function Chute(){
        const arrInput = input.split('')
        if(arrInput === palavraAleatoria){
            alert('oi')
        }else{
            alert('nonom')
        }

        console.log(arrInput)
        console.log(palavraAleatoria)
    }
   
    function SelecionarLetra(letra,setDesabilitar){
        setDesabilitar('')
        alert(letra);
        const arrayNova =[...underline]
                
        if(palavraAleatoria.includes(letra) ){
            for(let i=0; i < palavraAleatoria.length; i++){
                if(palavraAleatoria[i]===letra){
                    arrayNova[i] = letra;
                    setUnderline(arrayNova)
                }     
             }
        }
        else{
            setContador(erros+1)
            alert('não') 
        }     
        
        if(!underline.includes("_") ){
            Venceu()
        }else if(erros>= 5){
            alert("perdeu")
        }    
    }   
        
    function EscolherPalavra(){
        let randomIndice = Math.floor(Math.random()*palavras.length)
        const palavra = palavras[randomIndice]
        const palavraNormal = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const palavraArray = palavraNormal.split("")
        setpalavraAleatoria(palavraArray);
        const arrUnderline = palavraArray.map((elemento) => elemento = "_ " )
        setUnderline([...arrUnderline])
        console.log(palavra)
    }
    function Letra(props){
        const [habilitado, setDesabilitar] = useState('habilitado')
        console.log(habilitado)
        return(
            <li>
                    <button className={`letrinha ${habilitado}`}
                      disabled={habilitado != "habilitado" ? true : false }  onClick={()=>SelecionarLetra(props.letra,setDesabilitar)}>{props.letra.toUpperCase()}
                    </button>
            </li>)
    
        }
        
    return (
        <>
        
        <div className='corpo'>
            
            <img src={imagens[erros]} alt="Ai deu ruim"/>
            <div className='direita'>
                <button className='escolherPalavra' 
                onClick={EscolherPalavra}>Escolher Palavra</button>
                <p className='palavraAleatoria'>{underline}</p>
            </div>
        </div>

        <div className='baixo'>
            <ul className='letras'>{alfabeto.map((letra, indice)=><Letra letra={letra}  key={indice}/>)}              
            </ul>
            
            
            <div className='teclado'>
                <p>Ja sei a palavra</p>
                <input type ='text' placeholder='' onChange={e => setInput(e.target.value)}/>
                <button className='Chute' onClick={Chute}> Chutar </button>
            </div>
        </div>
        
        </>

    )
}
