import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Share2, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
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

const ResourceContent = () => {
  const { category, slug } = useParams();
  const [resource, setResource] = useState<Resource | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (category && slug) {
      loadResource();
    }
  }, [category, slug]);

  const loadResource = async () => {
    setLoading(true);
    setError(null);

    try {
      // Load resource metadata
      const indexResponse = await fetch(`/content/resources/${category}/index.json`);
      if (!indexResponse.ok) throw new Error('Resource not found');
      
      const resources: Resource[] = await indexResponse.json();
      const foundResource = resources.find(r => r.slug === slug);
      
      if (!foundResource) {
        throw new Error('Resource not found');
      }

      setResource(foundResource);

      // Load markdown content
      const contentResponse = await fetch(`/content/resources/${category}/${foundResource.content}`);
      if (!contentResponse.ok) throw new Error('Content not found');
      
      const markdownContent = await contentResponse.text();
      
      // Simple markdown to HTML conversion (you might want to use a proper markdown parser)
      const htmlContent = convertMarkdownToHtml(markdownContent);
      setContent(htmlContent);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل المحتوى');
    } finally {
      setLoading(false);
    }
  };

  const convertMarkdownToHtml = (markdown: string): string => {
    return markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-8">$1</h1>')
      
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm">$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
      
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="mb-2">$1</li>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/\n/g, '<br>');
  };

  const getCategoryName = (cat: string) => {
    switch (cat) {
      case 'articles': return 'مقالات';
      case 'tutorials': return 'شروحات';
      case 'comparisons': return 'مقارنات';
      default: return cat;
    }
  };

  const shareContent = () => {
    if (navigator.share && resource) {
      navigator.share({
        title: resource.title,
        text: resource.description,
        url: window.location.href,
      });
    } else if (resource) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You might want to show a toast notification here
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="h-12 bg-muted rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-muted rounded mb-8"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-muted rounded mb-2"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-muted-foreground">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <h2 className="text-2xl font-bold mb-4">المحتوى غير موجود</h2>
          <p className="mb-6">{error || 'لم نتمكن من العثور على المحتوى المطلوب'}</p>
          <Link to="/resources">
            <Button>
              <ArrowRight className="w-4 h-4 mr-2" />
              العودة للموارد
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{resource.title} | اوتوربلاي</title>
        <meta name="description" content={resource.description} />
        <meta name="keywords" content={resource.tags.join(', ')} />
        <link rel="canonical" href={`https://autorply.sa/resources/${category}/${slug}`} />
        <meta property="og:title" content={resource.title} />
        <meta property="og:description" content={resource.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://autorply.sa/resources/${category}/${slug}`} />
        <meta property="article:author" content={resource.author} />
        <meta property="article:published_time" content={resource.date} />
        <meta property="article:tag" content={resource.tags.join(', ')} />
        {resource.image && <meta property="og:image" content={`https://autorply.sa${resource.image}`} />}
      </Helmet>

      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-primary transition-colors">الموارد</Link>
            <span>/</span>
            <Link to={`/resources?category=${category}`} className="hover:text-primary transition-colors">
              {getCategoryName(category!)}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{resource.title}</span>
          </div>
          
          <div className="mb-6">
            <Link 
              to="/resources" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← العودة إلى الموارد
            </Link>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-12">
          {resource.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={resource.image} 
                alt={resource.title}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary">
                {getCategoryName(resource.category)}
              </Badge>
              {resource.difficulty && (
                <Badge variant="outline">{resource.difficulty}</Badge>
              )}
              {resource.featured && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  مميز
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {resource.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {resource.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{resource.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(parseISO(resource.date), 'dd/MM/yyyy')}</span>
              </div>

              {resource.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{resource.readTime}</span>
                </div>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={shareContent}
                className="mr-auto"
              >
                <Share2 className="w-4 h-4 mr-2" />
                مشاركة
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: `<p class="mb-4">${content}</p>` }}
            />
          </CardContent>
        </Card>

        {/* Navigation and Related Content */}
        <div className="space-y-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/resources?category=articles" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                category === 'articles' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              📄 المقالات
            </Link>
            <Link 
              to="/resources?category=tutorials" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                category === 'tutorials' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              🎓 الشروحات
            </Link>
            <Link 
              to="/resources?category=comparisons" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                category === 'comparisons' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              ⚖️ المقارنات
            </Link>
          </div>

          {/* CTA */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">جاهز لتطوير أعمالك مع واتساب API؟</h3>
              <p className="text-muted-foreground mb-6">
                احصل على استشارة مجانية من خبرائنا واكتشف كيف يمكن لحلول اوتوربلاي تحويل تجربة عملائك
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button>
                    احجز استشارة مجانية
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline">
                    تصفح المزيد من الموارد
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ResourceContent;