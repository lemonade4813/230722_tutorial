import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const URL = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef`

const getNews = async () => {

    const response = await axios.get(URL)
    return response.data.articles
}

const useNews = () => {

    const queryData = useQuery(['news'], ()=> getNews())
    return queryData
}

export {getNews, useNews}