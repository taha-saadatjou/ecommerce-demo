import { getProductsByCategory, categories } from '@/lib/data';
import CategoryPageClient from './CategoryPageClient';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = categories.find(cat => cat.slug === resolvedParams.slug);
  const products = getProductsByCategory(category?.name || '');

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <CategoryPageClient category={category} products={products} />;
}
