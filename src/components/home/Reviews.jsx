
import './Reviews.css';

const dummyReviews = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Amazing ambience, excellent service and fantastic flavours. Loved every moment at Smoke Hauz!',
    image: 'photo-1500648767791-00dcc994a43e',
  },
  {
    name: 'Priya Mehta',
    rating: 5,
    text: 'Beautiful atmosphere and a perfect place to relax with friends. Highly recommended!',
    image: 'photo-1534528741775-53994a69daeb',
  },
  {
    name: 'Arjun Kapoor',
    rating: 5,
    text: 'The presentation, hospitality and overall experience were absolutely wonderful.',
    image: 'photo-1506794778202-cad84cf45f1d',
  },
  {
    name: 'Ananya Roy',
    rating: 5,
    text: 'One of the best places to spend an evening. Great vibes and amazing hospitality.',
    image: 'photo-1517841905240-472988babdf9',
  },
  {
    name: 'Karan Malhotra',
    rating: 5,
    text: 'Loved the ambience and the attention to every little detail. Will visit again!',
    image: 'photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Sneha Verma',
    rating: 5,
    text: 'Such a lovely experience. The atmosphere makes you want to stay longer!',
    image: 'photo-1524504388940-b1c1722653e1',
  },
];

function ReviewCard({ review }) {
  return (
    <article className="review card shine">

      <div className="review__client">
        <img
          className="review__avatar"
          src={`https://images.unsplash.com/${review.image}?w=120&h=120&fit=crop&crop=faces`}
          alt={review.name}
          loading="lazy"
        />

        <div className="review__client-info">
          <cite>{review.name}</cite>
          <span className="review__verified">
            <span>✓</span> Guest Experience
          </span>
        </div>
      </div>

      <div className="review__stars">
        {'★'.repeat(review.rating)}
      </div>

      <p>{review.text}</p>

    </article>
  );
}

export default function Reviews() {
  const firstRow = dummyReviews.slice(0, 3);
  const secondRow = dummyReviews.slice(3, 6);

  return (
    <section className="section reviews">
      <div className="wrap">

        <div className="section-head center">
          <span className="kicker">Guest words</span>
          <h2>What the table says</h2>
          <p>
            Good vibes, great flavours and unforgettable
            moments. Here's what our guests say.
          </p>
        </div>

        {/* TOP - LEFT TO RIGHT */}
        <div className="reviews__slider reviews__slider--right">
          <div className="reviews__track">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map(
              (review, index) => (
                <ReviewCard
                  key={`top-${index}`}
                  review={review}
                />
              )
            )}
          </div>
        </div>

        {/* BOTTOM - RIGHT TO LEFT */}
        <div className="reviews__slider reviews__slider--left">
          <div className="reviews__track">
            {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map(
              (review, index) => (
                <ReviewCard
                  key={`bottom-${index}`}
                  review={review}
                />
              )
            )}
          </div>
        </div>

      </div>
      <div className="section-divider" aria-hidden="true" />
    </section>
  );
}
