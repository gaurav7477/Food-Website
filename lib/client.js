// build a connection b/w sanity and appication just like php,html setup
import {createClient as sanityClient} from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'
export const client = sanityClient({
    projectId: "7bgbzvwb",
    dataset: 'production',
    apiVersion: '2023-02-15',
    useCdn: true,
    token:process.env.SANITY_API_TOKEN
})

const builder = ImageUrlBuilder(client);

// function load the images from database to client  side
export const urlFor = (source) => {
    // console.log("huehue",builder.image(source).url());
    return builder.image(source)
}