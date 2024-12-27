import { render } from '@testing-library/react';

import SsCommonComponents from './ss-common-components';

describe('SsCommonComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SsCommonComponents />);
    expect(baseElement).toBeTruthy();
  });
});
