import { useState, useEffect } from "react";
import ResourceCard from "./ResourceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

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

  const loadResources = async () => {
    setLoading(true);
    try {
      const allResources: Resource[] = [];
      const categories = category ? [category] : ['articles', 'tutorials', 'comparisons'];

      for (const cat of categories) {
        try {
          const response = await fetch(`/src/content/resources/${cat}/index.json`);
          if (response.ok) {
            const categoryResources = await response.json();
            allResources.push(...categoryResources);
          }
        } catch (error) {
          console.error(`Error loading ${cat}:`, error);
        }
      }

      // Sort by featured first, then by date
      allResources.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{getCategoryTitle()}</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          اكتشف مجموعة متنوعة من الموارد المفيدة لتطوير أعمالك باستخدام واتساب API
        </p>
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