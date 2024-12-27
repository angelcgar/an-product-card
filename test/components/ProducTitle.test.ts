import { ProductTitle } from './../../src/components/ProductTitle';
import renderer from 'react-test-renderer';

describe('Product title', () => {
  test('mostrar texto', () => {
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    const wrapper = renderer.create(<ProductTitle title="hola mundo" />);
  });
});
