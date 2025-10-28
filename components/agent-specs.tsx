import { Cpu, Clock, Database, Globe, Shield, Zap } from "lucide-react"

interface AgentSpecsProps {
  specs: {
    modelArchitecture: string
    parameters: string
    context: string
    latency: string
    dataUpdated: string
    security: string
  }
}

export default function AgentSpecs({ specs }: AgentSpecsProps) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Cpu size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Model Architecture</h3>
          </div>
          <p className="text-gray-300">{specs.modelArchitecture}</p>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Database size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Parameters</h3>
          </div>
          <p className="text-gray-300">{specs.parameters}</p>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Globe size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Context Window</h3>
          </div>
          <p className="text-gray-300">{specs.context}</p>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Latency</h3>
          </div>
          <p className="text-gray-300">{specs.latency}</p>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Zap size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Data Freshness</h3>
          </div>
          <p className="text-gray-300">{specs.dataUpdated}</p>
        </div>

        <div className="p-4 border border-gray-800 rounded-lg">
          <div className="flex items-center mb-2">
            <Shield size={20} className="text-blue-400 mr-2" />
            <h3 className="text-lg font-medium text-white">Security</h3>
          </div>
          <p className="text-gray-300">{specs.security}</p>
        </div>
      </div>
    </div>
  )
}
