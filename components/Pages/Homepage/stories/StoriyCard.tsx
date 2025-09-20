interface BrandStoryProps {
  logo: string;
  brand: string;
  description: string;
  product: string;
  region: string;
  industry: string;
  size: string;
  bgColor?: string; // ← رنگ بک‌گراند اختیاری
}

const BrandStoryCard = ({ logo, brand, description, product, region, industry, size, bgColor }: BrandStoryProps) => {
  return (
    <div className="min-w-[300px] max-w-sm bg-white rounded-xl shadow-md p-5 m-3 flex flex-col justify-between">
      <div className={`flex justify-center items-center mb-4 h-36 rounded-xl ${bgColor}`}>
        <img src={logo} alt={brand} className="h-10 object-contain" />
      </div>
      <h3 className="font-bold text-xl mb-2">{brand}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p><strong>Product:</strong> {product}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Industry:</strong> {industry}</p>
        <p><strong>Size:</strong> {size}</p>
      </div>
      <button className="border border-black text-black rounded-md px-4 py-2 hover:bg-black hover:text-white transition">
        مشاهده مقاله
      </button>
    </div>
  )
}

export default BrandStoryCard
