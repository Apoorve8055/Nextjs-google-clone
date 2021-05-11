import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React from 'react'

function SearchResultList({results}) {
    const router = useRouter();
    const queryStartIndex = Number(router.query.s) || 0;
    const goPrev = () => {
        router.push(`/search?term=${router.query.term}&s=${queryStartIndex - 10}`);
      };
    
      const goNext = () => {
        router.push(`/search?term=${router.query.term}&s=${queryStartIndex + 10}`);
      };
    

    return (
        <div className="grid p-3 grid-cols-1 md:grid-cols-6 items-center">
        <div className=""></div>
        <div className="md:col-span-3 ">
        <p className="text-gray-500 mb-5">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime}) </p>
        
        {
            results.items.map(data=>(<div className="mt-2 shadow-lg rounded-lg " key={data.link}>
                
            <div className="mt-2 mb-3  p-3 ">
                    <a href={data.link} className="text-gray-500 ">
                        {data.formattedUrl}
                            </a>
                    <a href={data.link} >
                        <h2 className="text-[#1a0dab]  text-[20px] font-medium ">{data.title}</h2>
                    </a>
                    <p className="text-gray-500 ">{data.snippet}</p>
                    </div>
                </div>))
        }
        
            <div>
            <div className="flex justify-between items-center">
          <p>Page ({queryStartIndex / 10 + 1})</p>
            <div className="justify-end">
            
            {queryStartIndex >= 10 && (
                <button  onClick={goPrev}>
                  <ArrowLeftIcon className="h-5 bg-white-500" />
                </button>
              )}
              <button className="pl-5" onClick={goNext}>
                <ArrowRightIcon  className="h-5  bg-white-500"/>
              </button>
            </div>
        </div>
            </div>

        </div>
        <div className="md:col-span-2"></div>
        </div>
    )
}

export default SearchResultList;
