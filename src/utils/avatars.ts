// Avatar placeholder URLs for different authors
const avatars = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop&crop=face", 
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
];

/**
 * Get a different avatar for each article to show team diversity
 * Uses article title or slug to ensure consistent but different avatars
 */
export const getAuthorAvatar = (authorName: string, articleTitle?: string): string => {
  // For "فريق اوتوربلاي", use article title to get different avatars for each article
  if (authorName === "فريق اوتوربلاي" && articleTitle) {
    // Create hash from article title to get consistent avatar for each article
    let hash = 0;
    for (let i = 0; i < articleTitle.length; i++) {
      const char = articleTitle.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    const index = Math.abs(hash) % avatars.length;
    return avatars[index];
  }
  
  // For other authors, use author name for consistent avatar
  let hash = 0;
  const nameToHash = authorName || "default";
  for (let i = 0; i < nameToHash.length; i++) {
    const char = nameToHash.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use absolute value and modulo to get consistent index
  const index = Math.abs(hash) % avatars.length;
  return avatars[index];
};