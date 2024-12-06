import Textform from "./Textform"

function Hero(props){
return (<>

<section className="mt-10 px-5 m-auto max-w-7xl ">
<Textform modeTheme = {props.mode}/>
</section>
</>)
}

export default Hero