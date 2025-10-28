import Image from "next/image"
import { Star } from "lucide-react"

interface Review {
  id: number
  user: string
  avatar: string
  rating: number
  date: string
  comment: string
}

interface AgentReviewsProps {
  reviews: Review[]
  rating: number
  reviewCount: number
}

export default function AgentReviews({ reviews, rating, reviewCount }: AgentReviewsProps) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-800 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Reviews</h2>
        <div className="flex items-center">
          <div className="flex mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className={`${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-600"}`}
                fill={star <= Math.round(rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-white font-medium">{rating}</span>
          <span className="text-gray-400 ml-1">({reviewCount})</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border border-gray-800 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                <Image src={review.avatar || "/placeholder.svg"} alt={review.user} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-white">{review.user}</p>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className={`${star <= review.rating ? "text-yellow-400" : "text-gray-600"}`}
                        fill={star <= review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="ml-auto text-gray-400 text-sm">{review.date}</span>
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
          View All Reviews
        </button>
      </div>
    </div>
  )
}
