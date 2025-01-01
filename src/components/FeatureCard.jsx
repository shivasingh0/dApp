function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
        <div className="bg-[#8A2BE2] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    )
  }
  
  export default FeatureCard