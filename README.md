# abso

TypeScript framework for LLMs.

**Abso** is a TypeScript library that **unifies calls** under an OpenAI-compatible style interface.

It aims to make calling various Large Language Models—OpenAI, Anthropic, Bedrock, Azure, and more—**simple, typed, and extensible**.

## Features

- 🔁 **OpenAI-compatible API** across multiple LLM providers
- 🚀 **Lightweight & Fast**: no overhead
- 🔍 **TypeScript-first**: strongly typed methods, requests, and responses
- 📦 **Streaming support** via both events and async iteration
- 🛠️ **Easy extensibility**: add new providers with minimal fuss
- 🧮 **Embeddings support** for semantic search and text analysis
- 🔢 **Tokenizer support** for accurate token counting and cost estimation

## Providers

| Provider   | Chat | Streaming | Tool Calling | Embeddings | Tokenizer | Cost Calculation |
| ---------- | ---- | --------- | ------------ | ---------- | --------- | ---------------- |
| OpenAI     | ✅   | ✅        | ✅           | ✅         | 🚧        | 🚧               |
| Anthropic  | ✅   | ✅        | ✅           | ❌         | 🚧        | 🚧               |
| xAI Grok   | ✅   | ✅        | ✅           | ❌         | 🚧        | 🚧               |
| Mistral    | ✅   | ✅        | ✅           | ❌         | 🚧        | 🚧               |
| Groq       | ✅   | ✅        | ✅           | ❌         | ❌        | 🚧               |
| Ollama     | ✅   | ✅        | ✅           | ❌         | ❌        | 🚧               |
| OpenRouter | ✅   | ✅        | ✅           | ❌         | ❌        | 🚧               |
| Voyage     | ❌   | ❌        | ❌           | ✅         | ❌        | ❌               |
| Azure      | 🚧   | 🚧        | 🚧           | 🚧         | ❌        | 🚧               |
| Bedrock    | 🚧   | 🚧        | 🚧           | 🚧         | ❌        | 🚧               |
| Gemini     | 🚧   | 🚧        | 🚧           | 🚧         | 🚧        | 🚧               |

## Installation

```bash
npm install abso
```

## Usage

```ts
import { abso } from "abso";

const chatCompletion = await abso.chat.create({
  messages: [{ role: "user", content: "Say this is a test" }],
  model: "gpt-4o",
});

console.log(chatCompletion.choices[0].message.content);
```

## Streaming

```ts
const stream = await abso.chat.stream({
  messages: [{ role: "user", content: "Say this is a test" }],
  model: "gpt-4o",
});

for await (const chunk of stream) {
  console.log(chunk);
}
```

## Tokenizers (soon)

```ts
const tokens = await abso.tokenize({
  messages: [{ role: "user", content: "Hello, world!" }],
  model: "gpt-4o",
});

console.log(`${tokens.count} tokens`);
```

## Custom Providers

```ts
import { Abso } from "abso";
import { MyCustomProvider } from "./myCustomProvider";

const abso = new Abso([]);
abso.registerProvider(new MyCustomProvider(/* config */));

const result = await abso.chat.create({
  model: "my-custom-model",
  messages: [{ role: "user", content: "Hello!" }],
});
```

## Roadmap

- [ ] More providers
- [ ] Built in caching
- [ ] Embeddings support
- [ ] Tokenizer logic
- [ ] Cost calculation
- [ ] Out of the box observability
