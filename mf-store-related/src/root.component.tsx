import { RelatedProducts } from './components/related-products';

export default function Root() {
  const pathName = window.location.pathname;
  console.log('pathName', pathName);

  const pathNameToArray = pathName.split('/');

  const [first, path, productId] = pathNameToArray;
  console.log('productId', productId);
  return <RelatedProducts productId={productId} />;
}
