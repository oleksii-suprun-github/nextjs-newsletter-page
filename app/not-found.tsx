import NotFound from './components/NotFound';
import { SITE_BRAND_TITLE_ENDING } from './constants';

export const metadata = {
  title: `Page Not Found ${SITE_BRAND_TITLE_ENDING}`,
  description: 'Sorry, we can`t find that publication.',
};

const PageNotFound = () => <NotFound link="/publications" />;

export default PageNotFound;
