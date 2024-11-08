import Cards from "./Cards"

function Hero(){
return (<>
<section className="mt-10 px-5 m-auto max-w-7xl flex flex-row gap-3 justify-center">

<Cards title="History" desc="some day  can be sold out" btnText="Read more" link="https://www.pinterest.com" listArr={[1,2,3]} price={3000}/>

<Cards title="Relevant Words" desc="Wish list canot be filled with expectations" btnText="Go beyond" link="https://www.unsplash.com" listArr={["a","b","c"]} price={1400}/>

<Cards title="Errors" desc="Never ever restore the bugs" btnText="More Around" link="https://www.freepik.com" listArr={["A","B","C"]} price={800}/>

</section>
</>)
}

export default Hero