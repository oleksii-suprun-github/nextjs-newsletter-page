import { SanityPostPreview } from '@/app/types';
import PublicationCard from '@/app/ui-lib/PublicationCard';

function PublicationsList({ items }: { items?: SanityPostPreview[] }) {
  if (!items?.length) {
    return <p>No publications</p>;
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((publication, index) => (
          <PublicationCard
            title={publication.title}
            category={publication.category}
            slug={publication.slug}
            previewText={publication.previewText}
            publishedAt={publication.publishedAt}
            image={publication.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PublicationsList;
