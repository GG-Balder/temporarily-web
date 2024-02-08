import dynamic from 'next/dynamic';
const IndexView = dynamic(import('@/views/Index'), { ssr: false })

const IndexPage = () => {
  return <IndexView />;
};


export default IndexPage;
