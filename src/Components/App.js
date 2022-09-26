import React, { useEffect, useState } from 'react'
import palavras from './palavras'
 
import forca0 from '../assets/forca0.png'
import erro1 from '../assets/forca1.png'
import erro2 from '../assets/forca2.png'
import erro3 from '../assets/forca3.png'
import erro4 from '../assets/forca4.png'
import erro5 from '../assets/forca5.png'
import erro6 from '../assets/forca6.png'

function Letra(props){
    const [habilitado, setDesabilitar] = useState('habilitado')
    console.log(habilitado)
    console.log(props.jogoIniciado)
    return(
        <li>
                <button className={`cor letrinha ${habilitado}`}
                    disabled={props.jogoIniciado && habilitado ==='habilitado' ? false :true }  onClick={()=>props.SelecionarLetra(props.letra,setDesabilitar)}>{props.letra.toUpperCase()}
                </button>
        </li>)

    }
    
    function Teclado(props){
        
        const [input, setInput] = useState('')
        function handleChange(evento){
            setInput(evento.target.value)
        }
        function Chute(){
            console.log(props.palavraSorteada)
            if(input === props.palavraSorteada){
                props.setUnderline(input)
                props.setCor("palavraEstilo verde")
                props.setJogo(false)  
                
            }else{
                props.setUnderline(props.palavraSorteada)
                props.setCor("palavraEstilo vermelho")
                props.setJogo(false)  
            }
        }

        return(

            <div className='teclado'>
                <p>Ja sei a palavra</p>
                <input className="input" type="text" name="description" onChange={handleChange} value={input}/>
                <button className='tentativa' onClick={()=> Chute()}> Chutar </button>
            </div>

        )
    }
export default function App(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    const imagens =[forca0,erro1,erro2,erro3,erro4,erro5,erro6]
    
    const [palavraAleatoria, setpalavraAleatoria] = useState([]) 
    const [underline, setUnderline] = useState([palavraAleatoria])
    const [cor, setCor] = useState('palavraEstilo')
    const [clicada, setClicada] =useState([]) 
    const [erros, setContador] = useState(0)
    const [input, setInput] = useState('')
    const [acerto, setAcerto] = useState(0)
    const [palavraSorteada, setSorteada] = useState('')
    const [jogoIniciado, setJogo] = useState(false)
    const [arrayClicados, setArrayClicados] = useState([])
    
    
    // function Chute(){
                
    //     if(input === palavraSorteada){
    //         setUnderline(palavraSorteada)
    //         setCor("palavraEstilo verde")  
            
    //     }else{
    //         setUnderline(palavraSorteada)
    //         setCor("palavraEstilo vermelho")
    //     }
    // }
    function Resetar(){
        setpalavraAleatoria([])
        setUnderline(palavraAleatoria)
        setCor('palavraEstilo')
        setClicada([])
        setInput('')
        setContador(0)
        setAcerto(0)
        setJogo(false)
        setArrayClicados([])

    }

    console.log(arrayClicados)

    function SelecionarLetra(letra,setDesabilitar){
        setArrayClicados([...arrayClicados,letra])
        setDesabilitar('')
        
        const arrayNova =[...underline]
        let acertos = 0
        let erro = 0        
        if(palavraAleatoria.includes(letra) ){
            for(let i=0; i < palavraAleatoria.length; i++){
                if(palavraAleatoria[i]===letra){
                    arrayNova[i] = letra;
                    setUnderline(arrayNova)
                    acertos++
                    
                }     
            }
            acertos=acertos+acerto
            setAcerto(acertos)
            

        }
        else{
            
            erro = erros +1
            setContador(erro)
             
        }     
        if(acertos === palavraSorteada.length){
            setUnderline(palavraSorteada)
            setCor("palavraEstilo verde") 
            setJogo(false)
        }
        if(erro>= 6){
            alert()
            setCor("palavraEstilo vermelho")
            setUnderline(palavraSorteada)
            setJogo(false)
        } 
         
    }
    console.log("acerto:"+acerto)
    console.log("erros:"+erros)
    console.log(palavraSorteada.length)   
        
    function EscolherPalavra(){
        
        Resetar()
        setJogo(true)
        
        let randomIndice = Math.floor(Math.random()*palavras.length)
        const palavra = palavras[randomIndice]
        setSorteada(palavra)
        const palavraNormal = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const palavraArray = palavraNormal.split("")
        setpalavraAleatoria(palavraArray);
        const arrUnderline = palavraArray.map((elemento) => elemento = "_ " )
        setUnderline([...arrUnderline])
        console.log(palavra)
    }
    
   function handleChange(evento){
    setInput(evento.target.value)

   }
    
      
    return (
        <>
        
        <div className='corpo'>
            
            <img src={imagens[erros]} alt="Ai deu ruim"/>
            <div className='direita'>
                <button className='escolherPalavra' 
                onClick={EscolherPalavra}>Escolher Palavra</button>
                <p className={cor }>{underline}</p>
            </div>
        </div>

        <div className='baixo'>
            <ul className='letras'>{alfabeto.map((letra, indice)=><Letra SelecionarLetra={SelecionarLetra} jogoIniciado={jogoIniciado} letra={letra}  key={indice}/>)}              
            </ul>
            <Teclado setUnderline={setUnderline} 
            setCor={setCor} 
            setpalavraAleatoria={setpalavraAleatoria} 
            palavraSorteada = {palavraSorteada} 
            setJogo = {setJogo}
            />
          
            
        </div>
        
        </>

    )
}
