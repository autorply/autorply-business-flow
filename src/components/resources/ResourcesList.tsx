import { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface Resource {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
  readTime?: string;
  difficulty?: string;
  featured?: boolean;
  content: string;
}

interface ResourcesListProps {
  category?: string;
}

const ResourcesList = ({ category }: ResourcesListProps) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResources();
  }, [category]);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedTags]);

  // Signal prerender-ready only after resources are fully loaded and filtered
  useEffect(() => {
    if (typeof document !== 'undefined' && !loading) {
      setTimeout(() => {
        document.dispatchEvent(new Event('prerender-ready'));
      }, 0);
    }
  }, [loading, filteredResources.length]);

  const loadResources = async () => {
    setLoading(true);
    try {
      const allResources: Resource[] = [];
      const categories = category ? [category] : ['articles', 'tutorials', 'comparisons'];

      for (const cat of categories) {
        try {
          const response = await fetch(`/content/resources/${cat}/index.json`);
          if (response.ok) {
            const categoryResources = await response.json();
            allResources.push(...categoryResources);
          }
        } catch (error) {
          console.error(`Error loading ${cat}:`, error);
        }
      }

      // Sort by featured first, then by date (newest first)
      allResources.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        
        // Compare by date (newest first)
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      setResources(allResources);

      // Extract all unique tags
      const tags = Array.from(new Set(allResources.flatMap(r => r.tags)));
      setAllTags(tags);
    } catch (error) {
      console.error('Error loading resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterResources = () => {
    let filtered = resources;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(resource =>
        selectedTags.some(tag => resource.tags.includes(tag))
      );
    }

    setFilteredResources(filtered);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTags([]);
  };

  const getCategoryTitle = () => {
    switch (category) {
      case 'articles': return 'المقالات';
      case 'tutorials': return 'الشروحات';
      case 'comparisons': return 'المقارنات';
      default: return 'جميع الموارد';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-48 bg-muted rounded-lg mb-4"></div>
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with H1 and SEO intro */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">موارد شاملة لـ WhatsApp Business API</h1>
        
        {/* SEO Introduction Paragraph */}
        <div className="max-w-4xl mx-auto text-right bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            مرحباً بك في مركز موارد اوتوربلاي - وجهتك الشاملة لكل ما يتعلق بـ <strong>WhatsApp Business API</strong>. نقدم لك مكتبة متكاملة من الأدلة والشروحات والمقالات التعليمية المصممة خصيصاً لمساعدتك على فهم وتطبيق حلول واتساب للأعمال بفعالية.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            سواء كنت تبحث عن <strong>دليل WhatsApp API للمبتدئين</strong>، أو ترغب في استكشاف حالات استخدام متقدمة مثل الأتمتة والتكامل مع أنظمة CRM، أو تحتاج إلى مقارنات تفصيلية بين مزودي الخدمة المختلفين - ستجد هنا كل ما تحتاجه. نحرص على تحديث موارد واتساب بشكل مستمر لتعكس أحدث التغييرات في سياسات Meta ومتطلبات السوق السعودي.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            تتضمن مواردنا: شروحات خطوة بخطوة لتفعيل WhatsApp API، أفضل الممارسات لإرسال الرسائل التسويقية، كيفية إنشاء قوالب الرسائل المعتمدة، استراتيجيات خدمة العملاء عبر واتساب، ودراسات حالة من شركات سعودية ناجحة. كما نقدم مقارنات موضوعية بين WhatsApp Business App و WhatsApp API لمساعدتك في اتخاذ القرار الأنسب لحجم أعمالك.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            تم إعداد جميع المحتويات بواسطة خبراء معتمدين في WhatsApp Business Solutions، مع مراعاة المعايير المحلية ومتطلبات السوق السعودي. ندعوك لاستكشاف الأقسام المختلفة أدناه والبدء في رحلة تطوير تواصلك مع العملاء.
          </p>
        </div>
      </div>

      {/* Category Navigation with Descriptions */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            to="/resources" 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              !category 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            📚 جميع الموارد
          </Link>
          <Link 
            to="/resources?category=articles" 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              category === 'articles' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            📄 المقالات
          </Link>
          <Link 
            to="/resources?category=tutorials" 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              category === 'tutorials' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            🎓 الشروحات
          </Link>
          <Link 
            to="/resources?category=comparisons" 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              category === 'comparisons' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            ⚖️ المقارنات
          </Link>
        </div>
        
        {/* Section Descriptions */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg p-4 border text-center">
            <h3 className="font-bold text-foreground mb-2">📄 المقالات</h3>
            <p className="text-sm text-muted-foreground">
              مقالات تعليمية معمقة تغطي أحدث استراتيجيات التسويق عبر واتساب وأفضل ممارسات التواصل مع العملاء.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border text-center">
            <h3 className="font-bold text-foreground mb-2">🎓 الشروحات</h3>
            <p className="text-sm text-muted-foreground">
              أدلة عملية خطوة بخطوة لإعداد وتشغيل WhatsApp API، من التفعيل الأولي حتى التكاملات المتقدمة.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border text-center">
            <h3 className="font-bold text-foreground mb-2">⚖️ المقارنات</h3>
            <p className="text-sm text-muted-foreground">
              مقارنات موضوعية بين الحلول والأدوات المختلفة لمساعدتك في اتخاذ القرار الأنسب لاحتياجات عملك.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-card rounded-lg p-6 border">
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="ابحث في الموارد..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>

          {/* Tags Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">تصفية بالعلامات:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {(searchTerm || selectedTags.length > 0) && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="w-fit"
              >
                مسح جميع المرشحات
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          {filteredResources.length} من {resources.length} مورد
        </p>
      </div>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={`${resource.category}-${resource.slug}-${index}`} {...resource} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium">لا توجد نتائج</h3>
            <p>لم نجد أي موارد تطابق معايير البحث الخاصة بك</p>
          </div>
          <Button variant="outline" onClick={clearFilters}>
            مسح جميع المرشحات
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResourcesList;