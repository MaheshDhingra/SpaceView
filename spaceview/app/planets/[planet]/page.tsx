import PlanetDetails from '../../../components/PlanetDetails';
import Layout from '../../../components/Layout';

export default function PlanetDetailsPage({ params }: { params: Promise<{ planet: string }> }) {
  return (
    <Layout>
      <PlanetDetails planetId={params.planet} />
    </Layout>
  );
}