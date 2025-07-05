
import PrerenderedMetaTags from './PrerenderedMetaTags';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const MetaTags = (props: MetaTagsProps) => {
  return <PrerenderedMetaTags {...props} />;
};

export default MetaTags;
