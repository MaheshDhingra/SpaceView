import PlanetDetails from '../../../components/PlanetDetails';
import Layout from '../../../components/Layout';
import { Suspense } from 'react';

export default async function PlanetDetailsPage({ params }: { params: { planet: string } }) {
  // Await params as per Next.js 15 dynamic route requirements
  const awaitedParams = await Promise.resolve(params);
  return (
    <Layout>
      <Suspense fallback={<div className="text-center py-12">Loading planet details...</div>}>
        <PlanetDetails planetId={awaitedParams.planet} />
      </Suspense>
    </Layout>
  );
}
