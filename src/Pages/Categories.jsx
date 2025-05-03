// import { nextWednesdayWithOptions } from 'date-fns/fp';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const Categories = () => {
    const [categoryNews, setCategoryNews] = useState([])
    // here the declared useState is must be initially empty array .otherwise i can't use map loop in my projects


    const { id } = useParams();
    const data = useLoaderData();

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return;
        }
        else if (id == "1") {
            const fileteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(fileteredNews);
            
        }
        else {
            const fileteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(fileteredNews);
        }

    }, [data, id])


    return (
        <div>
            {/* <h1>Categories news-{id}</h1> */}
            <h1 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length} </span>found</h1>
            <div>
              {categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)

              }
              {/* mind it that map is work an array otherwise it can't work be careful when u load fetch and declared state  */}
            </div>
        </div>
    );
};

export default Categories;