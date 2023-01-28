import { Footer } from './Footer';
import { Nav } from './Nav';

export const LayOut = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
