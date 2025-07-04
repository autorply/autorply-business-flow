
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

const getBreadcrumbItems = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  
  const breadcrumbMap: Record<string, string> = {
    'services': 'الخدمات',
    'pricing': 'الأسعار',
    'about-us': 'من نحن',
    'campaign': 'الحملات التسويقية',
    'contact': 'تواصل معنا',
    'faq': 'الأسئلة الشائعة',
    'vision': 'الرؤية',
    'success-story': 'قصص النجاح',
    'technology': 'التقنية',
    'billing': 'الفوترة',
    'tech-partners': 'الشركاء التقنيون',
    'business-partners': 'شركاء الأعمال',
    'privacy-policy': 'سياسة الخصوصية',
    'terms-of-service': 'الشروط والأحكام'
  };

  const items: BreadcrumbItem[] = [
    { title: 'الرئيسية', href: '/' }
  ];

  pathSegments.forEach((segment, index) => {
    const title = breadcrumbMap[segment] || segment;
    const href = index === pathSegments.length - 1 ? undefined : `/${pathSegments.slice(0, index + 1).join('/')}`;
    items.push({ title, href });
  });

  return items;
};

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  const items = getBreadcrumbItems(location.pathname);

  return (
    <div className="bg-gray-50 py-4" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.href} className="flex items-center gap-2">
                        {index === 0 && <Home className="w-4 h-4" />}
                        {item.title}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="flex items-center gap-2">
                      {index === 0 && <Home className="w-4 h-4" />}
                      {item.title}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < items.length - 1 && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;
