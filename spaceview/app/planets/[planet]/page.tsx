import PlanetDetails from '../../../components/PlanetDetails';
import Layout from '../../../components/Layout';

export default async function PlanetDetailsPage({ params }: { params?: Promise<{ planet: string }> }) {
  const resolvedParams = params ? await params : undefined;
  return (
    <Layout>
      <PlanetDetails planetId={resolvedParams?.planet ?? ''} />
    </Layout>
  );
}