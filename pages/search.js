import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SearchResultList from '../Components/SearchResultList';
import Response from '../Response';

function search({resultsJSON}) {

const router=useRouter();
    return (
        <div className="flex flex-col h-screen justify-between">
        
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="https://img.icons8.com/color/452/google-logo.png"/>
        </Head>

        <Header search/>
        
       <SearchResultList results={resultsJSON}/>
        

        <Footer/>
        
        </div>

    )
}

export default search;


export async function getServerSideProps (context) {
const useDummyData = false;

const StartIndex = context.query.start || 0;

// Api Key https://developers.google.com/custom-search/v1/using_rest
// Context Key https://cse.google.co.in/cse/create/new
// GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures


const data = useDummyData? Response : 
await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${StartIndex}`)
.then((response)=>response.json());

return{
    props:{
        resultsJSON:data,
    },
}
}