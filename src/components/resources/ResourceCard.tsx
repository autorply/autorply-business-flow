import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ResourceCardProps {
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
}

const ResourceCard = ({
  title,
  description,
  author,
  date,
  category,
  tags,
  image,
  slug,
  readTime,
  difficulty,
  featured
}: ResourceCardProps) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'articles': return 'bg-blue-100 text-blue-800';
      case 'tutorials': return 'bg-green-100 text-green-800';
      case 'comparisons': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (cat: string) => {
    switch (cat) {
      case 'articles': return 'مقالات';
      case 'tutorials': return 'شروحات';
      case 'comparisons': return 'مقارنات';
      default: return cat;
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            <Star className="w-3 h-3 mr-1" />
            مميز
          </Badge>
        </div>
      )}
      
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className={getCategoryColor(category)}>
            {getCategoryName(category)}
          </Badge>
          {difficulty && (
            <Badge variant="outline">
              {difficulty}
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          <Link to={`/resources/${category}/${slug}`} className="block">
            {title}
          </Link>
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString('ar-SA')}</span>
            </div>
          </div>
          
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;