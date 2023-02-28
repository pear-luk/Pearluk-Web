import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminHome = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('admin이다');
  }, []);
  // if (isProjectListLoading) return <LayOut mode={mode} />;
  return <>asdf</>;
};
export default AdminHome;
