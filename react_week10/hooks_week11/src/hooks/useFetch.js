import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({});

    async function getPost(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        setPost(data);
    }

    useEffect( () => {
        getPost();
    }
    , [])

    return post.title;
}

export function useFetch(url){
    const [finalData, setData] = useState({});

    async function getData(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect( () => {
        getData();
    }
    , [url])

    return {finalData};
}