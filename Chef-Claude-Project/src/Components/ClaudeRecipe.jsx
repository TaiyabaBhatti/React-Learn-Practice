import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

//  utilizing plugins like remark-gfm and rehype-raw to achieve further styling
export default function ClaudeRecipe({ recipeContent }) {
  // getRecipeFromChef(ingredientArr)  this will return a promise, so we have to handle it.

  return (
    <section className="px-10 mt-10 text-gray-600 text-base">
      <h1 className="font-bold text-2xl text-gray-950 mb-6">
        Chef-Claude Recommends:
      </h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-3">{children}</h2>
          ),
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-2">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
        }}
      >
        {recipeContent}
      </ReactMarkdown>
    </section>
  );
}
