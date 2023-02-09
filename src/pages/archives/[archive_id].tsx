import { useRouter } from 'next/router';
import { LayOut } from '../../components/layout';

const ArchivePage = ({ url }) => {
  const router = useRouter();
  const { archive_id } = router.query;

  return <LayOut mode="dark"></LayOut>;
};
export default ArchivePage;
