// build a connection b/w sanity and appication just like php,html setup
import sanityClient  from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
    projectId:"7bgbzvwb",
    dataset:'production',
    apiVersion :'2023-02-15',
    useCdn:true,
    token:
    "skuXfrM4IUP9yMKWylSzdBDf89L0jp5tbf1Sqh6coK3MOHq0OCnpiZUQ4zV2B0NjWMNMPc0wIh0uk7jRkYDGOgovxUcznEb1RcbpWGhiesKATcwmfXnIXN2980Cm5QWU2uPUSwGA452MG7j1bAHXdn3SnyKN92nkx0KfkTpFQGTiIHOkeJgM"

})

const builder = ImageUrlBuilder(client);

// function load the images from database to client  side
export const urlFor = (source)=>{
    // console.log("huehue",builder.image(source).url());
    return builder.image(source)
}