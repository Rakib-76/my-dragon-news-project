import { FaRegBookmark, FaRegEye, FaStar } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { format } from 'date-fns';

export default function NewsCard({ news }) {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;

  const shortDescription =
    details.length > 200 ? details.slice(0, 200) + '...' : details;

  return (
    <div className="card w-full bg-base-100 shadow-md  rounded-xl">
      {/* Header */}
      <div className="card-body pb-2 pt-4 px-4 flex flex-row justify-between items-center bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), 'yyyy-MM-dd')}
            </p>
          </div>
        </div>
        <div className='flex gap-1'>
        <FaRegBookmark />
        <FiShare2 className="text-gray-500 text-lg cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="card-title text-lg font-bold text-gray-800">{title}</h2>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body pt-4 px-4">
        <p className="text-sm text-gray-700">{shortDescription}</p>
        <span className="text-orange-500 font-medium cursor-pointer">
          Read More
        </span>

        {/* Tags / Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {others?.is_trending && (
            <div className="badge badge-warning text-white">Trending</div>
          )}
          {others?.is_today_pick && (
            <div className="badge badge-info text-white">Today's Pick</div>
          )}
          {tags &&
            tags.map((tag, idx) => (
              <div key={idx} className="badge badge-outline text-xs">
                #{tag}
              </div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className="card-actions px-4 py-3 border-t flex justify-between items-center text-sm text-gray-700">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4 fill-orange-500" />
          ))}
          <span className="ml-1 text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
