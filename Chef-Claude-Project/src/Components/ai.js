import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT =
  "You are an intelligent assistant that helps users discover recipes based on the ingredients they provide. When given a list of ingredients, suggest a recipe that the user could prepare using some or all of those ingredients. You don't need to use every ingredient they mention in your recipe, but aim to use as many as possible without compromising the recipe's quality.You can include a few additional ingredients not mentioned by the user if they are essential to the recipe, but try to minimize extra ingredients to keep it practical for the user.Format your response in Markdown.You can also include a brief description or context about the recipe at the beginning. Ensure the Markdown is properly formatted. List the ingredients clearly, using bullet points, Provide step-by-step instructions for preparing the recipe, using numbered steps for clarity, also make recipe title bold and large, Make sure to add spaces";

//getting variable from .env file
const apiToken = import.meta.env.VITE_HUGGING_FACE_API_TOKEN;

// initialize HfInference
const hf = new HfInference(apiToken);

export async function getRecipeFromChef(ingredientsArr) {
  const toingredientsString = ingredientsArr.join(", ");

  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${toingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });



    
   
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}
