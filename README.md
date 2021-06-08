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
FullUrl=`${BaseURL}/search/author?q=${authorName}`
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
...
...
...
]

Searching by keyword:
FullUrl=`${BaseURL}/search/quote?q=${keyword}`

Searching by range:

FullUrl=`${BaseURL}/data/part?start=${fromId}&end=${toId}` //getting data in an specific range
FullUrl=`${BaseURL}/data/part?end=${toId}` //getting data from ID 1 to ${toId}

## Authors

Contributors names and contact info

Asif Mahmud
https://github.com/AsiFmahmud10

## Contributors

Md. Samirul Alam
https://github.com/SamirulAlam

Mushfic Shafi
https://github.com/mushfiq-906

## Version History

       Initial Release v1.0.0

## License

MIT
