# Project Title

Islamic Inspirational Quotes <API/>

## Description

An API for Islamic inspirational and motivational quotes in International language.
Anyone can contribute to this project by providing their favourite inspirational islamic quotes.

## From this API you will get:

    From this API you will get:

    Motivational Islamic quote by ID
    Motivational Islamic quotes by author
    Motivational Islamic quotes by keyword
    Motivational Islamic quotes by range

## BaseURL

https://salty-crag-26485.herokuapp.com/

## How to use

Calling by ID:

    FullUrl=`${BaseURL}/data/${dataId}`

Example:

    axios.get(`https://salty-crag-26485.herokuapp.com/data/1`)
    .then((res)=>{
    console.log(res)
    })

Output:

    {
        "id":"1",
        "author":"Hazrat Ali (R.A)",
        "quote":"A hopeless man sees difficulties in every chance, but a hopeful person sees chances in every difficulty."
    }

Searching by author:

    FullUrl=`${BaseURL}/search/author?q=${authorName}` // authorName ( Case insensitive )

Example:

    axios.get(`https://salty-crag-26485.herokuapp.com/search/author?q=Hazrat`)
        .then((res)=>{
        console.log(res)
    })
    
Output:
 
 [
        {
            "id":"1",
            "author":"Hazrat Ali (R.A)",
            "quote":"A hopeless man sees difficulties in every chance, but a hopeful person sees chances in every difficulty."
        },
        {
            "id":"3",
            "author":"Hazrat Ali (R.A)",
            "quote":"See the bad inside yourself, and see the good inside others."
        },
        ...........................
        .................................................
    ]

Searching by keyword:

    FullUrl=`${BaseURL}/search/quote?q=${keyword}`  //  keyword ( Case insensitive )

 Example :
 
        axios.get(`https://salty-crag-26485.herokuapp.com/search/quote?q=difficulties`)
            .then((res)=>{
            console.log(res)
        })

 Output:

    [
        {
                "id": "1",
                "author": "Hazrat Ali (R.A)",
                "quote": "A hopeless man sees difficulties in every chance, but a hopeful person sees chances in every difficulty."
        },
        {
            "id": "26",
            "author": "Hazrat Ali (R.A)",
            "quote": "Do not let your difficulties fill you with anxiety, after all it is only in the darkest nights that stars shine more brightly."
        }
    ]

Searching by range:

    FullUrl=`${BaseURL}/data/part?start=${fromId}&end=${toId}` //getting data in an specific range
    
    Example:
    
        axios.get(`https://salty-crag-26485.herokuapp.com/data/part?start=3&end=5`)
        .then((res)=>{
        console.log(res)
        })
    
    Output:
    [
        {
            "id": "3",
            "author": "Hazrat Ali (R.A)",
            "quote": "See the bad inside yourself, and see the good inside others."
        },
        {
            "id": "4",
            "author": "Imam Ali (A.S)",
            "quote": "Be like the flower that gives its fragrance even to the hand that crushes it."
        },
        {
            "id": "5",
            "author": "Imam Ali (A.S)",
            "quote": "Nothing hurts a good soul and a kind heart more than to live amongst people who cannot understand it."
        }
    ]

    FullUrl=`${BaseURL}/data/part?end=${toId}` //getting data from ID 1 to ${toId}
    
    Example:
        axios.get(`https://salty-crag-26485.herokuapp.com/data/part?end=3`)
        .then((res)=>{
        console.log(res)
        })
        
    Output:
    [
        {
            "id": "1",
            "author": "Hazrat Ali (R.A)",
            "quote": "A hopeless man sees difficulties in every chance, but a hopeful person sees chances in every difficulty."
        },
        {
            "id": "2",
            "author": "Imam Ali (A.S)",
            "quote": "A man who draws close to you for a purpose, will abandon you when it is fulfilled."
        },
        {
            "id": "3",
            "author": "Hazrat Ali (R.A)",
            "quote": "See the bad inside yourself, and see the good inside others."
        }
    ]



## Authors

    Asif Mahmud
    https://github.com/AsiFmahmud10

## Contributors

    Md. Samirul Alam
    https://github.com/SamirulAlam

    Mushfiq Shafi
    https://github.com/mushfiq-906
    
    Asif Mahmud
    https://github.com/AsiFmahmud10


## Version History

    Initial Release -v1.0.0

## License

    MIT
