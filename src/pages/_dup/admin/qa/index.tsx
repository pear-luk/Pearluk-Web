import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminHome = () => {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
  }, []);
  // if (isProjectListLoading) return <LayOut mode={mode} />;
  return <>QA</>;
};
export default AdminHome;
