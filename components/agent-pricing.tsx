import { Check } from "lucide-react"

interface PricingOption {
  name: string
  price: string
  period: string
  features: string[]
  cta: string
  popular: boolean
}

interface AgentPricingProps {
  pricingOptions: PricingOption[]
}

export default function AgentPricing({ pricingOptions }: AgentPricingProps) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Pricing Options</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingOptions.map((option) => (
          <div
            key={option.name}
            className={`p-6 rounded-xl border ${option.popular ? "border-blue-500 relative" : "border-gray-800"}`}
          >
            {option.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{option.name}</h3>
            <div className="flex items-baseline mb-1">
              <span className="text-3xl font-bold text-white">{option.price}</span>
              {option.period !== "forever" && <span className="text-gray-400 ml-1">/{option.period}</span>}
            </div>

            <p className="text-gray-400 text-sm mb-6">
              {option.period === "forever" ? "No credit card required" : "Billed monthly"}
            </p>

            <ul className="space-y-3 mb-8">
              {option.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                option.popular ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {option.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
