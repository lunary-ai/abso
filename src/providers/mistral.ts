import { OpenAIProvider } from "./openai"
import type { IProvider } from "../types"

interface MistralProviderOptions {
  apiKey?: string
  // We can accept more config if needed
}

export class MistralProvider extends OpenAIProvider implements IProvider {
  public name = "mistral"
  private apiKey: string | undefined

  constructor(options: MistralProviderOptions = {}) {
    const apiKey = options.apiKey || process.env.MISTRAL_API_KEY
    super({
      apiKey,
      baseURL: "https://api.mistral.ai/v1/",
    })
    this.apiKey = apiKey
  }

  validateConfig(): void {
    if (!this.apiKey) {
      throw new Error(
        "Mistral API key is required. Set MISTRAL_API_KEY environment variable or pass it in constructor options."
      )
    }
  }

  matchesModel(model: string): boolean {
    // TODO: better match
    return model.startsWith("mistral-")
  }
}
