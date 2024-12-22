
import {HfInference} from "@huggingface/inference"

const SYSTEM_PROMPT = "You are an assistant that receives a list of ingredients that a user has and suggesrs a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many ectra ingredients. Format your response in markdown to make it easier to render to a web page"

//getting variable from .env file
const apiToken = import.meta.env.VITE_HUGGING_FACE_API_TOKEN;

// initialize HfInference
const hf  = new HfInference(apiToken);


export async function getRecipeFromChef(){


// const ingredients = 




}