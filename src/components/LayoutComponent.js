import { Container, Divider } from 'semantic-ui-react'
import Navbar from './Navbar';

export default function LayoutComponent(props) {
  return (
    <>
      <Navbar />
      <div style={{ margin: '0.2rem', marginTop: '4rem', padding: '0.2rem' }}>
        {props.children}
      </div>
    </>
  );
}
