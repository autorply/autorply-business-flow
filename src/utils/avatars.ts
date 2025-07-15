// Local avatar images for different authors
const avatars = [
  "/src/assets/avatars/avatar-1.jpg",
  "/src/assets/avatars/avatar-2.jpg", 
  "/src/assets/avatars/avatar-3.jpg",
  "/src/assets/avatars/avatar-4.jpg",
  "/src/assets/avatars/avatar-5.jpg",
  "/src/assets/avatars/avatar-6.jpg",
  "/src/assets/avatars/avatar-7.jpg",
  "/src/assets/avatars/avatar-8.jpg",
  "/src/assets/avatars/avatar-9.jpg"
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